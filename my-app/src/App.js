import logo from './logo.svg';
import './App.css';
import img2 from './srcimg/ImageInSrc.png';
import React from 'react'


function App() {
  return (
    <div className="App">
      <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Sondes Ahmed</h1>
    <br />
    <img src={img2} alt="ImageInSrc" />
    <br />
    <img src="./images/ImageInPublic.png" alt="" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
</div>
  
  );

}

export default App;
