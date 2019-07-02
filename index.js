// Testing Ramda
const math = require('ramda')
const result = math.add(1, 8)
console.log(result)

console.log(math.add(5, 2) === 7, "5 + 2 = 7");
console.log(math.add(30, 4) === 34, "30 + 4 = 34");
console.log(math.add(3, 4) === 7, "3 + 4 = 7");
console.log(math.add(2, 4) === 6, "2 + 4 = 6");
console.log(math.add(25, 10) === 35, "25 + 10 = 35");
console.log(math.multiply(3, 3) === 9, "3 x 3 = 9");
console.log(math.divide(10, 2) === 5, "10 / 2 = 5");
// Testing Server 
const http = require("http")

const HOST = "localhost"
const PORT = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end("Hello Server")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("Something bad happened", err)
  }

  console.log(`Server is listening on ${HOST}:${PORT}`)
})

// Testing chalk
const chalk = require('chalk')
const name = 'Tri Kusuma'
console.log(chalk.red(name))
const info = chalk.keyword('green')
const names = ['Andi', 'Ade', 'Sugeng']
names.forEach(name => {
  console.log(info(name))
})

// Test chalk animation
const chalk1 = require('chalk-animation');

chalk1.rainbow('Tri Kusuma Atmaja')

const rainbow = chalk1.rainbow('Atmaja Kusuma'); // Animation starts

setTimeout(() => {
  rainbow.stop(); // Animation stops
}, 10000);



