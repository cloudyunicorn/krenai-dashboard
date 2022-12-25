import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  planCard: any;

  constructor() { }

  ngOnInit(): void {
  }

  openStats() {
    this.planCard = document.getElementById('planCard');
    this.planCard.style.cssText = `
      display: block !important;
    `;
  }

}
