(function(window){
  "use strict"
  let cache = {};

  const saveInternalCache = (id, data) => {
    cache[id] = data

    console.log(cache)
  }

  window.module1 = {
    saveCache: saveInternalCache
  }
})(window)