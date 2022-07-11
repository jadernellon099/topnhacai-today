import Link from "next/link";
import React from "react";



function NewsList(props) {
  const createMarkup = (db) => {
    if (db) {
      return { __html: db };
    } else {
      return { __html: "loading..." };
    }
  };
  const commentaryList = () => {
    var result = null;
    var { data } = props;
    
    if (data&& data.length > 0) {
      const newArray = [...data].reverse()
      result = newArray.map((dt, index) => {
        if(index < 5)
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
              <div className="des"><p dangerouslySetInnerHTML={createMarkup(dt.post_description)}></p></div>
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
    const newArray = [];
    if(data2){
      newArray = [...data2].reverse()
    }
    if (data2 && data2.length > 0) {
      result = newArray.map((dt, index) => {
        if(index < 5)
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
              <div className="des"><p dangerouslySetInnerHTML={createMarkup(dt.post_description)}></p></div>
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
