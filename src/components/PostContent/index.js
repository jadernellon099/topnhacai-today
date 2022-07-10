import React from "react";
import Loading from "../Loading";

function PostContent(props) {
  var { data } = props;
  const createMarkup = () => {
    if (data[0] && data[0].post_content) {
      return { __html: data[0].post_content };
    } else {
      return { __html: "" };
    }
  };
  return (
    <>
      <div className="bxflex bxsingle_posttpl" style={{ transform: "none" }}>
        <div className="bxcontainer_single bxw65">
          <div className="bxtoptitle">
            <div className="bxinner">
              <h1 className="font30">{data && data[0] ? data[0].post_title : ""}</h1>
              <div className="bxdate_cat">
                <div className="bxtime_cat">
                  <span className="date">24/06/2022</span>
                  <span className="chuyenmuc">
                    <a href="https://vaobo.com/thu-vien-ca-cuoc/huong-dan-ca-cuoc/">
                      Hướng dẫn cá cược
                    </a>
                    <a href="https://vaobo.com/xo-so-online/lo-de-online/">
                      Lô đề online
                    </a>
                  </span>
                </div>
              </div>
              <div className="bxsapo">
                <p dangerouslySetInnerHTML={createMarkup()}></p>
              </div>
              <div className="bxxemnhanh">
                <div className="bxcontent"></div>
              </div>
            </div>
          </div>
        </div>
        <div
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
            }}
          >
            <div className="bxlisttopview">
              <h4>Xem nhiều nhất</h4>
              <ul>
                <li>
                  <a href="https://vaobo.com/choi-lo-de-online-w88/">
                    Chơi lô đề online W88 - Hướng dẫn cách chơi số đề tại nhà
                    cái W88 an toàn nhất
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/tong-hop-nhung-cap-lo-hay-ve-cung-nhau-nhieu-nhat/">
                    Tổng hợp những cặp lô hay về cùng nhau nhiều nhất
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-danh-do-le-tren-188bet-tram-tran-tram-thang/">
                    Hướng dẫn cách đánh lô đề trên 188Bet trăm trận trăm thắng
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/thong-ke-nhung-cap-lo-xien-dep-nhat-hom-nay/">
                    Thống kê những cặp lô xiên đẹp nhất hôm nay
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/tong-hop-tuyen-tap-tho-lo-de-hang-ngay-tho-lo-de-hom-nay-hay-nhat/">
                    Tổng hợp tuyển tập thơ lô đề hàng ngày, thơ lô đề hôm nay
                    hay nhất
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-lap-dan-de-chuan-cuc-hieu-qua/">
                    Hướng dẫn cách lập dàn đề chuẩn cực hiệu quả
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/tong-hop-cach-bat-lo-giai-7-chuan-xac-nhat-hien-nay/">
                    Tổng hợp cách bắt lô giải 7 chuẩn xác nhất hiện nay
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-danh-lo-de-fun88-chac-thang-100/">
                    Hướng dẫn cách đánh lô đề Fun88 chắc thắng 100%
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/mo-thay-tinh-trung-danh-con-gi-giai-ma-giac-mo-thay-tinh-trung-trong-lo-de/">
                    Mơ thấy tinh trùng đánh con gì? Giải mã giấc mơ thấy tinh
                    trùng trong lô đề?
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/cach-tinh-xac-suat-trung-so-vietlott/">
                    Tìm hiểu cách tính xác suất trúng số vietlott chuẩn nhất
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;
