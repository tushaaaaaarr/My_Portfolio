import React from 'react';
import './Recommendations.css';}
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure
import chariProPic from '../images/chris.jpg'; // Adjust the path based on your directory structure
import sayanProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Aarav Agnihotri" className="profile-pic" />
          <div>
            <h3>Aarav Agnihotri</h3>
            <p>AI Engineer @LTM | IIT BHU</p>
            <p className="date">February 09, 2026</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I have had the privilege of knowing Tushar closely, as I currently work under his leadership at LTIMindtree. What I admire most about him is his calm and composed nature, especially when handling complex and high-pressure situations. His technical expertise is exceptionally strong, he is a 360° Man, knows complete full stack with an experience of Deployment, CI CD, etc also. and he is always willing to support everyone on the team.</p>
          <p>Tushar is truly one of the strongest backbones of our team, with a highly solution-oriented mindset. He maintains a friendly approach to juniors while showing great respect toward seniors, creating a positive and collaborative work environment."</p>
          <p>💼 "I confidently recommend Tushar to any organization looking for a dependable, skilled, and supportive professional. With his dedication and capabilities, he certainly has a long and successful journey ahead."</p>
        </div>
      </div>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chariProPic} alt="Sri Charitha Thota" className="profile-pic" />
          <div>
            <h3>Sri Charitha Thota</h3>
            <p>Presales Consultant @Motivity Labs Inc</p>
            <p className="date">August 22, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I had the pleasure of working with Tushar at LTIMindtree, Bangalore, and I can confidently say he is a true team player and a highly dependable professional. His ability to quickly grasp complex requirements, collaborate seamlessly with cross-functional teams, and deliver quality results made a big impact on our projects.</p>
          <p>What stood out the most was his problem-solving mindset and positive attitude, even during challenging timelines. Tushar brings both technical expertise and strong interpersonal skills, which makes him not only a great colleague but also someone you can always count on for support and guidance."</p>
          <p>💼 "I highly recommend Tushar for any opportunity—he will be a valuable asset to any team he joins."</p>
        </div>
      </div>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={sayanProfilePic} alt="Sayan Chakraborty" className="profile-pic" />
          <div>
            <h3>Sayan Chakraborty</h3>
            <p>Developer @Thoughtworks | Ex-LTM</p>
            <p className="date">August 1, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I've had the opportunity to work with Tushar right from our early days at LTIMindtree, and he's someone who consistently brings clarity, dedication, and a calm presence to the team. From day one, his strength in frontend development—especially with Vue.js—stood out, and his ability to adapt to new technologies like LLMs made collaborating with him both smooth and rewarding.</p>
          <p>One project that really highlighted his skills was Project-X, where we built an LLM-based document analysis tool. Tushar took charge of the frontend, and his clean, thoughtful implementation played a big role in the product's usability. We've also worked together on backend-heavy Spring Boot applications, and I've always found him dependable, quick to pick things up, and genuinely collaborative."</p>
          <p>💼 "Tushar is someone who quietly delivers value and makes the team better just by being on it. I'd absolutely recommend working with him."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
