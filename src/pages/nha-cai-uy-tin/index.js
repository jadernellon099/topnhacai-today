import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import CompareBets from "../../components/Sidebars/compareBets";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import DealersList from "../../containers/News/DealersList";
import useSWR from "swr";
import PostsListSB from "../../containers/Sidebars/PostsListSB";
import Loading from "../../components/Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ReputableBookiePage(props) {
  const postSidebar1 = {
    title: "Hướng dẫn cá cược",
    mark: "HD",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Kinh nghiệm cá cược",
    mark: "KN",
    bgColor: "#ff4b00",
  };

  const { data, error } = useSWR(
    `${process.env.api_topnhacai}/pages/getBySlug/nha-cai-uy-tin`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) {
    return <Loading />;
  }
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
                    <DealersList />
                    <Content data={data} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <PostsListSB postSidebar={postSidebar1} />
                    <PostsListSB postSidebar={postSidebar2} />
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

export default ReputableBookiePage;
