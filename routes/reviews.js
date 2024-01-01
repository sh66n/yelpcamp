const express = require("express")
const router = express.Router({mergeParams: true});

const AppError = require("../utils/AppError")   // import custom Error class
const wrapAsync = require("../utils/wrapAsync")     // import async error handler

const Campground = require("../models/campground")           //import campground mongoose model
const Review = require("../models/review")              //import review mongoose model

const {reviewSchema} = require("../schemas")            // import review Joi schema for validation

const validateReview = (req, res, next) => {                    // review validator middleware using JOI
    const {error} = reviewSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(", ")
        throw new AppError(msg, 400)
    } else {
        next();
    }
}

router.post("/", validateReview, wrapAsync(async(req, res) => {
    const camp = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    camp.reviews.push(review)
    await review.save();
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`)
}));
router.delete("/:revId", wrapAsync(async(req, res) => {
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

module.exports = router;