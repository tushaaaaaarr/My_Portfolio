import React from 'react';
import './TravelExploration.css';
import { FaMountain, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';

interface Place {
  title: string;
  description: string;
  highlights?: string[];
  imgSrc?: string;
}

const placesVisited: Place[] = [
  {
    title: "Himalayas - Mountain Expedition",
    description: "An exhilarating trek through the snow-capped peaks and serene valleys.",
    highlights: ["Kedarkantha Summit", "Chandrashila Summit", "Har Ki Dun Trek", "Valley of Flowers"],
  },
  {
    title: "Ladakh - The Land of High Passes",
    description: "A high-altitude desert with breathtaking monasteries and pristine landscapes.",
    highlights: ["Pangong Lake", "Khardung La Pass", "Buddhist monasteries", "Zanskar Valley"],
  },
  {
    title: "Spiti Valley - Hidden Gem",
    description: "Remote mountain valley with ancient buddhist culture and stunning scenery.",
    highlights: ["Buddhist monasteries", "Kaza & Kalpa town", "Trekking routes", "Stargazing"],
  },
];

const bucketList: Place[] = [
  {
    title: "Mount Everest, Nepal",
    description: "Experience the majestic peaks and alpine villages of Nepal.",
  },
  {
    title: "Mount Annapurna, Nepal",
    description: "Explore the rugged mountains, glaciers, and wild landscapes of South Asia.",
  },
  {
    title: "Iceland - Land of Fire and Ice",
    description: "Discover waterfalls, geysers, and volcanic landscapes.",
  },
  {
    title: "Finland - Lapland",
    description: "Chase the mesmerizing Aurora Borealis and witness the magical Northern Lights dancing across the Arctic sky.",
  },
];

const TravelExploration: React.FC = () => {
  return (
    <div className="travel-container">
      {/* Travel Experiences */}
      <section className="travel-section places-visited">
        <div className="section-header">
          <FaMountain className="section-icon" />
          <h2>Places I've Visited</h2>
        </div>
        <p className="section-intro">Mountain trails, serene valleys, and unforgettable adventures across the Himalayas.</p>

        <div className="places-grid">
          {placesVisited.map((place, index) => (
            <div key={index} className="place-card" style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}>
              <div className="place-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="place-title">{place.title}</h3>
              <p className="place-description">{place.description}</p>
              {place.highlights && (
                <div className="highlights">
                  {place.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Travel Bucket List */}
      <section className="travel-section bucket-list">
        <div className="section-header">
          <FaCamera className="section-icon" />
          <h2>Travel Bucket List</h2>
        </div>
        <p className="section-intro">Dream destinations on my radar for future expeditions.</p>

        <div className="bucket-grid">
          {bucketList.map((destination, index) => (
            <div key={index} className="bucket-card" style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}>
              {/* <div className="bucket-number">{index + 1}</div> */}
              <h3 className="bucket-title">{destination.title}</h3>
              <p className="bucket-description">{destination.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="travel-section photo-gallery">
        <div className="section-header">
          <FaCamera className="section-icon" />
          <h2>Mountain Adventures Gallery</h2>
        </div>
        <p className="section-intro">My mountain expedition photos will appear here.</p>
        <div className="gallery-placeholder">
          <p>Gallery Coming Soon 📷</p>
        </div>
      </section>
    </div>
  );
};

export default TravelExploration;
