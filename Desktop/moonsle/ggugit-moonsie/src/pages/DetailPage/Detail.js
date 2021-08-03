import React from 'react';
import './Detail.scss';
import DishData from './DishData';
// import Footer from '../../component/Footer/Footer';
// import Nav from '../../component/Nav/Nav';

class Detail extends React.Component {
  render() {
    return (
      <main>
        <div className="detailWrap">
          <div className="topInfo">
            <div className="imgDetailWrap">
              <img
                src="../images/DetailPage/pasta_above.jpeg"
                alt="파스타"
                witdh="600px;"
                height="600px;"
              />

              <div className="dishCarousel">
                여기까지 상단의 그림과 나와야한다
              </div>
            </div>
            <div className="dishInfoWrap">
              <div className="titleWrap">
                <div className="subTitle">고소하고 크리미한 </div>
                <div className="title">*투움바 스테이크 파스타</div>
                <div className="originInfo">원산지 : 상품정보 참조</div>
              </div>
              <DishData />
              <div className="cartButton">
                <button>장바구니 담기</button>
              </div>
            </div>
          </div>
          <div className="tabWrap">상세설명</div>
        </div>

        <div className="infoWrap">
          <div className="infoDetail">
            <div className="detailDescriptionBox">
              <img
                src="../images/DetailPage/mainboxImg.jpeg"
                alt="키트 상세설명을 위한 파스타 사진"
              ></img>
              <div className="subTitle">투움바 파스타</div>
              <span className="subText">
                유명 패밀리 레스토랑의 메뉴로 친숙한 '투움바 파스타'는 호주의
                지역 이름인 투움바(Toowoomba)에서 이름을 따온 메뉴인데요. 고소한
                맛에 매콤함을 살짝 더한 소스의 맛이 한국인의 입맛을 사로잡아
                많은 인기를 얻고 있어요. 쿡킷이 만든 '투움바 스테이크 파스타'는
                고소한 투움바 파스타에 풍미 가득한 소고기 부채살을 듬뿍 올려
                특별함을 더했답니다.
              </span>
            </div>

            <div className="cartStickBar">
              <div className="deliveryDateNotification">
                <div className="notiTitle">주문정보 안내</div>
                <div className="notiContent">
                  오전 7시 이전에 구매하시면 다음날 새벼에 받아보실 수 있습니다.
                </div>
              </div>
              <div className="stickyCartButton">
                <button>장바구니 담기</button>
              </div>
              <span className="totalPrice">총 0원</span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
