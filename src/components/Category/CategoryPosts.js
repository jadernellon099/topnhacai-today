import React, { useEffect, useState } from "react";
import Link from "next/link";

CategoryPost.propTypes = {};

function CategoryPost(props) {
  const createMarkup = () => {
    if (props.tax && props.tax.taxDescription) {
      return { __html: props.tax.taxDescription };
    } else {
      return { __html: "" };
    }
  };

  const innerHTMLs = (data) => {
    if (data) {
      return { __html: data };
    } else {
      return { __html: "" };
    }
  };


  const postHead = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 2)
          return (
            <div className="bxitem_post" key={index}>
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link href={dt.post_slug}>
                  <a></a>
                </Link>
              </div>
              <div className="bxtt">
                <h5>
                  <Link href={dt.post_slug}>{dt.post_title}</Link>
                </h5>
                <p
                  dangerouslySetInnerHTML={innerHTMLs(dt.post_description)}
                ></p>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  const postBody = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index > 1 && index < 5)
          return (
            <div className="bxitem_post" key={index}>
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link href={dt.post_slug}>
                  <a></a>
                </Link>
                <div className="bxcat_abs ">
                  {/* <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/phom/">
                  Phỏm
                </a> */}
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <Link href={dt.post_slug}>{dt.post_title}</Link>
                </h5>
                <p
                  dangerouslySetInnerHTML={innerHTMLs(dt.post_description)}
                ></p>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  const postBottom = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index > 1 && index < 5)
          return (
            <div
              className={`bxflex_mg10 bxitem_post bxcol_${index}`}
              key={index}
            >
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link href={dt.post_slug}>
                  <a></a>
                </Link>
                <div className="bxcat_abs ">
                  {/* <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/phom/">
                  Phỏm
                </a> */}
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <Link href={dt.post_slug}>{dt.post_title}</Link>
                </h5>
                <p
                  dangerouslySetInnerHTML={innerHTMLs(dt.post_description)}
                ></p>
              </div>
            </div>
          );
      });
    }
    return result;
  };
  return (
    <div className="bxinner_archivepost" style={{ transform: "none" }}>
      <div className="bxtoptitle">
        <div className="bxinner">
          <h1 className="font30">{props.title}</h1>
          <div className="des mb-4">
            {/* <p dangerouslySetInnerHTML={createMarkup()}></p> */}
          </div>
          <div className="bxlistbytax_top">{postHead()}</div>
          <div className="bxlistbytax_col3">{postBody()}</div>
        </div>
      </div>
      <div className="bxbanner bxflex_mg"></div>
      <div
        className="bxflex bxflex_mg bxbtcontain"
        style={{ transform: "none" }}
      >
        <div className="bxcontainer_single bxw65">
          <div className="bxlistbytax_bottom">{postBottom()}</div>
          {/* <div className="bxnavigation">
            <div className="navigation_ct">
              <div className="bxinner">
                <div className="first_paged">
                  <a
                    className="page-numbers"
                    href="https://vaobo.com/tro-choi/"
                  >
                    «
                  </a>
                </div>
                <div className="paginate">
                  <ul className="page-numbers">
                    <li>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                      >
                        1
                      </span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://vaobo.com/tro-choi/page/2/"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://vaobo.com/tro-choi/page/3/"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <span className="page-numbers dots">…</span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://vaobo.com/tro-choi/page/14/"
                      >
                        14
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="last_paged">
                  <a
                    className="page-numbers"
                    href="https://vaobo.com/tro-choi/page/14/"
                  >
                    »
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div
          id="sticked"
          className="bxsidepost bxw35"
          style={{
            position: "relative",
            overflow: "visible",
            boxSizing: "border-box",
            minHeight: "1px",
          }}
        >
          <div
            className="theiaStickySidebar"
            style={{
              paddingTop: "0px",
              paddingBottom: "1px",
              position: "static",
              top: "0px",
              left: "1053.94px",
            }}
          >
            <div className="bxlisttopview">
              <h4>Xem nhiều nhất</h4>
              <ul>
                <li>
                  <a href="cach-choi-xoc-dia-w88-giup-thang-lon-cuc-hay-tu-cao-thu/">
                    Cách chơi xóc đĩa W88 giúp thắng lớn cực hay từ cao thủ
                  </a>
                </li>
                <li>
                  <a href="huong-dan-cach-choi-bau-cua-tom-ca-tren-w88-cho-nguoi-moi/">
                    Hướng dẫn cách chơi bầu cua tôm cá trên W88 cho người mới
                  </a>
                </li>
                <li>
                  <a href="huong-dan-cach-choi-xoc-dia-tai-fb88-luon-thang/">
                    Hướng dẫn cách chơi xóc đĩa tại Fb88 luôn thắng
                  </a>
                </li>
                <li>
                  <a href="top-4-cac-phan-mem-tinh-xac-suat-tai-xiu-online-pho-bien-nhat-2021/">
                    Top 4 các phần mềm tính xác suất tài xỉu online phổ biến
                    nhất 2021
                  </a>
                </li>
                <li>
                  <a href="chia-se-ky-xao-danh-bai-xi-to-cach-choi-xi-to-gioi-danh-bai-moi-doi-thu/">
                    Chia sẻ kỹ xảo đánh bài Xì tố, cách chơi Xì tố giỏi đánh bại
                    mọi đối thủ
                  </a>
                </li>
                <li>
                  <a href="xi-to-va-binh-xap-xam-khac-nhau-nhu-the-nao/">
                    Xì tố và binh xập xám khác nhau như thế nào?
                  </a>
                </li>
                <li>
                  <a href="huong-dan-cach-choi-danh-bai-tien-len-tai-bk8-chac-thang-100/">
                    Hướng dẫn cách chơi đánh bài tiến lên tại BK8 chắc thắng
                    100%
                  </a>
                </li>
                <li>
                  <a href="binh-lung-la-gi-top-5-cach-xep-bai-mau-binh-khong-lung/">
                    Binh lủng là gì? Top 5 cách xếp bài Mậu Binh không lủng
                  </a>
                </li>
                <li>
                  <a href="huong-dan-cach-tinh-quy-luat-bau-cua-don-gian-va-de-hieu-nhat-2021/">
                    Hướng dẫn cách tính quy luật bầu cua đơn giản và dễ hiểu
                    nhất 2021
                  </a>
                </li>
                <li>
                  <a href="5-diem-khac-biet-giua-xi-to-offline-va-xi-to-online/">
                    5 điểm khác biệt giữa Xì tố Offline và Xì tố Online
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPost;
