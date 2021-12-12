import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentPage = 'menu';

  constructor(
    private activatedRouter: ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
    const page = this.route.url;
    this.currentPage = page.replace('/', '');
  }

}
