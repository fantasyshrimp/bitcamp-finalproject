package bitcamp.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import bitcamp.app.NaverAiConfig;

@Component
public class NaverClovaSummary {

  static Logger log = LogManager.getLogger(NaverClovaSummary.class);

  @Autowired private NaverAiConfig naverAiConfig;

  public String summarize(String originContent) {

    String clientId = naverAiConfig.getClientIdSummary();
    String clientSecret = naverAiConfig.getClientSecretSummary();
    String apiUrl = naverAiConfig.getUrlSummary();
    String language = "ko";
    String model = "general";
    String tone = "0";
    String summaryCount = "2";
    String content = originContent;
    String summaryContent;

    try {
      URL url = new URL(apiUrl);
      HttpURLConnection con = (HttpURLConnection) url.openConnection();
      con.setRequestMethod("POST");

      con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
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

      log.info("summaryContent >>> "+ summaryContent);
      //{"status":400,"error":{"errorCode":"E100","message":"Insufficient valid sentence"}}

      return summaryContent;

    } catch (Exception e) {
      log.error(e);

      return null;
    }
  }
}

//오늘은 몰디브에서의 휴양 일정이었습니다. 아침 일찍 일어나 해변을 걸으며 몰디브의 아름다운 풍경을 감상했습니다. 해안가에서는 스노클링을 즐기는 사람들이 많았고, 내가 챙긴 노르딕 스타킹을 신고 바다 속으로 뛰어들었습니다. 투명한 바다속에서는 다양한 물고기들이 떠다니며 내게 귀엽게 다가와 함께 수영했습니다. 몰디브의 아름다운 자연환경과 더불어 즐거운 수상 스포츠를 즐길 수 있는 멋진 곳이라는 생각이 들었습니다.