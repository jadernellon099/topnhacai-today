import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

ContentGame.propTypes = {};

function ContentGame(props) {
//   const [top, setTop] = useState(0);
//   const [position, setPosition] = useState(0);
//   useEffect(() => {
//     window.addEventListener("scroll", function (event) {
//       var scroll_y = this.scrollY;
//       const container = document.getElementById("sticked");
//     //   console.log(container.offsetTop);

//     });
//   });

  return (
    <div className="bxinner_archivepost" style={{ transform: "none" }}>
      <div className="bxtoptitle">
        <div className="bxinner">
          <h1 className="font30">Trò chơi</h1>
          <div className="des mb-4">
            Tổng hợp các <strong>trò chơi casino</strong>, cá cược trực tuyến
            hot nhất hiện nay, cung cấp thông tin hữu ích về các{" "}
            <strong>trò chơi cá cược online</strong> mới nhất chính xác nhất
          </div>
          <div className="bxlistbytax_top">
            <div className="bxitem_post">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2022/01/top-3-ky-nang-danh-phom-khong-phai-ai-cung-biet.jpg?v=1656214041.webp)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/top-3-ky-nang-danh-phom-thang-chac-khong-phai-ai-cung-biet/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/phom/">
                    Phỏm
                  </a>
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <a href="https://vaobo.com/top-3-ky-nang-danh-phom-thang-chac-khong-phai-ai-cung-biet/">
                    Top 3 kỹ năng đánh phỏm thắng chắc không phải ai cũng biết
                  </a>
                </h5>
                <p>
                  Phần lớn chúng ta đều có suy nghĩ rằng đánh bài phỏm hay chơi
                  tá lả chỉ là trò chơi may rủi, nếu may mắn thì sẽ giành được
                  chiến...
                </p>
              </div>
            </div>
            <div className="bxitem_post">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2022/01/cach-choi-phom-tai-gui-u-den-cuc-don-gian-danh-cho-nguoi-moi.jpg?v=1656214041.webp)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/cach-choi-phom-tai-gui-u-den-cuc-don-gian-danh-cho-nguoi-moi/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/phom/">
                    Phỏm
                  </a>
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <a href="https://vaobo.com/cach-choi-phom-tai-gui-u-den-cuc-don-gian-danh-cho-nguoi-moi/">
                    Cách chơi phỏm tái gửi ù đền cực đơn giản dành cho người mới
                  </a>
                </h5>
                <p>
                  Tái gửi ù đền là thuật ngữ khá quen thuộc đối với những người
                  đam mê trò chơi đánh bài phỏm của miền Bắc hay Tá lả của
                  miền...
                </p>
              </div>
            </div>
          </div>
          <div className="bxlistbytax_col3">
            <div className="bxitem_post">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2022/01/cach-danh-phom-bip-cuc-don-gian-va-hieu-qua.jpg?v=1656214041.webp)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/top-5-cach-danh-phom-bip-cuc-don-gian-va-de-hieu/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/phom/">
                    Phỏm
                  </a>
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <a href="https://vaobo.com/top-5-cach-danh-phom-bip-cuc-don-gian-va-de-hieu/">
                    Top 5 cách đánh phỏm bịp cực đơn giản và dễ hiểu
                  </a>
                </h5>
                <p>
                  Đánh Phỏm bịp từ lâu đã trở thành một hoạt động không còn quá
                  xa lạ đối với các bài thủ. Nhất là các bài thủ tham gia chơi
                  trực...
                </p>
              </div>
            </div>
            <div className="bxitem_post">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/12/cach-choi-mau-binh-bk8-vo-cung-don-gian.jpg?v=1656214041.webp)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/huong-dan-cach-choi-mau-binh-tai-bk8-vo-cung-don-gian/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/mau-binh-xap-xam/">
                    Mậu binh xập xám
                  </a>
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <a href="https://vaobo.com/huong-dan-cach-choi-mau-binh-tai-bk8-vo-cung-don-gian/">
                    Hướng dẫn cách chơi mậu binh tại BK8 vô cùng đơn giản
                  </a>
                </h5>
                <p>
                  Mậu binh tại Bk8 hay còn được gọi là binh xập xám, đây là một
                  trò chơi dân gian rất được ưa chuộng tại Việt Nam. Nhiều cược
                  thủ...
                </p>
              </div>
            </div>
            <div className="bxitem_post">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-choi-bai-tien-len-bk8-chac-thang-100.jpg?v=1656214041.webp)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/huong-dan-cach-choi-danh-bai-tien-len-tai-bk8-chac-thang-100/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/bai-tien-len/">
                    Bài tiến lên
                  </a>
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <a href="https://vaobo.com/huong-dan-cach-choi-danh-bai-tien-len-tai-bk8-chac-thang-100/">
                    Hướng dẫn cách chơi đánh bài tiến lên tại BK8 chắc thắng
                    100%
                  </a>
                </h5>
                <p>
                  Tiến lên miền Nam là một trong kiểu chơi bài dễ hiểu nhất và
                  được nhiều người Việt Nam ưa chuộng tại nhà cái Bk8, nó không
                  có nhiều...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bxbanner bxflex_mg"></div>
      <div
        className="bxflex bxflex_mg bxbtcontain"
        style={{ transform: "none" }}
      >
        <div className="bxcontainer_single bxw65">
          <div className="bxlistbytax_bottom">
            <div className="bxflex_mg10 bxitem_post bxcol_5">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-choi-xoc-dia-bk8-giup-thang-lon.jpg?v=1656214041.webp)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/cach-choi-xoc-dia-bk8-giup-thang-lon-cuc-hay-tu-cao-thu/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/xoc-dia/">
                    Xóc đĩa
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/cach-choi-xoc-dia-bk8-giup-thang-lon-cuc-hay-tu-cao-thu/">
                    Cách chơi xóc đĩa BK8 giúp thắng lớn cực hay từ cao thủ
                  </a>
                </h5>
                <p>
                  Xóc đĩa là một hình thức chơi cờ bạc được hình thành và phát
                  triển từ lâu đời, và dần dần trở thành một trong những trò cá
                  cược...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_6">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-choi-bau-cua-tom-ca-tren-bk8-cho-nguoi-moi.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/huong-dan-cach-choi-bau-cua-tom-ca-tren-bk8-cho-nguoi-moi/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/bau-cua-tom-ca/">
                    Bầu cua tôm cá
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/huong-dan-cach-choi-bau-cua-tom-ca-tren-bk8-cho-nguoi-moi/">
                    Hướng dẫn cách chơi bầu cua tôm cá trên BK8 cho người mới
                  </a>
                </h5>
                <p>
                  Bầu cua tôm cá là cái tên khá quen thuộc đối với mỗi cược thủ
                  tại Việt Nam. Đây là một trò chơi dân gian đã xuất hiện từ rất
                  lâu...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_7">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-choi-xoc-dia-tai-nha-cai-Letou.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/cach-choi-xoc-dia-tai-nha-cai-letou-giup-thang-lon-cuc-hay-tu-cao-thu/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/xoc-dia/">
                    Xóc đĩa
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/cach-choi-xoc-dia-tai-nha-cai-letou-giup-thang-lon-cuc-hay-tu-cao-thu/">
                    Cách chơi xóc đĩa tại nhà cái Letou giúp thắng lớn cực hay
                    từ cao thủ
                  </a>
                </h5>
                <p>
                  Xóc đĩa là một trò chơi mà chúng ta thường thấy ở Việt Nam,
                  xuất hiện rất nhiều trong các lễ hội đầu năm. Trò xóc đĩa vô
                  cùng sôi...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_8">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-choi-game-ban-ca-letou-cuc-chuan.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/huong-dan-choi-game-ban-ca-letou-cuc-chuan-cho-nguoi-moi/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/game-ban-ca/">
                    Game bắn cá
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/huong-dan-choi-game-ban-ca-letou-cuc-chuan-cho-nguoi-moi/">
                    Hướng dẫn chơi game bắn cá letou cực chuẩn cho người mới
                  </a>
                </h5>
                <p>
                  Trước đây, trò chơi bắn cá ăn tiền thường chỉ xuất hiện tại
                  nhiều các siêu thị và trung tâm thương mại lớn, tuy nhiên hiện
                  nay nó đã...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_9">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-choi-xoc-dia-v9bet-giup-thang-lon.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/cach-choi-xoc-dia-tai-v9bet-giup-thang-lon-cuc-hay-tu-cao-thu/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/xoc-dia/">
                    Xóc đĩa
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/cach-choi-xoc-dia-tai-v9bet-giup-thang-lon-cuc-hay-tu-cao-thu/">
                    Cách chơi xóc đĩa tại V9Bet giúp thắng lớn cực hay từ cao
                    thủ
                  </a>
                </h5>
                <p>
                  Xóc đĩa là một trò chơi quen thuộc với người Việt Nam, chúng
                  ta thường bắt gặp trò chơi này tại các lễ hội lớn hay vào dịp
                  tết Nguyên...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_10">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/cach-danh-bai-cao-3-la-tai-v9bet-de-hieu-nhat.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/cach-danh-bai-cao-3-la-tai-v9bet-de-hieu-cho-nguoi-choi-moi/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/bai-cao/">
                    Bài cào
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/cach-danh-bai-cao-3-la-tai-v9bet-de-hieu-cho-nguoi-choi-moi/">
                    Cách đánh bài cào 3 lá tại V9Bet dễ hiểu cho người chơi mới
                  </a>
                </h5>
                <p>
                  Bài cào, bài tố hay là bài cào 3 lá, đây là thể loại trò chơi
                  đánh bài ăn tiền thật rất được ưa chuộng tại các sòng casino
                  trực tuyến...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_11">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/ban-ca-fun88.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/huong-dan-choi-game-ban-ca-fun88-cuc-chuan-cho-nguoi-moi/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/game-ban-ca/">
                    Game bắn cá
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/huong-dan-choi-game-ban-ca-fun88-cuc-chuan-cho-nguoi-moi/">
                    Hướng dẫn chơi game bắn cá Fun88 cực chuẩn cho người mới
                  </a>
                </h5>
                <p>
                  Fun88 là nhà cái cá cược hàng đầu châu Á với nhiều sản phẩm cá
                  cược khác nhau như thể thao, casino online, lô đề online, slot
                  game… đặc...
                </p>
              </div>
            </div>
            <div className="bxflex_mg10 bxitem_post bxcol_12">
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage:
                    "url(https://vaobo.com/wp-content/uploads/2021/11/choi-bai-3-cay-tai-m88.jpg?v=1656214041)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="https://vaobo.com/huong-dan-cach-choi-bai-3-cay-tai-m88-cuc-dong-gian-cho-nguoi-moi/"></a>
                <div className="bxcat_abs ">
                  <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/bai-cao/">
                    Bài cào
                  </a>
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <a href="https://vaobo.com/huong-dan-cach-choi-bai-3-cay-tai-m88-cuc-dong-gian-cho-nguoi-moi/">
                    Hướng dẫn cách chơi bài 3 cây tại M88 cực đơn giản cho người
                    mới
                  </a>
                </h5>
                <p>
                  Bài 3 cây hiện đang là một trong những trò chơi cá cược hấp
                  dẫn, rất ăn khách tại các nhà cái uy tín. Mặc dù sở hữu lối
                  chơi không...
                </p>
              </div>
            </div>
          </div>
          <div className="bxnavigation">
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
          </div>
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
                  <a href="https://vaobo.com/cach-choi-xoc-dia-w88-giup-thang-lon-cuc-hay-tu-cao-thu/">
                    Cách chơi xóc đĩa W88 giúp thắng lớn cực hay từ cao thủ
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-choi-bau-cua-tom-ca-tren-w88-cho-nguoi-moi/">
                    Hướng dẫn cách chơi bầu cua tôm cá trên W88 cho người mới
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-choi-xoc-dia-tai-fb88-luon-thang/">
                    Hướng dẫn cách chơi xóc đĩa tại Fb88 luôn thắng
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/top-4-cac-phan-mem-tinh-xac-suat-tai-xiu-online-pho-bien-nhat-2021/">
                    Top 4 các phần mềm tính xác suất tài xỉu online phổ biến
                    nhất 2021
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/chia-se-ky-xao-danh-bai-xi-to-cach-choi-xi-to-gioi-danh-bai-moi-doi-thu/">
                    Chia sẻ kỹ xảo đánh bài Xì tố, cách chơi Xì tố giỏi đánh bại
                    mọi đối thủ
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/xi-to-va-binh-xap-xam-khac-nhau-nhu-the-nao/">
                    Xì tố và binh xập xám khác nhau như thế nào?
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-choi-danh-bai-tien-len-tai-bk8-chac-thang-100/">
                    Hướng dẫn cách chơi đánh bài tiến lên tại BK8 chắc thắng
                    100%
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/binh-lung-la-gi-top-5-cach-xep-bai-mau-binh-khong-lung/">
                    Binh lủng là gì? Top 5 cách xếp bài Mậu Binh không lủng
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/huong-dan-cach-tinh-quy-luat-bau-cua-don-gian-va-de-hieu-nhat-2021/">
                    Hướng dẫn cách tính quy luật bầu cua đơn giản và dễ hiểu
                    nhất 2021
                  </a>
                </li>
                <li>
                  <a href="https://vaobo.com/5-diem-khac-biet-giua-xi-to-offline-va-xi-to-online/">
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

export default ContentGame;
