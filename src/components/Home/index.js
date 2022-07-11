import React from "react";
import Link from "next/link";
import Image from "next/image";
import HightLightList from "./hightlightList";
import ColListNews from "./colListNews";
import ColListNews2 from "./colListNews2";
import * as img from "../../const/Image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faRefresh,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Tips from "../Tips";
import CommentaryList from "../../containers/News/CommentaryList";
import DealersList from "../../containers/News/DealersList";
import CallApiFootballList from "../../pages/api/callApiFootballList";
import GetHightLightList from "../../containers/News/GetHightLightList";
import PostsNewsList from "../../containers/News/PostsListNews";
import PostsNewsList2 from "../../containers/News/PostsListNews2";
library.add(
  fab,
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faRefresh,
  faPlay
);
function Home(props) {
  return (
    <>
      <DealersList />
      <div className="bxbannerqq">
        <div className="bxinner">
          <div className="bximg">
            <Link
              href=""
              rel="nofollow"
              className="seoquake-nofollow"
            >
              <Image
                data-lazyloaded="1"
                src={img.ADS1}
                data-src={img.ADS1}
                width="1045"
                height="83"
                alt="bb2"
                data-ll-status="loaded"
                className="entered litespeed-loaded"
              />
            </Link>
          </div>
        </div>
      </div>
      <CommentaryList />
      {/* <Tips /> */}
      {/* <CallApiFootballList /> */}
      <GetHightLightList />
      {/* <HightLightList /> */}
      <PostsNewsList />
      <div className="bxbannerqq">
        <div className="bxinner">
          <div className="bxflex bxflex_mg">
            <div className="bxw50 bximg">
              <Link
                href=""
                rel="nofollow"
                className="seoquake-nofollow"
              >
                <Image
                  data-lazyloaded="1"
                  src={img.ADS2}
                  data-src={img.ADS2}
                  width="511"
                  height="90"
                  alt="banner-1"
                />
              </Link>
            </div>
            <div className="bxw50 bximg">
              <Link
                href=""
                rel="nofollow"
                className="seoquake-nofollow"
              >
                <Image
                  data-lazyloaded="1"
                  src={img.ADS3}
                  data-src={img.ADS3}
                  width="511"
                  height="90"
                  alt="banner-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PostsNewsList2 />
    </>
  );
}

export default Home;
