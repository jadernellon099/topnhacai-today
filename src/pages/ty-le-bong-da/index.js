import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import AdsImage from "../../components/Sidebars/adsImage";
import FootballRate from "../../components/FootballRate";

function FootballRatePage(props) {
    const postSidebar1 = {
        title: "Nhận định bóng đá",
        mark: "NEW",
        bgColor: "#ff4b00",
      };
      const postSidebar2 = {
        title: "Hướng dẫn cá cược",
        mark: "HOT",
        bgColor: "#ff4b00",
      };
  const breadTitle = "Tỷ lệ bóng đá";
  const Tax = {
    taxTitle: "Tỷ lệ bóng đá - Tỷ lệ kèo nhà cái hôm nay",
    taxDescription: `Bảng <strong>tỷ lệ bóng đá</strong> – tỷ lệ kèo nhà cái hôm nay. <a href="/" target="_blank" rel="noopener">Vaobo.com</a> cung cấp tỷ kèo bóng đá mới nhất chính xác nhất của tất cả các trận đấu trên thế giới. Dữ liệu được cung cấp bởi hai nhà cái lớn và uy tín hàng đầu hiện nay là W88 và 188bet do đó đảm bảo số liệu <strong>tỷ lệ kèo</strong>, tỷ lệ ăn… mà chúng tôi đưa ra chính xác đến từng giây. Từ đó giúp cho anh em chơi cá độ bóng đá nắm và theo dõi được <strong>tỷ lệ nhà cái</strong> đưa ra và tỷ lệ ăn của từng kèo, để có quyết định đặt cược chính xác nhất.`,
  };
  return (
    <>
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="row">
              <div className="col span_9 bxcontainer">
                {
                  <>
                    <Breadcrumbs breadTitle={breadTitle} />
                    <TaxDescription Tax={Tax} />
                    <FootballRate />
                    <Content />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    {/* <PostList postSidebar={postSidebar1} /> */}
                    <TrustBet />
                    {/* <PostList postSidebar={postSidebar2} /> */}
                    <ToolBet />
                  </>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FootballRatePage;
