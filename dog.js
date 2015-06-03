/**
 * Created by silasmartinez on 6/3/15.
 */
module.exports = {

    howManyDogs: function(arr) {
        return arr.reduce(function (acc){ return acc +1 },0)
    },


    nameLengths: function(arr){
        return arr.map(function(ele){ return ele.length });
    },


    reverseDogNames: function(arr){
        return arr.map(function(ele){ return ele.split('').reverse().join('') });
    },


    firstThreeDogsWithEach: function(arr){
        return arr.filter(function(ele, ind){ if (ind < 3) return ele })
    },


};