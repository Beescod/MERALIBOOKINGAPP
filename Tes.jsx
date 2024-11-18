return (
  <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <nav>
      <div className="burger-menu-container" onClick={handleMenuClick}>
        <div className="burger-menu">
          <div className={burgerClass}></div>
          <div className="burger-bar middle-bar" style={{ width: '20px' }}></div>
          <div className={burgerClass}></div>
        </div>
        <span className="menu-label text-style">Menu</span>
      </div>
    </nav>

    <div className={`sliding-element ${isScrolled ? 'slide-in' : 'slide-out'}`}>
      This content slides in when scrolled.
    </div>

    <div className={menuClass}>
      {/* Menu content remains the same */}
    </div>

    <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="language-options" style={{ display: isScrolled ? 'none' : 'flex' }}>
        <a className="text-style1" href="#">FR</a>
        <a className="text-style" href="#">/EN</a>
      </div>
      <div
        className={`nav-logo ${isScrolled ? 'open-from-middle' : ''}`}
        style={{ display: isScrolled ? 'block' : 'none' }}
      >
        <a href="/">
          <img src={BDLogo} alt="Dynamic" width={100} height={40} className="nav-logo-i" />
        </a>
      </div>
      <div className="nav-links">
        <a href="#Magazine" className="text-style2">LE MAGAZINE</a>
        <a href="#Reservations" className="text-style2">RESERVE</a>
      </div>
    </div>
  </div>
);
