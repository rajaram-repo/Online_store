import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Enumeration;
import java.util.ResourceBundle;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import util.HTMLFilter;

import sdsu.*;

public class success_page extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final ResourceBundle RB = ResourceBundle.getBundle("LocalStrings");

    @Override
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {

    	response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("Success page");
        HttpSession session = request.getSession(false);

        Enumeration<String> names = session.getAttributeNames();
        // boolean isEntryAvailable = false;
        String s = "";
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            s = "UPDATE product set quantity=quantity-"+session.getAttribute(name).toString()+" where sku=\""+name+"\";";
            String output =  DBHelper.doUpdate(s);
            out.println(output);
            // if(name.equals(sku)) {
            //     isEntryAvailable = true;
            // }
            // String value = session.getAttribute(name).toString();
            // cart_details += "||" + HTMLFilter.filter(name) +"|"+ HTMLFilter.filter(value);
            // out.println(HTMLFilter.filter(name) + " = "
            //             + HTMLFilter.filter(value));
        }
        if(session != null) {
            session.invalidate();
        }
        // out.println(s);
        // String output =  DBHelper.doUpdate(s);
        // out.println(output);
        // out.println(cart_details);
        // request.setAttribute ("cart_details", cart_details);
        getServletConfig().getServletContext().getRequestDispatcher(
            "/WEB-INF/jsp/success.jsp").forward(request, response);
        // if(isEntryAvailable){
        //     String value = session.getAttribute(sku).toString();
        //     session.setAttribute(sku, Integer.parseInt(value)+Integer.parseInt(quantity));
        // } else {
        //     session.setAttribute(sku, quantity);
        // }
    }

    @Override
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
        doGet(request, response);
    }

}
