import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice-button-alphabet',
  templateUrl: './choice-button-alphabet.component.html',
  styleUrls: ['./choice-button-alphabet.component.css']
})
export class ChoiceButtonAlphabetComponent implements OnInit {

  @Output() clickSelect = new EventEmitter
  @Input() buttonText: string = ""
  selected: boolean = false
  @Input() isSelected: boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

  select(buttonText: string){
    this.selected = !this.selected;
    this.clickSelect.emit(buttonText)
  }
}
