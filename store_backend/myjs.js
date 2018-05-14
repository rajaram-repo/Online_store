$(document).ready(function() {
	$("[name='user']").val('');
	$("[name='user']").focus();	
    
  //   $('#sku').on('blur', function() {
  //   	var sku = $('#sku').val();
		// if(!sku) return;
		// var url = "/perl/jadrn047/proj1/check_dup.cgi?sku="+sku;
		// $.get(url, process_reply_3);
  //   });
    
    $('#sku').on('focus', function() {
        $('#status').text("");
	});
	
    $('#sku').on('focus', function() {
    	var sku = $('#sku').val("");	
	});

	$('#submit_button').on('click', function() {
		//e.preventDefault();
			if(checkForm() != false) {
	            check_dup();
           	}
	});

	$('#submit_button_e').on('click', function() {
		//e.preventDefault();
			if(checkForm_e() != false) {
	            processUpload_e();
	            var update_image = $('#product_image_e').val();
	            if(update_image != ''){
	            	updatefile();
	            }
           	}
	});

	$('#fetch_button').on('click', function() {
		//e.preventDefault();
		fetch_json_data();
	});

	$('#delete_button').on('click', function() {
		//e.preventDefault();
		deletedata();
	});

    $('#product_image').on('change', function() {
        var input = document.getElementById("product_image");
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(300);
            };

            reader.readAsDataURL(input.files[0]);
        }
    });

})

function check_dup() {
	var sku = $('#sku').val();
	if(!sku) return;
	var url = "/perl/jadrn047/proj1/check_dup.cgi?sku="+sku;
	$.get(url, process_reply);
}

function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        }

function isValidSKU(sku) {
        var pattern = new RegExp(/^[A-Z]{3}-\d{3}$/);
        return pattern.test(sku);
        }

function checkForm() {
	var sku = $('#sku').val();
    var cat = $('#cat').val();
    var ven = $('#ven').val();
    var ven_model = $('#ven_model').val();
    var desc = $('#desc').val();
    var feature = $('#feature').val();
    var cost = $('#cost').val();
    var retail = $('#retail').val();
    var quant = $('#quant').val();
    var product_image = $('#product_image').val();

    if (isEmpty(sku)) {
    	$('#error').text("SKU is empty"); 
    	return false;
    }
    if (!isValidSKU(sku)) {
    	$('#error').text("SKU invalid");  	
    	return false;
    }
    if (isEmpty(cat)) {
    	$('#error').text("catID is empty");  	
    	return false;
    }
    if (isEmpty(ven)) {
    	$('#error').text("venID is empty");  	
    	return false;
    }
    if (isEmpty(ven_model)) {
    	$('#error').text("vendormodel is empty");  	
    	return false;
    }
    if (isEmpty(desc)) {
    	$('#error').text("Description is empty");  	
    	return false;
    }
    if (isEmpty(feature)) {
    	$('#error').text("feature is empty");  	
    	return false;
    }
    if (isEmpty(cost)) {
    	$('#error').text("cost is empty");  	
    	return false;
    }
    if (!$.isNumeric(cost)) {
    	$('#error').text("cost is not numeric");  	
    	return false;
    }
    if (isEmpty(retail)) {
    	$('#error').text("retail is empty");  	
    	return false;
    }
    if (!$.isNumeric(retail)) {
    	$('#error').text("retail is not numeric");  	
    	return false;
    }
    if (!$.isNumeric(quant)) {
    	$('#error').text("Quantity is not numeric");  	
    	return false;
    }
    if (isEmpty(quant)) {
    	$('#error').text("Quant is empty");  	
    	return false;
    }
    if(parseInt(quant) != quant) {
        $('#error').text("Quant has decimal values");     
        return false;
    }
    if (isEmpty(product_image)) {
    	$('#error').text("Image is not uploaded");  	
    	return false;
    }
}

function deletedata() {
	var sku = $('#sku_d').val();
	var url = "/perl/jadrn047/proj1/delete.cgi";
        url += "?sku="+sku;
    $.get(url,process_reply_5)
}


function checkForm_e() {
    var cat = $('#cat_e').val();
    var ven = $('#ven_e').val();
    var ven_model = $('#ven_model_e').val();
    var desc = $('#desc_e').val();
    var feature = $('#feature_e').val();
    var cost = $('#cost_e').val();
    var retail = $('#retail_e').val();
    var quant = $('#quant_e').val();

    if (isEmpty(cat)) {
    	$('#error_e').text("catID is empty");  	
    	return false;
    }
    if (isEmpty(ven)) {
    	$('#error_e').text("venID is empty");  	
    	return false;
    }
    if (isEmpty(ven_model)) {
    	$('#error_e').text("vendormodel is empty");  	
    	return false;
    }
    if (isEmpty(desc)) {
    	$('#error_e').text("Description is empty");  	
    	return false;
    }
    if (isEmpty(feature)) {
    	$('#error_e').text("feature is empty");  	
    	return false;
    }
    if (isEmpty(cost)) {
    	$('#error_e').text("cost is empty");  	
    	return false;
    }
    if (!$.isNumeric(cost)) {
    	$('#error_e').text("cost is not numeric");  	
    	return false;
    }
    if (isEmpty(retail)) {
    	$('#error_e').text("retail is empty");  	
    	return false;
    }
    if (!$.isNumeric(retail)) {
    	$('#error_e').text("retail is not numeric");  	
    	return false;
    }
    if (isEmpty(quant)) {
    	$('#error_e').text("Quant is empty");  	
    	return false;
    }
     if (!$.isNumeric(quant)) {
        $('#error_e').text("Quantity is not numeric");    
        return false;
    }
}


function sendfile() {
	var form_data = new FormData($('form')[0]);
    var fname = document.getElementById("product_image").value;
    var sku = document.getElementById("sku").value;
    var where = fname.lastIndexOf("\\");  // this is safer!
    fname = fname.substring(where+1);          		       
    form_data.append("image", document.getElementById("product_image").files[0]);	
    $.ajax( {
        url: "/perl/jadrn047/proj1/upload.cgi",
        type: "post",
        data: form_data,
        processData: false,
        contentType: false,
        success: function(response) {
           $('#status').css('color','blue');
           $('#status').html("Your file has been received.");
           var toDisplay = "<img src=\"/~jadrn047/proj1/imaaagee/" + fname + "\" />"; 	                     
           $('#pic').html(toDisplay);
            },
        error: function(response) {
           $('#status').css('color','red');
           $('#status').html("Sorry, an upload error occurred, "+response.statusText);
            }
    });
}

function updatefile() {
	//var form = document.getElementById("myform_e");
	//var form_data = new FormData($('#myform_e')[0]);
    var form_data = new FormData();
    var fname = document.getElementById("product_image_e").value;
    var sku = document.getElementById("sku_e").value;
    var where = fname.lastIndexOf("\\");  // this is safer!
    fname = fname.substring(where+1);
    form_data.append("sku_e",document.getElementById("sku_e").value);
    console.log(document.getElementById("sku_e").value);
    form_data.append("product_image_e",document.getElementById("product_image_e").value);
    console.log(document.getElementById("product_image_e").value);
    var image_name = sku + "." + fname.split('.')[1];
    console.log(image_name);
    form_data.append("image_up", document.getElementById("product_image_e").files[0],image_name);
    //var url_val = "/perl/jadrn047/proj1/update_image.cgi";
    //console.log(url_val);
    console.log(document.getElementById("product_image_e").files[0]);
    $.ajax( {
        url: "/perl/jadrn047/proj1/update_image.cgi",
        type: "post",
        data: form_data,
        processData: false,
        contentType: false,
        success: function(response) {
           $('#status_1_e').css('color','blue');
           $('#status_1_e').html("Your file has been received.");
           var toDisplay = "<img src=\"/~jadrn047/proj1/imaaagee/" + fname + "\" />"; 	                     
           $('#pic').html(toDisplay);
            },
        error: function(response) {
           $('#status_1_e').css('color','red');
           $('#status_1_e').html("Sorry, an upload error occurred, "+response.statusText);
            }
    });
}

function processUpload() {
		var sku = $('#sku').val();
        var cat = $('#cat').val();
        var ven = $('#ven').val();
        var ven_model = $('#ven_model').val();
        var desc = $('#desc').val();
        var feature = $('#feature').val();
        var cost = $('#cost').val();
        var retail = $('#retail').val();
        var quant = $('#quant').val();
        var product_image = $('#product_image').val();
        var url = "/perl/jadrn047/proj1/insert.cgi";
        url += "?sku="+sku+"&cat=" + cat +"&ven="+ven +"&ven_model="+ven_model +"&desc="+desc +"&feature="+feature +"&cost="+cost +"&retail="+retail +"&quant="+quant +"&product_image="+product_image;
        console.log(url);
        $.get(url,process_reply_2)
        }


function processUpload_e() {
		var sku = $('#sku_e').val();
        var cat = $('#cat_e').val();
        var ven = $('#ven_e').val();
        var ven_model = $('#ven_model_e').val();
        var desc = $('#desc_e').val();
        var feature = $('#feature_e').val();
        var cost = $('#cost_e').val();
        var retail = $('#retail_e').val();
        var quant = $('#quant_e').val();
        var url = "/perl/jadrn047/proj1/update.cgi";
        url += "?sku="+sku+"&cat=" + cat +"&ven="+ven +"&ven_model="+ven_model +"&desc="+desc +"&feature="+feature +"&cost="+cost +"&retail="+retail +"&quant="+quant;
        console.log(url);
        $.get(url,process_reply_2)
        }


function process_reply(response) {
    $('#status').text("");
    $('#status').show();
    if(response == "OK") {
    	sendfile();
    	processUpload();
    	// $('#status').text("OK, not a duplicate");  	
    }
    else 
        $('#error').text("ERROR, SKU is a Duplicate");
    setTimeout(clearStatus, 2000);
    }

function process_reply_3(response) {
    $('#status').text("");
    $('#status').show();
    if(response == "OK") 
    	// processUpload();
    	$('#status').text("OK, not a duplicate");  	
    else 
        $('#status').text("ERROR, SKU is a Duplicate");
    setTimeout(clearStatus, 2000);
    }

function process_reply_2(response) {
    $('#status').text("");
    $('#status').show();
    if(response == "INSERTED") 
    	$('#status_1').text("Entered into database");  	
    else 
        $('#status_1').text("ERROR, duplicate record");
    setTimeout(clearStatus, 2000);
    }


function process_reply_5(response) {
    $('#status_d').text("");
    $('#status_d').show();
    if(response == "DELETED") 
    	$('#status_d').text("Deleted from the database");  	
    else 
        $('#status_d').text("ERROR, deleting record record");
    setTimeout(clearStatus, 2000);
    }
    
function clearStatus() {    
    $('#status').fadeOut(1000);
    $('#status_1').fadeOut(1000);
    $('#error').fadeOut(1000);
    }

function fetch_json_data() {
	var sku = $('#sku_edit').val();
	var url = "/perl/jadrn047/proj1/fetch_data.cgi?sku="+sku;
	console.log(url)
    $.get(url, handle_json_data);   
    }

function handle_json_data(response) { 
	console.log(response);
   // document.getElementById("raw").innerHTML = "<br />The raw JSON string is: <br /><tt>" + response + "</tt>";     
    var obj_data = eval("("+response+")");    
//    var obj_data = JSON.parse(response);
	var sku_e = obj_data[0][0];
	var cat_e = obj_data[0][1];
	var ven_e = obj_data[0][2];
	var ven_model_e = obj_data[0][3];
	var desc_e = obj_data[0][4];
	var features_e = obj_data[0][5];
	var cost_e = obj_data[0][6];
	var retail_e = obj_data[0][7];
	var quant_e = obj_data[0][8];
	var img_e = obj_data[0][9];

	//console.log(sku_e);

	$('#sku_e').val(sku_e);
	$('#cat_e').val(cat_e);
	$('#ven_e').val(ven_e);
	$('#ven_model_e').val(ven_model_e);
	$('#desc_e').val(desc_e);
	$('#feature_e').val(features_e);
	$('#cost_e').val(cost_e);
	$('#retail_e').val(retail_e);
	$('#quant_e').val(quant_e);

    var toDisplay = "<img src=\"/~jadrn047/proj1/imaaagee/" + img_e + "\" width=\"300\"/>";                       
        $('#pic_e').html(toDisplay);

    // var answer = "<h3>Data Retrieved as a JSON Object</h1><table>";
    // for(i=0; i < obj_data.length; i++) {
    //     answer += "<tr>";
    //     for(j=0; j < obj_data[i].length; j++)
    //         answer += "<td>"+obj_data[i][j] + "</td>";
    //     answer += "</tr>";
    //     }
    // answer += "</table>";
    // document.getElementById("data").innerHTML = answer;
    // document.getElementById("raw").innerHTML = "<br />The raw JSON string is: <br /><tt>" + response + "</tt>";    
    }