import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CardGridServiceService } from 'src/app/services/card-grid.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  alphabetButtons: string[] = ['Hiragana', 'Katakana']
  characterSetButtons: string[] = ['ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa']
  selected: {[key: string]: boolean} = { 
    "Hiragana": false,
    "Katakana": false
  }
  selectedSets: string[] = []

  constructor(private router: Router, private service: CardGridServiceService) { }

  ngOnInit(): void {
  }

  selectAlphabet(alphabet: string){
    this.checkToUnselectAlphabet(alphabet)
    this.service.setSelectedAlphabet(alphabet)
    this.selected[alphabet] = !this.selected[alphabet]
  }

  checkToUnselectAlphabet(alphabet: string){
    if( this.selected['Hiragana'] == true && alphabet == 'Katakana' ){
      this.selected['Hiragana'] = false
    }
    if( this.selected['Katakana'] == true && alphabet == 'Hiragana' ){
      this.selected['Katakana'] = false
    }
  }

  addCharSet(setName: string){
    if( !this.selectedSets.includes(setName) ){
      this.selectedSets.push(setName)
    }else{
      let index = this.selectedSets.indexOf(setName)
      this.selectedSets.splice(index, 1)
    }
  }

  startQuiz(){
    if( this.selected['Hiragana'] == false && this.selected['Katakana'] == false ) {
      console.log("no selection")
      return
    }
    console.log("Start")
    this.service.setSelectedSets(this.selectedSets)
    this.router.navigateByUrl('quiz')
  }
}
