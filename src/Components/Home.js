import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const routeToForm = () => {
        history.push('/pizza');
    }

    return (
        <div className='home-wrapper'>
            <div className='top-section'>
                <h2>your favorite food, delivered while coding</h2>
                <button onClick={routeToForm} id='order-pizza'>Pizza?</button>
            </div>
        </div>
    )
}

export default Home;