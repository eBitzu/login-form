import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IStrippedUser, IUserData } from '../../models/interfaces';
import { makeid } from '../../utils/tokengenerator';

@Injectable()
export class StorageService {
  setUserCookie(mail: string) {
    const user = this.getFromStorage(mail);
    user.token = makeid();
    this.removeCookie();
    document.cookie = `SESSIONID=${user.token}; expires=${moment
      .utc()
      .add(30, 'minute')
      .toString()}; path=/;`;
    this.updateStorage(mail, user);
  }

  invalidateCurrentToken() {
    const user = this.getUserByToken();
    user.token = null;
    this.removeCookie();
    this.updateStorage(user.email, user);
  }
  isUserLoggedIn(): boolean {
    return !!this.getUserByToken();
  }

  getStrippedUser(): IStrippedUser {
    const { country, email, firstName, lastName } = this.getUserByToken();
    return {
      country,
      email,
      firstName,
      lastName,
    };
  }

  getFromStorage(email: string): IUserData {
    const users: IUserData[] = this.getUsers() || [];
    const found: IUserData = users.find(
      (user: IUserData) => user.email === email
    );
    return found || null;
  }

  setToStorage(email: string, data: IUserData): string {
    if (!!this.getFromStorage(email)) {
      return 'Email already registered';
    }
    this.updateStorage(null, data);
    return null;
  }

  private removeCookie = () => {
    document.cookie =
      'SESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  private getUserByToken(): IUserData {
    const currentCookies = document.cookie.split('; ');
    const existingCookieToken = currentCookies.find((cookieString) =>
      cookieString.includes('SESSIONID')
    );
    if (existingCookieToken) {
      const users = this.getUsers();
      const token = existingCookieToken.split('=').pop();
      const tokenUser = users.find(
        (user) => !!user.token && user.token === token
      );
      return tokenUser;
    }
    return null;
  }
  private updateStorage(email: string, data: IUserData) {
    let users: IUserData[] = this.getUsers() || [];
    if (!email) {
      users = [...users, data];
    } else {
      const found = users.findIndex((user) => user.email === email);
      if (found > -1) {
        users.splice(found, 1, data);
      }
    }
    localStorage.setItem('users', JSON.stringify(users));
  }
  private getUsers = (): IUserData[] => {
    let users: IUserData[] = [];
    try {
      users = JSON.parse(localStorage.getItem('users')) || [];
    } catch (err) {
      users = [];
    }
    return users;
  };
}
