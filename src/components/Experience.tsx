import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="experience-title">Experience</div>
      <div className="experience-section">
        <h2>Non-Technical Experience</h2>
        <div className="experience-item">
          Worked at Citibank for 6 months in 2013, primarily in financial credit
          analysis for large clients.
        </div>
        <div className="experience-item">
          Worked at the São Paulo State Court (Hely Lopes Meireles) as a judge's
          intern, handling legal demands.
        </div>
        <div className="experience-item">
          Worked at PK Advocates as an economist and law intern, performing due
          diligence.
        </div>
        <div className="experience-item">
          Worked at the São Paulo State Public Defender's Office, assisting
          people in poverty without lawyers.
        </div>
        <div className="experience-item">
          Worked at the law firm PMLA, focusing on technology law and consumer
          law.
        </div>
      </div>
      <div className="experience-section">
        <h2>Technical Experience</h2>
        <div className="experience-item">
          Worked for 6 months at Jusbrasil doing web scraping in Python to
          extract data from courts.
        </div>
        <div className="experience-item">
          Worked for 2.5 years as a developer, handling both web scraping and
          the engine to download data. Also analyzed problematic data in
          BigQuery and developed an internal visual platform in React and
          TypeScript for employees to download court data, with unit tests in
          Jest.js.
        </div>
      </div>
    </div>
  );
};

export default Experience;
