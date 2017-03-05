
var States = require("../models/states");
var Country = require("../models/country");

module.exports = function(app){



    app.get('/api',function(req,res){
        Country.find({},"-_id -__v",function(err,country){
            if(err){
                res.json({info:"error returning data", error:err})
            }else{
                res.json({info:"Basic information about Nigeria", data:country,states:"/api/states/"});
            }
        });
    });

    app.get('/api/states',function(req,res){
        States.find({},"-_id -__v",function(err,states){
            if(err){
                res.json({info:"error finding states", error:err})
            }else{
                res.json({info:"All states found", data:states});
            }
        }).sort({ "Name": 'ascending' });

    });

    app.get('/api/states/:name',function(req,res){
        States.findOne({"Name":req.params.name},"-_id -__v",function(err,state){
            if(err){
                res.json({info:"error during find state",error:err});
            }
            if(state){
                res.json({info:"state found successfully", data:state});
            }
            else{
                res.json({info:"state not found"})
            }
        })
    });

    app.delete('/api/states/:id',function(req,res){
        States.findByIdAndRemove(req.params.id,function(err){
            if(err){
                res.json({info:"error during remove state", error:err});
            }
            res.json({info:"state removed succesfully"});
        });
    });


};