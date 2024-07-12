import React from 'react';

function YoutubePlayer() {
  return (
    <div className="player-container">
      <div className="player-header">
        <h2>Watch the season 7 trailer!</h2>
      </div>
      <div className="player-youtube">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PkZtVBNkmso?si=KI55lxvQe7tz4haj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

  );
}

export default YoutubePlayer;
