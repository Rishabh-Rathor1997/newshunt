import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    return (
     
        <div className="card">
          <div className="cover item-a" style={{ backgroundImage: `url(${this.props.imageUrl?this.props.imageUrl:"https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80"})` }}>
            <h4>
             {this.props.title}...
            </h4>
            <span className="price">{this.props.author ? (
  <q className="author">{this.props.author}</q>
) : null}</span>
            <div className="card-back">
              <a target="_blank" rel="noreferrer" href={this.props.newsUrl} type="button">Read More </a>
            </div>
          </div>
        </div>
      
    );
  }
}

export default NewsCard;
