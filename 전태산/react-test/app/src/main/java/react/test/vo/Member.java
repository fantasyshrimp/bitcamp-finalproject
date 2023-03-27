package react.test.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

public class Member {
  private int no;
  private String nickname;
  private String email;
  private String password;
  private int gender;
  private String profilePhoto;
  private String basicAddress;
  private int point;
  private String information;
  private String tel;
  private int accountState;
  private int authLevel;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date createdDate;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date birthDate;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date passwordDate;



  @Override
  public String toString() {
    return "Member [no=" + no + ", nickname=" + nickname + ", email=" + email + ", password="
        + password + ", gender=" + gender + ", profilePhoto=" + profilePhoto + ", basicAddress="
        + basicAddress + ", point=" + point + ", information=" + information + ", tel=" + tel
        + ", accountState=" + accountState + ", authLevel=" + authLevel + ", createdDate="
        + createdDate + ", birthDate=" + birthDate + ", passwordDate=" + passwordDate + "]";
  }

  public int getNo() {
    return no;
  }

  public void setNo(int no) {
    this.no = no;
  }

  public String getNickname() {
    return nickname;
  }

  public void setNickname(String nickname) {
    this.nickname = nickname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public int getGender() {
    return gender;
  }

  public void setGender(int gender) {
    this.gender = gender;
  }

  public String getProfilePhoto() {
    return profilePhoto;
  }

  public void setProfilePhoto(String profilePhoto) {
    this.profilePhoto = profilePhoto;
  }

  public String getBasicAddress() {
    return basicAddress;
  }

  public void setBasicAddress(String basicAddress) {
    this.basicAddress = basicAddress;
  }

  public int getPoint() {
    return point;
  }

  public void setPoint(int point) {
    this.point = point;
  }

  public String getInformation() {
    return information;
  }

  public void setInformation(String information) {
    this.information = information;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public int getAccountState() {
    return accountState;
  }

  public void setAccountState(int accountState) {
    this.accountState = accountState;
  }

  public int getAuthLevel() {
    return authLevel;
  }

  public void setAuthLevel(int authLevel) {
    this.authLevel = authLevel;
  }

  public Date getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
  }

  public Date getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(Date birthDate) {
    this.birthDate = birthDate;
  }

  public Date getPasswordDate() {
    return passwordDate;
  }

  public void setPasswordDate(Date passwordDate) {
    this.passwordDate = passwordDate;
  }


}