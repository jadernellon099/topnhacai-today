import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryPost from "../../components/Category/CategoryPosts";
import useSWR from "swr";
import TrustBet from "../../components/Sidebars/trustBet";
import Loading from "../../components/Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function LibraryBetPage(props) {
  const { data: pageData, error: pageError } = useSWR(
    `${process.env.api_topnhacai}/pages/getBySlug/thu-vien-ca-cuoc`,
    fetcher
  );
  const { data: postData, error: postError } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=thu-vien-ca-cuoc&status=public`,fetcher);
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
                    <CategoryPost title={breadTitle} tax={Tax} data={postData} />
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
