//Imports the ORM to implement functions to interact with the database
let orm = require("../config/orm.js");

let burger = {
    
    //runs SelectAll from orm.js
    selectAll: (callback)=>{
        orm.selectAll(callback, (res)=>{
            callback(res);
        });
    },

    //runs insertOne from orm.js
    insertOne: (burger_name, devoured, callback)=>{
        if (devoured == "false") devoured = false;
        else devoured = true;

        orm.insertOne(burger_name, devoured, callback, function(res){
            callback(res);
        });
    },

    //runs updateOne from orm.js
    updateOne: (id, set, callback)=>{
        if (set == "false") set = false;
        else set = true;

        orm.updateOne(id, set, callback, function(res){
            callback(res);
        })
    },

    //runs resetAll from orm.js
    resetAll: (callback)=>{
        orm.resetAll(callback,function(res){
            callback(res);
        });
    }
};

module.exports = burger;