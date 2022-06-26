import React from "react";
import Link from "next/link";

function PostList(props) {
  return (
    <article id="ctlist_posttax-34" className="widget widget_ctlist_posttax">
      <div className="bxwidget_lists list ">
        <div className="bxinner">
          <h5 className="bxwidget_title">
            <span className="" style={{ background: props.postSidebar.bgColor, color: "#fff" }}>
              {props.postSidebar.mark}
            </span>
            <Link href="/" target="_blank" rel="dofollow">
              {props.postSidebar.title}
            </Link>
          </h5>
          <div className="widgetcontent">
            <ul>
              <li>
                <div className="bxitem">
                  <div
                    className="bxthumb"
                    style={{
                      backgroundImage:
                        "url(https://vaobo.com/wp-content/uploads/2021/10/Cach-bao-sam-loc-400x269.jpg?v=1656161445)",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <a href="https://vaobo.com/cach-bao-sam-loc-dung-luat-trong-choi-game-bai-sam-online-cho-nguoi-moi/"></a>
                  </div>
                  <div className="bxtitle">
                    <p className="title">
                      <a href="https://vaobo.com/cach-bao-sam-loc-dung-luat-trong-choi-game-bai-sam-online-cho-nguoi-moi/">
                        Cách báo sâm lốc đúng luật trong chơi game bài sâm
                        online cho người mới
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="bxitem">
                  <div
                    className="bxthumb"
                    style={{
                      backgroundImage:
                        "url(https://vaobo.com/wp-content/uploads/2021/11/fb88-bao-tri-400x269.jpg?v=1656161445)",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <a href="https://vaobo.com/tong-hop-nhung-dieu-ban-can-biet-khi-nha-cai-fb88-bao-tri/"></a>
                  </div>
                  <div className="bxtitle">
                    <p className="title">
                      <a href="https://vaobo.com/tong-hop-nhung-dieu-ban-can-biet-khi-nha-cai-fb88-bao-tri/">
                        Tổng hợp những điều bạn cần biết khi nhà cái Fb88 bảo
                        trì
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="bxitem">
                  <div
                    className="bxthumb"
                    style={{
                      backgroundImage:
                        "url(https://vaobo.com/wp-content/uploads/2021/10/huong-dan-cach-choi-bong-da-ao-tai-w88-400x269.jpg?v=1656161445)",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <a href="https://vaobo.com/huong-dan-cach-choi-bong-da-ao-tai-w88-cuc-chuan/"></a>
                  </div>
                  <div className="bxtitle">
                    <p className="title">
                      <a href="https://vaobo.com/huong-dan-cach-choi-bong-da-ao-tai-w88-cuc-chuan/">
                        Hướng dẫn cách chơi bóng đá ảo tại W88 cực chuẩn mà bạn
                        không nên bỏ qua
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="bxitem">
                  <div
                    className="bxthumb"
                    style={{
                      backgroundImage:
                        "url(https://vaobo.com/wp-content/uploads/2021/10/Cong-Thuc-Danh-Lieng-400x269.jpg?v=1656161445)",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <a href="https://vaobo.com/chia-se-cong-thuc-danh-lieng-hieu-qua-nhat-danh-cho-cao-thu/"></a>
                  </div>
                  <div className="bxtitle">
                    <p className="title">
                      <a href="https://vaobo.com/chia-se-cong-thuc-danh-lieng-hieu-qua-nhat-danh-cho-cao-thu/">
                        Chia sẻ công thức đánh liêng hiệu quả nhất dành cho cao
                        thủ
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="bxitem">
                  <div
                    className="bxthumb"
                    style={{
                      backgroundImage:
                        "url(https://vaobo.com/wp-content/uploads/2021/11/fun88-esport-400x269.jpg?v=1656161445)",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <a href="https://vaobo.com/fun88-esport-huong-dan-cach-choi-chi-tiet-tram-tran-tram-thang/"></a>
                  </div>
                  <div className="bxtitle">
                    <p className="title">
                      <a href="https://vaobo.com/fun88-esport-huong-dan-cach-choi-chi-tiet-tram-tran-tram-thang/">
                        Fun88 Esport – Hướng dẫn cá cược Esport chi tiết tại nhà
                        cái Fun88
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostList;
