import React from "react";
import Link from "next/link";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
  faTicket,
  faTrophy,
  faThumbsUp,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(
  fab,
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
  faTicket,
  faTrophy,
  faThumbsUp,
  faCalendar
);

BxrateList.propTypes = {};

function BxrateList(props) {
  return (
    <div className="bxrate_list">
      <div className="bxinner">
        <div className="lists_rate">
          <div className="vblist_nhacaicontain ">
            <div className="vbinner">
              <div className="bxrate">
                <div className="bxinner">
                  <div className="bx_xephang">
                    <ul className="ulxephang">
                      <li data-sort="default" className="sort_phobien active">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-star"]}
                            style={{ marginRight: "5px" }}
                          />
                          Phổ biến nhất
                        </span>
                      </li>
                      <li data-sort="km" className="sort_km">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-ticket"]}
                            style={{ marginRight: "5px" }}
                          />
                          Khuyến mãi lớn nhất
                        </span>
                      </li>
                      <li data-sort="rate" className="sort_rate">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-trophy"]}
                            style={{ marginRight: "5px" }}
                          />
                          Đánh giá nhiều nhất
                        </span>
                      </li>
                      <li data-sort="count" className="sort_count">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-thumbs-up"]}
                            style={{ marginRight: "5px" }}
                          />
                          Lựa chọn của người chơi
                        </span>
                      </li>
                    </ul>
                    <div className="date">
                      <span>
                        <FontAwesomeIcon
                          icon={["fas", "fa-calendar"]}
                          style={{ marginRight: "5px" }}
                        />
                        Cập nhật 06/2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bxlisttile">
                <div className="bxinner">
                  <div className="bxtop">
                    <span>Top</span>
                  </div>
                  <div className="bxnhacai">
                    <span>Nhà cái</span>
                  </div>
                  <div className="bxkm">
                    <span>Khuyến mãi</span>
                  </div>
                  <div className="bxratenc">
                    <span>Đánh giá</span>
                  </div>
                  <div className="bxcomment">
                    <span>Bình chọn</span>
                  </div>
                  <div className="bxlienket">
                    <span>Liên kết</span>
                  </div>
                </div>
              </div>
              <div className="bxlist_nhacai" data-vbshow="10">
                <div className="bxinner">
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="1500000"
                    data-rate="9.8"
                    data-count="985523"
                  >
                    <div className="bxtop">
                      <span className="stt">1</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái W88</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/w88"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/W88.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/W88.png?v=1656048143"
                              width="89"
                              height="28"
                              title="Nhà cái W88"
                              alt="w88"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.500.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Odds cao
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9.8</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>985.523</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/w88"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-w88/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="2000000"
                    data-rate="9.5"
                    data-count="954235"
                  >
                    <div className="bxtop">
                      <span className="stt">2</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái FB88</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/fb88"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/FB88.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/FB88.png?v=1656048143"
                              width="89"
                              height="23"
                              title="Nhà cái FB88"
                              alt="fb88"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />2.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>954.235</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/fb88"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-fb88/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="39608000"
                    data-rate="9.5"
                    data-count="934424"
                  >
                    <div className="bxtop">
                      <span className="stt">3</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái M88</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/m88"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/M88.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/M88.png?v=1656048143"
                              width="60"
                              height="26"
                              title="Nhà cái M88"
                              alt="m88-2"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>200%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />39.608.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>934.424</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/m88"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-m88/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="1500000"
                    data-rate="9.5"
                    data-count="912633"
                  >
                    <div className="bxtop">
                      <span className="stt">4</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái 188Bet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/188bet"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/188BET.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/188BET.png?v=1656048143"
                              width="58"
                              height="38"
                              title="Nhà cái 188Bet"
                              alt="188bet-2"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.500.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Tỷ lệ ăn cao
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>912.633</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/188bet"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-188bet/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="6000000"
                    data-rate="9.5"
                    data-count="902375"
                  >
                    <div className="bxtop">
                      <span className="stt">5</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Fun88</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/fun88"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/fun88.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/fun88.png?v=1656048143"
                              width="92"
                              height="21"
                              title="Nhà cái Fun88"
                              alt="fun88"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>150%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />6.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Khuyến mãi nhiều
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>902.375</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/fun88"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-fun88/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="1500000"
                    data-rate="9"
                    data-count="847434"
                  >
                    <div className="bxtop">
                      <span className="stt">6</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái V9Bet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/v9bet"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/v0bet.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/v0bet.png?v=1656048143"
                              width="89"
                              height="36"
                              title="Nhà cái V9Bet"
                              alt="v0bet"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>50%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.500.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>847.434</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/v9bet"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-v9bet/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="6888000"
                    data-rate="9"
                    data-count="820725"
                  >
                    <div className="bxtop">
                      <span className="stt">7</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Letou</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/letou"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/letou-2.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/letou-2.png?v=1656048143"
                              width="89"
                              height="18"
                              title="Nhà cái Letou"
                              alt="letou-3"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>120%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />6.888.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Khuyến mãi nhiều
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>820.725</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/letou"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-letou/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="1694000"
                    data-rate="9"
                    data-count="787843"
                  >
                    <div className="bxtop">
                      <span className="stt">8</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Empire777</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/empire777"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/empire777.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/empire777.png?v=1656048143"
                              width="92"
                              height="13"
                              title="Nhà cái Empire777"
                              alt="empire777"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.694.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Odds cao
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>787.843</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/empire777"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-empire777/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="4600000"
                    data-rate="9"
                    data-count="776384"
                  >
                    <div className="bxtop">
                      <span className="stt">9</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Happy Luke</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/happyluke"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/happyluke-1.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/happyluke-1.png?v=1656048143"
                              width="59"
                              height="34"
                              title="Nhà cái Happy Luke"
                              alt="happyluke-2"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>200%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />4.600.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>776.384</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/happyluke"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-happy-luke/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="9500000"
                    data-rate="9"
                    data-count="761238"
                  >
                    <div className="bxtop">
                      <span className="stt">10</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái BK8</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/bk8"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/BK8-1.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/BK8-1.png?v=1656048143"
                              width="62"
                              height="31"
                              title="Nhà cái BK8"
                              alt="bk8-2"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>268%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />9.500.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Khuyến mãi nhiều
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Odds cao
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>761.238</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/bk8"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-bk8/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="88000"
                    data-rate="8.5"
                    data-count="652332"
                  >
                    <div className="bxtop">
                      <span className="stt">11</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Loto188</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/loto88"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/Loto188-1.png?v=1656048143"
                              width="88"
                              height="29"
                              title="Nhà cái Loto188"
                              alt="loto188-2"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />88.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Nạp tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Odds cao
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>8.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>652.332</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/loto88"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-loto188/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="2500000"
                    data-rate="8.5"
                    data-count="644243"
                  >
                    <div className="bxtop">
                      <span className="stt">12</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái 1xBet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/1xbet"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/1xbet-logo-png.png?v=1656048143"
                              width="180"
                              height="44"
                              title="Nhà cái 1xBet"
                              alt="1xbet-logo-png"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>200%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />2.500.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>8.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>644.243</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/1xbet"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-1xbet/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="1000000"
                    data-rate="8.5"
                    data-count="525313"
                  >
                    <div className="bxtop">
                      <span className="stt">13</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Nextbet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/nextbet"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/logo-nextbet.png?v=1656048143"
                              width="253"
                              height="57"
                              title="Nhà cái Nextbet"
                              alt="logo-nextbet"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Khuyến mãi nhiều
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>8.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>525.313</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/nextbet"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-nextbet/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="1000000"
                    data-rate="8.5"
                    data-count="504222"
                  >
                    <div className="bxtop">
                      <span className="stt">14</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Dubai Palace</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/dubai-casino"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/dubaicasino.png?v=1656048143"
                              width="90"
                              height="25"
                              title="Dubai Palace"
                              alt="dubaicasino"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>120%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>8.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>504.222</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/dubai-casino"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/dubai-palace/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="3000000"
                    data-rate="8"
                    data-count="495423"
                  >
                    <div className="bxtop">
                      <span className="stt">15</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Oppabet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/oppabet"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/Oppa888.png?v=1656048143"
                              width="90"
                              height="13"
                              title="Nhà cái Oppabet"
                              alt="oppa888"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />3.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>8</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>495.423</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/oppabet"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-oppabet/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="20000000"
                    data-rate="8"
                    data-count="475823"
                  >
                    <div className="bxtop">
                      <span className="stt">16</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Vwin</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/vwin"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/Vwin.png?v=1656048143"
                              width="64"
                              height="22"
                              title="Nhà cái Vwin"
                              alt="vwin"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>278%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />20.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} /> Odds cao
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>8</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>475.823</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/vwin"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-vwin/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="5400000"
                    data-rate="7.5"
                    data-count="455235"
                  >
                    <div className="bxtop">
                      <span className="stt">17</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Dafabet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/dafabet"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/dafabet.png?v=1656048143"
                              width="93"
                              height="22"
                              title="Nhà cái Dafabet"
                              alt="dafabet"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>260%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />5.400.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>455.235</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/dafabet"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-dafabet/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="1000000"
                    data-rate="7.5"
                    data-count="431542"
                  >
                    <div className="bxtop">
                      <span className="stt">18</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái K8</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/k8"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/kb.png?v=1656048143"
                              width="83"
                              height="31"
                              title="Nhà cái K8"
                              alt="kb"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>88%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Khuyến mãi nhiều
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>431.542</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/k8"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-k8/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="5000000"
                    data-rate="7.5"
                    data-count="416321"
                  >
                    <div className="bxtop">
                      <span className="stt">19</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Bet365</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/bet365"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/logo-bet365.png?v=1656048143"
                              width="197"
                              height="57"
                              title="Nhà cái Bet365"
                              alt="logo-bet365"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />5.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7.5</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>416.321</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/bet365"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-bet365/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="5000000"
                    data-rate="7"
                    data-count="412235"
                  >
                    <div className="bxtop">
                      <span className="stt">20</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái JBO</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/jbo"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/jbo.png?v=1656048143"
                              width="83"
                              height="42"
                              title="Nhà cái JBO"
                              alt="jbo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />5.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Nạp tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>412.235</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/jbo"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-jbo/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="888000"
                    data-rate="7"
                    data-count="403256"
                  >
                    <div className="bxtop">
                      <span className="stt">21</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái Lixi88</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/lixi88"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/lixi88.png?v=1656048143"
                              width="90"
                              height="22"
                              title="Nhà cái Lixi88"
                              alt="lixi88"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />888.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Gửi tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>403.256</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/lixi88"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-lixi88/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="5000000"
                    data-rate="7"
                    data-count="392364"
                  >
                    <div className="bxtop">
                      <span className="stt">22</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái CMD368</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/cmd368"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://vaobo.com/wp-content/uploads/2021/08/cmd368.png?v=1656048143"
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/cmd368.png?v=1656048143"
                              width="94"
                              height="18"
                              title="Nhà cái CMD368"
                              alt="cmd368"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />5.000.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Tiền thưởng lớn
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ tốt
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>392.364</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/cmd368"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/nha-cai-cmd368/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vbitem hide"
                    data-index="0"
                    data-km="4600000"
                    data-rate="7"
                    data-count="360843"
                  >
                    <div className="bxtop">
                      <span className="stt">23</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Live Casino House</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://vaobo.com/link/lch"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="https://vaobo.com/wp-content/uploads/2021/08/casio.png?v=1656048143"
                              width="98"
                              height="37"
                              title="Live Casino House"
                              alt="casio"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>200%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />4.600.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Giao diện đẹp
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Khuyến mãi lớn
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>7</strong>/10
                        </span>
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                        <div className="slbl">
                          <span>
                            <strong>360.843</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="https://vaobo.com/link/lch"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="https://vaobo.com/live-casino-house/">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bxlinkall showmore">
                <Link href="">XEM TẤT CẢ CÁC NHÀ CÁI UY TÍN KHÁC</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BxrateList;
