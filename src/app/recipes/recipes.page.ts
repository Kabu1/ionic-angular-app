import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe [] =[
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: http



  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
