$(document).ready(function() {
	// alert($("prod_field_id").val());
	$.get("/jadrn047/Ajax_fetch", handleData_cart)
	.done(function() {
		$('.quant').on('change', function() {
			// console.log("dshbchjsbdhcbhd");
			console.log($( ".quant" ).length);
			// var idArray = [];
			$('.quant').each(function () {
			    // idArray.push(this.id);
			    // console.log(this.id);
			    var t = "#"+this.id;
			    console.log(t);
			    console.log($(t).val());
			    $.post("http://jadran.sdsu.edu/jadrn047/updateCart",
			    {
		          sku_value: this.id,
		          quant: $(t).val()
		        },
		        function(data,status){
		            // alert(status);
		            // $.get("/jadrn047/Ajax_fetch", handleData_cart);
		            location.reload();
		            console.log(status);
		        });
			});

			// quant: $( "#quant" ).val()
			// var data = "sku_value="+$('#temp_data').val()+"&quant=1";
		 //  	 console.log($( "#otot" ).val());
		})
	});

	$("#content_cart").on('click', "#delete_product", function(e) {
		$.post("http://jadran.sdsu.edu/jadrn047/deleteItem",
	    {
          sku_value: $(e.target).attr("name")
        },
        function(data,status){
            // alert(status);
            // $.get("/jadrn047/Ajax_fetch", handleData_cart);
            location.reload();
            console.log(status);
        });
	    console.log($(e.target).attr("name"));
	    // cart.delete($(e.target).attr("name"));
	    // updateDisplay(cart.getCartArray(),cart.size());
	});

	$.get("/jadrn047/cartCount", handleData_cart_count);
	// document.getElementById("content_prod").innerHTML = fromJavaSide;
	$('#fill_form').on('click', function() {
    FillBilling(this.form);
    });

	$('.alert').hide();

    var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(20);
    elementHandle[0] = $('[name="fname"]');
    elementHandle[1] = $('[name="lname"]');
    elementHandle[2] = $('[name="address1"]');
    elementHandle[3] = $('[name="address2"]');
    elementHandle[4] = $('[name="city"]');
    elementHandle[5] = $('[name="state"]');
    elementHandle[6] = $('[name="zip"]');
    elementHandle[7] = $('[name="phno"]');
    elementHandle[8] = $('[name="FirstName"]');
    elementHandle[9] = $('[name="Lastname"]');
    elementHandle[10] = $('[name="Addressl1"]');
    elementHandle[11] = $('[name="Addressl2"]');
    elementHandle[12] = $('[name="City"]');
    elementHandle[13] = $('[name="State"]');
    elementHandle[14] = $('[name="Zip"]');
    elementHandle[15] = $('[name="phoneNumber"]');
    elementHandle[16] = $('[name="cardType"]');
    elementHandle[17] = $('[name="cardNo"]');
    elementHandle[18] = $('[name="exp_month"]');
    elementHandle[19] = $('[name="exp_year"]');

    function isValidData() {

        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your billing-first name");
            elementHandle[0].focus();
            return false;
        }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your billing-last name");
            elementHandle[1].focus();
            return false;
        }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your billing-address");
            elementHandle[2].focus();
            return false;
        }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your billing-city");
            elementHandle[4].focus();
            return false;
        }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your billing-state");
            elementHandle[5].focus();
            return false;
        }
        if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[5].focus();            
            return false;
        }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your billing-zip");
            elementHandle[6].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The billing zip code is invalid: "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
        }
        if(elementHandle[6].val().length != 5) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Billing-The zip code must have exactly five digits")
            elementHandle[6].focus();            
            return false;
        }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your billing-phone number");
            elementHandle[7].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The billing phone number is invalid: "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
        }
        if(elementHandle[7].val().length != 10) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Billing-The phone number should be 10 digits")
            elementHandle[7].focus();            
            return false;
            }
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your shipping-FirstName");
            elementHandle[8].focus();
            return false;
        }
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your Shipping-last name");
            elementHandle[9].focus();
            return false;
        }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your shipping-address");
            elementHandle[10].focus();
            return false;
        }
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your Shipping-City");
            elementHandle[12].focus();
            return false;
        }
        if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter your Shipping-state");
            elementHandle[13].focus();
            return false;
        }
        if(!isValidState(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[13].focus();            
            return false;
        }
        if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter your Shipping-zip");
            elementHandle[14].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The Shipping zip code is invalid: "+
            "numbers only please. ");
            elementHandle[14].focus();            
            return false;
        }
        if(elementHandle[14].val().length != 5) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Shipping-The zip code must have exactly five digits")
            elementHandle[14].focus();            
            return false;
        }
        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[15].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The Shipping phone number is invalid: "+
            "numbers only please. ");
            elementHandle[15].focus();            
            return false;
        }
        if(elementHandle[15].val().length != 10) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Shipping-The phone number should be 10 digits")
            elementHandle[15].focus();            
            return false;
        }
        if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter your card no");
            elementHandle[17].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The card Number is invalid: "+
            "numbers only please. ");
            elementHandle[17].focus();            
            return false;
        }
        if(elementHandle[17].val().length != 16) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The Card number should be 16 digits")
            elementHandle[17].focus();            
            return false;
            }
        if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter your expiration month");
            elementHandle[18].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The expiration month is invalid: "+
            "numbers only please. ");
            elementHandle[18].focus();            
            return false;
        }
        if(elementHandle[18].val().length != 2) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The month should be 2 digits")
            elementHandle[18].focus();            
            return false;
        }
        if(elementHandle[18].val() > 12) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("enter a valid month")
            elementHandle[18].focus();            
            return false;
        }
        if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter your expiration year");
            elementHandle[19].focus();
            return false;
        }
        if(!$.isNumeric(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The expiration year is invalid: "+
            "numbers only please. ");
            elementHandle[19].focus();            
            return false;
        }
        if(elementHandle[19].val().length != 4) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The year should be 4 digits")
            elementHandle[19].focus();            
            return false;
        }
        if(elementHandle[19].val() < 2017) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("your card seems to be expired")
            elementHandle[19].focus();            
            return false;
        }
        if(elementHandle[19].val() == 2017 && elementHandle[18].val() != 12) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("your card seems to be expired")
            elementHandle[19].focus();            
            return false;
        }
        return true;
    }
    elementHandle[5].on('keyup', function() {
        elementHandle[5].val(elementHandle[5].val().toUpperCase());
    });

    elementHandle[13].on('keyup', function() {
        elementHandle[13].val(elementHandle[13].val().toUpperCase());
    });

        $(':submit').on('click', function() {
        for(var i=0; i < 10; i++)
            elementHandle[0].removeClass("error");
            errorStatusHandle.text("");
            $(".alert").show();
            return isValidData();
        });  
});

    function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
    }

   function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        }


function FillBilling(f) {
  if(f.fill_form.checked == true) {
    f.shi_fname.value = f.fname.value;
    f.shi_lname.value = f.lname.value;
    f.shi_address1.value = f.address1.value;
    f.shi_address2.value = f.address2.value;
    f.shi_city.value = f.city.value;
    f.shi_state.value = f.state.value;
    f.shi_zip.value = f.zip.value;
    f.shi_phone.value = f.phone.value;
  }
}


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
    					toWrite += "<b>Qty:</b><select class=\"quant\" id=\""+obj_data[i][0]+"\">";
    				    for (j=1;j<=obj_data[i][8];j++){
    				    	if (j == sku_cart[1]) { 
    				    		toWrite += "<option value=\""+j+"\" selected=\"selected\">"+j+"</option>";
    				    	} else {
    				        	toWrite += "<option value=\""+j+"\">"+j+"</option>";
    				        }
    				    }
    				    toWrite += "</select>"
    					toWrite += "</th><th>$"+obj_data[i][7]+"</th><th>$"+Total.toFixed(2)+"</th>"
    					toWrite += "<th><button type='button' name='"+obj_data[i][0]+"' id='delete_product' class='close'><span aria-hidden='true'>&times;</span></button></th></tr>";
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
        toWrite += "</table></div></div></div>";
        toWrite += "<button type=\"button\" class=\"btn pull-right\" data-toggle=\"modal\" data-target=\"#myModalHorizontal\"><b>checkout</b><span class=\"glyphicon glyphicon-chevron-right\"></span></button>";
    	// var obj_data_prod = eval("("+prod+")"); 
    }
$('#content_cart').html(toWrite);
}