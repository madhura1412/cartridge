// 'use strict';
// var server = require('server');
// var testpage = require('*/cartridge/scripts/testscript');
// server.get('Start',testpage.test,  function(req,res,next){
//     res.render('testres');
// next();
// });
// module.exports=server.exports()
// res.render('hello', { test: '123' });

'use strict';
var server = require('server');
server.get('Start',  function(req,res,next){
    var testpage = require('*/cartridge/scripts/testscript');
    
    var myData = testpage.test();
    res.render('testres', myData);


    var myArray = testpage.array();
    res.render('testres', myArray );

    var retext = {'madhura':testpage.madhura()};
    res.render('testres',retext);

    var myCondition = {'condition':testpage.condition()};
    res.render('testres',myCondition);

    var myLoop = {'loop':testpage.loop()};
    res.render('testres',myLoop);

    var myType = {'type':testpage.type()};
    res.render('testres',myType);

    var myComparison = {'comparison':testpage.comparison()};
    res.render('testres',myComparison);

    var mySwitch = {'switchFunction':testpage.switchFunction()};
    res.render('testres',mySwitch);

    var mySet = {'setFunction':testpage.setFunction()};
    res.render('testres',mySet);

    var myMap = {'mapFunction':testpage.mapFunction()};
    res.render('testres',myMap);

    var myJson = {'json':testpage.json()};
    res.render('testres',myJson);

    var myClass = {'exampleClass':testpage.exampleClass()};
    res.render('testres',myClass);

    var myTxt = {'testFunction':testpage.testFunction()};
    res.render('testres',myTxt);

    var myDetails = {'details':testpage.details()};
    res.render('testres',myDetails);

    var myDetails = {'getTime':testpage.getTime()};
    res.render('testres',myDetails);


    
         next();
     });
     module.exports=server.exports()




    