import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST_TOP, NAV_LIST_BOTTOM } from './NAV_LIST';

import './Nav.scss';

class Nav extends React.Component {
  render() {
    const topList = NAV_LIST_TOP.map(elem => {
      return (
        <li key={elem.id}>
          <Link to={elem.url}>{elem.text}</Link>
        </li>
      );
    });
    const bottomList = NAV_LIST_BOTTOM.map(elem => {
      return (
        <li key={elem.id}>
          <Link to={elem.url}>{elem.text}</Link>
        </li>
      );
    });
    return (
      <nav className="navWrap">
        <div className="topNavWrap">
          <nav className="topList">
            <ul>{topList}</ul>
          </nav>
        </div>
        <div className="bottomNavWrap">
          <nav className="bottomNav">
            <h1 className="logo">GGUGIT</h1>
            <div className="bottomList">
              <ul>{bottomList}</ul>
            </div>
            <div>
              <span>장바구니</span>
              <span>매뉴찾기</span>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}

export default Nav;
