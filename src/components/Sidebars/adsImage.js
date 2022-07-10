import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as img from "./../../const/Image";

function AdsImage(props) {
  return (
    <article
      id="ctwidget_ads_nhacai-6"
      className="widget widget_ctwidget_ads_nhacai"
    >
      <div className="bxbannerads">
        <div className="bxinner">
          <Link href="/" className="seoquake-nofollow">
            <Image
              src={img.ADS4}
              data-src={img.ADS4}
              width={331}
              height={275}
              alt=""
              data-ll-status="loaded"
              className="entered litespeed-loaded"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AdsImage;
