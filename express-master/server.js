const express=require("express");

const app = express();

 app.set("view engine" , "ejs");

app.use("/home", require("./routes/home"));
app.use("/product", require("./routes/product"));
app.use("/contact", require("./routes/contact"));

app.listen(5000,(err)=> 
err ? console.log(err) 
: console.log("server is running")
);

