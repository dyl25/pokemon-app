import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {PokemonSearchService} from './pokemon-search.service';
import {Pokemon} from './pokemon';

@Component({
    selector: 'pokemon-search',
    template: `
    <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card">
          <div class="card-content">
              <div class="input-field">
                <input #searchBox (keyup)="search(searchBox.value)" placeholder="Rechercher un pokémon..." />
              </div>

              <div class='collection'>
                <a *ngFor="let pokemon of pokemons | async"
                     (click)="gotoDetail(pokemon)" class="collection-item" >
                  {{ pokemon.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>`,
    providers: [PokemonSearchService]
})
export class PokemonSearchComponent implements OnInit {

    private searchTerms = new Subject<string>();
    pokemons: Observable<Pokemon[]>;

    constructor(
        private pokemonSearchService: PokemonSearchService,
        private router: Router
    ) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.pokemons = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.pokemonSearchService.search(term)
                : Observable.of<Pokemon[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Pokemon[]>([]);
            });
    }

    gotoDetail(pokemon: Pokemon): void {
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}