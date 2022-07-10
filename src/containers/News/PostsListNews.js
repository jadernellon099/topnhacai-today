import React from "react";
import useSWR from "swr";
import ColListNews from "../../components/Home/colListNews";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const PostsNewsList = (props) => {
    const { data, error } = useSWR(`${process.env.api}/posts`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <ColListNews data1={data} data2={data} data3={data} />;
  }

export default PostsNewsList;