import React from "react";
import useSWR from "swr";
import ColListNews2 from "../../components/Home/colListNews2";
import Loading from "../../components/Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const PostsNewsList2 = (props) => {
    var { data: dataPost1, error: dataError1 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=ca-cuoc-the-thao&status=public`,fetcher)
    var { data: dataPost2, error: dataError2 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=tro-choi&status=public`,fetcher)
    var { data: dataPost3, error: dataError3 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=lo-de-online&status=public`,fetcher)
    if (dataError1 && dataPost2 && dataPost3)return <div>Failed to load</div>
    if (!dataPost1 && dataError2 && dataError3) return <div><Loading /></div>
    return <ColListNews2 data1={dataPost1} data2={dataPost2} data3={dataPost3} />;
  }

export default PostsNewsList2;