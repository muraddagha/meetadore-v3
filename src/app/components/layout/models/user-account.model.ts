export class UserAccountModel {
  public firstname: string;
  public lastname: string;
  public photoFilePath: string;
  public lastLoginDate: string;
  public userType:string;


  constructor( firstname: string,lastname: string, photoFilePath: string, lastLoginDate: string,userType:string, ) 
  {
    this.firstname = firstname;
    this.lastname = lastname;
    this.photoFilePath = photoFilePath;
    this.lastLoginDate = lastLoginDate;;
    this.userType=userType
  }
}

export interface IUserAccountModel {
  firstname: string;
  lastname: string;
  photoFilePath: string;
  lastLoginDate: string;
  userType:string;
}
