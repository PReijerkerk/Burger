//Dependencies
let connection = require("../config/connection.js");

//Helper Function for SQL Syntax
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations 
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

  // Creates the ORM object to perform SQL queries
let orm = {
    //Function that returns all table entries
    selectAll: function(tableInput, cb) {
        //Constructs the query string that returns all rows from the target table
        let queryString = "SELECT * FROM " + tableInput + ";";
        //Performs the query to the database
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
      });
    },
    
    //Function that inserts a single entry into the table
    insertSingle: function(table, cols, vals, cb) {
        //Constructs the query string that inserts a single row into the target table
        let queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      //Performs the query to the database
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
    //Function that updates a single table entry
    updateSingle: function(table, objColVals, condition, cb) {
        //Constructs the query string that update a single entry into the target table
        let queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
  // Export the orm object for the model.
  module.exports = orm;