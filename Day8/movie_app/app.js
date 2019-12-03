var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");



app.get('/',(req,res) => {

  res.render('search')
});

app.get('/results',(req,res) => {
     
   var movie = req.query.search;
    
   var url = "http://www.omdbapi.com/?apikey=7c8a0e40&s=" + movie ;
request(url, (error,response,body) => {
  if(!error && response.statusCode==200) {
      var data = JSON.parse(body);
      res.render("results", {data: data});
  }
});

});


app.listen(8005,() => {
 console.log("Movie App has been Started!");

});