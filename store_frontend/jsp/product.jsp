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
  <script src="/jadrn047/js/product_js.js"></script>
</head>
<body bgcolor="white">
  <textarea hidden=true id="prod_field_id"><% out.print (request.getAttribute("servletName").toString()); %></textarea>
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
  <div id="content_prod"></div>
<!-- <% out.print (request.getAttribute("servletName").toString()); %> -->
</body>
</html>