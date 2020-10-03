//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

const query = req.body.cityName;
const apiKey = "8373e4af877f99633b1a7a688730d571";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
       
        const weatherData = JSON.parse(data);
       const temp = weatherData.main.temp;
       const weatherDisc = weatherData.weather[0].description;
       const icon = weatherData.weather[0].icon;
       const image = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
       
       
       res.write("<p>this is weatherDescription "+weatherDisc+"</p>");
       res.write("<h1>the weather in "+query+" is "+temp+"celsius</h1>");
       res.write("<img src = " +image+ ">");
       res.send();
       
    });
});

    
});




app.listen(3000,function(){
    console.log("server is running on port 3000");
});