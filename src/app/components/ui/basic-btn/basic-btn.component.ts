import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-btn',
  templateUrl: './basic-btn.component.html',
  styleUrls: ['./basic-btn.component.css']
})
export class BasicBtnComponent implements OnInit {

  @Input() buttonText: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
