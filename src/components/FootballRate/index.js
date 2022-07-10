import React, { useState } from "react";

FootballRate.propTypes = {};

function FootballRate(props) {
  const [iframe, setIframe] = useState("ifnguon188bet");

  return (
    <div className="bxss ssiframe">
      <div className="bxinner">
        <div className="tabs_iframe">
          <ul>
            <li className="active">
              <button
                className={iframe === "ifnguon188bet" ? "butoniframe active" : "butoniframe"}
                // data-id="#ifnguon188bet"
                onClick={()=> setIframe("ifnguon188bet")}
              >
                Tỷ lệ 188Bet
              </button>
            </li>
            <li className="">
              <button
                className={iframe === "ifnguonw88" ? "butoniframe active" : "butoniframe"}
                // data-id="#ifnguonw88"
                onClick={()=> setIframe("ifnguonw88")}
              >
                Tỷ lệ w88
              </button>
            </li>
          </ul>
          <div id="ifnguon188bet" className="bxiframe_nguon active">
            <iframe
              data-lazyloaded="1"
              src={
                iframe === "ifnguon188bet"
                  ? "https://lofe.456789.site/"
                  : "https://odds.mywinday.com/_View/RMOdds2.aspx?ot=t&amp;isWC=False&amp;ia=0&amp;isSiteFav=False"
              }
              data-src={
                iframe === "ifnguon188bet"
                  ? "https://lofe.456789.site/"
                  : "https://odds.mywinday.com/_View/RMOdds2.aspx?ot=t&amp;isWC=False&amp;ia=0&amp;isSiteFav=False"
              }
              width="100%"
              height="1800"
              data-ll-status="loaded"
              className="entered litespeed-loaded"
              style={{ opacity: "1", visibility: "visible" }}
            ></iframe>
          </div>
          {/* <div id="ifnguonw88" className="bxiframe_nguon">
            <iframe
              data-lazyloaded="1"
              src=""
              data-src="https://odds.mywinday.com/_View/RMOdds2.aspx?ot=t&amp;isWC=False&amp;ia=0&amp;isSiteFav=False"
              width="100%"
              height="1800"
              style={{opacity: "1", visibility: "visible"}}
              data-ll-status="loaded"
              className="entered litespeed-loaded"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FootballRate;
