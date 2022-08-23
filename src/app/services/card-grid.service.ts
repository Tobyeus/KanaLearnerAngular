import { Injectable } from '@angular/core';
import { hiragana } from 'src/app/model/data';
import { katakana } from 'src/app/model/data';
import { Model } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CardGridServiceService {

  selectedAlphabet: string = ""
  selectedSets: string[] = []

  constructor() { }

  getSelectedAlphabet(): Model[] {
    if( this.selectedAlphabet == 'Hiragana' ) {
      return hiragana
    }else {
      return katakana
    }
  }
  setSelectedAlphabet(alphabet: string){
    this.selectedAlphabet = alphabet
  }
  getSelectedSets(): string[]{
    return this.selectedSets
  }
  setSelectedSets(setArray: string[]){
    this.selectedSets = setArray
  }
}
