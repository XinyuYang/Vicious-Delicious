import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { RecipeInstructionsPage } from '../pages/home/recipe-instructions/recipe-instructions';
import { RecipesPage } from '../pages/home/recipes/recipes';
import { DetailPagePage } from '../pages/home/detail-page/detail-page';
import { Recipe2Page } from '../pages/home/recipe2/recipes';
import { Recipe2InstructionsPage} from '../page/home/recipe2instructions/recipe2instructions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}