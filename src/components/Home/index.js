import React from 'react';
import ListRate from './listRate';
import Image from "next/image";
import NewsList from './newsList';
// import Tips from '../tips';
import HightLightList from './hightlightList';
import ColListNews from './colListNews';
import ColListNews2 from './colListNews2';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Tips from '../Tips';
library.add(
  fab,
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
  faPlay
);
function Home(props) {
    return (
        <>
          <ListRate />
          <div className="bxbannerqq">
            <div className="bxinner">
              <div className="bximg">
                <a
                  href="https://vaobo.com/link/w88"
                  rel="nofollow"
                  className="seoquake-nofollow"
                >
                  <Image
                    data-lazyloaded="1"
                    src="https://vaobo.com/wp-content/uploads/2021/09/bb2.jpg?v=1655975657"
                    data-src="https://vaobo.com/wp-content/uploads/2021/09/bb2.jpg?v=1655975657"
                    width="1045"
                    height="83"
                    alt="bb2"
                    data-ll-status="loaded"
                    className="entered litespeed-loaded"
                  />
                </a>
              </div>
            </div>
          </div>
          <NewsList />
          <Tips />
          <HightLightList />
          <ColListNews />
          <div className="bxbannerqq">
            <div className="bxinner">
              <div className="bxflex bxflex_mg">
                <div className="bxw50 bximg">
                  <a
                    href="https://vaobo.com/link/fb88"
                    rel="nofollow"
                    className="seoquake-nofollow"
                  >
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/banner-1.png?v=1655975657"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/banner-1.png?v=1655975657"
                      width="511"
                      height="90"
                      alt="banner-1"
                    />
                  </a>
                </div>
                <div className="bxw50 bximg">
                  <a
                    href="https://vaobo.com/link/m88"
                    rel="nofollow"
                    className="seoquake-nofollow"
                  >
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/banner-2.png?v=1655975657"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/banner-2.png?v=1655975657"
                      width="511"
                      height="90"
                      alt="banner-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ColListNews2 />
        </>
    );
}

export default Home;