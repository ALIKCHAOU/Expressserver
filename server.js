const express = require('express');
const hbs=require("hbs");
const app = express();
app.set('view engine',hbs)
app.get("/connected-User",(req,res)=>{
  
    res.render("user.hbs",{name:'amine'});

})


app.listen(3000, (err) => {
    if (err)
        console.log("server is not runing ")
    else
        console.log("it's work")
})
