var os = require('os') ;
var platform = '';
switch (os.platform())   {
  case 'win32':
    platform = 'win';
    break;
  case 'darwin':
    platform = 'mac';
    break;
  case 'linux':
    platform = 'linux';
    break;
}

var addon = require('../release/' + platform + '/addon') ;
module.exports = addon;

var result2 = addon.CalculateHealthCarePropertyTaxCC(

 {
        "timeline": {
          "reportStartDate": "2016-1-2",
          "landCertificatedDate": "2016-1-2",
          "constructionCommencementDate": "2017-6-2",
          "constructionCompletionDate": "2018-12-2",
          "salesCommencementDate": "2018-1-2",
          "carryOverDate": "2018-1-2",
          "projectOpeningDate": "2018-1-2",
          "reportEndDate": "2020-12-2"
        }},
        {"data": {
          "operatingRevenue": {
            "2016": [
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333
            ],
            "2017": [
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333
            ],
            "2018": [
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333
            ],
            "2019": [
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333
            ],
            "2020": [
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333,
              8333.33333333
            ]
          },
          "propertyTaxParam": {
            "costDeductionRate": 0,
            "costRate": 0.05,
            "rentRate": 0
          },
          "totalCost": 8586000
        }
      }

)

console.log(result2);