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
import ConfrontationList from "../../components/ConfrontationHistory/ConfrontationList";

function ConfrontationHistoryPage(props) {
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
  const breadTitle = "Lịch sử đối đầu – Phong độ hiện tại của các đội bóng";
  const Tax = {
    taxTitle: "Lịch sử đối đầu – Phong độ hiện tại của các đội bóng",
    taxDescription: `Hãy cùng <a href="https://topnhacai.today/" rel="noopener">Topnhacai.today</a> điểm qua những thống kê về phong độ và <strong>lịch sử đối đầu</strong> của tất cả các đội bóng trên thế giới. Chúng tôi tự hào là trang web nhận định bóng đá, nhận định kèo nhà cái chính xác nhất hiện nay. Nắm rõ được lịch sử đối đầu của các đội bóng sẽ giúp bạn nhận định trận đấu 1 cách tường minh nhất, không mắc phải những cái bẫy mà nhà cái đặt ra. Hãy truy cập và sử dụng hoàn toàn miễn phí công cụ này để việc đầu tư cá cược của bạn được thuận lợi hơn.`,
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
                    <ConfrontationList title={"Lịch sử đối đầu các trận đấu hot nhất hôm nay"} />
                    <ConfrontationList title={"Lịch sử đối đầu các trận sắp tới"} />
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

export default ConfrontationHistoryPage;
