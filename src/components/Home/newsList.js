import Link from "next/link";
import React from "react";

function NewsList(props) {
  const commentaryList = () => {
    var result = null;
    var { data } = props;
    if (data.length > 0) {
      result = data.map((dt, index) => {
        return (
          <div className="item bxlist_small" key={index}>
            <div
              className="thumb link_abs"
              style={{
                backgroundColor: "#1a73e8",
                backgroundImage: `url(${dt.post_image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Link
                href={`/nhan-dinh-bong-da/` + dt.post_slug}
                title={dt.post_title}
              >
                <a></a>
              </Link>
            </div>
            <div className="bxnd">
              <Link
                href={`/nhan-dinh-bong-da/` + dt.post_slug}
                title={dt.post_title}
              >
                {dt.post_title}
              </Link>
              <div className="des">{dt.post_description}</div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  const CasinoOnline = () => {
    var result = null;
    var { data2 } = props;
    if (data2.length > 0) {
      result = data2.map((dt, index) => {
        return (
          <div className="item" key={index}>
            <div
              className="thumb link_abs"
              style={{
                backgroundColor: "#1a73e8",
                backgroundImage: `url(${dt.post_image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a href={`/tro-choi/` + dt.post_slug} title={dt.post_title}></a>
            </div>
            <div className="bxnd">
              <a href={`/tro-choi/` + dt.post_slug} title={dt.post_title}>
                {dt.post_title}
              </a>
              <div className="des">{dt.post_description}</div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="bxchuyenmuc  bx_col2">
      <div className="bxflex bxflex_mg">
        <div className="bxw50 bxbo_tt pad20 bxitem_cat">
          <div className="bxinner">
            <div className="bxlistbytax">
              <h2>
                <Link href="/nhan-dinh-bong-da/">Nhận định bóng đá</Link>
              </h2>
              <div className="bxinner">{commentaryList()}</div>
            </div>
          </div>
        </div>
        <div className="bxw50 bxbo_tt pad20 bxitem_cat">
          <div className="bxinner">
            <div className="bxlistbytax ">
              <h2>
                <Link href="/tro-choi/">Casino Trực Tuyến</Link>
              </h2>
              <div className="bxinner ">{CasinoOnline()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
