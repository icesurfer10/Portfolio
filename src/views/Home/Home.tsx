import React from 'react';
import Typist from 'react-typist';
import me from '../../assets/images/me.jpeg';
import content from '../../content/content';

import './home.scss';
import 'react-typist/dist/Typist.css';

export interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {
  return(
    <section className='home'>
      <img src={me} alt='logo'></img>
      <div className='content'>
        <h1>{content.text('profile.name')}</h1>
        <hr />
          <h2>
            <Typist startDelay={1000}>{content.text('profile.jobTitle')}</Typist>
          </h2>
        <hr />
        <p>{content.text('home.paragraphOne')}</p>
        <p>{content.text('home.paragraphTwo')}</p>
        <p>{content.text('home.paragraphThree')}</p>
        <p>{content.text('home.paragraphFour')}</p>
      </div>
    </section>
  );
};

export default Home;