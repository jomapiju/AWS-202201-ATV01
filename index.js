var soap = require('soap');
var url = 'https://www.crcind.com/csp/samples/SOAP.Demo.cls?WSDL';
soap.createClient(url, function(err, client) {
    if(err) return console.log(err);
    client.LookupCity({ zip: 95014 }, function(err, result) {
        if(err) return console.log(err);
        console.log("LookupCity: " + JSON.stringify(result.LookupCityResult));
    });
    client.AddInteger({ Arg1: 1, Arg2: 2}, function(err, result) {
        if(err) return console.log(err);
        console.log("AddInteger: " + result.AddIntegerResult);
    });
    client.Mission( null, function(err, result) {
        if(err) return console.log(err);
        console.log("Mission: "+result.MissionResult);
    });
    
});