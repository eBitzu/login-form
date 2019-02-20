export interface ILoginData {
  email: string;
  pass: string;
}

export interface IUserData extends ILoginData {
  firstName: string;
  lastName: string;
  country: string;
  token: string;
}

export interface ICountryData {
  name: string;
  alpha2Code: string;
}

export interface IStrippedUser {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
}
