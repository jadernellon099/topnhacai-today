import React from "react";
import Link from "next/link";

function PostList2(props) {
  const showPostList = () => {
    var result = null;
    var { data } = props;
    if (data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 7)
          return (
            <div className="item">
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
                <a href={dt.post_slug} title={dt.post_title}></a>
              </div>
              <div className="bxnd">
                <a href={dt.post_slug} title={dt.post_title}>
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
        <div className="bxlistbytax style2">
          <h2>
            <Link href={props.slug}>{props.title}</Link>
          </h2>
          <div className="bxinner ">{showPostList()}</div>
        </div>
      </div>
    </div>
  );
}

function ColListNews2(props) {
  return (
    <div className="bxchuyenmuc bx_col3">
      <div className="bxflex bxflex_mg">
        <PostList2 data={props.data1} title="Cá Cược Thể Thao" slug="ca-cuoc-the-thao" />
        <PostList2 data={props.data2} title="Trò Chơi" slug="tro-choi" />
        <PostList2 data={props.data3} title="Lô Đề Online" slug="lo-de-online" />
      </div>
    </div>
  );
}

export default ColListNews2;
