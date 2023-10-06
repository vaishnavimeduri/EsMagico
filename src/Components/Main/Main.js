import React from "react";
import topext from "../../img/Top Extension for Logo.svg";
import banner from "../../img/Presenting Banner@3x.png";
import leftbar from "../../img/Left Bar.svg";
import company from "../../img/Bandland Logo@3x.png";
import green from "../../img/FAQ Base.svg";
import arrowdown from "../../img/Faq Arrow white up.svg";
import arrowup from "../../img/Faq Arrow (1).svg";
import biggreen from "../../img/FAQ Basebig.svg";
import "./Main.css";

function Main(props) {
  const handleToggle = (x) => {
    props.handleToggle(x);
  };
  return (
    <div className="main">
      <img src={topext} alt="" className="topext" />
      <img src={banner} alt="" className="banner" />
      <div className="leftbar">
        <img src={leftbar} alt="" />
      </div>
      <div className="rightbar">
        <img src={leftbar} alt="" />
      </div>
      <img src={company} alt="" className="company" />
      <div className="subtitle">EMBASSY INTERNATIONAL RIDING SCHOOL</div>
      <div className="freq">FREQUENTLY ASKED QUESTIONS</div>
      {props.toggle.map((value, index) => {
        return (
          <div className={"listitem" + index} key={index}>
            {!value ? (
              <>
                {" "}
                <img
                  src={biggreen}
                  alt=""
                  className="green"
                  style={{ zIndex: 1 }}
                />
                <p className="textopen" style={{ zIndex: 2 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore consequuntur voluptatibus, sapiente deserunt in
                  consectetur exercitationem ipsa cupiditate consequatur soluta
                  perspiciatis dolor officia reprehenderit illum nesciunt sit
                  magni non. Praesentium.
                </p>
                <img
                  src={arrowup}
                  style={{ zIndex: 2 }}
                  alt=""
                  className="arrow"
                  onClick={() => handleToggle(index)}
                />
              </>
            ) : (
              <>
                {" "}
                <img src={green} alt="" className="green" />
                <p className="text">What's Allowed</p>
                <img
                  src={arrowdown}
                  alt=""
                  className="arrow"
                  onClick={() => handleToggle(index)}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Main;
