import React from 'react';
import Typist from 'react-typist';
import me from '../../me.jpeg';
import './home.scss';
import 'react-typist/dist/Typist.css';

export interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {
  return(
    <section className='home'>
      <img src={me} alt='logo'></img>
      <div className='content'>
        <h1>Thomas West</h1>
        <hr />
          <h2>
            <Typist startDelay={1000}>Software Engineer, Bristol</Typist>
          </h2>
        <hr />
        <p>Tom is passionate about designing and building creative solutions to complex problems.</p>
        <p>
          He is a technical lead at Good Energy, doing his part to tackle climate change, something he has always been passionate about.
        </p>
        <p>
          Tom believes in supporting the development community by actively mentoring other developers and demonstrates different technologies and techniques.
        </p>
        <p>
          Whilst out of the workplace, Tom can often be found walking his dog Maggie with his partner Eloise,
          trying out new recipies or playing pool in the Bristol Pool League.
        </p>
      </div>
    </section>
  );
};

export default Home;