import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, source, author, publishedAt}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >

          <div style={{display: 'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className=" badge rounded-pill bg-primary"> Source: {source}</span>
          </div>
          
          <img src={!imageUrl?"https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-source"><strong>By {!author? "Unknown": author} on {new Date(publishedAt).toUTCString()}</strong></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
