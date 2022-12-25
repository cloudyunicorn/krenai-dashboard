import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-todo',
  templateUrl: './todays-todo.component.html',
  styleUrls: ['./todays-todo.component.scss']
})
export class TodaysTodoComponent implements OnInit {
  todoList = [
    {
      task: 'Your pack is about to expire today. Recharge today to continue',
      status: 1
    },
    {
      task: '23 orders are pending to get completed.',
      status: 0
    },
    {
      task: '2 products are about to finish from the inventory, Check inventory.',
      status: 0
    },
    {
      task: 'Your pack is about to expire today. Recharge today to continue',
      status: 1
    },
    {
      task: '23 orders are pending to get completed.',
      status: 0
    },
    {
      task: '2 products are about to finish from the inventory, Check inventory.',
      status: 0
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
