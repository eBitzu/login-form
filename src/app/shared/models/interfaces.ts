export interface ILoginData {
  email: string;
  pass: string;
}

export interface IUserData extends ILoginData {
  firstName: string;
  lastName: string;
  country: string;
}

export interface ICountryData {
  name: string;
  alpha2Code: string;
}
