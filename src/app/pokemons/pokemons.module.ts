import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';

import { ListPokemonComponent }     from './list-pokemon.component';
import { DetailPokemonComponent }   from './detail-pokemon.component';
import { EditPokemonComponent }     from './edit-pokemon.component';
import { PokemonFormComponent }     from './pokemon-form.component';

import { ShadowCardDirective }      from './shadow-card.directive';
import { PokemonTypeColorPipe }     from './pokemon-type-color.pipe';
import { PokemonRoutingModule }     from './pokemons-routing.module';
import { PokemonsService }          from './pokemons.service';

@NgModule({ 
    imports: [
       CommonModule,
       FormsModule,
       PokemonRoutingModule
    ],
    declarations: [
        ShadowCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent
    ],
    providers: [PokemonsService]
})
export class PokemonsModule {}
