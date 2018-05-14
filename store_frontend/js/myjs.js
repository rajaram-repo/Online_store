$(document).ready(function() {
	// alert($("prod_field_id").val());
	$.get("/jadrn047/Ajax_fetch", handleData)
	.done(function(data){
		$.get("/jadrn047/Ajax_fetch_ven", handleData_ven);
		$.get("/jadrn047/Ajax_fetch_cat", handleData_cat);
    });
	$('#txtSearchButton').on('click', function() {
		var data = $('#txtSearch').val();
		// console.log(data);
		searchData(data);
	});
	$('#clear').on('click', function() {
		location.reload();
		// console.log("clear");
	});
	$("#filter_module_ven,#filter_module_cat").on('change', ".filter_class", function(e) {
	    var val = "";
		$('input[name="vendor_checkbox"]:checked').each(function() {
			val += "|"+this.value;
		});
		val += "||";
		$('input[name="category_checkbox"]:checked').each(function() {
			val += "|"+this.value;
		});
		console.log(val);
		filteredData(val);
	});
	$.get("/jadrn047/cartCount", handleData_cart_count);
});

function handleData_cart_count(response) {
	$('#cart_count').html(response);
}

function handleData_ven(response) {
	var obj_data_ven = eval("("+response+")");
	var filter_module_data = "<div class=\"form-check\">";
	filter_module_data += "<h3>Vendor:</h3>";
	for(i=0; i < obj_data_ven.length; i++) {
		filter_module_data += "<input class=\"form-check-input filter_class\" type=\"checkbox\" value=\""+obj_data_ven[i][1]+"\" name=\"vendor_checkbox\">";
		filter_module_data += "<label class=\"form-check-label\">"+obj_data_ven[i][1]+"</label><br>";
	}
	filter_module_data += "</div>" 
	document.getElementById("filter_module_ven").innerHTML = filter_module_data;
}

function handleData_cat(response) {
	var obj_data_ven = eval("("+response+")");
	var filter_module_data = "<div class=\"form-check\">";
	filter_module_data += "<h3>Category:</h3>";
	for(i=0; i < obj_data_ven.length; i++) {
		filter_module_data += "<input class=\"form-check-input filter_class\" type=\"checkbox\" value=\""+obj_data_ven[i][1]+"\" name=\"category_checkbox\">";
		filter_module_data += "<label class=\"form-check-label\">"+obj_data_ven[i][1]+"</label><br>";
	}
	filter_module_data += "</div>" 
	document.getElementById("filter_module_cat").innerHTML = filter_module_data;
}

function searchData(data) {
	$.get("/jadrn047/Ajax_filter_fetch?search_query=" + data, handleData);
}

function filteredData(data) {
	var tempdata = data.split("||");
	var vendor_names = "";
	var cat_names ="";
	if (tempdata[0] != "") {
		var data_new = tempdata[0].split("|");
		vendor_names += "ven=\"" + data_new[1] + "\"";
		for (var i = 2; i < data_new.length; i++) {
			vendor_names += "," +  "\"" + data_new[i] + "\"";
		}
	}
	if (tempdata[1] != "") {
		var data_new_1 = tempdata[1].split("|");
		cat_names += "cat=\"" + data_new_1[1] + "\"";
		for (var i = 2; i < data_new_1.length; i++) {
			cat_names += "," +  "\"" + data_new_1[i] + "\"";
		}
	}
	console.log(vendor_names);
	console.log(cat_names);
	if (vendor_names != "") {
		$.get("/jadrn047/Ajax_filter_fetch?" + vendor_names + "&" + cat_names, handleData);
	} else {
		console.log("here");
		$.get("/jadrn047/Ajax_filter_fetch?"+ cat_names, handleData);
	}
}
function handleData(response) {
	var obj_data = eval("("+response+")");
	var answer_value = "<div class=\"row text_center\">";
	for(i=0; i < obj_data.length; i++) {
		if (i%3 == 0 && i != 0) {
			answer_value += "</div>";
			answer_value += "<div class=\"row text_center\">";
		}
		answer_value += "<div class=\"col-sm-4 border_design\"><a href=\"/jadrn047/fetchProd?sku_no=\'"+obj_data[i][0]+"\'\">";
		answer_value += "<img class=\"image_class\" src=\"/~jadrn047/proj1/imaaagee/" + obj_data[i][9] + "\" />";
		// answer_value += "<h4>"+obj_data[i][0] + "</h4>";
		answer_value += "<h4>"+obj_data[i][1]+"-"+obj_data[i][3] + "</h4>";
		if(obj_data[i][8] > 0) {
			answer_value += "<h3><span class=\"label label-success\">In stock</span></h3>";
		} else {
			answer_value += "<h3><span class=\"label label-warning\">Coming Soon ....</span></h3>";
		}
		answer_value += "</a></div>";
	}
	answer_value += "</div>";
	document.getElementById("content_right").innerHTML = answer_value;   
}