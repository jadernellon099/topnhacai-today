import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <a href="">
                      Soi kèo bóng đá
                    </a>
                  </li>
                  <li
                    id="menu-item-14124"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14124"
                  >
                    <a href="">
                      Máy tính dự đoán
                    </a>
                  </li>
                  <li
                    id="menu-item-5422"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5422"
                  >
                    <a href="">
                      Lịch sử đối đầu
                    </a>
                  </li>
                  <li
                    id="menu-item-51160"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51160"
                  >
                    <a href="">
                      Kết quả bóng đá
                    </a>
                  </li>
                  <li
                    id="menu-item-14123"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14123"
                  >
                    <a href="">Tỷ lệ bóng đá</a>
                  </li>
                  <li
                    id="menu-item-4314"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4314"
                  >
                    <a href="">
                      Link vào nhà cái
                    </a>
                  </li>
                  <li
                    id="menu-item-1229"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1229"
                  >
                    <a href="">
                      So Sánh Nhà Cái
                    </a>
                  </li>
                  <li
                    id="menu-item-7451"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7451"
                  >
                    <a href="">Gái Xinh</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ctspan_4 topbar_right">
              <div className="btnsearch">
                <button className="btn_search_call">
                <FontAwesomeIcon icon={['fas', 'fa-magnifying-glass']} /> 
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