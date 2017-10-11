import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemons';

@Injectable()
export class PokemonsService {

    constructor(private http: Http) { }

    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number) {
        let pokemons = this.getPokemons();

        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    getPokemonTypes(): Array<string> {
        return [
            'Plantes', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

}