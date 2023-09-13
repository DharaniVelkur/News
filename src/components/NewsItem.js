import React from "react";
import BasicSkeleton from "./BasicSkeleton";

function NewsItem(props) {
  //  let {title,description,imageUrl,newsUrl,author,date}=this.props;
  return (
    <>
      {props.loading ?<BasicSkeleton/> :
       <>
      <div className="card" style={{"width":"18rem"}}>
        <img
          className="card-img-top"
          src={props.imageUrl}
          width="100px"
          height="180px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author} on {new Date(props.date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            Read More ...
          </a>
        </div>
      </div>
      </>
}
    </>
      
  );
}
export default NewsItem;
