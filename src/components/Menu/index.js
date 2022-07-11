import React from 'react';
import Image from "next/image";
import Link from "next/link"
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  
library.add( faMagnifyingGlass );

function Menu(props) {
    return (
        <div className="topbanner">
        <div className="container">
          <div className="row_flex">
            <div className="menutopbar ctspan_8">
              <div className="menu-header-menu-container">
                <ul id="top-menu" className="nav navbar-nav">
                  <li
                    id="menu-item-23208"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23208"
                  >
                    <Link href="/soi-keo-bong-da">
                      Soi kèo bóng đá
                    </Link>
                  </li>
                  <li
                    id="menu-item-5422"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5422"
                  >
                    <Link href="/lich-su-doi-dau">
                      Lịch sử đối đầu
                    </Link>
                  </li>
                  <li
                    id="menu-item-51160"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51160"
                  >
                    <Link href="/ket-qua-bong-da">
                      Kết quả bóng đá
                    </Link>
                  </li>
                  <li
                    id="menu-item-14123"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14123"
                  >
                    <Link href="/ty-le-bong-da">Tỷ lệ bóng đá</Link>
                  </li>
                  <li
                    id="menu-item-4314"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4314"
                  >
                    <Link href="/link-vao-nha-cai">
                      Link vào nhà cái
                    </Link>
                  </li>
                  <li
                    id="menu-item-1229"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1229"
                  >
                    <Link href="/so-sanh-nha-cai">
                      So Sánh Nhà Cái
                    </Link>
                  </li>
                  {/* <li
                    id="menu-item-7451"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7451"
                  >
                    <Link href="/gai-xinh">Gái Xinh</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="ctspan_4 topbar_right">
              <div className="btnsearch">
                <button className="btn_search_call">
                {/* <FontAwesomeIcon icon={['fas', 'fa-magnifying-glass']} />  */}
                </button>
                <span className="lang">
                  <Image
                    data-lazyloaded="1"
                    src={`https://vaobo.com/wp-content/themes/salient-child/t-inc/images/icon-vn.png`}
                    width={20}
                    height={20}
                    alt="viet nam"
                    data-ll-status="loaded"
                    className="entered litespeed-loaded"
                  />
                  <span>Tiếng Việt</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Menu;