const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

http
  .createServer(function (req, res) {
    console.log(req.url);
    if (req.url === "/pet_adoption.html" || req.url === "/") {
      fs.readFile("../pet_adoption.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/css/pet_adoption.css") {
      fs.readFile("../css/pet_adoption.css", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/script/pet_adoption.js") {
      fs.readFile("../script/pet_adoption.js", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(data);
        res.end();
      });
    }else if (req.url === "/img/markus-spiske-fpTVkXjxL_Y-unsplash-2x_SThiws76.webp") {
        fs.readFile("../img/markus-spiske-fpTVkXjxL_Y-unsplash-2x_SThiws76.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
      }else if (req.url === "/img/windows-C6T6vr1sQI0-unsplash_SThiws76.webp") {
        fs.readFile("../img/windows-C6T6vr1sQI0-unsplash_SThiws76.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
      }else if (req.url === "/img/pexels-towfiqu-barbhuiya-9810169_SThiws76.webp") {
        fs.readFile("../img/pexels-towfiqu-barbhuiya-9810169_SThiws76.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
      }else if (req.url === "/img/pexels-vazhnik-7864434_SThiws76.webp") {
        fs.readFile("../img/pexels-vazhnik-7864434_SThiws76.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
      }else if (req.url === "/img/igor-son-mJVc_-2LuI-unsplash_SThiws76.webp") {
        fs.readFile("../img/igor-son-mJVc_-2LuI-unsplash_SThiws76.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
    }else if (req.url === "/img/shelter-dog-cropped.jpg") {
        fs.readFile("../img/shelter-dog-cropped.jpg", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/jpg" });
          res.write(data);
          res.end();
        });
    }else if (req.url === "/img/mumbai-dog-helpline.jpg") {
        fs.readFile("../img/mumbai-dog-helpline.jpg", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/jpg" });
          res.write(data);
          res.end();
        });
    }else if (req.url === "/img/PF2015_267_Kittens_Shelter-630.jpg") {
        fs.readFile("../img/PF2015_267_Kittens_Shelter-630.jpg", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/jpg" });
          res.write(data);
          res.end();
        });
    }else if (req.url === "/img/review1-img.webp") {
        fs.readFile("../img/review1-img.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
    }else if (req.url === "/img/review2-img.webp") {
        fs.readFile("../img/review2-img.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
    }else if (req.url === "/img/review3-img.webp") {
        fs.readFile("../img/review3-img.webp", function (err, data) {
          res.writeHead(200, { "Content-Type": "image/webp" });
          res.write(data);
          res.end();
        });
    }
  })
  .listen(port, () => {
    console.log(`The server is listening at the port ${port}`);
  });
