// just numbers
enum boat {
    engine = 2,
    bow = 1,
    stern = 1 
}

// new variable
let numberOfEngine = boat.engine
console.log('Engines: ' + numberOfEngine)

boat.engine = '2 engines' // Error