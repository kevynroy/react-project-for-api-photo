import React from 'react';
import '../../styles/global.css';
import Card from '../../components/Card';

const Home = () => {
    return (
        <div className="home-page">
            <h1>Wellcome to our Website </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu semper
        mi. Integer tristique tellus id nibh rutrum, sit amet aliquam velit
        sollicitudin. Nullam nec ex eu odio suscipit pellentesque. Morbi sit
        amet consequat ex. Nam id orci quis nulla semper efficitur.
            </p>
            <div className="card-container">
            <Card
            title="Example Card 1"
            content="This is th content of card 1"
            />
            <Card
            title="Example Card 1"
            content="This is th content of card 1"
            />
         
        </div>
        </div>
    );
};

export default Home;