import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ILoginData, IUserData } from 'src/app/shared/models/interfaces';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable()
export class RegisterService {
  constructor(private storageService: StorageService) {}
  checkLogin(loginData: ILoginData): Observable<boolean> {
    const user: IUserData = this.storageService.getFromStorage(loginData.mail);
    if (!user) {
      return throwError('No user found');
    }
    if (user.pass !== loginData.pass) {
      return throwError('Passwords don\'t match');
    }
    this.storageService.setUserCookie(loginData.mail);

    return of(true);
  }
}
