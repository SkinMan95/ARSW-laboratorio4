# FrontEnd - JavaScript Base Client

Create a simple front end using the following frameworks:
 - [bootstrap](https://getbootstrap.com)
 - [axios](https://github.com/axios/axios)
 - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

# Part 1: Create a basic html page using a Bootstrap template

  1. Go to the boostrap examples and download the code and extract the following template:
  https://getbootstrap.com/docs/4.0/examples/cover/
  
  2. Update your html code to have the following menu items:
  - orders
  - new order
  
 3. Update the  content of your page (where the learn more button is located) with a table that will display the order with hardcoded values:
  
**Order 1:**


  | Product | Quantity | Price | 
  | ------------- | ----- |:-------------:| 
  |PIZZA|3|$10000| 
  |HOTDOG|1|$3000|
  |COKE|4|$1300|

# Part 2: Implement the FrontEnd controller

1. Create a JavaScript file called  **OrdersController.js**
2. Create a JavaScript object that represents an Order **OrdersController.js** (Do not forget to add an id attribute to the Order object).
3. Create a function that adds a order to the orders table created on part 1.
4. Create a function that removes an order from the table with a given id: *removeOrderById(int id)*
    Use the following method to start: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

# Part 3: Consume the REST API and connect it with the FrontEnd
1. Create a function that calls the API Endpoint that retrieves the orders list using the [Axios API library](https://github.com/axios/axios)
2. Implement the callback when the orders list is return succesfully that uses the *OrderController.js* functions.
3. Add a script that invokes the *loadOrdersList* funtcion everytime the page is loaded
4. Implement the callback when the request failes that shows a dialog to user saying that "There is a problem on our servers. We apologize for the inconvince, please try again later" 
