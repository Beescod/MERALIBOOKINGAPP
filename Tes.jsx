<div className="full-container">
  <div className="your-container">
    <div className="your-container2">
      <div className="your2">
        <div className="line-container">
          <div className="your">
            <span className="text-style31">SERVICES</span>
          </div>
          <div className="line"></div>
        </div>
        <div className="right">
          <span
            onMouseEnter={() => handleMouseEnter(Facialtreatments)}
            onMouseLeave={handleMouseLeave}
            className={`text-style3 ${hoverClass} ${animationClass}`}
          >
            MASSAGES
          </span>
          <!-- Additional span elements for other services -->
        </div>
      </div>
      <div className="menu-options">
        <div className="menu-item">
          <span className="line-divider">|</span>
          <span className="text-style31">SPECIAL OFFERS</span>
        </div>
        <div className="menu-item">
          <span className="line-divider">|</span>
          <span className="text-style31">BOUTIQUES</span>
        </div>
      </div>
    </div>
    <div className="image-container">
      <div className={`image-wrapper ${animationClass}`}>
        <img src={image} className="img" alt="Dynamic" />
      </div>
    </div>
  </div>
</div>
