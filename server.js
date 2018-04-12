var inquirer = require('inquirer');
var mysql = require('mysql');
// var config = require('./ ')

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "amazon_db"
  });
  
  
  // Gets Inventory List
  function queryAllProducts() {
      console.log('Item  | Department  |  Price  |  Quantity')
      connection.query('SELECT * FROM products', function(err, res){
          for (var i = 0; i < res.length; i++)
          console.log('\n' + res[i].id + '|' + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        })
    }
    queryAllProducts();
    
    
    var qs = [
    {
        type: "input",
        name: "productId",
        message: "What is the name of your product?"
    
    },{
        type: "input",
        name: "quantity",
        message: "How many units would you like to purchase?"
    
    }
    ]


function inventorySearch() {
    inquirer
    .prompt(qs)
    .then(function(answer){
        var query = "SELECT stock_quantity FROM products WHERE product_name =?"
        connection.query(query,[answer.productId], function(err, res){
            if(err){
                console.log(err)
            }
            var quantity = res[0].stock_quantity
            if(answer.quantity > quantity){
                console.log('Insufficient Quantity!')
                // queryAllProducts()
                // inventorySearch()
            }

            // UPDATES NOT GOING TO MYSQL DATABASE  :'(
            else {
                var newQuantity = quantity - answer.quantity
                var update = "UPDATE products SET ? WHERE ?"
                connection.query(update,[{stock_quantity: newQuantity}, {product_name: answer.productId}], function(err,res){
                    console.log('Updated')
                    console.log(newQuantity + ' of this item remaining!')
                    // console.log('\n' + res[i].id + '|' + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
                    // queryAllProducts()
                    inventorySearch()
                })
            }
        })
    })
   
}


inventorySearch();



// Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// DONE
// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.
// DONE

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

// - - -

// * If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

// - - 
