import React from "react";
import CardInfo from "./CardInfo";
import mainImg from "../aespamain.jpg";

export default function BodyInfo() {
  return (
    <div className="body-info">
      <div className="body-item1">
        <CardInfo
          title={"NOTICE"}
          boardtitle={[
            "LEE CHANHYUK 1st SOLO ALBUM",
            "Berlin 추가 공연 안내 : BLACKPINK WORLD TOUR",
          ]}
          date={["2022.10.11", "2022.09.16"]}
        />
        <CardInfo
          title={"MUSIC VIDEO"}
          img={mainImg}
          boardtitle={["파노라마 (Panorama)"]}
          artistName={["LEE CHANHYUK"]}
          date={["2022.10.17"]}
        />
        <CardInfo
          title={"NEWS"}
          img={mainImg}
          boardtitle={["트레저, 유닛곡 'VolKno'"]}
          date={["2022.11.07"]}
        />
        <CardInfo
          title={"YG LIFE"}
          boardtitle={[
            "BLACKPINK - '붐바야 (BOOMBAYA)",
            "TREASURE - 'Volkno' M/V",
          ]}
          date={["Fri, 11 Nov 2022", "Fri, 11 Nov 2022"]}
        />
      </div>
      <div className="body-item2">
        <div style={{ backgroundColor: "red" }}>2</div>
        <div style={{ backgroundColor: "red" }}>2</div>
        <div style={{ backgroundColor: "red" }}>2</div>
        <div style={{ backgroundColor: "red" }}>2</div>
      </div>
    </div>
  );
}
