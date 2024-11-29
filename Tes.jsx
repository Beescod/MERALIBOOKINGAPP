<div className="menu-container">
  <button onClick={toggleMenu} className="menu-toggle">Menu</button>
  <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
    <div className="line-container">
      <div className={`line ${isMenuOpen ? 'grow-line' : ''}`}></div>
    </div>
    <div className="menu-items">
      <span className={`menu-item ${isMenuOpen ? 'slide-up' : ''}`}>À Propos de Nous</span>
      <span className={`menu-item ${isMenuOpen ? 'slide-up' : ''}`} style={{ animationDelay: "0.2s" }}>
        Notre Philosophie
      </span>
      <span className={`menu-item ${isMenuOpen ? 'slide-up' : ''}`} style={{ animationDelay: "0.4s" }}>
        Notre Équipe
      </span>
    </div>
  </div>
</div>
