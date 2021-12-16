'use strict';

 
function Car(req, res, next) {
    var cars = {
    car: [

        {name:"BMW", models:"320",color:"red",cc:"1197",brand:"Marcedes-Benz"},
        {name:"Fiat", models:"panda",color:"red",cc:"1197",brand:"Marcedes-Benz"},
        {name:"Ford", models:"Fiesta",color:"red",cc:"1197",brand:"Marcedes-Benz"},
        {name:"Beleno", models:"2019",color:"blue",cc:"1197",brand:"Maruthi"},
        {name:"Swift", models:"2021",color:"gray",cc:"1197",brand:"Maruthi"},] };

     res.setViewData(cars);
      
      next();
    };
 

 
module.exports = {Car:Car};