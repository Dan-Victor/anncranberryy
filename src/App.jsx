import { useState, useEffect } from 'react'
import NavBar from './navmenu.jsx'
import SideBar from './sidebar.jsx'
import './App.css'
import Container from './imgcontainer.jsx'


function App() {
  
  {/*for booking appointment whatsapp */}
 const handleClick = () => {
        const phoneNumber =2348140534471
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile ? `whatsapp://send?phone=${phoneNumber}` : `https://api.whatsapp.com/send?phone=${phoneNumber}`;

        fetch(url, { mode: 'no-cors' })
            .then(() => window.location.href = url)
            .catch(() => window.open(url, '_blank'));
    };


    {/*for checking out the gallery instagram */}
 const handleClick2 = () => {
  const username = 'anncranberry'
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const url = isMobile ? `instagram://user?username=${username}` : `https://www.instagram.com/${username}/`;

  fetch(url, { mode: 'no-cors' })
      .then(() => window.location.href = url)
      .catch(() => window.open(url, '_blank'));
};
  return (
    <>
    
          <NavBar/>
      <SideBar/>
      <h1  className='bespoke'>Bespoke Classy Outfits For Classy <span className='women'>Women</span></h1>
      <a  onClick={handleClick}><button className='buton'>Book an appointment<svg className='arrow' width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6L12 0V5H-1V7H12V12L19 6Z" fill="#DF8E94"/>
</svg>
</button></a>
    <div className='in-bar' ></div>
   <img src="./image 6.jpg" alt='img' loading='lazy' className='first-img'/>
    <div className='f-di'></div>
    <div className='s-di'></div>
    <div className='section-2' id='sec'></div>
    <div className='style-di'></div>
    <img src="./sharon.png" alt='sharon' loading='lazy' className='sharon'/>
    <h1 className='tail'>Tailored to perfection just for you</h1>
    <p className='tail-2'>Anncranberry is a Female clothing brand specializing in the creation of bespoke luxury bridal and top-notch couture dresses. Our Fashion Academy is dedicated to educating and empowering individuals to be fashion business owners.</p>
    
    <h1  className='bespoke'>Bespoke Classy Outfits For Classy <span className='women'>Women</span></h1>
      <a onClick={handleClick2}><button className='buton-2'>see fashion gallery<svg className='arrow' width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6L12 0V5H-1V7H12V12L19 6Z" fill="#DF8E94"/>
</svg>

</button></a>
 <Container/>
    </>
  )
}

export default App
