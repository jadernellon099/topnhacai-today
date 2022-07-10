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
import LinkList from "../../components/LinkList";

function LinkToTheDealerPage(props) {
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
  const breadTitle = "Link vào nhà cái";
  const Tax = {
    taxTitle: "Tổng hợp các Link vào nhà cái",
    taxDescription: `Trang tổng hợp các <strong>link nhà cái uy tín</strong>, an toàn với tốc độ truy cập cực kỳ nhanh chóng. Đây sẽ là “danh bạ tổng hợp” toàn bộ địa chỉ truy cập vào trang chủ của những nhà cái cá độ uy tín nhất thị trường Việt Nam hiện nay. Các <strong>link vào nhà cái</strong> được cập nhật thường xuyên, đảm bảo hoạt động tốt nhất và nhanh nhất. Link được cung cấp chính thức từ nhà cái, được ủy quyền đảm bảo chất lượng, cá cược đảm bảo an toàn. <a href="https://vaobo.com/" target="_blank" rel="noopener">Vaobo.com</a> cam kết 100% link vào là uy tín, không có link lừa đảo. Do đó anh em hoàn toàn có thể yên tâm khi cá cược tại các link vào nhà cái mà chúng tôi đưa ra dưới đây.`,
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
                    <LinkList />
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

export default LinkToTheDealerPage;
