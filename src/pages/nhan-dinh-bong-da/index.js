import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import useSWR from "swr";
import TrustBet from "../../components/Sidebars/trustBet";
import PostsSport from "../../components/FootballCommentary/postsSport";
import TipsPremium from "../../components/Sidebars/tipsPremium";
import Loading from "../../components/Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
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
  const { data: pageData, error: pageError } = useSWR(
    `${process.env.api_topnhacai}/pages/getBySlug/nhan-dinh-bong-da`,
    fetcher
  );
  if (pageError) return <div>Failed to load</div>;
  if (!pageData) {
    return <Loading />;
  }
  console.log(pageData);

  // const { data: category } = useSWR(
  //   `${process.env.api_topnhacai}/pages/page/search?q=nhan-dinh-bong-da`,
  //   fetcher
  // );

  const breadTitle = pageData.page_category_name;
  const Tax = {
    taxTitle: pageData.page_title,
    taxDescription: pageData.page_description,
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
                    <Content data={pageData} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <TipsPremium />
                    <TrustBet />
                    {/* <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} /> */}
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
