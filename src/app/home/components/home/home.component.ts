import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  fullName: string = '';
  logOut() {
    this.homeServ.logOut();
  }
  ngOnInit() {
    this.fullName = this.homeServ.getFullName();
  }
  constructor(private homeServ: HomeService) {}
}
