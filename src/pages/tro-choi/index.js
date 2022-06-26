import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import CompareBets from "../../components/Sidebars/compareBets";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import BxrateList from "../../components/ReputableBookie/bxrateList";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import Tips from "../../components/Tips";
import SumWebsite from "../../components/FootballTips/sumWebsite";
import ContentGame from "../../components/Games/ContentGame";

function GamesPage(props) {
  const breadTitle = "Trò Chơi";
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
                    <ContentGame />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
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

export default GamesPage;
