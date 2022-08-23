import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice-button-charset',
  templateUrl: './choice-button-charset.component.html',
  styleUrls: ['./choice-button-charset.component.css']
})
export class ChoiceButtonCharsetComponent implements OnInit {

  @Input() buttonText: string = ""
  @Output() selectCharSet = new EventEmitter
  
  selected: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  selectSet(){
    this.selected = !this.selected
    this.selectCharSet.emit(this.buttonText)
  }
}
