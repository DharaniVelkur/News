import { useEffect,useState } from "react";
import React from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
// import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

 
export default function News(props) {
    const [articles,setArticles]=useState([]);
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1);
    const [totalResults,settotalResults]=useState(0);

 const updateNews=async()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ab537322817d4faa9eb955dc7f737e11&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url); 
    props.setProgress(50);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(parseddata.articles);
    setLoading(false);
    settotalResults(parseddata.totalResults)
  
    props.setProgress(100);

  }
  useEffect(()=>{
    updateNews();
  },[])
 
  
const fetchMoreData= async ()=>{
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ab537322817d4faa9eb955dc7f737e11&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
  setLoading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    setLoading(false);
    settotalResults(parseddata.totalResults);
}
    return (
      <>
        <h1 className="text-center "style={{marginTop:"80px"}}>
          {props.category.toUpperCase()}-TOP HEADLINES
        </h1>
        {/* {loading && <Spin/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={loading && <Spin/>}
        >
          <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-6 col-lg-4 d-flex justify-content-center col-sm-6 my-3" key={element.url}>
                  <NewsItem
                    loading={loading}
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

// News.defaultProps={
//   country:'in',
//   pageSize:8,
//   category:'general'
//      }

// News.propTypes={
//   country:PropTypes.string,
//   pageSize:PropTypes.number,
//   category:PropTypes.string
//      }