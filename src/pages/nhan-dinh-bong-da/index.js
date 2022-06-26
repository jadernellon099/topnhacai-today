import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import PostsSport from "../../components/FootballCommentary/postsSport";
import TipsPremium from "../../components/Sidebars/tipsPremium";

function FootballCommentary(props) {
    const postSidebar1 = {
        title: "Highlight bóng đá",
        mark: "HOT",
        bgColor: "#ff4b00",
      };
      const postSidebar2 = {
        title: "Cá độ bóng đá",
        mark: "HOT",
        bgColor: "#ff4b00",
      };
  const breadTitle = "Nhận định bóng đá kèo nhà cái hôm nay từ chuyên gia";
  const Tax = {
    taxTitle: "Nhận định bóng đá kèo nhà cái hôm nay từ chuyên gia",
    taxDescription: `<strong><a href="/nhan-dinh-bong-da/">Nhận định bóng đá</a> kèo nhà cái</strong> – Tổng hợp các bài viết nhận <strong>định bóng đá hôm nay và ngày mai</strong>, soi kèo nhà cái, phân tích trận đấu, dự đoán kết quả đối đầu chính xác nhất. Nhận định bóng đá đến từ chuyên gia <a href="/">Topnhacai.today</a> liên tục cập nhật hằng ngày đầy đủ các giải đấu trong nước và trên khắp thế giới… Tại đây chúng tôi sẽ giúp bạn có cái nhìn tổng quan về các trận đấu sắp được bắt đầu và đưa ra quyết định đặt cược tốt nhất.`,
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
                    <PostsSport />
                    <Content />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <TipsPremium />
                    <TrustBet />
                    <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} />
                    <ToolBet />
                    <SexyImageList />
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

export default FootballCommentary;
