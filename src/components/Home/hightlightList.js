import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function HightLightList(props) {
  const showHighLightList = () => {
    var result = null;
    var { data } = props;
    if (data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 8)
          return (
            <div className="bxitem " key={index}>
              <div className="bxinner">
                <div
                  className="thumb link_abs"
                  data-item="newzzzzz"
                  style={{
                    background: "#1a73e8",
                    backgroundImage:
                      `url(${dt.post_image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Link
                    href={`${dt.post_slug}`}
                    title="Video highlight Vancouver Whitecaps FC vs York 9 FC, ngày 23/06"
                  ><a></a></Link>
                </div>
                <div className="bxnd">
                  <Link
                    href={`${dt.post_slug}`}
                    title="Video highlight Vancouver Whitecaps FC vs York 9 FC, ngày 23/06"
                  >
                    {dt.post_title}
                  </Link>
                </div>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  return (
    <div className="bxss bxlistnd marg0" style={{marginTop: "20px"}}>
      <div className="bxinner">
        <div className="bxlist_video_cat">
          <div className="bxvideo_contain">
            <div className="bxinner grid">
              <div className="bxhead">
                <h2>
                  <Image
                    data-lazyloaded="1"
                    src="https://vaobo.com/wp-content/uploads/2021/09/star.png?v=1655975658"
                    data-src="https://vaobo.com/wp-content/uploads/2021/09/star.png?v=1655975658"
                    width="15"
                    height="14"
                    alt="star"
                  />
                  <Link href="">Highlight bóng đá</Link>
                </h2>
                <div className="bxlink">
                  <Link href="">
                    <a>
                      Xem tất cả
                      <FontAwesomeIcon icon={["fas", "fa-chevron-right"]} />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bxbox_grid">{showHighLightList()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HightLightList;
