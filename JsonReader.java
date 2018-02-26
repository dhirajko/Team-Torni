import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;



/*This file is used for reading JSON inpute from certain URL*/

public class JsonReader {






    public void call_me()throws Exception{
        String url="http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4e177c47d4a51b84f61f370d45d89acb";     //given URL
        URL obj=new URL(url);                                                                                               //creating URL obj
        HttpURLConnection con=(HttpURLConnection) obj.openConnection();                                                     //Opening the connection of URL
        con.setRequestMethod("GET");                                                                                         //Defining the method
        int ResponseCode=con.getResponseCode();                                                                               //getting response code
        System.out.println("The respone code is "+ ResponseCode);
        BufferedReader in=new BufferedReader(new InputStreamReader(con.getInputStream()));                                 // creating bufer reader with new stream inpute
                                                                                                                            // the inpute are from connection



        String inputeline;
        StringBuffer response=new StringBuffer();                                                                           //getting String Buffer or reading  the response
        while ((inputeline=in.readLine())!=null){
            response.append(inputeline);
        }
        in.close();
        System.out.println("This is to String "+ response.toString());
        JSONObject myResponse=new JSONObject(response.toString());
        System.out.println("The response file JSONobject is :");
        System.out.printf(myResponse.toString());
    }
}
                                                                                                                        //reference : https://www.youtube.com/watch?v=NyPp3dAxb0I