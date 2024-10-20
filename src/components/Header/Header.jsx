import React from 'react';
import './Header.css'; // (Optional) Add your styles here

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"/>
        </div>
        <div className="logo">
        <h1>Chaperone</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Plants & Pots</a></li>
          <li><a href="/contact">Tools</a></li>
          <li><a href="/contact">Our Service</a></li>
          <li><a href="/contact">Blog</a></li>
          <li><a href="/contact">Our Story</a></li>
          <li><a href="/contact">FAQs</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;