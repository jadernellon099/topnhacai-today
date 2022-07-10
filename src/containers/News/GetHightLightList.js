import React from "react";
import useSWR from "swr";
import HightLightList from "../../components/Home/hightlightList";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const GetHightLightList = (props) => {
    const { data, error } = useSWR(`${process.env.api}/posts`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <HightLightList data={data} />;
  }

export default GetHightLightList;