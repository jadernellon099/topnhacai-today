import React from "react";
import useSWR from "swr";
import NewsList from "../../components/Home/newsList";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const CommentaryList = (props) => {
    const { data, error } = useSWR(`${process.env.api}/posts?page=1&limit=5`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <NewsList data={data} data2={data}/>;
  }

export default CommentaryList;
