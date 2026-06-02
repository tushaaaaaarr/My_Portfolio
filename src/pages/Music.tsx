import React from 'react';
import './Music.css';
import albumCover1 from '../images/After_Hours.png'; // Hotel California by The Eagles
import albumCover2 from '../images/ImagineDragonsEvolve.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/guns-n-roses.webp'; // Appetite for Destruction by Guns N' Roses
import albumCover4 from '../images/bestofkishorekumar.jpg'; // Best of Kishore Kumar

const favoriteGenres = ["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"];
const favoriteAlbums = [
  { title: "After Hours", artist: "The Weeknd", imgSrc: albumCover1 },
  { title: "Evolve", artist: "Imagine Dragons", imgSrc: albumCover2 },
  { title: "Appetite for Destruction", artist: "Guns N' Roses", imgSrc: albumCover3 },
  { title: "Best of Kishore Kumar", artist: "Kishore Kumar", imgSrc: albumCover4 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>"Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." 🎵</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
