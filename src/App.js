import React from 'react';
import Video from './videoComponent';
import './App.css';
function App() {
  
  return (
    <div className='kendo-details'>
      <h2 style={{ padding: "20px 20px", textAlign: "center", color: "Blue", fontSize: "50px"}}>Welcome To My React App</h2>
      <div id="like_button_container"></div>
    <Video />
    </div>
  );
}

export default App;

// import ShakaPlayer from 'shaka-player-react';
// import 'shaka-player/dist/controls.css';
// // import logo from './logo.svg';
// // import video from './sample-mp4-file.mp4';
// import video from './trailer_hd.mp4';
// import './App.css';

// function App() {
//   return (
//     <ShakaPlayer autoPlay src= {video} />
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;

