import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TrustBet from "../../components/Sidebars/trustBet";
import CategoryPosts from "../../components/Category/CategoryPosts";
import useSWR from "swr";
import Loading from "../../components/Loading";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function GamesPage(props) {
  const { data: pageData, error: pageError } = useSWR(
    `${process.env.api_topnhacai}/pages/getBySlug/tro-choi`,
    fetcher
  );
  const { data: postData, error: postError } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=tro-choi&status=public`,fetcher);
  if (pageError && postError) return <div>Failed to load</div>;
  if (!pageData && !postData) {
    return <Loading />;
  }
  var breadTitle = "";
  var Tax = "";
  if(pageData){
    breadTitle = pageData.page_category_name;
    Tax = {
      taxTitle: pageData.page_title,
      taxDescription: pageData.page_description,
    };
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
                    <CategoryPosts
                      title={breadTitle}
                      tax={Tax}
                      data={postData}
                    />
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
