import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="lang-box">
          <div className="lang">KOREAN</div>
          <div className="lang">ENGLISH</div>
          <div className="lang">CHINESE</div>
          <div className="lang">JAPANESE</div>
        </div>
      </>
    );
  }
}

export default Header;
