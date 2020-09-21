import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  render() {
  //   var sceneryFrames = [{
  //     transform: 'translateX(100%)'
  //   },
  //   {
  //     transform: 'translateX(-100%)'
  //   }
  // ];

  // var sceneryTimingBackground = {
  //   duration: 20000,
  //   iterations: Infinity
  // };


  // var background1 = document.getElementById('background1');
  // var background2 = document.getElementById('background2');

  // var background1Movement = background1.animate(
  //   sceneryFrames, sceneryTimingBackground);
  // background1Movement.currentTime = background1Movement.effect.timing.duration / 2;

  // var background2Movement = background2.animate(
  //   sceneryFrames, sceneryTimingBackground);

  // /* Background animations */

  // var TreeFrames = [{
  //     transform: 'translateX(100%)'
  //   },
  //   {
  //     transform: 'translateX(-100%)'
  //   }
  // ];
  // var sceneryTimingForeground = {
  //   duration: 12000,
  //   iterations: Infinity
  // };
  // var foreground1 = document.getElementById('foreground1');
  // var foreground2 = document.getElementById('foreground2');

  // var foreground1Movement = foreground1.animate(
  //   TreeFrames, sceneryTimingForeground);
  // foreground1Movement.currentTime = foreground1Movement.effect.timing.duration / 2;

  // var foreground2Movement = foreground2.animate(
  //   TreeFrames, sceneryTimingForeground);
  

    return (
      <div className="wrapper">
    <div className="sky"></div>
    <div className="earth">
      <div id="red-queen_and_alice">
      </div>
    </div>

    <div className="scenery" id="foreground1">
      <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
    </div>
    <div className="scenery" id="foreground2">
      <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
      <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
    </div>
    <div className="scenery" id="background1">
      <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
      <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
      <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
    </div>
    <div className="scenery" id="background2">
      <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

      <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
      <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
    </div>
  </div>
    );
  }
}

export default App;