var list = [
    {
	order_id: 1,
	table_id: 2,
	products: [
	    {
		product: "PIZZA",
		quantity: 3,
		price: "$15.000"
	    },
	    {
		product: "HAMBURGER",
		quantity: 1,
		price: "$12.300"
	    }
	]
    }
];

function addOrder(order) {
    var tables = document.getElementById("order_tables");

    var table = document.createElement("table");
    table.setAttribute("id", "table" + order.table_id);
    table.setAttribute("class", "orders_table");

    var tbody = document.createElement("tbody");

    var table_header = document.createElement("tr");
    table_header.setAttribute("class", "table_header");
    
    var header_row = document.createElement("th");
    header_row.innerHTML = "Product";
    table_header.appendChild(header_row);
    header_row = document.createElement("th");
    header_row.innerHTML = "Quantity";
    table_header.appendChild(header_row);
    header_row = document.createElement("th");
    header_row.innerHTML = "Price";
    table_header.appendChild(header_row);
    tbody.appendChild(table_header);

    for(index = 0 ; index < order.products.length; index++) {
	var product = order.products[index];
	console.log(product);
	var row = document.createElement("tr");
	row.setAttribute("id", "table" + order.table_id + "_dish" + (index+1));
	row.setAttribute("class", "table_product");
	tbody.appendChild(row);
	
	var product_name = document.createElement("td");
	product_name.setAttribute("class", "product_name");
	product_name.innerHTML = product.product;
	
	var product_quantity = document.createElement("td");
	product_quantity.setAttribute("class", "product_quantity");
	product_quantity.innerHTML = product.quantity;
	
	var product_price = document.createElement("td");
	product_price.setAttribute("class", "product_price");
	product_price.innerHTML = product.price;
	
	row.appendChild(product_name);
	row.appendChild(product_quantity);
	row.appendChild(product_price);
    }

    table.appendChild(tbody);
    tables.appendChild(table);
}


addOrder(list[0]);
