import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-sales',
  templateUrl: './orders-sales.component.html',
  styleUrls: ['./orders-sales.component.scss']
})
export class OrdersSalesComponent implements OnInit {
  labels = ['INVENTORY', 'Out of Stock', 'Low Selling', 'Most Selling', 'Low in Inventory']

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    document.getElementsByClassName('mat-tab-header-pagination-before')[0].remove();
    document.getElementsByClassName('mat-tab-header-pagination-after')[0].remove();
  }

}
