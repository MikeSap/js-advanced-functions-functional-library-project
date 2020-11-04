const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      let newCollection;      
      if (!Array.isArray(collection)){
            newCollection = Object.values(collection)
            }else{
            newCollection = collection
            }
            newCollection.forEach(item => {
              func(item)
            })
           return collection
  },

    map: function(things, func) {  
      let newThings;
      if (!Array.isArray(things)){
            newThings = Object.values(things)
       } else { 
            newThings = things
          }
          return newThings.map(thing => func(thing))
          // let finalArray = []
          // for (let i = 0; i < newThings.length; i++){
          //   debugger
          //   finalArray.push(func(newThings[i]))
          // }
          //  return finalArray
    },

    reduce: function(collection, func, acc) {
      debugger
      let value = 0
      let currentValue = 0
        collection.reduce(func(acc, value, collection), currentValue)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
