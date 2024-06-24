import React from "react";
import "./Intro.css";

const Intro: React.FC = () => {
  return (
    <div className="intro-container">
      <div className="intro-title">Welcome to my portfolio</div>
      <div className="intro-text">
        Hello, how are you? I hope you are well! My name is Felipe Ogata, but
        everyone calls me Ogata, which is my surname. In short, I have three
        academic degrees: Economics, Law, and now Systems Analysis and
        Development. Despite the differences, my main focus now is in the area
        of technology and information. I have been working as a developer since
        2020, when I made my career change and I intend to continue in it
        because I love technology so much! I work as a software engineer
        (full-stack dev), working in stacks with
        <span className="intro-highlight">Python</span> on the back-end, using
        <span className="intro-highlight">FastAPI</span> and
        <span className="intro-highlight">Flask</span>, and on the front-end I
        use
        <span className="intro-highlight">JavaScript</span>,
        <span className="intro-highlight">TypeScript</span>, and
        <span className="intro-highlight">React</span>. I prefer front-end
        development.
      </div>
      <a href="https://github.com/seu-usuario" className="intro-link">
        See my projects
      </a>
    </div>
  );
};

export default Intro;
