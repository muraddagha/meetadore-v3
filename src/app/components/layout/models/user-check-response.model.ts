export interface Value {
  az: string;
  en: string;
  ru: string;
}

export interface Role {
  id: string;
  parentId?: any;
  value: Value;
  aboutValue?: any;
  icon?: any;
  code?: any;
  type?: any;
  unreadMessageCount?: any;
}

export interface Account {
  id: string;
  username?: any;
  password?: any;
  role: Role;
}

export interface Name {
  az: string;
  en: string;
  ru: string;
}

export interface Organization {
  id: string;
  orgTypeId?: any;
  name: Name;
  shortName?: any;
  formula: string;
  logoName?: any;
  serverName?: any;
  description?: any;
  logo?: any;
}

export interface Value2 {
  az: string;
  en: string;
  ru: string;
}

export interface Gender {
  id: string;
  parentId?: any;
  value: Value2;
  aboutValue?: any;
  icon?: any;
  code?: any;
  type?: any;
  unreadMessageCount?: any;
}

export interface Value3 {
  az: string;
  en: string;
  ru: string;
}

export interface Lang {
  id: string;
  parentId?: any;
  value: Value3;
  aboutValue?: any;
  icon?: any;
  code?: any;
  type?: any;
  unreadMessageCount?: any;
}

export interface Name2 {
  az: string;
  en: string;
  ru: string;
}

export interface ShortName {
  az: string;
  en: string;
  ru: string;
}

export interface Name3 {
  az: string;
  en: string;
  ru: string;
}

export interface ShortName2 {
  az: string;
  en: string;
  ru: string;
}

export interface Name4 {
  az: string;
  en: string;
  ru: string;
}

export interface IOperationModel {
  id: string;
  moduleId: string;
  url: string;
  code: string;
  name: Name4;
  newType: string;
}

export interface IModuleModel {
  id: string;
  name: Name3;
  shortName: ShortName2;
  parentId?: any;
  orderBy: number;
  icon: string;
  code: string;
  newType: string;
  color: string;
  url: string;
  operations: IOperationModel[];
  urlRedirect: string;
}

export interface Application {
  id: string;
  name: Name2;
  shortName: ShortName;
  parentId?: any;
  url: string;
  orderBy: number;
  icon: string;
  code?: any;
  modules: IModuleModel[];
  newType: string;
}

export interface Name5 {
  az: string;
  en: string;
  ru: string;
}

export interface Organization2 {
  id: string;
  orgTypeId: string;
  name: Name5;
  shortName?: any;
  formula: string;
  logoName?: any;
  serverName?: any;
  description?: any;
  logo?: any;
}

export interface Value4 {
  az: string;
  en: string;
  ru: string;
}

export interface Role2 {
  id: string;
  parentId?: any;
  value: Value4;
  aboutValue?: any;
  icon?: any;
  code?: any;
  type?: any;
  unreadMessageCount?: any;
}

export interface MyAllUser {
  id: string;
  accountId: string;
  organization: Organization2;
  userType: string;
  role: Role2;
  currentStatus: string;
}

export interface IUserResponseDataModel {
  id: string;
  defaultAppId: string;
  account: Account;
  username: string;
  firstname: string;
  lastname: string;
  patronymic: string;
  personId: string;
  birthdate: string;
  photoFilePath: string;
  organization: Organization;
  university?: any;
  userType: string;
  gender: Gender;
  lang: Lang;
  pincode: string;
  sessionActive: boolean;
  isBlocked: boolean;
  defaultURL: string;
  applications: Application[];
  privilegeList: string[];
  branchId: string;
  inSystem: string;
  email: string;
  lastLoginDate: string;
  unappreciatedEvaluation: string;
  facebookId?: any;
  googleId?: any;
  userGroupId?: any;
  myAllUsers: MyAllUser[];
  workPlace?: any;
  position?: any;
  contact?: any;
  hasPassword?: any;
  hasSocial?: any;
  chatUserType?: any;
  chatBotStatus?: any;
  chatBotId?: any;
  chatBotUnreadMessageCount?: any;
}
