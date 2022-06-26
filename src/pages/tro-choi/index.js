import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TrustBet from "../../components/Sidebars/trustBet";
import CategoryPosts from "../../components/Category/CategoryPosts";

function GamesPage(props) {
  const breadTitle = "Trò Chơi";
  const Tax =  `Tổng hợp các <strong>trò chơi casino</strong>, cá cược trực tuyến hot nhất hiện nay, cung cấp thông tin hữu ích về các <strong>trò chơi cá cược online</strong> mới nhất chính xác nhất`;
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
                    <CategoryPosts title={breadTitle} tax={Tax} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <TrustBet />
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

export default GamesPage;
