import React from "react";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home";
import Menu from "../../components/Menu";
import AdsImage from "../../components/Sidebars/adsImage";
import CompareBets from "../../components/Sidebars/compareBets";
import PostList from "../../components/Sidebars/postList";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import ToolBet from "../../components/Sidebars/toolBet";
import TopHeader from "../../components/TopHeader/";
HomePage.propTypes = {};

function HomePage(props) {
  const postSidebar1 = {
    title: "Thư viện cá cược",
    mark: "Hot",
    bgColor: "#ff4b00",
  };

  const postSidebar2 = {
    title: "Video bóng đá",
    mark: "New",
    bgColor: "#19a0e9",
  };
  return (
    <>
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="tieude_ds">
              <h1>Bảng xếp hạng nhà cái cập nhật 05/2022</h1>
            </div>
            <div className="row">
              <div className="col span_9 bxcontainer">{<Home />}</div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} />
                    <ToolBet />
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

export default HomePage;
