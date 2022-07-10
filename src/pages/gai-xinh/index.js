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
import BeautifulGirl from "../../components/BeautifulGirl";

function BeautifulGirlPage(props) {
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
  const breadTitle = "Gái Xinh";
  const Tax = {
    taxTitle: "Gái Xinh",
    taxDescription: `Topnhacai.today – <strong>Kho ảnh gái xinh</strong>, tổng hợp hình ảnh và thông tin về các nàng hot girl, <strong>gái xinh sexy</strong> hot nhất hiện nay. Hình ảnh gái xinh tóc ngắn đeo kính, gái xinh mặc thiếu vải, gái xinh ngực khủng, gái xinh bikini, <strong>gái xinh tiktok</strong>…. được cập nhật liên tục tại chuyên mục gái xinh – vào bờ. Ngoài ra bạn có thể tìm hình ảnh và info của bất cứ cô nàng nào đang hot trên mạng tại vaobo.com. Là nơi giải trí hấp dẫn của anh em bet thủ sau những giây phút cá cược đấu trí cân não với <a href="https://vaobo.com/nha-cai-uy-tin/" target="_blank" rel="noopener">nhà cái</a>.`,
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
                    <BeautifulGirl />
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

export default BeautifulGirlPage;
