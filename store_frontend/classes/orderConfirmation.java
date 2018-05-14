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

public class orderConfirmation extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final ResourceBundle RB = ResourceBundle.getBundle("LocalStrings");

    @Override
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {

    	response.setContentType("text/html");
        // img stuff not req'd for source code html showing
        // relative links everywhere!

        // XXX
        // making these absolute till we work out the
        // addition of a PathInfo issue
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(true);
        // String sku = request.getParameter("sku_value");
        // String quantity = request.getParameter("quant");
        // out.println(session.getId());


        Enumeration<String> names = session.getAttributeNames();
        // boolean isEntryAvailable = false;
        String cart_details = "";
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            // if(name.equals(sku)) {
            //     isEntryAvailable = true;
            // }
            String value = session.getAttribute(name).toString();
            cart_details += "||" + HTMLFilter.filter(name) +"|"+ HTMLFilter.filter(value);
            // out.println(HTMLFilter.filter(name) + " = "
            //             + HTMLFilter.filter(value));
        }
        // out.println(cart_details);
        request.setAttribute ("cart_details", cart_details);
        getServletConfig().getServletContext().getRequestDispatcher(
            "/WEB-INF/jsp/confirmation.jsp").forward(request, response);
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
