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

public class cartCount extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final ResourceBundle RB = ResourceBundle.getBundle("LocalStrings");

    @Override
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

    	response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(true);

        Enumeration<String> names = session.getAttributeNames();
        String cart_details = "";
        int final_val = 0;
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            String value = session.getAttribute(name).toString();
            int val = Integer.parseInt(value);
            final_val = final_val + val;
            // cart_details += "||" + HTMLFilter.filter(name) +"|"+ HTMLFilter.filter(value);
            // out.println(HTMLFilter.filter(name) + " = "
            //             + HTMLFilter.filter(value));
        }
        out.println(final_val);
        // request.setAttribute ("cart_details", cart_details);
    }

    @Override
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
        doGet(request, response);
    }

}
