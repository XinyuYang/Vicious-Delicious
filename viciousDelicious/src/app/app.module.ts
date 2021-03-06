import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RecipeCollectionPage} from "../pages/recipe-collection/recipe-collection";
import {InstructionPage} from "../pages/instruction/instruction";
import {ShoppingPage} from '../pages/shopping/shopping';
import {data} from '../pages/data/data';
import {DetailPage} from "../pages/detail/detail";
import {Recipes} from "../providers/recipes"
import {InputPage} from "../pages/input/input"
import { MediaCapture } from 'ionic-native';
import {tokenfile} from "../pages/token/tokenfile"
import {TutorialPage} from "../pages/tutorial/tutorial"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeCollectionPage,
    InstructionPage,
    ShoppingPage,
    DetailPage,
    InputPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeCollectionPage,
    InstructionPage,
    ShoppingPage,
    DetailPage,
    InputPage,
    TutorialPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},data,Recipes,MediaCapture,tokenfile]
})
export class AppModule {}
