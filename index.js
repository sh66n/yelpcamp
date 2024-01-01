const port = 3000;
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const {campgroundSchema, reviewSchema} = require("./schemas") //destructured so we can add more schemas later on (Joi schema not mongoose schema)
const AppError = require("./utils/AppError")   // import custom Error class
const wrapAsync = require("./utils/wrapAsync")     // import async error handler

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("Connection to mongo is now open.")
    })
    .catch((err) => {
        console.log("Mongo connection refused.")
        console.log(err);
    })

const Campground = require("./models/campground")           //import campground mongoose model
const Review = require("./models/review")

app.set("view engine", "ejs")                               // we don't have to type .ejs for ejs files anymore (hurray!)
app.set("views", path.join(__dirname, "/views"))            
app.engine("ejs", ejsMate)

app.use(express.urlencoded({extended:true}))                    //req.body parser
app.use(methodOverride("_method"))                              //used to send put and patch requests from html forms

const validateCampground = (req, res, next) => {                    //campground validator middleware using JOI
    
    const {error} = campgroundSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(", ")   
        //error.details is an array on which .map() function is used. This returns an array of only the error messages. On this array, the .join(", ") function is used, which creates and returns a string of all errors seperated by a comma.
        throw new AppError(msg, 400)                          
    } else {
        next();
    }    
}

const validateReview = (req, res, next) => {                    // review validator middleware using JOI
    const {error} = reviewSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(", ")
        throw new AppError(msg, 400)
    } else {
        next();
    }
}


// camp routes

app.get("/", (req, res)=>{
    res.render("home")
});
app.get("/campgrounds", wrapAsync(async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", {campgrounds});
}));
app.get("/campgrounds/new", (req, res) => {
    res.render("campgrounds/new")
})
app.post("/campgrounds", validateCampground, wrapAsync(async(req,res) => {
    // if(!req.body.campground){               //Error thrown in absence of required model  properties like name, location etc 
    //     throw new AppError("Incomplete data to create Campground!", 400)
    // }                                                    
    const newCampground = new Campground(req.body.campground);
    await newCampground.save();
    res.redirect(`/campgrounds/${newCampground._id}`)
}))
app.get("/campgrounds/:id", wrapAsync(async(req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id).populate("reviews")
    res.render("campgrounds/show", {camp})
}));
app.get("/campgrounds/:id/edit", wrapAsync(async(req,res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render("campgrounds/edit", { camp })
}));
app.put("/campgrounds/:id", validateCampground, wrapAsync(async(req, res) => {
    const { id } = req.params;
    const updatedCamp = await Campground.findByIdAndUpdate(id, req.body.campground, {new: true});
    res.redirect(`/campgrounds/${updatedCamp._id}`);
}));
app.delete("/campgrounds/:id", wrapAsync(async(req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id)
    res.redirect("/campgrounds")
}))

// review routes

app.post("/campgrounds/:id/reviews", validateReview, wrapAsync(async(req, res) => {
    const camp = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    camp.reviews.push(review)
    await review.save();
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`)
}));
app.delete("/campgrounds/:id/reviews/:revId", wrapAsync(async(req, res) => {
    const {id, revId} = req.params
    /* We have to do two things here: 
        1. Delete the review (easy part)
        2. Remove the review id from the camp.reviews array
    */

    // Colts approach to the 2. (obviously faster and intellectual. Some might say "the ideal solution")
    // const camp = await Campground.findByIdAndUpdate(id, {$pull: {reviews: revId}})

    // My approach to this problem (slower and less intellectual. Not ideal but its mine and it does the same work)
    const camp = await Campground.findById(id);
    for(let i = 0; i < camp.reviews.length; i++){
        if(camp.reviews[i] == `new ObjectId('${revId}')`){
            camp.reviews.splice(i)
        }
    }
    await Review.findByIdAndDelete(req.params.revId)
    res.redirect(`/campgrounds/${id}`)
}));

//-----------------------------------------------------------------------------------------------------------//

app.all("*", (req, res, next) => {
    next(new AppError("Page Not Found :(", 404))
})

app.use((err, req, res, next) => {              // ERROR HANDLER
    const {status = 500} = err                
    if(!err.message) {
        err.message = "Oh no! Something went wrong :("
    }
    res.status(status).render("error", {err})
})

app.listen(port, ()=>{
    console.log(`Yelpcamp servers are now online on port ${port}.`)
})