import { Component, ElementRef, EventEmitter, Input, ModuleWithComponentFactories, OnInit, Output } from '@angular/core';
import { Model } from 'src/app/model/model';

@Component({
  selector: 'app-kana-card',
  templateUrl: './kana-card.component.html',
  styleUrls: ['./kana-card.component.css']
})
export class KanaCardComponent implements OnInit {

  @Input() cardData: Model = {symbol: "", name: "", row: ""}
  @Output() cardCorrect = new EventEmitter()
  answer: string = ""
  correct: boolean = false
  wasAnswered: boolean = false

  constructor(private eleRef: ElementRef) { }

  ngOnInit(): void {
  }

  checkInput(event: Event){
    //Make sure next card is focussed
    if( this.eleRef.nativeElement.nextElementSibling == null ){
      this.eleRef.nativeElement.parentElement.firstChild.children[0].children[1].focus()
    }else {
      this.eleRef.nativeElement.nextElementSibling.children[0].children[1].focus()
    }
    //Correct
    if( this.answer.trim().toLowerCase() == this.cardData.name ){
      this.correct = true
      this.wasAnswered = true
      this.cardCorrect.emit()
      return
    }
    //Incorrect
    this.correct = false
    this.wasAnswered = true
  }
}
