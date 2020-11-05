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
        
        let array = Array.isArray(collection) ? [...collection] : Object.values(collection)
        let output = acc ? acc : array.shift()

        for (let i=0; i<array.length; i++){
          output = func(output, array[i], array)
        }
      return output    

    },

    find: function(collection,predicate){

      const array = Array.isArray(collection) ? [...collection] : Object.values(collection)

      for (let i=0; i<array.length; i++){
        if (predicate(collection[i])) { 
          return collection[i]
        }
      }
    },

    filter: function(collection,predicate){
      const array = Array.isArray(collection) ? [...collection] : Object.values(collection)
      const newArray = []

      for (let i=0; i<array.length; i++){
        if (predicate(array[i])) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    size: function(collection){
      const array = Array.isArray(collection) ? [...collection] : Object.keys(collection)
      return array.length
    },

    first: function(array, n){ 
     return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n){
      let start = array.length - n
      let end = array.length
      return n ? array.slice(start, end) : array[end-1]
    },

    compact: function(collection){
      const array = Array.isArray(collection) ? [...collection] : Object.values(collection)
      let newArray = []

      for (let i=0; i<array.length; i++){
        if (array[i]){
          newArray.push(array[i])
        }
      }
      return newArray
      
    },

    sortBy: function(collection,callback){
      const array = Array.isArray(collection) ? [...collection] : Object.values(collection)

      return array.sort(function(a,b){
        return callback(a) - callback(b)
      })

    },

    flatten: function(){

    },

    uniq: function(){

    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object){
      let fNames = Object.keys(object)
      let sorted = []
      
      for (let i = 0; i<fNames.length; i++){
        if(typeof object[fNames[i]] === 'function'){
          sorted.push(object[fNames[i]])
        }
      }
      return sorted.sort()
    },


  }
})()

fi.libraryMethod()
