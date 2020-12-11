
  let timeline = {
    "initialInvestmentDate": '2019-01-1',
    "constructionCommencementDate": '2019-03-1',
    "constructionCompletionDate": '2019-5-1',
    "projectOpeningDate": '2021-3-1',
    "projectExitDate": '2021-6-1',
  };

  let sizeRatios = [
    {
      shopId: 0, //店铺类型ID
      sizeTo: 200,
      rate: 0.9, //店铺类型系数
      occupancyRates: [
        //出租率
        [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
        [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
        [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
      ],
      tenure: 3, //租期
      rentalFreeAllowance: 3, //免租期/月
      downtime: 3, //调整空置期/月
      annualRentalGrowthRate: 0.02, //租金年增长率
      shopsizeContractRate: 0.8, //续约率
      shopsizeMagtFee: 2, //物管费/元/天/平方米
      shopsizeMagtGrowthRate: 0.02, //物管费增长率
      shopsizeRentalRenewal: {
        //续约租金
        option: "basedOnProject", //[‘basedOnProject’,’’basedOnMarket]
        marketAdjustment: 0.1, //’’basedOnMarket 正数为溢价，负数为折扣
        projectTanentmixRates: [
          //‘basedOnProject’
          {
            tenantmixId: 0, //业态ID
            rate: 0.2, // 年增长
          },
        ],
      },
    },
  ]

  let tenants = [{
    'guid': '123456789',
    'grossFloorArea': 35, //面积
    "shopsizeIndex" : 0, //店铺类型id
    'tenure': 3,
    'schedule': {
      //出租率
      'occupancyRate': {
        "2019": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8,],
        "2020": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8,],
        "2021": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8,]
      },
      'rental': {
        "2019": [6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5,],
        "2020": [6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5,],
        "2021": [6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5,]
      },
      //续约率
      "retentionRate": {
        '2020': [
          0, 0, 0, 0, 0,
          0, 0, 0, 0.2, 0,
          0.4, 0
        ],
        '2021': [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0,
          0, 0.8
        ],
        '2022': [
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0,
          0, 0
        ]
      },
    }
  }
  ];

  let leasingCommission = {
    'categoryOption': "includeNOI",   //租赁佣金选项  [计入净运营收入 includeNOI   ,  不计入净运营收入 excludeNOI”]
    "rentalcommission：": [1,2,3,4,5,6] //租赁佣金，第一个到最后一个对应主力店-其他
  }
