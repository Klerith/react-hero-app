import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate, } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate();


    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);


    if ( !hero ) {
        return <Navigate to="/" />;
    }

    const handleReturn = () => {

        navigate( -1 )
        // if( history.length <=2 ) {
        //     history.push('/');
        // } else {
        //     history.goBack();
        // }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        id
    } = hero;

    const imagePath = `${ process.env.PUBLIC_URL }/assets/heroes/${id}.jpg`;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={ `../assets/heroes/${ heroeId }.jpg` } // desde public/assets
                    // src={ batman } // import
                    src={ imagePath }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
