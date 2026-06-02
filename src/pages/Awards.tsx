import React from 'react';
import './Awards.css';
import { FaTrophy, FaStar, FaRocket } from 'react-icons/fa';

interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: JSX.Element;
}

const awards: Award[] = [
  {
    title: "Best AI Solution Developer",
    issuer: "LTM (LTIMindtree)",
    year: "2026",
    description: "Recognized for outstanding contributions to BlueVerse AI-driven SDLC platform.",
    icon: <FaTrophy />,
  },
  {
    title: "Team Lead Excellence",
    issuer: "LTM (LTIMindtree)",
    year: "2026",
    description: "Led high-performing team achieving 30% improvement in development throughput.",
    icon: <FaStar />,
  },
  {
    title: "One day District Magistrate",
    issuer: "Kasganj District Administration",
    year: "2017",
    description: "Appointed as District Magistrate for a day, overseeing administrative functions and public services.",
    icon: <FaRocket />,
  },
];

const Awards: React.FC = () => {
  return (
    <div className="awards-container">
      <div className="awards-header">
        <h1 className="awards-title">🏆 Awards & Recognition</h1>
        <p className="awards-subtitle">Achievements and recognitions throughout my professional journey.</p>
      </div>

      <div className="awards-content">
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="award-card-inner">
                <div className="award-icon-container">
                  {award.icon}
                </div>

                <h2 className="award-card-title">{award.title}</h2>

                <div className="award-metadata">
                  <p className="award-issuer">{award.issuer}</p>
                  <p className="award-year">{award.year}</p>
                </div>

                <p className="award-description">{award.description}</p>

                <div className="award-badge">
                  <span>Recognition</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="awards-summary">
        <h2>Professional Recognition</h2>
        <p>
          These awards reflect my dedication to excellence in software development, innovative problem-solving,
          and leadership. I'm committed to pushing the boundaries of AI-driven solutions and building high-performing teams.
        </p>
      </div> */}
    </div>
  );
};

export default Awards;
