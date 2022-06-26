import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function AdsImage(props) {
    return (
        <article id="ctwidget_ads_nhacai-6" className="widget widget_ctwidget_ads_nhacai">
            <div className="bxbannerads">
                <div className="bxinner">
                    <Link href="/" className="seoquake-nofollow">
                    <Image  src="https://vaobo.com/wp-content/uploads/2021/10/fun88.gif?v=1656136135"
                            data-src="https://vaobo.com/wp-content/uploads/2021/10/fun88.gif?v=1656136135" width="300"
                            height="250" alt="" data-ll-status="loaded" className="entered litespeed-loaded" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default AdsImage;