import React from "react";
import Link from "next/link";
function PostsList(props) {
  const showPostList = () => {
    var result = null;
    var {data} = props;
    if (data && data.length > 0) {
      const newArray = [...data].reverse()
      result = newArray.map((dt, index) => {
        if(index < 5)
        return (
          <div className="item" key={index}>
            <div
              className="thumb link_abs"
              style={{
                background: "#1a73e8",
                backgroundImage: `url(${dt.post_image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a
                href={dt.post_slug}
                title={dt.post_title}
              ></a>
            </div>
            <div className="bxnd">
              <a
                href={dt.post_slug}
                title={dt.post_title}
              >
                {dt.post_title}
              </a>
            </div>
          </div>
        );
      });
    }
    return result;
  };
  return (
    <div className="bxw33 pad20 bxbo_tt bxitem_cat">
      <div className="bxinner">
        <div className="bxlistbytax ">
          <h2>
            <Link href={`/thu-vien-ca-cuoc/${props.slug}/`}><span>{props.title}</span></Link>
          </h2>
          <div className="bxinner ">{showPostList()}</div>
        </div>
      </div>
    </div>
  );
}

function ColListNews(props) {
  return (
    <div className="bxchuyenmuc text-limit-three bx_col3">
      <div className="bxflex bxflex_mg">
        <PostsList data={props.data1} title="Hướng Dẫn Cá Cược" slug="huong-dan-ca-cuoc" />
        <PostsList data={props.data2} title="Kinh Nghiệm Cá Cược" slug="kinh-nghiem-ca-cuoc" />
        <PostsList data={props.data3} title="Tin Tức Cá Cược" slug="tin-tuc-ca-cuoc" />
      </div>
    </div>
  );
}

export default ColListNews;
