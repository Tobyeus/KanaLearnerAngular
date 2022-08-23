import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/model/model';
import { CardGridServiceService } from 'src/app/services/card-grid.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {

  alphabet: string = ""
  itemsToDisplay: Model[] = []
  numberOfCards: number = 0
  correctCards: number = 0
  gameFinished = false;
  playAgainButton = "Play again"

  constructor(private service: CardGridServiceService, private router: Router) { }

  ngOnInit(): void {
    let characterSetsArray = this.service.getSelectedSets()
    for(let set of characterSetsArray){
      this.service.getSelectedAlphabet().forEach( card => {
        if( card.row == set ){
          this.itemsToDisplay.push(card)
        }
      })
    }
    this.itemsToDisplay.sort(() => Math.random() - 0.5 )
    this.numberOfCards = this.itemsToDisplay.length
    if( this.numberOfCards == 0){
      this.router.navigateByUrl("")
    }
  }

  correctCount(){
    this.correctCards++
    if( this.correctCards == this.numberOfCards ){
      this.gameFinished = true
    }
  }

  redirectToHome(){
    this.router.navigateByUrl('')
  }
}
