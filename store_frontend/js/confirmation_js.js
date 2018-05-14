$(document).ready(function() {
	// alert($("prod_field_id").val());
	$.get("/jadrn047/Ajax_fetch", handleData_cart)
	.done(function() {
        $('#confirm_button').on('click', function() {
            window.location.href = "http://jadran.sdsu.edu/jadrn047/success_page";
        });
        $('#cancel_button').on('click', function() {
            window.location.href = "http://jadran.sdsu.edu/jadrn047/weB.html";
        });
	});

    console.log($('#addr_1').val());
    console.log($('#addr_2').val());
    console.log($('#addr_3').val());
    console.log($('#ph_no').val());

	$.get("/jadrn047/cartCount", handleData_cart_count); 
});

function handleData_cart_count(response) {
	$('#cart_count').html(response);
}

function handleData_cart(response) {
	var obj_data = eval("("+response+")");
	var prod = $("#cart_details").val();
    var toWrite = "";
    if (prod == "") {
        toWrite += "<br><br><br><div class=\"text_center\"><img src=\"/~jadrn047/proj1/imaaagee/empty_cart.png\" /></div>";
    } else {
    	console.log(prod);
    	toWrite += "<div class='col-sm-8'>";
        toWrite += "<div class='panel panel-default'>"; 
        toWrite += "<div class='panel-heading'>Items</div>";
        toWrite += "<div class='panel-body'>";
        toWrite += "<table class='table table-condensed table-summary table-borderless table_cart_items'><tbody>";
        toWrite += "<tr><th>SKU</th><th>Name</th><th>Quantity</th><th>Unit Price</th><th>Total</th></tr>";
    	var cart_data = prod.split("||");
    	var item_total = 0;
    	for (var i in cart_data) {
    		if(i != 0) {
    			var sku_cart = cart_data[i].split("|");
    			// console.log(sku_cart[0]);
    			for(i=0; i < obj_data.length; i++) {
    				if(obj_data[i][0] == sku_cart[0]) {
    					console.log(obj_data[i]);
    					Total = obj_data[i][7] * sku_cart[1];
    					item_total = item_total + Total;
    					toWrite += "<textarea id=\"temp_data\" hidden>"+ obj_data[i][0] +"</textarea>";
    					toWrite += "<tr><th>"+"<img class=\"image_cart\" src=\"/~jadrn047/proj1/imaaagee/" + obj_data[i][9] + "\" />"+"</th><th>"+obj_data[i][1]+"-"+obj_data[i][3]+"</th><th>";
    					// toWrite += "<b>Qty:</b><select class=\"quant\" id=\""+obj_data[i][0]+"\">";
    				 //    for (j=1;j<=obj_data[i][8];j++){
    				 //    	if (j == sku_cart[1]) { 
    				 //    		toWrite += "<option value=\""+j+"\" selected=\"selected\">"+j+"</option>";
    				 //    	} else {
    				 //        	toWrite += "<option value=\""+j+"\">"+j+"</option>";
    				 //        }
    				 //    }
    				 //    toWrite += "</select>"
                        toWrite += sku_cart[1];
    					toWrite += "</th><th>$"+obj_data[i][7]+"</th><th>$"+Total.toFixed(2)+"</th>"
    				}
    			}
    		}
    	}
    	toWrite += "</tbody>";
        toWrite += "</table></div></div></div>";
    	toWrite += "<div class='col-sm-4'>";
        toWrite += "<div class='panel panel-default'>"; 
        toWrite += "<div class='panel-heading'>Order Summary</div>";
        toWrite += "<div class='panel-body'>";
        toWrite += "<table class='table table-condensed table-summary table-borderless table_cart_order'><tbody>";
        toWrite += "<tr><td>Total</td><td>:$"+item_total.toFixed(2)+"</td></tr>";
        var tax = (item_total*0.0775);
        toWrite += "<tr><td>tax(7.75%)</td><td>:$"+tax.toFixed(2)+"</td></tr>";
        if(item_total == 0) {
            toWrite += "<tr><td>Shipping Charges</td><td>:$0.00</td></tr>";
            grand_total= item_total+tax+0;
        } else {
            toWrite += "<tr><td>Shipping Charges</td><td>:$5.00</td></tr>";
            grand_total= item_total+tax+5;
        }
        toWrite += "<tr><td><b>Grand Total</b></td><td><b>:$"+grand_total.toFixed(2)+"</b></td></tr>";
        toWrite += "</tbody>";
        toWrite += "</table></div></div>";
        toWrite += "<div class='panel panel-default'>"; 
        toWrite += "<div class='panel-heading'>Shipping Address</div>";
        toWrite += "<div class='panel-body'>";
        toWrite += "<h4>"+$('#addr_1').val()+"<br>"+$('#addr_2').val()+"<br>"+$('#addr_3').val()+"<br>"+$('#ph_no').val()+"</h4>";
        toWrite += "</div></div>";
        toWrite += "<div class=\"text_center\"><button type=\"button\" id=\"cancel_button\" class=\"btn btn-danger\"><b>Cancel</b> <span class=\"glyphicon glyphicon-remove\"></span></button>&nbsp;";
        toWrite += "<button type=\"button\" id=\"confirm_button\" class=\"btn btn-success \"><b>Confirm Order</b> <span class=\"glyphicon glyphicon-ok\"></span></button></div></div>";

    	// var obj_data_prod = eval("("+prod+")"); 
    }
$('#content_cart').html(toWrite);
}