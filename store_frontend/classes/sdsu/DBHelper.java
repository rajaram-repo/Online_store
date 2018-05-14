package sdsu;

import java.sql.*;
import java.util.*;

public class DBHelper implements java.io.Serializable {
    private static String connectionURL = "jdbc:mysql://opatija:3306/jadrn047?user=jadrn047&password=socket";               
    private static Connection connection = null;
    private static Statement statement = null;
    private static ResultSet resultSet = null;

    public DBHelper() {}    
    
    public static Vector runQuery(String s) {
        String answer = "";
        Vector<String []> answerVector = null;
		
	try {
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	connection = DriverManager.getConnection(connectionURL);
	statement = connection.createStatement();
	resultSet = statement.executeQuery(s);        
        ResultSetMetaData rsmd = resultSet.getMetaData();
        answerVector = new Vector<String []>();
	while(resultSet.next()) {
            String [] row = new String[rsmd.getColumnCount()];
            for(int i=0; i < rsmd.getColumnCount(); i++)
                row[i] = resultSet.getString(i+1);
            answerVector.add(row);       
		}
	}
	catch(Exception e) {
	    e.printStackTrace();
	}
        //////////////////////////////////////////////////////////////////////////            
        // The finally clause always runs, and closes resources if open.
        // DO NOT OMIT THIS!!!!!!
        finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
            	    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
        //////////////////////////////////////////////////////////////////////////
        }
        return answerVector;
    }    
    
    public static String doQuery(String s) {
            String answer = "";		
	    try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection(connectionURL);
		statement = connection.createStatement();
		resultSet = statement.executeQuery(s);
                ResultSetMetaData rsmd = resultSet.getMetaData();                
                answer += "[";                
		while(resultSet.next()) {
                    int columns = rsmd.getColumnCount();
                    answer += "[";
                    for(int i=1; i <= columns; i++)  {                      
                        answer +=  "\"" + resultSet.getString(rsmd.getColumnName(i)) + "\""; 
                        if(i < columns) {
                            answer += ",";
                        }
                    }
                    answer += "]"; 
                    if (!resultSet.isLast()) {
                        answer += ",";
                    }
		    }
                answer += "]";                    
		}
		catch(Exception e) {
			e.printStackTrace();
			return e.toString();
			}
        //////////////////////////////////////////////////////////////////////////            
        // The finally clause always runs, and closes resources if open.
        // DO NOT OMIT THIS!!!!!!
        finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
            	    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
        //////////////////////////////////////////////////////////////////////////
        }
        return answer;
    }

    public static String doUpdate(String s) {   
        String answer = "";
        try {
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        connection = DriverManager.getConnection(connectionURL);
        statement = connection.createStatement();
        int result = statement.executeUpdate(s);
                // ResultSetMetaData rsmd = resultSet.getMetaData();                                    
        }
        catch(Exception e) {
            e.printStackTrace();
            return e.toString();
            }
        //////////////////////////////////////////////////////////////////////////            
        // The finally clause always runs, and closes resources if open.
        // DO NOT OMIT THIS!!!!!!
        finally {
            try {
                // if(resultSet != null)
                //     resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
                    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
        //////////////////////////////////////////////////////////////////////////
        }
        return answer;
    }
}            
	
	