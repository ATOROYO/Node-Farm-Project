const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const replaceTemps = require('./modules/replaceTemps');

// Synchronous way of reading and writng
const input = fs.readFileSync('txt/input.txt', 'utf-8');
console.log(input);

const finalText = fs.readFileSync('txt/final.txt', 'utf-8');
console.log(finalText);

const output = `This is what I know about Avocado:${input}\n${Date.now()}`;
fs.writeFileSync('txt/output.txt', output);

fs.writeFileSync(
  'txt/sharon.txt',
  'My girlfriend is called Sharon and I really love her so much and she finally told her grany about me'
);

// Asynchronous Way of reading and writng files
fs.readFile(`./txt/start.txt`, 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      fs.writeFile(`./txt/brendy.txt`, ` ${data3}`, err => {
        console.log('I logged out Data 3');
      });
    });
  });
});

// Node Farm Project

// Assigning data from the html files to their variables
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

// Fetching from the API
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  // const path = req.url;
  const { query, pathname } = url.parse(req.url, true);

  // The Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const html = productData.map(el => replaceTemps(tempCard, el)).join('');
    const output = tempOverview.replaceAll('{%PRODUCT_CARDS%}', html);
    res.end(output);

    // The product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = productData[query.id];
    const output = replaceTemps(tempProduct, product);
    res.end(output);

    // The API page
  } else if (pathname === '/api') {
    // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
    //   const productData = JSON.parse(data);
    //   console.log(productData);

    //   res.writeHead(200, { 'Content-type': 'application/json' });
    //   res.end(data);
    // });
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // Page not Found page
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-header': 'headd',
    });
    res.end('<h1>Page not Found<h1/>');
  }
});

server.listen(8000, '127.0.0.1', err => {
  console.log();
  ('Listening to request from port 8000');
});
