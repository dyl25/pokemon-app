import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Pokemon} from './pokemon';
import {PokemonsService} from './pokemons.service';

@Component({
    selector: 'edit-pokemon',
    template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
    `
})
export class EditPokemonComponent implements OnInit {
    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private pokemonsService: PokemonsService
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; //on contraint à une valeur numérique grâce au +
            this.pokemonsService.getPokemon(id).then(pokemon => this.pokemon = pokemon);
        });
    }
}