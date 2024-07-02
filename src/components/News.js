
import React, { Component } from 'react';
import NewsCard from './NewsCard';
import Loder from './Loder';

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalPage: 0,
      category: "general",
      TotalResults: null,
      Loding: false

    };
  }

  // async componentDidMount() {
  //   try {
  //     // let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&page=1&apiKey=3be4281cc850419cb64b7f4fbde13ceb&pageSize=12`;
  //     let Url = `${this.state.category}.json`;
  //     this.setState({ Loding: true });
  //     let response = await fetch(Url);
  //     let data = await response.json();
  //     let totalResults = data.totalResults;
  //     console.log(totalResults)
  //     let pageSize = 12;
  //     let totalPage = Math.ceil(totalResults / pageSize);

  //     this.setState({ articles: data.articles, totalPage, TotalResults: totalResults, Loding: false });
  //   } catch (error) {
  //     console.error(error);
  //   }
  async componentDidMount() {
    try {
      let Url = `${this.state.category}.json`;
      this.setState({ Loding: true });
      let response = await import(`../data/${Url}`);
      let data = response.default;
      console.log(data)
      let totalResults = data.totalResults;
      console.log(totalResults)
      let pageSize = 12;
      let totalPage = Math.ceil(totalResults / pageSize);
  
      this.setState({ articles: data.articles, totalPage, TotalResults: totalResults, Loding: false });
    } catch (error) {
      console.error(error);
    }
  }
  // handlePageClickcategory = async (category) => {
  //   try {
  //     // let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=1&apiKey=3be4281cc850419cb64b7f4fbde13ceb&pageSize=12`;
  //     let Url = `${this.state.category}.json`;
  //     this.setState({ Loding: true });
  //     let response = await fetch(Url);
  //     let data = await response.json();
  //     let totalResults = data.totalResults;
  //     let pageSize = 12;
  //     let totalPage = Math.ceil(totalResults / pageSize);

  //     this.setState({
  //       articles: data.articles,
  //       category,
  //       TotalResults: totalResults,
  //       totalPage,
  //       page: 1,
  //       Loding: false

  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  handlePageClickcategory = async (category) => {
    try {
      let Url = `${category}.json`;
      this.setState({ Loding: true });
      let response = await import(`../data/${Url}`);
      let data = response.default;
      let totalResults = data.totalResults;
      let pageSize = 12;
      let totalPage = Math.ceil(totalResults / pageSize);
  
      this.setState({
        articles: data.articles,
        category,
        TotalResults: totalResults,
        totalPage,
        page: 1,
        Loding: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  handlePageClick = async (page) => {
    try {
      // let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&page=${page}&apiKey=3be4281cc850419cb64b7f4fbde13ceb&pageSize=12`;
      let Url = `${this.state.category}.json`;
      
      this.setState({ Loding: true });
      let response = await fetch(Url);
      let data = await response.json();

      this.setState({
        articles: data.articles,
        page,
        Loding: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Add similar try-catch blocks for handlePrevClick, handleNextClick, handleLastPageClick, and handleFirstPageClick
  handleLastPageClick = async (page) => {
    try {
      let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}general&page=${page}&apiKey=3be4281cc850419cb64b7f4fbde13ceb&pageSize=12`;
      this.setState = ({ Loding: true });

      let response = await fetch(Url);
      let data = await response.json();

      this.setState({
        articles: data.articles,
        Loding: false,
        page
      });
    } catch (error) {
      console.error(error);
    }
  }
  handleFirstPageClick = async (page) => {
    try {
      let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&page=${page}&apiKey=3be4281cc850419cb64b7f4fbde13ceb&pageSize=12`;
      this.setState({ Loding: true })
      let response = await fetch(Url);
      let data = await response.json();

      this.setState({
        articles: data.articles,
        Loding: false,
        page
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        {/* <div className='container-fluid '> */}
        <section>
          <h1 className="text-center">NewsHunt - Top Headlines</h1>

          <div className=" container-fluid p-0 my-2   ">
            <div className="row  justify-content-center ">


              <div className='col-md-1 col-sm-3 col-xs-6  ps-0 '>
                <span type='button' onClick={() => this.handlePageClickcategory("general")} className={`link-category ${this.state.category === "general" ? "activelink" : ""} `}> General </span>
              </div>

              <div className='col-md-1 col-sm-3 col-xs-6  ps-0 '>
                <span type='button' onClick={() => this.handlePageClickcategory("business")} className={`link-category ${this.state.category === "business" ? "activelink" : ""} `}> Business </span>
              </div>

              <div className='col-md-1 col-sm-3 col-xs-6   ps-0'>
                <span type='button' onClick={() => this.handlePageClickcategory("science")} className={`link-category ${this.state.category === "science" ? "activelink" : ""} `}>Science </span>
              </div>

              <div className='col-md-1 col-sm-3 col-xs-6   ps-0'>
                <span type='button' onClick={() => this.handlePageClickcategory("sports")} className={`link-category ${this.state.category === "sports" ? "activelink" : ""} `}>Sports </span>
              </div>

              <div className='col-md-1 col-sm-3 col-xs-6 ps-0'>
                <span type='button' onClick={() => this.handlePageClickcategory("technology")} className={`link-category ${this.state.category === "technology" ? "activelink" : ""} `}>Technology </span>
              </div>
              <div className='col-md-1 col-sm-3 col-xs-6  ps-0'>
                <span type="button" onClick={() => this.handlePageClickcategory("entertainment")} className={`link-category ${this.state.category === "entertainment" ? "activelink" : ""} `}>Entertainment </span>
              </div>
              <div className='col-md-1 col-sm-3 col-xs-6    ps-0'>
                <span type='button' onClick={() => this.handlePageClickcategory("health")} className={`link-category  ${this.state.category === "health" ? "activelink" : ""} `} id="bn">Health </span>
              </div>


            </div>
          </div>

          {/* {this.state.Loding && <Loder/>} */}
          <div className="row">

            {this.state.Loding ? (
              <Loder />
            ) : (
              <>
                {this.state.articles ? (
                  this.state.articles.map((article) => {
                   return <div className="col-md-4 col-sm-6 col-xs-12" key={article.url}>
                      <NewsCard
                        key={article.url}
                        title={article.title.slice(0, 121)}
                        description={article.description}
                        imageUrl={article.urlToImage}
                        newsUrl={article.url}
                        author={article.author}
                      />
                    </div>
                  })
                ) : (
                  <p>No articles found</p>
                )}
              </>
            )}
          </div>
          <div className='pb-3 mt-3  justify-content-end d-flex flex-row flex-wrap  align-items-end container-fluid gap-2 pe-0'>


            {/* <span className='text me-3'>Total Result : {this.state.TotalResults} </span> */}
            {/* <span className='text me-3'>Page : {this.state.page} / {this.state.totalPage} </span> */}
            <button 
            // disabled={this.state.page <= 1} 
            disabled

            className="btn btn-dark my-btn me-3" 
            onClick={() => this.handlePageClick(this.state.page - 1)} type="button">&#129060; Previous </button>
            
            {/* button Group */}
            <div className="btn-toolbar me-3" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group me-2" role="group" aria-label="First group">

                <button
                  onClick={() => this.handleFirstPageClick(1)}
                  // disabled={this.state.page <= 1}
                  disabled
                  type="button"
                  className={`my-btn-group btn btn-outline-secondary ${this.state.page === 1 ? 'active' : ''}`}
                >
                  1
                </button>
              </div>
              <div className="btn-group me-2" role="group" aria-label="Second group">
                <span className=" text pb-0">....</span>
              </div>
              <div className="btn-group me-2" role="group" aria-label="Third group">
                <button
                  onClick={() => this.handleLastPageClick(this.state.totalPage)}
                  // disabled={this.state.page === this.state.totalPage}
                  disabled
                  type="button"
                  className={`my-btn-group btn btn-outline-secondary ${this.state.page === this.state.totalPage ? 'active' : ''}`}
                >
                  {this.state.totalPage}
                </button>
              </div>
              <button 
              // disabled={this.state.page >= this.state.totalPage} 
              disabled
              className="btn btn-dark my-btn" onClick={() => this.handlePageClick(this.state.page + 1)} type="button">Next &#129062;</button>
            </div>

          </div>
          {/* button Group end*/}
        </section >
        {/* </div > */}
      </>
    );
  }
}

export default News;



