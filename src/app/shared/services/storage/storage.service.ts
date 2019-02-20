import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IUserData } from '../../models/interfaces';
import { makeid } from '../../utils/tokengenerator';

@Injectable()
export class StorageService {
  setUserCookie(email: string) {
    const currentCookies = document.cookie.split(';');
    let existingCookieTime = currentCookies.find((cookieString) =>
      cookieString.includes(`${email}_time`)
    );
    if (existingCookieTime) {
      existingCookieTime = `${email}_valid=${moment().format('x')}`;
    } else {
      currentCookies.push(`${email}_valid=${moment().format('x')}`);
    }
    let existingCookieToken = currentCookies.find((cookieString) =>
      cookieString.includes(`${email}`)
    );
    if (existingCookieToken) {
      existingCookieToken = `${email}=${makeid()}`;
    } else {
      currentCookies.push(`${email}=${makeid()}`);
    }
    document.cookie = currentCookies.join(';');
  }
  isUserLoggedIn(email: string) {
    const currentCookies = document.cookie.split(';');
    const existingCookieTime = currentCookies.find((cookieString) =>
      cookieString.includes(`${email}_time`)
    );
    const existingCookieToken = currentCookies.find((cookieString) =>
      cookieString.includes(`${email}`)
    );
    let returnVal = false;
    if (existingCookieToken && existingCookieTime) {
      const unixTime = existingCookieTime.split('=').pop();
      if (moment(unixTime).isAfter(moment())) {
        returnVal = true;
      }
    }

    return returnVal;
  }

  getFromStorage(email: string): IUserData {
    let content: IUserData = null;
    try {
      content = JSON.parse(localStorage.getItem(email));
    } catch (err) {
      content = null;
    }
    return content;
  }

  setToStorage(email: string, data: IUserData): string {
    const set = this.getFromStorage(email);
    if (!!set) {
      return 'Email already registered';
    }
    localStorage.setItem(email, JSON.stringify(data));
    return null;
  }
}
