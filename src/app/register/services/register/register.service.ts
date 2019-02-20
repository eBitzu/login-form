import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ICountryData,
  ILoginData,
  IUserData,
} from 'src/app/shared/models/interfaces';
import { RoutesNames } from 'src/app/shared/models/routes';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable()
export class RegisterService {
  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  checkLogin(loginData: ILoginData): Observable<boolean> {
    const user: IUserData = this.storageService.getFromStorage(loginData.email);
    if (!user) {
      return throwError('No user found');
    }
    if (user.pass !== loginData.pass) {
      return throwError("Passwords don't match");
    }
    this.storageService.setUserCookie(loginData.email);

    return of(true);
  }

  getCountries(): Observable<ICountryData[]> {
    return this.http
      .get('https://restcountries.eu/rest/v2/all')
      .pipe(
        map((data: ICountryData[]) =>
          data.map(({ name, alpha2Code }) => ({
            name,
            alpha2Code: alpha2Code.toLowerCase(),
          }))
        )
      );
  }

  signUp(user: IUserData) {
    const result: string = this.storageService.setToStorage(user.email, user);
    if (!result) {
      this.router.navigate([RoutesNames.login]);
    } else {
      alert(result);
    }
  }
}
