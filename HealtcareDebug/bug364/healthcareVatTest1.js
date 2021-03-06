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

var result = addon.CalculateHealthCareValueAddedTaxCC
(
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
          "originalRevenueSchedule": {
            "2018": [
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4170000,
              4130000
            ],
            "2019": [
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2288000,
              2332000
            ],
            "2020": [
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2516800,
              2565200
            ]
          },
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
          "salesExpense": {
            "2016": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2017": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2018": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2019": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2020": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ]
          },
          "permenantDecorate": {
            "2016": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2017": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2018": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2019": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2020": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ]
          },
          "nonPermenantDecorate": {
            "2016": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2017": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2018": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2019": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ],
            "2020": [
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333,
              833.33333333
            ]
          },
          "carparkIncome": {
            "2016": [
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000
            ],
            "2017": [
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000
            ],
            "2018": [
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000
            ],
            "2019": [
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000
            ],
            "2020": [
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000,
              10000
            ]
          },
          "operatingIncomeBase": {
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
          "vatParam": {
            "permenantDecorateInputTaxRate": 0.05,
            "nonPermenantDecorateInputTaxRate": 0.05,
            "sellingInputTaxRate": 0,
            "developmentInputTax": 541800, //error 225000.49999999988
            "operationInputTax": {
              "option": "income",
              "incomeRates": {
                "2016": 0.05,
                "2017": 0.05,
                "2018": 0.05,
                "2019": 0.05,
                "2020": 0.05,
                "2021": 0.05
              },
              "expenseRates": {
                "2016": 0,
                "2017": 0,
                "2018": 0,
                "2019": 0,
                "2020": 0,
                "2021": 0
              },
              "custom": {
                "2016": 0,
                "2017": 0,
                "2018": 0,
                "2019": 0,
                "2020": 0,
                "2021": 0
              }
            },
            "operationTaxRate": 0.02,
            "cardSalesTaxRate": 0.02,
            "carparkTaxRate": 0.02,
            "prePaymentRate": 0
          }
        }}

	);

console.log(result);