import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryPost from "../../components/Category/CategoryPosts";
import FootballBetting from "../../components/FootballBetting";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu";
import AdsImage from "../../components/Sidebars/adsImage";
import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import TrustBet from "../../components/Sidebars/trustBet";
import TaxDescription from "../../components/TaxDescription";
import TopHeader from "../../components/TopHeader";

function FootballBettingPage(props) {
    const postSidebar1 = {
        title: "Nhận định bóng đá",
        mark: "NEW",
        bgColor: "#ff4b00",
      };
    const postSidebar2 = {
        title: "Hướng dẫn cá cược",
        mark: "HD",
        bgColor: "#f82045",
    };
    const breadTitle = "Soi kèo bóng đá"
    const Tax = {
        taxTitle: "Soi kèo bóng đá",
        taxDescription: `<strong>Soi kèo bóng đá vaobo.com</strong> – Là công cụ hữu dụng cho người chơi cá độ bóng đá, soi kèo bóng đá được vào bờ phát triển dựa trên nhu cầu thực tế từ người chơi cá độ, giúp người chơi có được một công cụ để chọn kèo chính xác nhất. Dựa trên các thuật toán và công thức đã được lập trình chúng tôi thu thập thông tin đầy đủ về các trận đấu sắp diễn ra, từ đó phân tích kèo nhà cái để đưa ra dự đoán chính xác nhất. <strong>S</strong><span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;soi kèo bóng đá hôm nay&quot;}" data-sheets-userformat="{&quot;2&quot;:4286,&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:65280},&quot;5&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;6&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;7&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;8&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;10&quot;:2,&quot;15&quot;:&quot;arial, sans, sans-serif&quot;}"><strong>oi kèo bóng đá hôm nay</strong>, kết hợp xem <a href="/nhan-dinh-bong-da/">nhận định bóng đá</a> và <a href="/tips-bong-da/" target="_blank" rel="noopener">tips bóng đá</a> giúp bạn nâng cao tỷ lệ thắng khi tham gia cá độ bóng đá.</span>`
    }
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
                    <TaxDescription title={breadTitle} Tax={Tax} />
                    <FootballBetting />
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

export default FootballBettingPage;
