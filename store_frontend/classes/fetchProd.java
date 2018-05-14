import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

import sdsu.*;

// Extend HttpServlet class
public class fetchProd extends HttpServlet {
 
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      // Set response content type
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
         String s = "SELECT p.sku,v.name,p.catID,p.vendorModel,p.description,p.features,p.cost,p.retail,p.quantity,p.image FROM product p,category c,vendor v where p.catID=c.id and p.venID=v.id and p.sku ="+ request.getParameter("sku_no") +";";
         String output =  DBHelper.doQuery(s);
         request.setAttribute ("servletName", output);
         getServletConfig().getServletContext().getRequestDispatcher(
            "/WEB-INF/jsp/product.jsp").forward(request, response);
   }
}