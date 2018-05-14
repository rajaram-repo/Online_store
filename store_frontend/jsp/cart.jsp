<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="/jadrn047/css/mycss.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="/jquery/jquery.js"></script>
  <script src="/jadrn047/js/cart_js.js"></script>
</head>
<body bgcolor="white">
  <textarea id="cart_details" hidden="true"><% out.print (request.getAttribute("cart_details").toString()); %></textarea>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-earphone"></span> UniMobiles</a>
      </div>
      <!-- <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
      </ul> -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="http://jadran.sdsu.edu/jadrn047/showCart"><span class="glyphicon glyphicon-shopping-cart"></span> Cart( <span id="cart_count"></span>)</a></li>
      </ul>
    </div>
  </nav>
  <h2>Shopping cart</h2>
  <div id="content_cart"></div>

<div class="modal fade" id="myModalHorizontal" tabindex="-1" role="dialog" 
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    Shipping and Payment Details
                </h4>
            </div>
            
            <!-- Modal Body -->
            <div class="modal-body">
                <form class="form-horizontal" role="form" action="/jadrn047/orderConfirmation" method="POST">
                  <div class="form-group col-sm-6">
                    <h4 class="col-sm-6">Billing Address</h4>
                  </div>
                  <div class="form-group col-sm-6">
                    <h4 class="col-sm-6">Shipping Address</h4>
                    <label class="col-sm-6">
                            <input type="checkbox" id="fill_form" /> <small>if same as billing address</small>
                    </label>
                    
                  </div>
                    <!-- <input class="col-sm-2" type="checkbox" name="billingtoo" onclick="FillBilling(this.form)"> -->
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="fname">First Name</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="fname" id="fname" placeholder="FirstName"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="shi_fname">First Name</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="FirstName" id="shi_fname" placeholder="FirstName"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="lname">Lastname</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="lname" id="lname" placeholder="LastName"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="shi_lname">Lastname</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="Lastname" id="shi_lname" placeholder="LastName"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="address1">Address</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="address1" id="address1" placeholder="Address Line1"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="shi_address1">Address</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="Addressl1" id="shi_address1" placeholder="Address Line1"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="address2"></label>
                    <div class="col-sm-8">
                        <input class="form-control" name="address2" id="address2" placeholder="Address Line2"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="shi_address2"></label>
                    <div class="col-sm-8">
                        <input class="form-control" name="Addressl2" id="shi_address2" placeholder="Address Line2"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-1 control-label" for="city">City</label>
                    <div class="col-sm-3">
                        <input class="form-control" name="city" id="city" placeholder="City"/>
                    </div>
                    <label  class="col-sm-1 control-label" for="state">State</label>
                    <div class="col-sm-3">
                        <input class="form-control" name="state" id="state" maxlength="2" placeholder="State"/>
                    </div>
                    <label  class="col-sm-1 control-label" for="Zip">Zip</label>
                    <div class="col-sm-3">
                        <input class="form-control" name="zip" id="zip" maxlength="5" placeholder="Zip"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-1 control-label" for=""></label>
                    <label  class="col-sm-1 control-label" for="shi_city">City</label>
                    <div class="col-sm-3">
                        <input class="form-control" name="City" id="shi_city" placeholder="City"/>
                    </div>
                    <label  class="col-sm-1 control-label" for="shi_state">State</label>
                    <div class="col-md-2">
                        <input class="form-control" name="State" id="shi_state" maxlength="2" placeholder="State"/>
                    </div>
                     <label  class="col-sm-1 control-label" for="shi_zip">Zip</label>
                    <div class="col-sm-3">
                        <input class="form-control" name="Zip" id="shi_zip" maxlength="5" placeholder="Zip"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="phone">Phone</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="phno" id="phone" maxlength="10" placeholder="Phone"/>
                    </div>
                  </div>
                  <div class="form-group col-sm-6">
                    <label  class="col-sm-4 control-label" for="shi_phone">Phone</label>
                    <div class="col-sm-8">
                        <input class="form-control" name="phoneNumber" id="shi_phone" maxlength="10" placeholder="Phone"/>
                    </div>
                  </div>
                  <h4>Payment Info</h4>
                  <div class="form-inline"></div>
                  <div class="form-group">
                    <label  class="col-sm-2 control-label" for="card_type">Type</label>
                    <div class="col-sm-10">
                      <select class="form-control" name="cardType" id="card_type">
                        <option>Master Card</option>
                        <option>Visa</option>
                        <option>Rupay</option>
                        <option>Discover</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label  class="col-sm-2 control-label" for="card_no">Card No.</label>
                    <div class="col-sm-4">
                        <input class="form-control" name="cardNo" id="card_no" maxlength="16" placeholder="Card No"/>
                    </div>
                    <label  class="col-sm-2 control-label" for="card_no">Exp Date:</label>
                    <div class="col-sm-2">
                        <input class="form-control col-xs-1" type="text" name="exp_month" size="2" maxlength="2" placeholder="MM" />
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" type="text" name="exp_year" size="4" maxlength="4" placeholder="YYYY" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-4 alert alert-danger" id="message_line" ></div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <input class="btn btn-primary pull-right" id="submit_button" type="submit" value="Place Order" />
                      <input class="btn btn-default pull-right" type="reset" value="Clear" /> 
                    </div>
                  </div>
                </form>
            </div>            
        </div>
    </div>
</div>
</body>
</html>