<div className="video-container">
  {isPlaying && (
    <video
      className="background-video"
      src={Herovideo}
      autoPlay
      loop
      muted
    />
  )}
  <div className="content-overlay">
    {/* Your overlay content */}
    {!isPlaying && (
      <img
        src={playIcon}
        alt="playIcon"
        width={50}
        height={50}
        onClick={handlePlayClick}
        className="play-button"
      />
    )}
    {isPlaying && (
      <img
        src={pauseIcon}
        alt="Pause video"
        className="video-pause-icon"
        onClick={handlePauseClick}
      />
    )}
    <h1>Your Text Here</h1>
    <p>Additional description or tagline</p>
  </div>
</div>
