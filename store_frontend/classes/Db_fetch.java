/*
* Licensed to the Apache Software Foundation (ASF) under one or more
* contributor license agreements.  See the NOTICE file distributed with
* this work for additional information regarding copyright ownership.
* The ASF licenses this file to You under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ResourceBundle;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// import com.google.gson.Gson;
// import com.google.gson.GsonBuilder;

import sdsu.*;


public class Db_fetch extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
        try {
            response.setContentType("text/html");
            // response.setContentType("application/json");
            // Map<String, String> personMap = new HashMap<String, String>();
            // personMap.put("firstName", "Java");
            // personMap.put("lastName", "Honk");
            // Gson gson = new GsonBuilder().setPrettyPrinting().create();
            // String json = gson.toJson(personMap);
            PrintWriter out = response.getWriter();
            String s = "SELECT * FROM product;";
            String output =  DBHelper.doQuery(s);
            request.setAttribute ("servletName", output);
            getServletConfig().getServletContext().getRequestDispatcher(
                       "/WEB-INF/jsp/proj2.jsp").forward(request, response);
        } catch (Exception ex) {
           ex.printStackTrace ();
       }
    }
}



