import React from "react";
import useSWR from "swr";
import ColListNews2 from "../../components/Home/colListNews2";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const PostsNewsList2 = (props) => {
    const { data, error } = useSWR(`${process.env.api}/posts`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <ColListNews2 data1={data} data2={data} data3={data} />;
  }

export default PostsNewsList2;