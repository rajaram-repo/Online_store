$(document).ready(function() {
	// alert($("prod_field_id").val());
	$.get("/jadrn047/Ajax_fetch", handleData_product)
	.done(function(data){
		$('#add_cart_btn').on('click', function() {
			console.log("dshbchjsbdhcbhd");
			var data = "sku_value="+$('#temp_data').val()+"&quant=1";
		  	 console.log($( "#otot" ).val());
		  	 $.post("http://jadran.sdsu.edu/jadrn047/addCart",
		        {
		          sku_value: $('#temp_data').val(),
		          quant: $( "#otot" ).val()
		        },
		        function(data,status){
		            // alert("Data: " + data + "\nStatus: " + status);
		            location.reload();
		            // alert(status);
		        });
		});
		$('#buy_now_btn').on('click', function() {
			console.log("dshbchjsbdhcbhd");
			var data = "sku_value="+$('#temp_data').val()+"&quant=1";
		  	 console.log($( "#otot" ).val());
		  	 $.post("http://jadran.sdsu.edu/jadrn047/addCart",
		        {
		          sku_value: $('#temp_data').val(),
		          quant: $( "#otot" ).val()
		        },
		        function(data,status){
		            // alert("Data: " + data + "\nStatus: " + status);
		            window.location.href ="http://jadran.sdsu.edu/jadrn047/showCart";
		            // alert(status);
		        });
		});
    });
	// document.getElementById("content_prod").innerHTML = fromJavaSide;
	$.get("/jadrn047/cartCount", handleData_cart_count);
});

function handleData_cart_count(response) {
	$('#cart_count').html(response);
}

function handleData_product() {
	var product_id = $("#prod_field_id").val();
	var obj_data_prod = eval("("+product_id+")"); 
	var answer_value_prod = "<div class=\"container-fluid\">";
	answer_value_prod += "<div class=\"row content\">";
	answer_value_prod += "<div class=\"col-sm-4 text_center\">";
	answer_value_prod += "<img class=\"image_class_prod\" src=\"/~jadrn047/proj1/imaaagee/" + obj_data_prod[0][9] + "\" />";
	answer_value_prod += "</div>";
	answer_value_prod += "<div class=\"col-sm-8\">";
	answer_value_prod += "<h2>"+ obj_data_prod[0][1]  +"-"+ obj_data_prod[0][3] +"</h2><br>";
	answer_value_prod += "<textarea id=\"temp_data\" hidden>"+ obj_data_prod[0][0] +"</textarea>";
	answer_value_prod += "<h5>Price: <b class=\"big_font\">$"+ obj_data_prod[0][7] +"</b></h5>";
	answer_value_prod += "<h3>Decription</h3>";
	answer_value_prod += "<h5>"+ obj_data_prod[0][4] +"</h5>";
	answer_value_prod += "<h3>Features</h3>";
	answer_value_prod += "<h5>"+ obj_data_prod[0][5] +"</h5><br>";
	if(obj_data_prod[0][8] > 0) {
			answer_value_prod += "<b>Qty:</b><select id=\"otot\">";
		    for (i=1;i<=obj_data_prod[0][8];i++){
		        // $select.append($('<option></option>').val(i).html(i))
		        answer_value_prod += "<option value=\""+i+"\">"+i+"</option>";
		    }
		    answer_value_prod += "</select><br><br>"
			answer_value_prod += "<button type=\"button\" id =\"add_cart_btn\" class=\"btn btn-success\">Add to Cart</button>&nbsp;&nbsp";
			answer_value_prod += "<button type=\"button\" id =\"buy_now_btn\" class=\"btn btn-warning\">Buy Now</button>";
		} else {
			answer_value_prod += "<button type=\"button\" class=\"btn btn-warning\" disabled>Out Of Stock</button>";
			answer_value_prod += "<h2>Coming Soon .....</h2>";
		}
	answer_value_prod += "</div>";
	answer_value_prod += "</div>";
	answer_value_prod += "</div>";
	document.getElementById("content_prod").innerHTML = answer_value_prod;
	// console.log(product_id);
}