// --- DEPENDENCIES ----------------------------------------------------------------------------------------------

const express = require('express')
const mongoose = require('mongoose')
// const methodOverride = require('method-override')

const Vampire = require('./models/vampires.js')

const app = require('liquid-express-views')(express())

// --- PORT ------------------------------------------------------------------------------------------------------

const port = 3000

// --- MONGODB CONNECTION ----------------------------------------------------------------------------------------

const mongoURI = 'mongodb://localhost/vampire_api'
const db = mongoose.connection

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// --- MIDDLEWARE ------------------------------------------------------------------------------------------------

const reqLog = (req) => {
	console.log('===========================')
	console.log('this is the request object sent from the browser')
	console.log(`${req.method} request sent to ${req.url}`)
	console.log('req params are: ', req.params)
	console.log('===========================')
}

// these are optional and used for connection testing and debugging
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", mongoURI))
db.on("close", () => console.log("mongo disconnected"))

const manyVampires = require('./models/manyVampires')

// --- CREATE -------------------------------------------------------------------------------------------------------

// Vampire.create(manyVampires)
//   // now we handle what happens if our db transaction succeeds 
//   .then((vampire) => {
//         console.log('vampire created \n', vampire)
//   })
//   // we'll also handle what happens if there is an error
//   // catch error and return error
//   .catch((error) => {
//       console.log(error)
//   })
//   // once our stuff is done, we'll close our connection to the db 
//   .finally(() => {
//       db.close()
// })

// --- CREATE 4 NEW ------------------------------------------------------------------------------------------------

// const Angel = (
//     {
//         name: 'Angel',
//         hair_color: 'black',
//         eye_color: 'brown',
//         dob: (1927),
//         loves: ['Buffy', 'Cordelia'],
//         location: 'Sunnydale, California',
//         gender: 'm',
//         victims: 400, min: 0
    
//     })

// Vampire.create(Angel)
// .then((vampire) => {
//     console.log('vampire created \n', vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// const Spike = (
//     {
//         name: 'Spike',
//         hair_color: 'blonde',
//         eye_color: 'blue',
//         dob: (1853),
//         loves: ['Buffy', 'Drusilla'],
//         location: 'Sunnydale, California',
//         gender: 'm',
//         victims: 2, min: 0
        
//     })

// Vampire.create(Spike)
//     .then((vampire) => {
//         console.log('vampire created \n', vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// const Drusilla = (
//     {
//         name: 'Drusilla',
//         hair_color: 'brown',
//         eye_color: 'green',
//         dob: (1860),
//         loves: ['Spike', 'Darla'],
//         location: 'Sunnydale, California',
//         gender: 'f',
//         victims: 0, min: 0
            
//      })

// Vampire.create(Drusilla)
//     .then((vampire) => {
//         console.log('vampire created \n', vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// const vampireWillow = (
//     {
//         name: 'Vampire Willow',
//         hair_color: 'red',
//         eye_color: 'green',
//         dob: (1981),
//         loves: ['Tara', 'Magic'],
//         location: 'Sunnydale, California',
//         gender: 'f',
//         victims: 0, min: 0
        
//     })

// Vampire.create(vampireWillow)
//     .then((vampire) => {
//         console.log('vampire created \n', vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
    // })

/// --- INSERT MANY -------------------------------------------------------------------------------------------------

// Vampire.insertMany(manyVampires)
//     .then((vampire) =>  {
//         console.log(vampire)
//     })
//     .catch((error)=> {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// --- FIND ------------------------------------------------------------------------------------------------------

// Vampire.find({})
// 	.then((vampire) => {
// 		console.log(vampire)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
// 	.finally(() => {
// 		db.close()
// 	})

// --- QUERYING (COMPARISON) -------------------------------------------------------------------------------------

// <-------- find gender of female ------------------------------------------------------------------------------>

// Vampire.find({ gender: 'f' })
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// <-------- have greater than 500 victims ---------------------------------------------------------------------->

// Vampire.find({ victims: { $gt: 500 } } )
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// <-------- fewer than or equal to 150 victims ----------------------------------------------------------------->

// Vampire.find({ victims: { $lte: 150 } } )
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

//  <-------- victim count not equal to 210234 ------------------------------------------------------------------>

// Vampire.find({ victims: { $ne: 210234} } )
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// <-------- victims greater than 150 and fewer than 500 -------------------------------------------------------->

// Vampire.find({ victims: { $gt: 150, $lt: 500 } })
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// --- QUERYING (EXISTS OR NOT) ----------------------------------------------------------------------------------

// <-------- key of title --------------------------------------------------------------------------------------->

// Vampire.find({ title: { $exists: true} })
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// <-------- do not have a key of victims ----------------------------------------------------------------------->

// Vampire.find({ victims: { $exists: false} })
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// <-------- have a title and no victims ------------------------------------------------------------------------>

// Vampire.find({ title: { $exists: true}, victims: 0 })
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// <-------- have victims and they have are greater than 100 ---------------------------------------------------->

// Vampire.find({ victims: { $exists: true, $gte: 500 } })
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// -- QUERYING (OR) ----------------------------------------------------------------------------------------------

// <-------- from new york, new york, us or new orleans, louisana, us ------------------------------------------->

// Vampire.find( { $or: [ { location: 'New York, New York, US' }, { location: 'New Orleans, Louisana, US' } ] } )
//     .then((vampire) => {
//         console.log(vampire)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// // <-------- love brooding or being tragic ------------------------------------------------------------------->

// Vampire.find( { $or: [ { loves: "brooding" }, { loves: "being tragic" } ] } )
//         .then((vampire) => {
//             console.log(vampire)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         .finally(() => {
//             db.close()
//         })

// // <-------- more than 1000 victims or love marshmellows ---------------------------------------------------->

// Vampire.find( { $or: [ { victims: { $gt: 1000 } }, { loves: "marshmellows" } ] } )
//     .then((vampire) => {
//         console.log(vampire)
//         })
//         .catch((error) => {
//              console.log(error)
//         })
//         .finally(() => {
//             db.close()
//         })

// // <-------- red hair or green eyes -------------------------------------------------------------------------->

// Vampire.find( { $or: [ { hair_color: "red" }, { eye_color: "green" } ] } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// -- QUERYING (ONE OR MORE) -------------------------------------------------------------------------------------

// <-------- love either frilly shirtsleeves or frilly collars -------------------------------------------------->

// Vampire.find( { $or: [ { loves: "frilly shirtsleeves" }, { loves: "frilly collars" } ] } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

//  <-------- love brooding ------------------------------------------------------------------------------------->

// Vampire.find( { loves: "brooding" } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music ------------>

// Vampire.find( { $or: [ { loves: "appearing innocent"}, {loves: "trickery"}, {loves: "lurking in rotting mansions"}, {loves: "R&B music"} ] } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- love fancy cloaks but not if they also love -------------------------------------------------------->
// <-------- either top hats or virgin blood * Hint-You will also have to use $nin * ---------------------------->

// Vampire.find( { $and: [ { loves: "fancy cloaks" }, { loves: {$nin: ['top hats', 'virgin blood'] } } ] } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// -- QUERYING (NEGATIVE) --------------------------------------------------------------------------------------->

// <-------- love ribbons but do not have brown eyes ------------------------------------------------------------>

// Vampire.find( { $and: [ { loves: "ribbons" }, { eye_color: { $nin: "brown" } } ] } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- are not from rome ---------------------------------------------------------------------------------->

// Vampire.find( { location: { $nin: "Rome, Italy" } } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- do not love any of the following: ------------------------------------------------------------------>
// <-------- [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding] -------------------->

// Vampire.find( { loves: { $nin: [ "fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding" ] } } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- have not killed more than 200 people --------------------------------------------------------------->

// Vampire.find( { victims: { $nin: { $gte: 200 } } } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// REPLACE ------------------------------------------------------------------------------------------------------>

// <-------- replace 'Claudia' w/ vampire named 'Eve' ----------------------------------------------------------->
// <-------- needs key portrayed_by with the value 'Tilda Swinton ----------------------------------------------->

// Vampire.findOneAndReplace( { name: "Claudia" }, { name: "Eve", portrayed_by: "Tilda Swinton" } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- replace first male vampire with another whose name is 'Guy Man' ------------------------------------>
// <-------- needs a key 'is_actually' with the value 'were-lizard' --------------------------------------------->

// Vampire.findOneAndReplace( { gender: "m" }, { name: "Guy Man", is_actually: "were-lizard" } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// UPDATE ------------------------------------------------------------------------------------------------------->

// <-------- update 'Guy Man' to have a gender of 'f' ----------------------------------------------------------->

// Vampire.findOneAndUpdate( {  name: "Guy Man" }, { gender: "f"}, { new: true } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- update 'Eve' to have a gender of 'm' ----------------------------------------------------------->

// Vampire.findOneAndUpdate( {  name: "Eve" }, { gender: "m"}, { new: true } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs' ---------------->

// Vampire.findOneAndUpdate( {  name: "Guy Man" }, { hates: [ "clothes", "jobs" ]}, { new: true } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes' --------------------->

// Vampire.findOneAndUpdate( {  name: "Guy Man" }, { $push: { hates: { $each: [ "clothes", "jobs" ] } } }, { new: true } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- rename 'Eve's' name field to 'moniker' ------------------------------------------------------------->

// Vampire.findOneAndUpdate( {  name: "Eve" }, { $rename: { name: "monkier" } }, { new: true } )
// 	.then((vampire) => {
// 		console.log(vampire)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 		.finally(() => {
// 			db.close()
// 		})

// <-------- We now no longer want to categorize female gender as "f", but rather as fems. ---------------------->
// <-------- Update all females so that the they are of gender "fems". ------------------------------------------>

Vampire.UpdateMany( { gender: "f" }, { gender: "fems" }, { new: true } )
	.then((vampire) => {
		console.log(vampire)
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			db.close()
		})








