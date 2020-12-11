var os = require('os');
var platform = '';
switch (os.platform()) {
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
var addon = require('./release/' + platform + '/addon');
module.exports = addon;

var timeline =  {
    "initialInvestmentDate": '2019-01-1',
    "constructionCommencementDate": '2019-03-1',
    "constructionCompletionDate": '2019-5-1',
    "projectOpeningDate": '2020-3-1',
    "projectExitDate": '2021-6-1',
  };

var officeShop = {
  "name" : "L1-1",
  //...need to be implemented ...////
};

var retailShop = {
  "name" : "L2-1",
  //...need to be implemented...//
}

var rentalGrowth = {
  "projectRentalGrowth":[5,5], // rental growth by year
  "marketRentalGrowth":[10,10],
  "rentalGrowthMondel":"growByYear", // growByYear or growByRental
  "projectGrowthType" : "marketGrowth" //marketGrowth or customGrowth
};

var rentalRenewal = {
  "rentalRenewalBase": "marketRental", //marketRental or projectRental
  "renewalChangeType": "discount", //
  "renewalChangeValue" : 5
};


var officeShopList = [officeShop];
var retailShopList = [retailShop];

var projectRental = {
  "type":"rentalDiscountPremium", //or rentalTarget,
  "rentalTargetType":"discount", //or market, Premium
  "rentalTargetRatio":20,
  "rentalTargetValue":20
};

//Function 1: Calculate Office Rental for each month, detailed in shop (tenant) need implemented by nodejs developer
//接口函数1： 计算写字楼办公室每月每平米租金与每铺按月租金，租户的内容需要nodejs开发者补全
//输入：时间线， office tenant list， tenant含有脑图中所有内容, 租金增长，续约租金, 3.1 benchmark租金，3.2 project rental
//输出：按店每月租金/每平米，按店每月总租金，（如需要）按月按店project rental, market rental,
var rentalGrowthResult = addon.CalculateOfficeRental(
  {"timeline" :timeline},
  {"officeShopList":officeShopList},
  {"rentalGrowth":rentalGrowth},
  {"rentalRenewal":rentalRenewal},
  {"benchmark":20}, 
  {"projectRental":projectRental}
  );
console.log(rentalGrowthResult);

//Function 2: Calculate Office Retail Rental for each month, detailed in shop detailed in shop (tenant) need implemented by nodejs developer
//接口函数2： 计算写字楼零售铺位每月每平米租金与每铺按月租金， 租户的内容需要nodejs开发者补全
//输入：时间线，retail tenant list, tenant含有脑图中所有内容
//输出：按店每月租金/每平米，按店每月总租金
var retailRentalGrowthResult = addon.CalculateRetailRental(
  {"timeline" :timeline},
  {"retailShopList":retailShopList},
  );
console.log(retailRentalGrowthResult);

//Function 3: CalculateOfficeRentFreeAllowance
//计算免租期allowance, 需要的话可以提供rent free chance for each shop
//输入：时间线， office tenant list， tenant含有脑图中所有内容, 按铺月收入（function 1 的返回值）
//输出：按店免租补贴，总免租补贴
var officeRentFree = addon.CalculateOfficeRentFreeAllowance(
  {"timeline" :timeline},
  {"officeShopList":officeShopList},
  );
//console.log(officeRentFree);
//console.log(officeRentFree.officeRentFreeAllowance[0].rentFreeAllowance);

//Function 4: CalculateOfficeOccupancy
//计算出租率 （不知是否需要）
//输入：时间线， office tenant list， tenant含有脑图中所有内容, 按铺月收入（function 1 的返回值）
//输出：按店出租率
var officeOccupancy = addon.CalculateOfficeOccupancy(
  {"timeline" :timeline},
  {"officeShopList":officeShopList},
  );
// console.log(officeOccupancy);

//Function 5: CalculateOfficeManagementFeeIncome
//计算管理费收入
//输入：时间线， office tenant list， tenant含有脑图中所有内容, 按铺月收入（function 1 的返回值）
//输出：按店管理费收入，总管理费收入
var officeManagementFeeIncome = addon.CalculateOfficeManagementFeeIncome(
  {"timeline" :timeline},
  {"officeShopList":officeShopList},
  );
//console.log(officeManagementFeeIncome);


//Function 6: CalculateOfficeDowntimeAllowance
//计算调整期补贴
//输入：时间线， office tenant list， tenant含有脑图中所有内容, 按铺月收入（function 1 的返回值）
//输出：按店调整期补贴，总调整期补贴
var officedowntimeAllowance = addon.CalculateOfficeDowntimeAllowance(
{"timeline" :timeline},
  {"officeShopList":officeShopList},
  );

// console.log(officedowntimeAllowance);

//Function 7: CalculateOfficeVacancyAllowance
//计算空置补贴
//输入：时间线， office tenant list， tenant含有脑图中所有内容, 按铺月收入（function 1 的返回值）
//输出：按店空置补贴，总空置补贴
var officeVacancyAllowance = addon.CalculateOfficeVacancyAllowance(
  {"timeline" :timeline},
  {"officeShopList":officeShopList},
  );
// console.log(officeVacancyAllowance);

//Function 8: CalculateOfficeMiscellaneousIncome
//计算多经收入
//输入：时间线， 3.5（多经收入）
//输出：多经收入cashflow
var miscellaneousIncomeParam = 
{
    "promotionIncome":{"firstYearAmount":10, "growthRate":5},
    "venueIncome":{"firstYearAmount":10, "growthRate":5},
    "warehouseIncome":{"firstYearAmount":10, "growthRate":5},
    "communitySupportingIncome":{"firstYearAmount":10, "growthRate":5},
    "theaterIncome":{"firstYearAmount":10, "growthRate":5},
};

var officeMiscellaneousIncome = addon.CalculateOfficeMiscellaneousIncome
(
    {"timeline" :timeline},
    {"miscellaneousIncomeParam":miscellaneousIncomeParam}
)
console.log(officeMiscellaneousIncome);
//Function 9: CalculateOfficeCarparkIncome
//计算停车场收入
//输入：时间线，3.5（停车场收入）
//输出：停车场收入cashflow

var carparkParm = {
  "unitArea":41.3,
  "totalLots":1000,
  "dailyRent":30,
  "rentRate":75,
  "growthRate":10
};

var officeCarparkIncome = addon.CalculateOfficeCarparkIncome(
  {"timeline" :timeline},
    {"carparkParm":carparkParm}
    );

console.log(officeCarparkIncome);



