// vim: ts=2 sts=2 sw=2 et

const apiUrl = "https://www.pathofexile.com/api/trade/search/Settlers"
const tradeUrlBase = "https://www.pathofexile.com/trade/search/Settlers"


const baseQuery = {
  "query": {
    "status": {
      "option": "any"
    },
    "stats": [
      {
        "type": "count",
        "filters": [
          {
            "id": "explicit.stat_3103189267",
            "disabled": false
          },
          {
            "id": "explicit.stat_1724614884"
          }
        ],
        "disabled": false,
        "value": {
          "min": 1
        }
      },
      {
        "filters": [
          {
            "id": "explicit.stat_3293275880"
          }
        ],
        "type": "and"
      }
    ]
  },
  "sort": {
    "price": "asc"
  }
}

const numbers = [
  2188,
  7293,
  7517,
  7188,
  7065,
  6927,
  7641,
  7770,
  7690,
  7824,
  7785,
  7832,
  6887,
  6566,
  6176,
  6237,
  6137,
  6099,
  6786,
  6346,
  6402,
  6386,
  6506,
  6416,
  6025,
  7870,
  7990,
  9517,
  9555,
  9506,
  9486,
  9303,
  9576,
  9696,
  9694,
  9924,
  9738,
  7950,
  9186,
  9128,
  8654,
  8437,
  8389,
  9146,
  8701,
  8783,
  8737,
  8850,
  8803,
  9927,
  5953,
  5854,
  3356,
  3367,
  2915,
  2883,
  2836,
  3384,
  3816,
  3660,
  3917,
  3859,
  3922,
  2738,
  2671,
  2340,
  2343,
  2266,
  2235,
  2706,
  2406,
  2454,
  2414,
  2505,
  2483,
  5892,
  4290,
  4334,
  5351,
  5377,
  5250,
  5215,
  5157,
  5450,
  5588,
  5567,
  5815,
  5766,
  4316,
  5077,
  4957,
  4754,
  4587,
  4358,
  5058,
  4815,
  4898,
  4864,
  4952,
  4908,
  9983,
]

const query = {
  ...baseQuery,
  query: {
    ...baseQuery.query,
    stats: [
      ...baseQuery.query.stats,
      {
        "type": "count",
        "filters": numbers.map(n => ({
          "id": "explicit.pseudo_timeless_jewel_dominus",
          "disabled": false,
          "value": {
            "min": n,
            "max": n
          }
        })),
        "disabled": false,
        "value": {
          "min": 1
        }
      }
    ]
  }
}


async function getUrl() {
  var response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const json = await response.json()
  const tradeUrl = tradeUrlBase + '/' + json.id
  console.log(tradeUrl)
}

getUrl()
