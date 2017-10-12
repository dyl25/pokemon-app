import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Pokemon} from './pokemon';

@Injectable()
export class PokemonSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Pokemon[]> {
        return this.http
            .get(`app/pokemons/?name=${term}`)
            .map((r: Response) => r.json().data as Pokemon[]);
    }

}