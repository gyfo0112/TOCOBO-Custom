import React from "react";
import { instaData } from "../util/instagram";
import "./styles/Instagram.scss";

const Instagram = () => {
  return (
    <div className="inner instar-inner">
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@ader_error</p>
      </div>

      <ul className="instar-list">
        {instaData.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              style={{ backgroundImage: `url(${item.image})` }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instagram;