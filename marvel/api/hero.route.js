const express = require('express');     //express kiyna eka express kiyna const var ekta gatta
const heroRoutes = express.Router();       //e gtta eka heroRoute kiyna ekta daganna.

let Hero = require('./hero.model');     //Hero kiyna var ekata kalin hdagtta js file eka dagnwa

//add function
heroRoutes.route('/add').post(function (req, res) {
    let business = new Hero(req.body);              //business kiyla aluth var ekk hdla ekata request eka gnnawa.e gnne kalin hdpu model eke body eken
    business.save()                 //ara gatta eka save kragnnawa
        .then(business =>{           //meka nikm if(true) wage ekk. save krama then hari giyanm wage adahasak
            res.status(200).json({'business': 'hero added successfully'});     //hri nm response eke status eka 200 krla json eka hrha msg ekk ywnwa
        })
        .catch(err =>{
            res.status(400).send("Unable to save to database");         //error ekk ahu unma satatus eka 400 krla msg ekk pennnwa
        });
});

//get function
heroRoutes.route('/').get(function (req, res) {     //data ganna function eka
    Hero.find(function (err, business) {        //ona data eka tiyda kiyla hoynwa
        if (err)
            console.log(err);
        else
            res.json(business);
    });
});

//edit function
heroRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;         //Id kiyna var ekk hdla ekata id eka gnnwa. namut id eka request eken ganne parameter ekk wage
    Hero.findById(id, function (err,business) {
        res.json(business);         //edit krnna ona businee eka pennannwa wge reddk
    });
});

//update function
heroRoutes.route('/update/:id').post(function (req, res) {
    Hero.findById(req.params.id, function (err, business) {
        if(err)
            res.status(404).send("data is not found");
        else{
            business.Hero_Name = req.body.Hero_Name;
            business.Hero_Planet = req.body.Hero_Planet;
            business.Hero_Power = req.body.Hero_Power;

            business.save()
                .then(business =>{
                    res.jason('Update Complete');
                })
                .catch(err =>{
                    res.status(400).send("Update Unsuccessfull");
                });
            }
        });
});

//delete
heroRoutes.route('/delete/:id').get(function (req, res) {
    Hero.findByIdANDRemove({_id:req.params.id}, function (err, business) {
        if(err)
            res.json(err);
        else
            res.json('Delete Successfully');
    });
});

module.exports = heroRoutes;
