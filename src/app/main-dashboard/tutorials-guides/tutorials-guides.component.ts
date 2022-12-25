import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials-guides',
  templateUrl: './tutorials-guides.component.html',
  styleUrls: ['./tutorials-guides.component.scss']
})
export class TutorialsGuidesComponent implements OnInit {
  videoList = [
    {
      title: 'Retarget your customers',
      desc: 'Though entrepreneurs are the ones who have creative minds, ideas and ablity to run business'
    },
    {
      title: 'Retarget your customers',
      desc: 'Though entrepreneurs are the ones who have creative minds, ideas and ablity to run business'
    },
    {
      title: 'Retarget your customers',
      desc: 'Though entrepreneurs are the ones who have creative minds, ideas and ablity to run business'
    },
    {
      title: 'Retarget your customers',
      desc: 'Though entrepreneurs are the ones who have creative minds, ideas and ablity to run business'
    },
    {
      title: 'Retarget your customers',
      desc: 'Though entrepreneurs are the ones who have creative minds, ideas and ablity to run business'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
