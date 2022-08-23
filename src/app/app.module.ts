import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanaCardComponent } from './components/kana-card/kana-card.component';
import { CardGridComponent } from './components/pages/card-grid/card-grid.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { SelectionComponent } from './components/pages/selection/selection.component';
import { StartButtonComponent } from './components/ui/start-button/start-button.component';
import { ChoiceButtonAlphabetComponent } from './components/ui/choice-button-alphabet/choice-button-alphabet.component';
import { ChoiceButtonCharsetComponent } from './components/ui/choice-button-charset/choice-button-charset.component';
import { BasicBtnComponent } from './components/ui/basic-btn/basic-btn.component';
import { HelpComponent } from './components/ui/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    KanaCardComponent,
    CardGridComponent,
    HeaderBarComponent,
    SelectionComponent,
    StartButtonComponent,
    ChoiceButtonAlphabetComponent,
    ChoiceButtonCharsetComponent,
    BasicBtnComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
