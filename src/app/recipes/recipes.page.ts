import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] =[
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://en.wikipedia.org/wiki/Schnitzel#/media/File:Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries','Pork Meat','Salad']


  },
    {
        id: 'r2',
        title: 'Spaghetti',
        imageUrl: 'https://en.wikipedia.org/wiki/Spaghetti#/media/File:Spaghettata.JPG',
        ingredients: ['spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
