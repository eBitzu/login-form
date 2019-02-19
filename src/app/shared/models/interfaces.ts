export interface ILoginData {
  mail: string;
  pass: string;
}

export interface IUserData extends ILoginData {
  firstName: string;
  lastName: string;
  country: string;
}
