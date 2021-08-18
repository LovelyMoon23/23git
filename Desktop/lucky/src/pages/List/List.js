import React, { useState } from 'react';
import styled from 'styled-components';
import Location from './Aside/Location';

// const wholeWrap = styled.div`
//   margin: 0 auto;
// `;

// const headerText = styled.h1`
//   font-size: 400px;
// `;

function List() {
  // const [click, setClick] = useState(0);
  // const onIncrease = () => {
  //   setNumber(prevNumber => prevNumber + 1);

  return (
    <div className="wholeWrap">
      <header classNmae="pageHeader">
        <h1 className="headerText">지도에서 선택한 지역의 숙소</h1>
      </header>

      <main>
        <span> 예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. </span>
        <span className="notiDetail"> 자세히 알아보기 </span>
        <div className="map">
          <Location />
        </div>
      </main>
    </div>
  );
}
export default List;
