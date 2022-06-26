import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryPost from "../../components/Category/CategoryPosts";
import TrustBet from "../../components/Sidebars/trustBet";

function LibraryBetPage(props) {
  const breadTitle = "Thư viện cá cược";
  const Tax = `<a href="https://vaobo.com/" target="_blank" rel="noopener">Vào bờ</a> - Nơi chia sẻ những kiến thức hữu ích về cá cược online nhằm giúp bạn hiểu rỏ hơn về thị trường cá cược hiện nay... Cung cấp kiến thức từ cơ bản tới chuyên sâu về tất cả lĩnh vực cá cược, các thông tin cập nhât mới nhất từ các <a href="https://vaobo.com/nha-cai-uy-tin/" target="_blank" rel="noopener">nhà cái uy tín nhất việt nam</a>, nâng tầm kiến thức cho người chơi, tăng tỷ lệ chiến thắng khi tham gia cá cược online.`;

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
                    <CategoryPost title={breadTitle} tax={Tax} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
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

export default LibraryBetPage;
