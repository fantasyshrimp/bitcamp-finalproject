package bitcamp.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordChecker {
  public static boolean isValidPassword(String password) {
    String regex = "^(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()_+~`|}{\\[\\]\\\\:';\"<>,./?-]{10,}$";
    Pattern pattern = Pattern.compile(regex);
    Matcher matcher = pattern.matcher(password);
    return matcher.matches();
  }
}
