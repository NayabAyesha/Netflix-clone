import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import mainone from '../../assets/mainone.jpeg';
import onecaption from '../../assets/onecaption.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Titlecards from '../../components/Titlecards/Titlecards';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="main">
        <img src={mainone} alt="Main" className="mainone" />
        <div className="main_caption">
          <img src={onecaption} alt="Caption" className="onecaption" />
          <h1>Season 3</h1>
          <p>
            Mick Haller (Matthew McConaughey) is a charismatic defense attorney who does business out of his Lincoln Continental sedan. Mick spends most of his time defending petty crooks and other bottom-feeders, so it comes as quite a surprise when he lands the case of a lifetime: defending a Beverly Hills playboy (Ryan Phillippe) who is accused of attempted murder. However, what Mick initially thinks is an open-and-shut case with a big monetary reward develops into something more sinister.
          </p>
         
        <div className="onebutton">
          <button className='btn'><img src={play_icon} alt="Play Icon" /> Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="Info Icon" /> Info</button>
        </div>
        <Titlecards />
        </div>
      </div>
      <div className="More-Cards" style={{background:"black"}}>
      <Titlecards title={"Blockbuster Movies"} categories={"top_rated"}/>
      <Titlecards title={"Only on Netflix"} categories={"popular"}/>
      <Titlecards title={"Upcoming"} categories={"upcoming"}/>
      <Titlecards title="Only For U" categories={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
