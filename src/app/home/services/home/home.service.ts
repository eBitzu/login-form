import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/shared/models/routes';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable()
export class HomeService {
  logOut() {
    this.storeService.invalidateCurrentToken();
    this.router.navigate([RoutesNames.login]);
  }

  getFullName(): string {
    const { firstName, lastName } = this.storeService.getStrippedUser();
    return `${firstName} ${lastName}`;
  }
  constructor(private storeService: StorageService, private router: Router) {}
}
