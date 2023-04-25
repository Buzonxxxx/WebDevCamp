// Enjoy JavaScript with ES6 features :)

// const getHelloWorldStr = () => "Hello, world!"

// console.log(getHelloWorldStr());

// {
//   "email": "song1234@kimo.com",
//   "keywords": [
//     "dailymotion",
//     "dramaq",
//     "創業",
//     "一夜新娘",
//     "趙薇",
//     "劉嘉玲",
//     "肖戰",
//     "孫藝珍"
//   ],
//   "keywords frequency": {
//     "dailymotion": -3, 
//     "dramaq": 0,
//     "一夜新娘": 2,
//     "趙薇": 29482,
//     "劉嘉玲": 10,
//     "肖戰": 1,
//     "孫藝珍": 4
//   },
//   "keywords recency": {
//     "dailymotion": 5,
//     "dramaq": 6,
//     "一夜新娘": 5,
//     "趙薇": 15,
//     "劉嘉玲": 15,
//     "肖戰": 32
//   },
//   "Keyword Recency Date": {
//     "創業": "2020-01-02",
//     "dailymotion": "2021-02-04",
//     "dramaq": "2021-02-03",
//     "一夜新娘": "2021-02-04",
//     "趙薇": "2021-02-01",
//     "劉嘉玲": "2021-01-25",
//     "肖戰": "2021-01-08"
//   }



const validFrequence = (jsonData) => {
  const obj = JSON.parse(jsonData)
  const keyword = obj.keywords
  const keywords_frequency = obj.keywordsFrequency
  // loop keyword obj and compare with keywords_frequency
  // iterate keywords_frequency and validate value range in 1~15

  }

}