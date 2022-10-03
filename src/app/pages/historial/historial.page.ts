import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(public router: Router,
  ) { }

  ngOnInit() {
  }

  chat(): void {
    this.router.navigate(['chat']);
  }
}
