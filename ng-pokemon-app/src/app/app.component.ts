import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-liste';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'pokemon-app with angular';
  pokemon_liste: Pokemon[] = POKEMONS;
  pokemon_selected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemon_liste);
  }

  selectPokemon(pokemon_id: string): void {
    const index = +pokemon_id;
    const pokemon: Pokemon|undefined = this.pokemon_liste.find(pokemon => pokemon.id === index);
    if (pokemon) {
      this.pokemon_selected = pokemon;
      console.log(`Vous avez sélectionné le pokemon: ${pokemon.name}`);
    } else {
      console.log(`Vous n'avez pas sélectionné de pokemon disponible`);
      this.pokemon_selected = pokemon;
    }
  }

}
