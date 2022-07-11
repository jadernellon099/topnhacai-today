import Link from "next/link";
import React from "react";
import Content from "../Content";

BeautifulGirl.propTypes = {};

function BeautifulGirl(props) {
  const innerHTMLs = (data) => {
    if (data) {
      return { __html: data };
    } else {
      return { __html: "" };
    }
  };

  const postGirl = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        // if (index < 2)
          return (
            <div className="gditem" key={index}>
            <div className="bxinner">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <Link href={dt.post_slug}><a></a></Link>
              </div>
              <p>
                <Link href={dt.post_slug}>
                {dt.post_title}
                </Link>
              </p>
            </div>
          </div>
          );
      });
    }
    return result;
  };
  return (
    <>
      <div className="bxss vbgd_lists">
        <div className="bxinner">
          <div className="bxnd_top">
            <h2>Tuyển tập hình ảnh hot girl show hàng khủng 18+</h2>
            <p>
              Nếu như trước kia hầu hết mọi người đều ưa chuộng vẻ đẹp dịu dàng
              hay quyến rũ thì giờ đây, người ta lại chuyển sang hình mẫu đáng
              yêu, nhỏ nhắn. Những cô nàng như thế dễ dàng làm say đắm trái tim
              người nhìn với vẻ bề ngoài trong trẻo, dễ thương.
            </p>
          </div>
          <div className="bxlists_gaidepcontain">
            {postGirl()}
          </div>
          {/* <div className="bxnavigation">
            <div className="navigation_ct">
              <div className="bxinner">
                <div className="first_paged">
                  <a
                    className="page-numbers"
                    href="https://vaobo.com/gai-xinh/"
                  >
                    «
                  </a>
                </div>
                <div className="paginate">
                  <ul className="page-numbers">
                    <li>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                      >
                        1
                      </span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://vaobo.com/gai-xinh/page/2/"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://vaobo.com/gai-xinh/page/3/"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <span className="page-numbers dots">…</span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://vaobo.com/gai-xinh/page/11/"
                      >
                        11
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="last_paged">
                  <a
                    className="page-numbers"
                    href="https://vaobo.com/gai-xinh/page/11/"
                  >
                    »
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Content data={props.pageData} />
    </>
  );
}

export default BeautifulGirl;
