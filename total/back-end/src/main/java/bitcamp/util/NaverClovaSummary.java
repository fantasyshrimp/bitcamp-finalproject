package bitcamp.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

//@SpringBootApplication
public class NaverClovaSummary {

  static Logger log = LogManager.getLogger(NaverClovaSummary.class);

  //  @Autowired private NaverAiConfig naverAiConfig;

  public static String summarize(String originContent) {

    String clientID = "jwr193c3gy";
    String clientSecret = "GByFPLxpEZowCFWz0e9JLQYN4vqbbAEoKLarfe4F";
    String language = "ko";
    String model = "general";
    String tone = "0";
    String summaryCount = "2";
    String url = "https://naveropenapi.apigw.ntruss.com/text-summary/v1/summarize";
    String content = originContent;
    String summaryContent;

    try {
      URL apiURL = new URL(url);
      HttpURLConnection con = (HttpURLConnection) apiURL.openConnection();
      con.setRequestMethod("POST");

      con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientID);
      con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);
      con.setRequestProperty("Content-Type", "application/json");

      con.setDoOutput(true);
      OutputStreamWriter wr = new OutputStreamWriter(con.getOutputStream());
      String jsonRequest = "{\"document\": {\"content\": \"" + content + "\"}, \"option\": {\"language\": \"" + language + "\", \"model\": \"" + model + "\", \"tone\": " + tone + ", \"summaryCount\": " + summaryCount + "}}";
      wr.write(jsonRequest);
      wr.flush();

      int responseCode = con.getResponseCode();
      BufferedReader br;

      if (responseCode == 200) { // Success
        br = new BufferedReader(new InputStreamReader(con.getInputStream()));
      } else { // Error
        br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
      }

      String inputLine;
      StringBuffer response = new StringBuffer();

      while ((inputLine = br.readLine()) != null) {
        response.append(inputLine);
      }
      br.close();

      summaryContent = response.toString();

      //      log.info("summaryContent >>> "+ summaryContent);

      return summaryContent;

    } catch (Exception e) {
      log.error(e);

      return null;
    }
  }
}
