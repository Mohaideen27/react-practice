import React, { useRef } from "react";

const About = () => {
  let vdo = useRef();
  function play() {
    console.log(vdo.current);
    vdo.current.play();
  }
  function pause() {
    console.log(vdo.current);
    vdo.current.pause();
  }

  return (
    <div>
      <h1>About</h1>
      <div className="left">
        <h1>Video play and pause</h1>
      </div>
      <div className="right">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zHqGSU7Ymw0?si=g8xVrVeirZNlo5mb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          ref={vdo}
        ></iframe>
        <div className="btns">
          <button onClick={play}>play</button>
          <button onClick={pause}>pause</button>
        </div>
      </div>
    </div>
  );
};

export default About;
