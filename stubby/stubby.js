const helloWorldPostData =  {"fallback":"data"}
const stubbyCustomersConfig = require('./customers')
const stubbyConfig = [
  {
    "request": {
      "url": "/hello-world",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "post": JSON.stringify(helloWorldPostData)
    },
    "response": {
      "headers": {
        "Content-Type": "application/json"
      },
      "latency": 1000,
      "status": 200,
      "body": "Your request was successfully processed!"
    }
  },
  stubbyCustomersConfig
]

module.exports=stubbyConfig