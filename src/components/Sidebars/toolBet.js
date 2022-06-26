import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

ToolBet.propTypes = {};

function ToolBet(props) {
  return (
    <article id="ctwidget_tool-5" className="widget widget_ctwidget_tool">
      <div className="bxwidget_tool ">
        <div className="bxinner">
          <h5 className="bxwidget_title">
            <span className="">tool</span>
            Công cụ cá cược
          </h5>
          <div className="bxlist_tool">
            <div className="item"></div>
            <div className="item">
              <a href="https://vaobo.com/ty-le-bong-da/">
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/1-1.png?v=1655975658"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/1-1.png?v=1655975658"
                      width="16"
                      height="9"
                      alt="1-1"
                    />
                  </span>
                </span>
                <span className="title">Tỷ lệ bóng đá</span>
              </a>
            </div>
            <div className="item">
              <a href="https://vaobo.com/nhan-dinh-bong-da/">
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object1.png?v=1655975658"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object1.png?v=1655975658"
                      width="18"
                      height="20"
                      alt="vector-smart-object1"
                    />
                  </span>
                </span>
                <span className="title">Nhận định bóng đá</span>
              </a>
            </div>
            <div className="item">
              <a href="https://vaobo.com/soi-keo-bong-da/">
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object2.png?v=1655975658"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object2.png?v=1655975658"
                      width="22"
                      height="16"
                      alt="vector-smart-object2"
                    />
                  </span>
                </span>
                <span className="title">Soi kèo bóng đá</span>
              </a>
            </div>
            <div className="item">
              <a href="https://vaobo.com/lich-su-doi-dau/">
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/H2H.png?v=1655975658"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/H2H.png?v=1655975658"
                      width="24"
                      height="9"
                      alt="h2h"
                    />
                  </span>
                </span>
                <span className="title">Lịch sử đối đầu</span>
              </a>
            </div>
            <div className="item">
              <a href="https://vaobo.com/may-tinh-du-doan/">
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object4.png?v=1655975658"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object4.png?v=1655975658"
                      width="22"
                      height="14"
                      alt="vector-smart-object4"
                    />
                  </span>
                </span>
                <span className="title">Máy tính dự đoán</span>
              </a>
            </div>
            <div className="item"></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ToolBet;
