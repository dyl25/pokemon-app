import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PokemonsService} from './pokemons.service';
import {Pokemon} from './pokemon';

@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

    @Input() pokemon: Pokemon;
    types: Array<string>;

    constructor(
        private pokemonsService: PokemonsService,
        private router: Router
    ) {}

    ngOnInit() {
        this.types = this.pokemonsService.getPokemonTypes();
    }

    hasType(type: string): boolean {
        let index = this.pokemon.types.indexOf(type);
        if (~index) return true;
        return false;
    }

    selectType($event: any, type: string): void {
        let checked = $event.target.checked;

        if (checked) {
            this.pokemon.types.push(type);
        } else {
            let index = this.pokemon.types.indexOf(type);
            if (~index) {
                this.pokemon.types.splice(index, 1);
            }
        }
    }

    onSubmit(): void {
        this.pokemonsService.update(this.pokemon)
            .then(() => {
                let link = ['/pokemon', this.pokemon.id];
                this.router.navigate(link);
            });
    }

    //implémenter isTypesValid!!!

}
