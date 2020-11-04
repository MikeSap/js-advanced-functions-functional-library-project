const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      let newCollection;      
      if (typeof collection === 'object'){
            newCollection = Object.values(collection)
            }else{
            newCollection = collection
            }
            newCollection.forEach(item => {
              func(item)
            })
           return collection
  },

    map: function(collection, func) {  
      if (collection instanceof Object){
        debugger
            let collection = Object.values(collection)
            }
            return collection.map(item => {
              func(item)
            })
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
