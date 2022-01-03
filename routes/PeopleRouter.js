const router = require("express").Router();
const People =require("../models/People");

router.get("/",(req,res)=>{
    People.find().lean()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
});

router.post("/add",(req,res)=>{
    let people=new People({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        gender:req.body.gender
    })
    people.save()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
});

router.get("/:id",(req,res)=>{
    let ID=req.params.id;
    People.findById(ID)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
});

router.put("/edit/:id",(req,res)=>{
    let databody={
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        gender:req.body.gender
    }
    People.findByIdAndUpdate({"_id":req.params.id},databody,{new:true})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
});

router.get("/delete/:id",(req,res)=>{
    let ID = req.params.id;
    People.findByIdAndDelete(ID)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports=router;