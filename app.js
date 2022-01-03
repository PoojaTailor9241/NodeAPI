const express= require("express");
const app= express();
const cors= require("cors");
const PeopleRouter=require("./routes/PeopleRouter");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.use("/people",PeopleRouter);

app.listen(7575,()=>{
    console.log("listening at 7575...");
})