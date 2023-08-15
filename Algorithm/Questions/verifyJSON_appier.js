
let jsonData = {
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

// Get keywords
// Get "keywords frequency", "keywords recency" and "Keyword Recency Date"
// loop each key and verify its frequency, recency and recency Date
// verify if frequency >= 0
// verify if recency <= 12
// verify if date < 6
const isValidJson = (jsonData) => {
  let isValid = true
  const keyword = jsonData.keywords
  const keywordFrequency = jsonData["keywords frequency"]
  const keywordRecency = jsonData["keywords recency"]
  const keywordRecencyDate = jsonData["Keyword Recency Date"]
  for (let key of keyword) {
    const frequency = keywordFrequency[key]
    const recency = keywordRecency[key]
    const recencyDate = keywordRecencyDate[key]
    const date = new Date(recencyDate)
    const nowDate = new Date("2021-02-06") // mms
    const diff = (nowDate - date) / (24*60*60*1000)

    if (frequency < 0) {
      console.log(`The ${key}'s frequency: ${frequency} is invalid`)
      isValid = false
    } else if (frequency === undefined) {
      console.log(`The ${key}'s frequency: ${frequency} is invalid`)
      isValid = false
    }

    if (recency > 12) {
      console.log(`The ${key}'s recency: ${recency} is invalid`);
      isValid = false
    } else if (recency === undefined) {
      console.log(`The ${key}'s recency: ${recency} is invalid`);
      isValid = false
    }

    if (diff >= 6) {
      console.log(`The ${key}'s recency date: ${recency} is invalid`);
      isValid = false
    } else if (recencyDate === undefined) {
      isValid = false
      console.log(`The ${key}'s recency date: ${recency} is invalid`);
    }
    
  }

  return isValid
}

console.log(isValidJson(jsonData))