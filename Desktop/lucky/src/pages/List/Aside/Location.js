/*global kakao*/
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Location = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng( //마커 포지션 띄우기
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '1800px', height: '1000px' }}></div>
    </div>
  );
};

export default Location;
