// Enjoy JavaScript with ES6 features :)

// const getHelloWorldStr = () => "Hello, world!"

// console.log(getHelloWorldStr());

let jsondata = {
  "email": "song1234@kimo.com",
  "keywords": [
    "dailymotion",
    "dramaq",
    "創業",
    "一夜新娘",
    "趙薇",
    "劉嘉玲",
    "肖戰",
    "孫藝珍"
  ],
  "keywords frequency": {
    "dailymotion": -3, 
    "dramaq": 0,
    "一夜新娘": 2,
    "趙薇": 29482,
    "劉嘉玲": 10,
    "肖戰": 1,
    "孫藝珍": 4
  },
  "keywords recency": {
    "dailymotion": 5,
    "dramaq": 6,
    "一夜新娘": 5,
    "趙薇": 15,
    "劉嘉玲": 15,
    "肖戰": 32
  },
  "Keyword Recency Date": { // use date obj, now is 2021-02-06
    "創業": "2020-01-02",
    "dailymotion": "2021-02-04",
    "dramaq": "2021-02-03",
    "一夜新娘": "2021-02-04",
    "趙薇": "2021-02-01",
    "劉嘉玲": "2021-01-25",
    "肖戰": "2021-01-08"
  }
}

const isValidJson = (jsonData) => {
  let isValid = true
  const keywords = jsonData.keywords
  const keywordsFrequency = jsonData["keywords frequency"]
  const keywordsRecency = jsonData["keywords recency"]
  const KeywordRecencyDate = jsonData["Keyword Recency Date"]
  for(let key of keywords) {
    const frequency = keywordsFrequency[key]
    const recency = keywordsRecency[key]
    const recencyDate = KeywordRecencyDate[key]
    const date = new Date(recencyDate)
    const nowDate = new Date("2021-02-06")
    const diff = (nowDate - date) / (24*60*60*1000) // 差幾天

    if(frequency < 0) {
      console.log(`The ${key}'s frequency: ${frequency} < 0`)
      isValid = false
    } else if(frequency === undefined) {
      console.log(`Frequency ${key} is undefined`)
      isValid = false
    }
    if(recency > 12) {
      console.log(`The ${key}'s recency: ${recency} > 12`)
      isValid = false
    } else if(recency === undefined) {
      console.log(`Recency ${key} is undefined`)
      isValid = false
    }
    if (diff >= 6) {
      console.log(`The ${key}'s date: ${recencyDate} > 6`)
      isValid = false
    } else if (recencyDate === undefined) {
      console.log(`RecencyDate ${key} is undefined`)
      isValid = false
    }

    }
    return isValid
  }


  console.log(isValidJson(jsondata))