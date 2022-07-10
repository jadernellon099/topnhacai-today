import { useRouter } from 'next/router';
import React from 'react';
import Menu from '../components/Menu';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer/Footer';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Content from '../components/Content';
import AdsImage from '../components/Sidebars/adsImage';
import PostsListSB from '../containers/Sidebars/PostsListSB';
import PostContent from '../components/PostContent';
import useSWR from "swr";
import Breadcrumbs from '../components/Breadcrumbs';
import Loading from '../components/Loading';
import Custom404 from './404';
import e from 'cors';
library.add(fab, faCheck, faMinus, faPlus);

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function PostContentPages(props) {

    const router = useRouter();
    var {slug} = router.query;

    const { data, error } = useSWR(`${process.env.api_topnhacai}/posts/getByStatusAndSlug?status=public&slug=${slug}`, fetcher)
    if (error) return <div><Custom404 /></div>
    if (!data) return <div><Loading /></div>
    if(data.length === 0){
      return <Custom404 />
    }

    const postSidebar1 = {
        title: "Thư viện cá cược",
        mark: "Hot",
        bgColor: "#ff4b00",
      };

    const breadTitle = data[0] && data[0].post_title ? data[0].post_title : "";
    return (
        <>
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="tieude_ds">
              <Breadcrumbs breadTitle={breadTitle}/>
            </div>
            <div className="row">
              <div className="col span_9 bxcontainer"><PostContent data={data} /></div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage />
                    <PostsListSB postSidebar={postSidebar1} category="1" />
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

export default PostContentPages; 