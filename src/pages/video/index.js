import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import PostList from "../../components/Sidebars/postList";
import TaxDescription from "../../components/TaxDescription";
import AdsImage from "../../components/Sidebars/adsImage";
import TrustBet from "../../components/Sidebars/trustBet";
import Content from "../../components/Content";
import VideoList from "../../components/Video/VideoList";
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';  
library.add( faPlay );

function PromotionsPage(props) {
  const breadTitle = "Video";
  const Tax = {
    taxTitle:
      "Video bóng đá - Video trận đấu - Hightlight bóng đá",
    taxDescription: `Chuyên mục <strong>Video bóng đá</strong> tại <a href="/" target="_blank" rel="noopener">Topnhacai.today</a> là nơi tổng hợp tất cả các video bóng đá hay, Highlight bóng đá nổi bật tại các giải đấu lớn như Anh, Ý, Tây Ban Nha, Cup C1,…Ghi lại những khoảnh khắc, bàn thắng đẹp nhất từ các trận đấu đỉnh cao, những giây phút lịch sử của bóng đá tại mọi giải đấu lớn. Với chất lượng video sắc nét, Full HD và được cập nhật liên tục chắc chắn sẽ giúp người xem có được những trải nghiệm chân thật và tuyệt vời nhất như mình đang được xem bóng đá trực tiếp.`,
  };
  const postSidebar1 = {
    title: "Nhận định bóng đá",
    mark: "NEW",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Hướng dẫn cá cược",
    mark: "HD",
    bgColor: "#ff4b00",
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
                    <VideoList />
                    <Content />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <PostList postSidebar={postSidebar1} />
                    <TrustBet />
                    <PostList postSidebar={postSidebar2} />
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

export default PromotionsPage;
