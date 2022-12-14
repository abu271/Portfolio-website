import React from 'react';
import Navigation from '../../components/Navbar/Navigation';
import Cards from '../../components/Cards/Cards';
import './projects.css';
import Footer from '../../components/Footer/Footer';

// Project images
import drumsPic from '../../images/drums.jpg';
import numbers from '../../images/numbers.jpg';
import quotes from '../../images/quotes.jpg';
import tent from '../../images/tent.jpg';

// Projects
const yelpCamp = {
  img: tent,
  text:'A website specifically for camp sites. Users can upload their favourite camps',
  src:'https://github.com/abu271/Yelp-Camp',
  demo:'https://abu-yelp-camp.herokuapp.com/'
};
const reduxCalculator = {
  img: numbers,
  text:'Simple calculator app built with react and redux.',
  src:'https://github.com/abu271/redux-calculator',
  demo:'https://reduxulator.netlify.com/'
};
const randomQuote = {
  img: quotes,
  text:'By clicking the "New Quote" button a random inspirational quote would be displayed. Also, your favourite quote can be tweeted.',
  src:'https://github.com/abu271/random-quote-machine',
  demo:'https://react-random-quotes.netlify.com/'
};
const drums = {
  img: drumsPic,
  text:'Get ready to rock some awesome beats. Click on the keypads to play sounds or press the corresponding letter on your keyboard.',
  src:'https://github.com/abu271/drum-machine',
  demo:'https://reactdrum.netlify.com/'
};

const projects = () => {
  return (
    <div>
      <Navigation />
      <h1 className='title'>
        PROJECTS
      </h1>
      <div id='card__deck'>
        <Cards title='Yelp Camp' {...yelpCamp} />
        <Cards title='Redux Calculator' {...reduxCalculator} />
        <Cards title='Random Quote Machine' {...randomQuote} />
        <Cards title='Drums' {...drums} />
      </div>
      <Footer />
    </div>
  );
};

export default projects;