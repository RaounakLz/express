const express = require("express");

const homeRouter = express.Router();

// get 
homeRouter.get("/", (req, res)=> {
    const date= new Date();
    const hours= date.getHours();
    if(hours>8 && hours < 17)
    {
        res.render("open");
    }
    else{res.render("close");}
});
homeRouter.get("/contact",(req, res)=>res.render("contact"));
homeRouter.get("/product",(req, res)=>res.render("product"));
// post
// delete
//update

module.exports = homeRouter;