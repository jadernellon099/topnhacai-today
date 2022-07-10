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
import CompareDealers from "../../components/CompareDealers";

function CompareDealersPage(props) {
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
  const breadTitle = "So sánh nhà cái";
  const Tax = {
    taxTitle: "So Sánh Nhà Cái",
    taxDescription: `Hiện nay, với nhu cầu giải trí ngày càng cao, thì đi kèm theo đó chính là sự xuất hiện của hàng loạt nhà cái mới. Người dùng hiện nay gặp khá nhiều khó khăn khi lựa chọn một <strong><a href="https://vaobo.com/nha-cai-uy-tin/" target="_blank" rel="noopener">nhà cái uy tín</a></strong> để tham gia cá cược. Vậy đâu là cái uy tín nhất hiện nay? Đâu là nhà cái có hệ thống nạp rút tiền nhanh chóng? Đâu là nhà cái đảm bảo an toàn bảo mật thông tin khách hàng? Do đó, vaobo.com đã gửi đến bạn trang so sánh nhà cái, giúp bạn có cái nhìn tường tận và chi tiết nhất về điểm mạnh, điểm yếu của các nhà cái hiện nay. Những thông tin đánh giá, so sánh đảm bảo tính khách quan nhất dựa trên trải nghiệm của người dùng. Cho nên bạn hoàn toàn có thể yên tâm khi tham khảo thông tin tại đây.`,
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
                    <CompareDealers />
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

export default CompareDealersPage;
