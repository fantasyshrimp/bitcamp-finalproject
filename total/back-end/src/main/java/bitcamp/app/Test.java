package bitcamp.app;

import java.io.IOException;
import bitcamp.util.TagExtract;

public class Test {

  private TagExtract tagExtract;

  public static void main(String[] args) throws IOException {
    Test test = new Test();
    test.tagExtract = new TagExtract();

    String ex = test.tagExtract.koToEn("서늘한 바람이 부는 산 정상에 서 있는 인물은 멀리 내려다보고 있다. 그 인물이 향하는 방향은 알 수 없지만, 어딘가로 향하는 것 같다");

    test.tagExtract.extract(ex);
  }

}