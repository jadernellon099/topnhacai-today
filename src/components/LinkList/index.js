import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Content from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown, faChevronRight, faLink, faChevronUp);

function LinkList(props) {
  const [active, setActive] = useState("hide");

  const setMore = () => {
    if (active === "hide") {
      return (
        <a
          onClick={() => {
            setActive("active");
          }}
        >
          Xem thêm
          <FontAwesomeIcon
            icon={["fas", "fa-chevron-down"]}
            style={{ marginLeft: "5px" }}
          />
        </a>
      );
    } else {
      return (
        <a
          onClick={() => {
            setActive("hide");
          }}
        >
          Thu gọn
          <FontAwesomeIcon
            icon={["fas", "fa-chevron-up"]}
            style={{ marginLeft: "5px" }}
          />
        </a>
      );
    }
  };
  return (
    <>
      <div className="bxss bxrate_list pad0">
        <div className="bxinner">
          <div className="pad0_20 lists_rate">
            <div className="bxlinkvaonc bxmainviewmore">
              <div className="bxitem active">
                <div className="bxtitle">
                  <p>Nhà cái W88</p>
                </div>
                <div className="logo">
                  <div className="lginner">
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/W88.png?v=1656417493"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/W88.png?v=1656417493"
                      width="89"
                      height="28"
                      title="w88"
                      alt="w88"
                      data-ll-status="loaded"
                      className="entered litespeed-loaded"
                    />
                  </div>
                </div>
                <div className="bxlink_pc">
                  <div className="bxlinkit link_0">
                    <Link href="https://vaobo.com/link/w88" rel="nofollow">
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 1
                      </a>
                    </Link>
                  </div>
                  <div className="bxlinkit link_1">
                    <Link href="https://vaobo.com/link/w88-2" rel="nofollow">
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 2
                      </a>
                    </Link>
                  </div>
                  <div className="bxlinkit link_2">
                    <Link href="https://vaobo.com/link/w88-3" rel="nofollow">
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 3
                      </a>
                    </Link>
                  </div>
                  <div className="bxlinkit link_3">
                    <Link href="https://vaobo.com/link/w88-4" rel="nofollow">
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 4
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="bxchitiet">
                  <Link href="https://vaobo.com/link-vao-w88/">
                    <a>
                      Xem chi tiết
                      <FontAwesomeIcon
                        icon={["fas", "fa-chevron-right"]}
                        style={{ marginLeft: "5px", fontSize: "10px" }}
                      />{" "}
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={active === "hide" ? "bxitem hide" : "bxitem active"}
              >
                <div className="bxtitle">
                  <p>Nhà cái Dafabet</p>
                </div>
                <div className="logo">
                  <div className="lginner">
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/dafabet.png?v=1656417493"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/dafabet.png?v=1656417493"
                      width="93"
                      height="22"
                      title="dafabet"
                      alt="dafabet"
                    />
                  </div>
                </div>
                <div className="bxlink_pc">
                  <div className="bxlinkit link_0">
                    <Link href="https://vaobo.com/link/dafabet" rel="nofollow">
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 1
                      </a>
                    </Link>
                  </div>
                  <div className="bxlinkit link_1">
                    <Link
                      href="https://vaobo.com/link/dafabet-2"
                      rel="nofollow"
                    >
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 2
                      </a>
                    </Link>
                  </div>
                  <div className="bxlinkit link_2">
                    <Link
                      href="https://vaobo.com/link/dafabet-3"
                      rel="nofollow"
                    >
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 3
                      </a>
                    </Link>
                  </div>
                  <div className="bxlinkit link_3">
                    <Link
                      href="https://vaobo.com/link/dafabet-4"
                      rel="nofollow"
                    >
                      <a>
                        <FontAwesomeIcon icon={["fas", "fa-link"]} />
                        Link 4
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="bxchitiet">
                  <Link href="https://vaobo.com/link-vao-dafabet/">
                    <a>
                      Xem chi tiết
                      <FontAwesomeIcon icon={["fas", "fa-chevron-right"]} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bxlinkall btnlinkviewmore">
              <Link href="">{setMore()}</Link>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </>
  );
}

export default LinkList;
