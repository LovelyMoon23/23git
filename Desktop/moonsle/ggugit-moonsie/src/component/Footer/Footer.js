import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LIST_TOP, FOOTER_LIST_BOTTOM } from './FOOTER_LIST';

import './Footer.scss';

class Footer extends React.Component {
  render() {
    const topList = FOOTER_LIST_TOP.map(elem => {
      const { id, text, url } = elem;
      return (
        <li key={id}>
          <Link to={url}>{text}</Link>
        </li>
      );
    });

    const bottomList = FOOTER_LIST_BOTTOM.map((elem, idx) => {
      return (
        <li key={idx}>
          <span>{elem}</span>
        </li>
      );
    });

    return (
      <footer className="publicFooter">
        <div className="footerWrap">
          <div className="footerNavWrap">
            <div className="footerLogo">GGUGIT</div>
            <div className="footerListWrap">
              <nav className="topNav">
                <ul className="topList">{topList}</ul>
              </nav>
              <nav className="bottomNav">
                <ul className="bottomList">{bottomList}</ul>
              </nav>
            </div>
            <div className="footerRightSide">
              <span>GG계열사 바로가기</span>
              <span>고객행복센터 1111-1111</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
