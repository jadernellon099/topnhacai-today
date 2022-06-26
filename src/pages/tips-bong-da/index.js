import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import PostList from "../../components/Sidebars/postList";
import CompareBets from "../../components/Sidebars/compareBets";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import Tips from "../../components/Tips";
import SumWebsite from "../../components/FootballTips/sumWebsite";

function FootballTipsPage(props) {
  const postSidebar1 = {
    title: "Nhận định bóng đá",
    mark: "ND",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Cá độ bóng đá",
    mark: "HOT",
    bgColor: "#f82045",
  };
  const breadTitle = "Top 10 nhà cái uy tín tốt nhất Việt Nam & Thế Giới 2022";
  const Tax = {
    taxTitle: "Top 10 nhà cái uy tín tốt nhất Việt Nam & Thế Giới 2022",
    taxDescription: `<strong>Nhà cái nào uy tín nhất Việt Nam</strong>? Tìm <a href="https://vaobo.com/nha-cai-uy-tin/" target="_blank" rel="noopener"><strong> nhà cái uy tín </strong></a> để đăng ký tham gia cá cược? Là câu hỏi mà chúng tôi bắt gặp nhiều
            nhất trên các cộng đồng cá độ. Để chọn một nhà cái uy tín nhất giữa hàng nghìn trang cá cược đang hoạt động là điều không thể nếu bạn là người mới. Hiểu được điều này, chúng tôi đã đưa ra bảng xếp hạng các nhà cái cá độ tốt nhất được chuyên gia vaobo.com đánh giá dựa trên độ uy tín của từng nhà cái và số lượt bình chọn của cộng đồng cá cược. Dưới đây là  <strong> Bảng xếp hạng Top 10 trang cá cược uy tín tốt nhất năm 2022</strong>.`,
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
                    <Tips />
                    <SumWebsite />
                    <Content />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} />
                    <TrustBet />
                    <CompareBets />
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

export default FootballTipsPage;
