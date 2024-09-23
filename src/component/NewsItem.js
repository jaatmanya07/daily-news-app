import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = (props) => {
    // let { title, discription, imgurl, newsUrl, author, date, source } = this.props;
    return (
        <div className='my-3'>
            <div className="card">
                <div>
                    <span className=" badge rounded-pill bg-danger" style={{ display: `flex`, justifyContent: `flex-end`, position: `absolute`, right: '0' }} > {/*style=left: '90%x',*/}
                        {props.source}
                    </span>
                </div>

                <img src={props.imgurl ? props.imgurl : "https://www.hindustantimes.com/ht-img/img/2024/06/21/1600x900/job_interview_1718958514175_1718958530688.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}...</h5>

                    <p className="card-text">{props.discription}...</p>
                    <p className="cardtime">By {!props.author ? "Unknown" : props.author} on {new Date(props.date).toGMTString()}</p>
                    <Link to={props.newsUrl} rel="noopener noreferrer" className="btn btn-sm btn-primary bg-dark" target='_blank'>Read More</Link>
                </div>
            </div>
        </div>
    )
}
export default NewsItem
