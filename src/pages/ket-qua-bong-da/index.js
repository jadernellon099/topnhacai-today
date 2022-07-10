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
import SoccerResults from "../../components/SoccerResults";

function SoccerResultsPage(props) {
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
  const breadTitle = "Kết quả bóng đá hôm nay";
  const Tax = {
    taxTitle: "Kết quả bóng đá - Tỷ số bóng đá trực tiếp hôm nay",
    taxDescription: `Bảng&nbsp;<strong>Kết quả bóng đá</strong> chính xác nhất, được cập nhật theo từng phút. <a href="https://vaobo.com/" target="_blank" rel="noopener">Vaobo.com</a> cung cấp thông tin kết quả bóng đá mới nhất chính xác nhất của tất cả các trận đấu trên thế giới. Với đội ngũ làm việc chuyên nghiệp, đảm bảo số liệu kết quả thi đấu được&nbsp;chúng tôi đưa ra chính xác đến từng giây. Từ đó giúp cho anh em chơi cá độ bóng đá nắm và theo dõi được kết quả bóng đá sớm nhất và tiện lợi nhất.`,
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
                    <SoccerResults />
                    <Content />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
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

export default SoccerResultsPage;
