//Dependencies
let connection = require("../config/connection.js");

// Creates the ORM object to perform SQL queries
let orm = {
    //Function that returns all table entries
    selectAll:(callback)=>{
      connection.query('SELECT * FROM burgers;', (err, res)=> {
        if (err) {
          console.log(err);
          return;
        } 
        else {
          callback(res);
        }
      });
    },
    //Function that inserts a single entry into the table
    insertOne:(burger_name, devoured, callback)=>{
      connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [burger_name, devoured], function(err, res) {
        if (err) {
          console.log(err);
          return
        } 
        else {
          orm.transferFunc();
          callback(res);
        }
      });
    },
    //Function to change burgers devoured attribute in the database
    updateOne:(id, set, callback)=>{
      connection.query('UPDATE burgers SET ? WHERE ?', [{devoured:set}, {id:id}], function(err, res){
        if (err) {
          console.log(err);
          return;
        } 
        else {
          orm.transferFunc();
          callback(res);
        }
      });
    },
    //Function to set all burgers devoured attribute back to false in the database
    resetAll:(callback)=>{
      connection.query('UPDATE burgers SET ?', [{devoured:false}], function(err, res){
        if (err) {
          console.log(err);
          return;
        }
        else {
          orm.transferFunc();
          callback(res);
        }
      });
    }
  }
  
  // Export the orm object for the model.
  module.exports = orm;