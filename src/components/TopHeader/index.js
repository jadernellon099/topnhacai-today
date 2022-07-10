import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown, faPlay);
import Link from "next/link";

function TopHeader(props) {
  return (
    <>
      <header id="top">
        <div className="container">
          <div className="row">
            <div className="col span_3">
              <Link
                id="logo"
                href="/"
                data-supplied-ml-starting-dark="false"
                data-supplied-ml-starting="false"
                data-supplied-ml="true"
              >
                <Image
                  className="stnd skip-lazy default-logo dark-version"
                  width={171}
                  height={56}
                  alt={"Vào Bờ"}
                  src={
                    "https://topnhacai.today/wp-content/uploads/2022/06/top-nha-cai-ts-1024x417-1.png"
                  }
                />
              </Link>
            </div>
            <div className="col span_9 col_last">
              <div
                className="slide-out-widget-area-toggle mobile-icon slide-out-from-right"
                data-custom-color="false"
                data-icon-animation="simple-transform"
              >
                <div>
                  <Link
                    href="#sidewidgetarea"
                    // href={""}
                    aria-label="Navigation Menu"
                    aria-expanded="false"
                    className="closed"
                  >
                    <a>
                      <span className="screen-reader-text">Menu</span>
                      <span aria-hidden="true">
                        <i className="lines-button x2">
                          <i className="lines"></i>
                        </i>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <nav>
                <ul className="sf-menu sf-js-enabled sf-arrows">
                  <li
                    id="menu-item-5334"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-5334"
                  >
                    <Link href="/nha-cai-uy-tin" className="sf-with-ul">
                      <a>
                        <span className="menu-title-text">Nhà cái uy tín</span>
                        <span className="sf-sub-indicator">
                          {/* <FontAwesomeIcon icon={["fas", "fa-chevron-down"]} /> */}
                        </span>
                      </a>
                    </Link>
                    {/* <ul className="sub-menu tracked-pos">
                      <li
                        id="menu-item-5344"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-5344"
                      >
                        <Link href="/casino-truc-tuyen/">
                          <a className="menu-title-text">
                            Casino trực tuyến
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-5345"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-5345"
                      >
                        <Link href="/nha-cai-lo-de/">
                          <a className="menu-title-text">Nhà cái lô đề</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-5346"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-5346"
                      >
                        <Link href="/ca-cuoc-esport/">
                          <a className="menu-title-text">
                            Cá cược esports
                          </a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li
                    id="menu-item-19654"
                    className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-19654"
                  >
                    <Link href="/tips-bong-da">
                      <a className="menu-title-text">Tips bóng đá</a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-5341"
                    className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-5341"
                  >
                    <Link href="/nhan-dinh-bong-da/">
                      <a className="menu-title-text">Nhận định bóng đá</a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-5360"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category nectar-regular-menu-item menu-item-5360"
                  >
                    <Link href="/tro-choi/">
                      <a className="menu-title-text">Trò chơi</a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-5337"
                    className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-5337"
                  >
                    <Link href="/khuyen-mai/">
                      <a className="menu-title-text">Khuyến mãi</a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-5338"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-5338"
                  >
                    <Link href="/thu-vien-ca-cuoc/" className="sf-with-ul">
                      <a>
                        <span className="menu-title-text">Thư Viện</span>
                        <span className="sf-sub-indicator">
                          {/* <FontAwesomeIcon icon={["fas", "fa-chevron-down"]} /> */}
                        </span>
                      </a>
                    </Link>
                    {/* <ul className="sub-menu tracked-pos">
                      <li
                        id="menu-item-5339"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category nectar-regular-menu-item menu-item-5339"
                      >
                        <Link href="/thu-vien-ca-cuoc/huong-dan-ca-cuoc/">
                          <a className="menu-title-text">
                            Hướng dẫn cá cược
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-5353"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category nectar-regular-menu-item menu-item-5353"
                      >
                        <Link href="/thu-vien-ca-cuoc/kinh-nghiem-ca-cuoc/">
                          <a className="menu-title-text">
                            Kinh nghiệm cá cược
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-5355"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category nectar-regular-menu-item menu-item-5355"
                      >
                        <Link href="/thu-vien-ca-cuoc/tin-tuc-ca-cuoc/">
                          <a className="menu-title-text">
                            Tin tức cá cược
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-128293"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category nectar-regular-menu-item menu-item-128293"
                      >
                        <Link href="/thu-vien-ca-cuoc/tin-the-thao/">
                          <a className="menu-title-text">Tin thể thao</a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li
                    id="menu-item-7707"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-7707"
                  >
                    <Link href="/video/" className="sf-with-ul">
                      <a>
                        <span className="menu-title-text">Video</span>
                        <span className="sf-sub-indicator">
                          {/* <FontAwesomeIcon icon={["fas", "fa-chevron-down"]} /> */}
                        </span>
                      </a>
                    </Link>
                    {/* <ul className="sub-menu">
                      <li
                        id="menu-item-7719"
                        className="menu-item menu-item-type-taxonomy menu-item-object-tax_highlight nectar-regular-menu-item menu-item-7719"
                      >
                        <Link href="/highlight-bong-da/">
                          <a className="menu-title-text">
                            Highlight bóng đá
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-7720"
                        className="menu-item menu-item-type-taxonomy menu-item-object-tax_highlight nectar-regular-menu-item menu-item-7720"
                      >
                        <Link href="/video-bong-da/">
                          <a className="menu-title-text">Video bóng đá</a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li
                    id="menu-item-63110"
                    className="csmenuitem_mobile menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-63110"
                  >
                    <Link href={"#"} className="sf-with-ul">
                      <a>
                        <span className="menu-title-text">Công cụ cá cược</span>
                        <span className="sf-sub-indicator">
                          {/* <FontAwesomeIcon icon={["fas", "fa-chevron-down"]} /> */}
                        </span>
                      </a>
                    </Link>
                    {/* <ul className="sub-menu">
                      <li
                        id="menu-item-63111"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-63111"
                      >
                        <Link href="/ty-le-bong-da/">
                          <a className="menu-title-text">Tỷ lệ bóng đá</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-63115"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-63115"
                      >
                        <Link href="/nhan-dinh-bong-da/">
                          <a className="menu-title-text">
                            Nhận định bóng đá
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-63113"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-63113"
                      >
                        <Link href="/lich-su-doi-dau/">
                          <a className="menu-title-text">
                            Lịch sử đối đầu
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-63112"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-63112"
                      >
                        <Link href="/soi-keo-bong-da/">
                          <a className="menu-title-text">
                            Soi kèo bóng đá
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-63114"
                        className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-63114"
                      >
                        <Link href="/may-tinh-du-doan/">
                          <a className="menu-title-text">
                            Máy tính dự đoán
                          </a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li
                    id="menu-item-107655"
                    className="d-md-none menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-107655"
                  >
                    <Link href="/gai-xinh/">
                      <a className="menu-title-text">Gái Xinh</a>
                    </Link>
                  </li>
                </ul>
                <ul className="buttons sf-menu" data-user-set-ocm="off"></ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TopHeader;
