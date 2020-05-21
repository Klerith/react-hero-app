import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name )  );

}