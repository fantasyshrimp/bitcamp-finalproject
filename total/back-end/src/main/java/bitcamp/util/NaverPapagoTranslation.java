package bitcamp.util;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

//네이버 Papago Text Translation API 예제
public class NaverPapagoTranslation {

  static Logger log = LogManager.getLogger(NaverPapagoTranslation.class);

  public static String translate(String summaryContent) {
    String clientId = "gpic0fhuug"; //애플리케이션 클라이언트 아이디값";
    String clientSecret = "JEPi5MMr30nyF4uLLMOmwUk6LIpM9ne0BAgOyKcH"; //애플리케이션 클라이언트 시크릿값";
    String source = "ko";
    String target = "en";
    String transContent;

    try {
      String text = URLEncoder.encode(summaryContent, "UTF-8");
      String apiURL = "https://naveropenapi.apigw.ntruss.com/nmt/v1/translation";
      URL url = new URL(apiURL);

      HttpURLConnection con = (HttpURLConnection)url.openConnection();
      con.setRequestMethod("POST");
      con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
      con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);

      // post request
      String postParams = "source=" + source + "&target=" + target + "&text=" + text;

      con.setDoOutput(true);
      DataOutputStream wr = new DataOutputStream(con.getOutputStream());
      wr.writeBytes(postParams);
      wr.flush();
      wr.close();

      int responseCode = con.getResponseCode();
      BufferedReader br;

      if(responseCode==200) { // 정상 호출
        br = new BufferedReader(new InputStreamReader(con.getInputStream()));
      } else {  // 오류 발생
        br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
      }

      String inputLine;
      StringBuffer response = new StringBuffer();

      while ((inputLine = br.readLine()) != null) {
        response.append(inputLine);
      }
      br.close();

      transContent = response.toString();

      //      log.info("transContent >>> " +transContent);

      return transContent;

    } catch (Exception e) {
      log.error(e);

      return null;
    }
  }
}
