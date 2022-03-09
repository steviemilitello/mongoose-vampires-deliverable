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
//   // now we handle what happens if our db transaction suceeds 
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

// --- QUERYING (COMPARISON) --------------------------------------------------------------------------------------

// ///  find gender of female

// Vampire.find({ gender: 'f' })

// // have greater than 500 victims

// Vampire.find({ $gte: 500 })

// // fewer than or equal to 150 victims

// Vampire.find({ $lte: 150 })

// // victim count not equal to 210234

// Vampire.find({ $ne: 210234 })

// // greater than 150 and fewer than 500 

// Vampire.find({ $gte: 150, $lte: 500 })

// // finds all 

// Vampire.find({})
// 	.then((vampire) => {
// 		console.log(tweets)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
// 	.finally(() => {
// 		db.close()
// 	})

