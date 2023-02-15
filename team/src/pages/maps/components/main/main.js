import { useEffect } from "react";
import * as Styled from "./style";

const Main = () => {
  const { kakao } = window;
  useEffect(() => {
    let mapcontainer = document.getElementById("maps");

    let mapoption = {
      center: new kakao.maps.LatLng(35.85133, 127.734086),
      level: 3,
      disableDoubleClickZoom: true,
    };
    //지도생성
    let map = new kakao.maps.Map(mapcontainer, mapoption);

    function displayMarker(locPosition, message) {
      const imageSize = new kakao.maps.Size(24, 35);
      // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
        // image: markerImage,
      });

      const iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });
      //드래그 막기
      map.setDraggable(false);
      //줌 막기
      map.setZoomable(false);
      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }

    function currentLocation() {
      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

          let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          let message =
            '<div style="padding:5px;margin-left:20px;width:100%;">SHOP</div>'; // 인포윈도우에 표시될 내용입니다

          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition, message);
          console.log(locPosition);
        });
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        let locPosition = new kakao.maps.LatLng(
            37.4812845080678,
            126.952713197762
          ),
          message = "현재 위치를 알 수 없어 기본 위치로 이동합니다.";

        displayMarker(locPosition, message);
      }
      return true;
    }

    currentLocation();
  });

  return (
    <div>
      <Styled.Title>
        <p>찾아오시는 길</p>
      </Styled.Title>
      <Styled.MapWapper className="map">
        <Styled.MapContainer
          className="mapcontainer"
          id="maps"
        ></Styled.MapContainer>
      </Styled.MapWapper>
      <Styled.TextDiv>
        <h2>찾아오시는 길</h2>
        <p>
          <span>⊙전철:</span>가락시장역 사거리 - 3호선 양재역 2번 출구
        </p>
        <p>
          <span>⊙주소:</span>서울시 서초구 서초동 1360-14번지 | 낫소빌딩 2층
          <br />
          <span>한국결혼지능연구소</span>
        </p>
        <p>
          <span>⊙연락처: Tel. 02-587-8824 | Fax. 02-3472-9349</span>
        </p>
      </Styled.TextDiv>
    </div>
  );
};
export default Main;
