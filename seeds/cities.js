let cities = [
  {
    city: "Delhi", 
    lat: "28.6100", 
    lng: "77.2300", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "admin", 
    population: "32226000", 
    population_proper: "16753235",

  }, 
  {
    city: "Mumbai", 
    lat: "19.0761", 
    lng: "72.8775", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "admin", 
    population: "24973000", 
    population_proper: "12478447"
  }, 
  {
    city: "Kolkāta", 
    lat: "22.5675", 
    lng: "88.3700", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "admin", 
    population: "18502000", 
    population_proper: "4496694"
  }, 
  {
    city: "Bangalore", 
    lat: "12.9789", 
    lng: "77.5917", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "admin", 
    population: "15386000", 
    population_proper: "8443675"
  }, 
  {
    city: "Chennai", 
    lat: "13.0825", 
    lng: "80.2750", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "admin", 
    population: "12395000", 
    population_proper: "6727000"
  }, 
  {
    city: "Hyderābād", 
    lat: "17.3850", 
    lng: "78.4867", 
    country: "India", 
    iso2: "IN", 
    state: "Telangāna", 
    capital: "admin", 
    population: "10494000", 
    population_proper: "6993262"
  }, 
  {
    city: "Pune", 
    lat: "18.5203", 
    lng: "73.8567", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "8231000", 
    population_proper: "3124458"
  }, 
  {
    city: "Ahmedabad", 
    lat: "23.0300", 
    lng: "72.5800", 
    country: "India", 
    iso2: "IN", 
    state: "Gujarāt", 
    capital: "minor", 
    population: "8009000", 
    population_proper: "5570585"
  }, 
  {
    city: "Sūrat", 
    lat: "21.1702", 
    lng: "72.8311", 
    country: "India", 
    iso2: "IN", 
    state: "Gujarāt", 
    capital: "", 
    population: "6538000", 
    population_proper: "4466826"
  }, 
  {
    city: "Prayagraj", 
    lat: "25.4358", 
    lng: "81.8464", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "5954391", 
    population_proper: "5954391"
  }, 
  {
    city: "Lucknow", 
    lat: "26.8500", 
    lng: "80.9500", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "admin", 
    population: "3382000", 
    population_proper: "3382000"
  }, 
  {
    city: "Jaipur", 
    lat: "26.9000", 
    lng: "75.8000", 
    country: "India", 
    iso2: "IN", 
    state: "Rājasthān", 
    capital: "admin", 
    population: "3073350", 
    population_proper: "3073350"
  }, 
  {
    city: "Cawnpore", 
    lat: "26.4499", 
    lng: "80.3319", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "2701324", 
    population_proper: "2701324"
  }, 
  {
    city: "Mirzāpur", 
    lat: "25.1460", 
    lng: "82.5690", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "2496970", 
    population_proper: "2496970"
  }, 
  {
    city: "Nāgpur", 
    lat: "21.1497", 
    lng: "79.0806", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "admin", 
    population: "2405665", 
    population_proper: "2405665"
  }, 
  {
    city: "Ghāziābād", 
    lat: "28.6700", 
    lng: "77.4200", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "2375820", 
    population_proper: "2375820"
  }, 
  {
    city: "Vadodara", 
    lat: "22.3000", 
    lng: "73.2000", 
    country: "India", 
    iso2: "IN", 
    state: "Gujarāt", 
    capital: "", 
    population: "2065771", 
    population_proper: "2065771"
  }, 
  {
    city: "Vishākhapatnam", 
    lat: "17.7042", 
    lng: "83.2978", 
    country: "India", 
    iso2: "IN", 
    state: "Andhra Pradesh", 
    capital: "", 
    population: "2035922", 
    population_proper: "2035922"
  }, 
  {
    city: "Indore", 
    lat: "22.7167", 
    lng: "75.8472", 
    country: "India", 
    iso2: "IN", 
    state: "Madhya Pradesh", 
    capital: "", 
    population: "1994397", 
    population_proper: "1994397"
  }, 
  {
    city: "Thāne", 
    lat: "19.1972", 
    lng: "72.9722", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "1886941", 
    population_proper: "1886941"
  }, 
  {
    city: "Bhopāl", 
    lat: "23.2500", 
    lng: "77.4167", 
    country: "India", 
    iso2: "IN", 
    state: "Madhya Pradesh", 
    capital: "admin", 
    population: "1798218", 
    population_proper: "1798218"
  }, 
  {
    city: "Chinchvad", 
    lat: "18.6186", 
    lng: "73.8037", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "1729320", 
    population_proper: "1729320"
  }, 
  {
    city: "Patna", 
    lat: "25.6000", 
    lng: "85.1000", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "admin", 
    population: "1684222", 
    population_proper: "1684222"
  }, 
  {
    city: "Bilāspur", 
    lat: "22.0900", 
    lng: "82.1500", 
    country: "India", 
    iso2: "IN", 
    state: "Chhattīsgarh", 
    capital: "", 
    population: "1625502", 
    population_proper: "1625502"
  }, 
  {
    city: "Ludhiāna", 
    lat: "30.9100", 
    lng: "75.8500", 
    country: "India", 
    iso2: "IN", 
    state: "Punjab", 
    capital: "", 
    population: "1618879", 
    population_proper: "1618879"
  }, 
  {
    city: "Agwār", 
    lat: "27.1800", 
    lng: "78.0200", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "1585705", 
    population_proper: "1585705"
  }, 
  {
    city: "Āgra", 
    lat: "27.1800", 
    lng: "78.0200", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "1585704", 
    population_proper: "1585704"
  }, 
  {
    city: "Madurai", 
    lat: "9.9252", 
    lng: "78.1198", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "minor", 
    population: "1561129", 
    population_proper: "1561129"
  }, 
  {
    city: "Jamshedpur", 
    lat: "22.7925", 
    lng: "86.1842", 
    country: "India", 
    iso2: "IN", 
    state: "Jhārkhand", 
    capital: "", 
    population: "1558000", 
    population_proper: "1558000"
  }, 
  {
    city: "Nāsik", 
    lat: "20.0000", 
    lng: "73.7800", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "1486053", 
    population_proper: "1486053"
  }, 
  {
    city: "Farīdābād", 
    lat: "28.4167", 
    lng: "77.3000", 
    country: "India", 
    iso2: "IN", 
    state: "Haryāna", 
    capital: "", 
    population: "1404653", 
    population_proper: "1404653"
  }, 
  {
    city: "Aurangābād", 
    lat: "19.8800", 
    lng: "75.3200", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "1371330", 
    population_proper: "1371330"
  }, 
  {
    city: "Rājkot", 
    lat: "22.3000", 
    lng: "70.7833", 
    country: "India", 
    iso2: "IN", 
    state: "Gujarāt", 
    capital: "", 
    population: "1335397", 
    population_proper: "1335397"
  }, 
  {
    city: "Meerut", 
    lat: "28.9800", 
    lng: "77.7100", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "1305429", 
    population_proper: "1305429"
  }, 
  {
    city: "Jabalpur", 
    lat: "23.1667", 
    lng: "79.9333", 
    country: "India", 
    iso2: "IN", 
    state: "Madhya Pradesh", 
    capital: "", 
    population: "1267564", 
    population_proper: "1267564"
  }, 
  {
    city: "Kalamboli", 
    lat: "19.2333", 
    lng: "73.1333", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "1246381", 
    population_proper: "1246381"
  }, 
  {
    city: "Vasai", 
    lat: "19.4700", 
    lng: "72.8000", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "1222390", 
    population_proper: "1222390"
  }, 
  {
    city: "Najafgarh", 
    lat: "28.6092", 
    lng: "76.9798", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "", 
    population: "1203180", 
    population_proper: "1203180"
  }, 
  {
    city: "Vārānasi", 
    lat: "25.3189", 
    lng: "83.0128", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "1198491", 
    population_proper: "1198491"
  }, 
  {
    city: "Srīnagar", 
    lat: "34.0900", 
    lng: "74.7900", 
    country: "India", 
    iso2: "IN", 
    state: "Jammu and Kashmīr", 
    capital: "admin", 
    population: "1180570", 
    population_proper: "1180570"
  }, 
  {
    city: "Dhanbād", 
    lat: "23.7998", 
    lng: "86.4305", 
    country: "India", 
    iso2: "IN", 
    state: "Jhārkhand", 
    capital: "", 
    population: "1162472", 
    population_proper: "1162472"
  }, 
  {
    city: "Amritsar", 
    lat: "31.6400", 
    lng: "74.8600", 
    country: "India", 
    iso2: "IN", 
    state: "Punjab", 
    capital: "", 
    population: "1132383", 
    population_proper: "1132383"
  }, 
  {
    city: "Alīgarh", 
    lat: "27.8800", 
    lng: "78.0800", 
    country: "India", 
    iso2: "IN", 
    state: "Uttar Pradesh", 
    capital: "", 
    population: "1131160", 
    population_proper: "1131160"
  }, 
  {
    city: "Guwāhāti", 
    lat: "26.1722", 
    lng: "91.7458", 
    country: "India", 
    iso2: "IN", 
    state: "Assam", 
    capital: "", 
    population: "1116267", 
    population_proper: "1116267"
  }, 
  {
    city: "Hāora", 
    lat: "22.5800", 
    lng: "88.3294", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "1077075", 
    population_proper: "1077075"
  }, 
  {
    city: "Rānchi", 
    lat: "23.3600", 
    lng: "85.3300", 
    country: "India", 
    iso2: "IN", 
    state: "Jhārkhand", 
    capital: "admin", 
    population: "1073440", 
    population_proper: "1073440"
  }, 
  {
    city: "Gwalior", 
    lat: "26.2215", 
    lng: "78.1780", 
    country: "India", 
    iso2: "IN", 
    state: "Madhya Pradesh", 
    capital: "", 
    population: "1069276", 
    population_proper: "1069276"
  }, 
  {
    city: "Chandīgarh", 
    lat: "30.7500", 
    lng: "76.7800", 
    country: "India", 
    iso2: "IN", 
    state: "Chandīgarh", 
    capital: "admin", 
    population: "1055450", 
    population_proper: "1055450"
  }, 
  {
    city: "Vijayavāda", 
    lat: "16.5193", 
    lng: "80.6305", 
    country: "India", 
    iso2: "IN", 
    state: "Andhra Pradesh", 
    capital: "", 
    population: "1048240", 
    population_proper: "1048240"
  }, 
  {
    city: "Jodhpur", 
    lat: "26.2800", 
    lng: "73.0200", 
    country: "India", 
    iso2: "IN", 
    state: "Rājasthān", 
    capital: "", 
    population: "1033918", 
    population_proper: "1033918"
  }, 
  {
    city: "Raipur", 
    lat: "21.2500", 
    lng: "81.6300", 
    country: "India", 
    iso2: "IN", 
    state: "Chhattīsgarh", 
    capital: "admin", 
    population: "1010087", 
    population_proper: "1010087"
  }, 
  {
    city: "Kota", 
    lat: "25.1800", 
    lng: "75.8300", 
    country: "India", 
    iso2: "IN", 
    state: "Rājasthān", 
    capital: "", 
    population: "1001694", 
    population_proper: "1001694"
  }, 
  {
    city: "Kālkāji Devi", 
    lat: "28.5485", 
    lng: "77.2513", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "", 
    population: "824177", 
    population_proper: "824177"
  }, 
  {
    city: "Bhayandar", 
    lat: "19.2900", 
    lng: "72.8500", 
    country: "India", 
    iso2: "IN", 
    state: "Mahārāshtra", 
    capital: "", 
    population: "809378", 
    population_proper: "809378"
  }, 
  {
    city: "Ambattūr", 
    lat: "13.1143", 
    lng: "80.1548", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "466205", 
    population_proper: "466205"
  }, 
  {
    city: "Salt Lake City", 
    lat: "22.6100", 
    lng: "88.4000", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "403316", 
    population_proper: "403316"
  }, 
  {
    city: "Bhātpāra", 
    lat: "22.8700", 
    lng: "88.4100", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "386019", 
    population_proper: "386019"
  }, 
  {
    city: "Kūkatpalli", 
    lat: "17.4849", 
    lng: "78.4138", 
    country: "India", 
    iso2: "IN", 
    state: "Andhra Pradesh", 
    capital: "", 
    population: "385821", 
    population_proper: "385821"
  }, 
  {
    city: "Darbhanga", 
    lat: "26.1700", 
    lng: "85.9000", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "380125", 
    population_proper: "380125"
  }, 
  {
    city: "Dāsarhalli", 
    lat: "13.0465", 
    lng: "77.5130", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "349720", 
    population_proper: "349720"
  }, 
  {
    city: "Muzaffarpur", 
    lat: "26.1225", 
    lng: "85.3906", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "333200", 
    population_proper: "333200"
  }, 
  {
    city: "Oulgaret", 
    lat: "11.9570", 
    lng: "79.7737", 
    country: "India", 
    iso2: "IN", 
    state: "Puducherry", 
    capital: "", 
    population: "300104", 
    population_proper: "300104"
  }, 
  {
    city: "New Delhi", 
    lat: "28.6139", 
    lng: "77.2090", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "primary", 
    population: "249998", 
    population_proper: "249998"
  }, 
  {
    city: "Tiruvottiyūr", 
    lat: "13.1600", 
    lng: "80.3000", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "249446", 
    population_proper: "249446"
  }, 
  {
    city: "Puducherry", 
    lat: "11.9167", 
    lng: "79.8167", 
    country: "India", 
    iso2: "IN", 
    state: "Puducherry", 
    capital: "admin", 
    population: "244377", 
    population_proper: "244377"
  }, 
  {
    city: "Byatarayanpur", 
    lat: "13.0659", 
    lng: "77.5922", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "239902", 
    population_proper: "239902"
  }, 
  {
    city: "Pallāvaram", 
    lat: "12.9675", 
    lng: "80.1491", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "215417", 
    population_proper: "215417"
  }, 
  {
    city: "Secunderābād", 
    lat: "17.4399", 
    lng: "78.4983", 
    country: "India", 
    iso2: "IN", 
    state: "Andhra Pradesh", 
    capital: "", 
    population: "213698", 
    population_proper: "213698"
  }, 
  {
    city: "Shimla", 
    lat: "31.1033", 
    lng: "77.1722", 
    country: "India", 
    iso2: "IN", 
    state: "Himāchal Pradesh", 
    capital: "admin", 
    population: "206575", 
    population_proper: "206575"
  }, 
  {
    city: "Puri", 
    lat: "19.8106", 
    lng: "85.8314", 
    country: "India", 
    iso2: "IN", 
    state: "Odisha", 
    capital: "", 
    population: "201026", 
    population_proper: "201026"
  }, 
  {
    city: "Shrīrāmpur", 
    lat: "22.7500", 
    lng: "88.3400", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "181842", 
    population_proper: "181842"
  }, 
  {
    city: "Hugli", 
    lat: "22.9089", 
    lng: "88.3967", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "179931", 
    population_proper: "179931"
  }, 
  {
    city: "Chandannagar", 
    lat: "22.8671", 
    lng: "88.3674", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "166867", 
    population_proper: "166867"
  }, 
  {
    city: "Sultānpur Mazra", 
    lat: "28.6981", 
    lng: "77.0689", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "", 
    population: "163716", 
    population_proper: "163716"
  }, 
  {
    city: "Krishnanagar", 
    lat: "23.4000", 
    lng: "88.5000", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "153062", 
    population_proper: "153062"
  }, 
  {
    city: "Bārākpur", 
    lat: "22.7642", 
    lng: "88.3776", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "152783", 
    population_proper: "152783"
  }, 
  {
    city: "Bhālswa Jahangirpur", 
    lat: "28.7354", 
    lng: "77.1638", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "", 
    population: "151427", 
    population_proper: "151427"
  }, 
  {
    city: "Nāngloi Jāt", 
    lat: "28.6833", 
    lng: "77.0667", 
    country: "India", 
    iso2: "IN", 
    state: "Delhi", 
    capital: "", 
    population: "150371", 
    population_proper: "150371"
  }, 
  {
    city: "Yelahanka", 
    lat: "13.1007", 
    lng: "77.5963", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "119891", 
    population_proper: "119891"
  }, 
  {
    city: "Titāgarh", 
    lat: "22.7400", 
    lng: "88.3700", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "116541", 
    population_proper: "116541"
  }, 
  {
    city: "Dam Dam", 
    lat: "22.6200", 
    lng: "88.4200", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "114786", 
    population_proper: "114786"
  }, 
  {
    city: "Bānsbāria", 
    lat: "22.9700", 
    lng: "88.4000", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "103920", 
    population_proper: "103920"
  }, 
  {
    city: "Madhavaram", 
    lat: "13.1482", 
    lng: "80.2314", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "100442", 
    population_proper: "100442"
  }, 
  {
    city: "Baj Baj", 
    lat: "22.4828", 
    lng: "88.1818", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "76837", 
    population_proper: "76837"
  }, 
  {
    city: "Nerkunram", 
    lat: "13.0667", 
    lng: "80.2833", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "52570", 
    population_proper: "52570"
  }, 
  {
    city: "Kendrāparha", 
    lat: "20.5000", 
    lng: "86.4200", 
    country: "India", 
    iso2: "IN", 
    state: "Odisha", 
    capital: "", 
    population: "41404", 
    population_proper: "41404"
  }, 
  {
    city: "Sijua", 
    lat: "23.7692", 
    lng: "86.1673", 
    country: "India", 
    iso2: "IN", 
    state: "Jhārkhand", 
    capital: "", 
    population: "39372", 
    population_proper: "39372"
  }, 
  {
    city: "Manali", 
    lat: "13.1667", 
    lng: "80.2667", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "37748", 
    population_proper: "37748"
  }, 
  {
    city: "Chakapara", 
    lat: "22.6300", 
    lng: "88.3500", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "35282", 
    population_proper: "35282"
  }, 
  {
    city: "Pāppākurichchi", 
    lat: "10.8137", 
    lng: "78.7481", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "26889", 
    population_proper: "26889"
  }, 
  {
    city: "Herohalli", 
    lat: "12.9911", 
    lng: "77.4873", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "23851", 
    population_proper: "23851"
  }, 
  {
    city: "Madipakkam", 
    lat: "12.9623", 
    lng: "80.1986", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "20523", 
    population_proper: "20523"
  }, 
  {
    city: "Sabalpur", 
    lat: "25.6053", 
    lng: "85.1835", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "18810", 
    population_proper: "18810"
  }, 
  {
    city: "Salua", 
    lat: "22.6100", 
    lng: "88.2700", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "15171", 
    population_proper: "15171"
  }, 
  {
    city: "Balasore", 
    lat: "21.4942", 
    lng: "86.9317", 
    country: "India", 
    iso2: "IN", 
    state: "Odisha", 
    capital: "", 
    population: "13869", 
    population_proper: "13869"
  }, 
  {
    city: "Jālhalli", 
    lat: "13.0333", 
    lng: "77.5500", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "13063", 
    population_proper: "13063"
  }, 
  {
    city: "Chinnasekkadu", 
    lat: "13.1609", 
    lng: "80.2573", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "12854", 
    population_proper: "12854"
  }, 
  {
    city: "Jethuli", 
    lat: "25.5378", 
    lng: "85.2841", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "11572", 
    population_proper: "11572"
  }, 
  {
    city: "Nagtala", 
    lat: "22.3693", 
    lng: "88.6071", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "10419", 
    population_proper: "10419"
  }, 
  {
    city: "Bāgalūr", 
    lat: "13.1328", 
    lng: "77.6685", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "9925", 
    population_proper: "9925"
  }, 
  {
    city: "Pakri", 
    lat: "25.5876", 
    lng: "85.1580", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "9768", 
    population_proper: "9768"
  }, 
  {
    city: "Hunasamaranhalli", 
    lat: "13.1435", 
    lng: "77.6200", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "9741", 
    population_proper: "9741"
  }, 
  {
    city: "Hesarghatta", 
    lat: "13.1391", 
    lng: "77.4783", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "9485", 
    population_proper: "9485"
  }, 
  {
    city: "Bommayapālaiyam", 
    lat: "11.9922", 
    lng: "79.8499", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "8796", 
    population_proper: "8796"
  }, 
  {
    city: "Gundūr", 
    lat: "10.7339", 
    lng: "78.7184", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "8587", 
    population_proper: "8587"
  }, 
  {
    city: "Punādih", 
    lat: "25.5484", 
    lng: "85.2649", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "8273", 
    population_proper: "8273"
  }, 
  {
    city: "Harilādih", 
    lat: "23.6300", 
    lng: "86.3500", 
    country: "India", 
    iso2: "IN", 
    state: "Jhārkhand", 
    capital: "", 
    population: "7917", 
    population_proper: "7917"
  }, 
  {
    city: "Alāwalpur", 
    lat: "25.4958", 
    lng: "85.2021", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "7827", 
    population_proper: "7827"
  }, 
  {
    city: "Mādnāikanhalli", 
    lat: "13.0626", 
    lng: "77.4642", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "7805", 
    population_proper: "7805"
  }, 
  {
    city: "Kādiganahalli", 
    lat: "13.1687", 
    lng: "77.6283", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "7225", 
    population_proper: "7225"
  }, 
  {
    city: "Mahuli", 
    lat: "25.5430", 
    lng: "85.2268", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "6683", 
    population_proper: "6683"
  }, 
  {
    city: "Zeyādah Kot", 
    lat: "22.3210", 
    lng: "88.2457", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "6457", 
    population_proper: "6457"
  }, 
  {
    city: "Arshakunti", 
    lat: "13.0785", 
    lng: "77.4225", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "6262", 
    population_proper: "6262"
  }, 
  {
    city: "Hīrāpur", 
    lat: "23.6834", 
    lng: "87.1973", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "5910", 
    population_proper: "5910"
  }, 
  {
    city: "Mirchi", 
    lat: "25.5554", 
    lng: "85.2139", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "5710", 
    population_proper: "5710"
  }, 
  {
    city: "Sonudih", 
    lat: "25.1155", 
    lng: "87.0214", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "5658", 
    population_proper: "5658"
  }, 
  {
    city: "Sondekoppa", 
    lat: "13.0000", 
    lng: "77.3667", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "4866", 
    population_proper: "4866"
  }, 
  {
    city: "Babura", 
    lat: "25.0851", 
    lng: "87.1092", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "4755", 
    population_proper: "4755"
  }, 
  {
    city: "Mādavar", 
    lat: "13.0525", 
    lng: "77.4732", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "4678", 
    population_proper: "4678"
  }, 
  {
    city: "Kadabgeri", 
    lat: "12.9965", 
    lng: "77.4331", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "4573", 
    population_proper: "4573"
  }, 
  {
    city: "Nanmangalam", 
    lat: "12.9381", 
    lng: "80.1753", 
    country: "India", 
    iso2: "IN", 
    state: "Tamil Nādu", 
    capital: "", 
    population: "4386", 
    population_proper: "4386"
  }, 
  {
    city: "Taliganja", 
    lat: "22.5876", 
    lng: "88.4439", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "4278", 
    population_proper: "4278"
  }, 
  {
    city: "Tarchha", 
    lat: "25.1116", 
    lng: "87.0964", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "4198", 
    population_proper: "4198"
  }, 
  {
    city: "Belgharia", 
    lat: "22.5692", 
    lng: "88.4846", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "4193", 
    population_proper: "4193"
  }, 
  {
    city: "Kammanhalli", 
    lat: "13.0155", 
    lng: "77.6381", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "4144", 
    population_proper: "4144"
  }, 
  {
    city: "Sonnappanhalli", 
    lat: "13.1557", 
    lng: "77.6179", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "3996", 
    population_proper: "3996"
  }, 
  {
    city: "Kedihāti", 
    lat: "22.6543", 
    lng: "88.5304", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "3910", 
    population_proper: "3910"
  }, 
  {
    city: "Doddajīvanhalli", 
    lat: "13.0086", 
    lng: "77.6143", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "3792", 
    population_proper: "3792"
  }, 
  {
    city: "Simli Murārpur", 
    lat: "25.5792", 
    lng: "85.2401", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "3739", 
    population_proper: "3739"
  }, 
  {
    city: "Sonāwān", 
    lat: "25.5445", 
    lng: "85.2387", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "3682", 
    population_proper: "3682"
  }, 
  {
    city: "Devanandapur", 
    lat: "22.9378", 
    lng: "88.3698", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "3449", 
    population_proper: "3449"
  }, 
  {
    city: "Tribeni", 
    lat: "23.0269", 
    lng: "88.4565", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "3305", 
    population_proper: "3305"
  }, 
  {
    city: "Huttanhalli", 
    lat: "13.1651", 
    lng: "77.6512", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "3240", 
    population_proper: "3240"
  }, 
  {
    city: "Nathupur", 
    lat: "25.5163", 
    lng: "85.2544", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "3129", 
    population_proper: "3129"
  }, 
  {
    city: "Bāli", 
    lat: "25.4810", 
    lng: "85.2227", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "3128", 
    population_proper: "3128"
  }, 
  {
    city: "Vājarhalli", 
    lat: "13.1022", 
    lng: "77.4111", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "3009", 
    population_proper: "3009"
  }, 
  {
    city: "Saino", 
    lat: "25.1134", 
    lng: "87.0108", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2987", 
    population_proper: "2987"
  }, 
  {
    city: "Shekhpura", 
    lat: "25.5725", 
    lng: "85.1428", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2950", 
    population_proper: "2950"
  }, 
  {
    city: "Cāchohalli", 
    lat: "13.0010", 
    lng: "77.4717", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "2946", 
    population_proper: "2946"
  }, 
  {
    city: "Nārāyanpur Kola", 
    lat: "25.1293", 
    lng: "87.0076", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2919", 
    population_proper: "2919"
  }, 
  {
    city: "Gyan Chak", 
    lat: "25.5496", 
    lng: "85.2423", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2855", 
    population_proper: "2855"
  }, 
  {
    city: "Kasgatpur", 
    lat: "13.1101", 
    lng: "77.5045", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "2852", 
    population_proper: "2852"
  }, 
  {
    city: "Kitanelli", 
    lat: "13.0095", 
    lng: "77.4191", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "2827", 
    population_proper: "2827"
  }, 
  {
    city: "Harchandi", 
    lat: "25.1000", 
    lng: "87.0442", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2827", 
    population_proper: "2827"
  }, 
  {
    city: "Santoshpur", 
    lat: "22.4650", 
    lng: "88.2193", 
    country: "India", 
    iso2: "IN", 
    state: "West Bengal", 
    capital: "", 
    population: "2808", 
    population_proper: "2808"
  }, 
  {
    city: "Bendravādi", 
    lat: "12.3636", 
    lng: "76.9137", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "2684", 
    population_proper: "2684"
  }, 
  {
    city: "Kodagihalli", 
    lat: "12.9771", 
    lng: "77.4651", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "2585", 
    population_proper: "2585"
  }, 
  {
    city: "Harna Buzurg", 
    lat: "25.0981", 
    lng: "87.0148", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2579", 
    population_proper: "2579"
  }, 
  {
    city: "Mailanhalli", 
    lat: "13.1863", 
    lng: "77.6963", 
    country: "India", 
    iso2: "IN", 
    state: "Karnātaka", 
    capital: "", 
    population: "2543", 
    population_proper: "2543"
  }, 
  {
    city: "Sultānpur", 
    lat: "25.5248", 
    lng: "85.2507", 
    country: "India", 
    iso2: "IN", 
    state: "Bihār", 
    capital: "", 
    population: "2473", 
    population_proper: "2473"
  }
]

for(let i = 0; i < cities.length; i++){
  cities[i].rank = i;
}
module.exports = cities;