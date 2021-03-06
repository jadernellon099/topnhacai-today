import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import PostList from "../../components/Sidebars/postList";
import useSWR from "swr";
import CompareBets from "../../components/Sidebars/compareBets";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import Tips from "../../components/Tips";
import SumWebsite from "../../components/FootballTips/sumWebsite";
import Loading from "../../components/Loading";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

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

  const { data, error } = useSWR(
    `${process.env.api_topnhacai}/pages/getBySlug/tips-bong-da`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) {
    return <Loading />;
  }
  console.log(data);
  const breadTitle = data.page_category_name;
  const Tax = {
    taxTitle: data.page_title,
    taxDescription: data.page_description,
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
                    <Content data={data} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    {/* <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} /> */}
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
