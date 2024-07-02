import React, { Component } from 'react'

export class pagination extends Component {
  render() {
    return (
        <div className='pb-3 mt-3 d-flex justify-content-end'>
        <span className='text me-3'>Page :  {this.state.page} / {this.state.totalPage}  </span>
        <button disabled={this.state.page <= 1} className="btn btn-dark my-btn me-3" onClick={this.handlePrevClick} type="button">&#129060; Previous </button>
        {/* button Group */}
        <div className="btn-toolbar me-3" role="toolbar" aria-label="Toolbar with button groups">
          {/* <div className="btn-group me-2" role="group" aria-label="First group">
            {Array.from({ length: this.state.totalPage - 1 }, (_, index) => (
              <button
                type="button"
                key={index}
                className={`btn my-btn-group btn-outline-secondary ${index + 1 === this.state.page ? 'active' : ''}`}
                onClick={() => this.handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div> */}
          <div className="btn-group me-2" role="group" aria-label="Second group">
            <span className=" text pb-0">....</span>
          </div>
          <div className="btn-group" role="group" aria-label="Third group">
            <button onClick={() => this.handleLastPageClick(this.state.totalPage)} disabled={this.state.page >= this.state.totalPage} type="button" className={` my-btn-group btn btn-outline-secondary ${this.state.totalPage === this.state.page ? 'active' : ''}`}>{this.state.totalPage}</button>
          </div>
        </div>
        {/* button Group end*/}


        <button disabled={this.state.page >= this.state.totalPage} className="btn btn-dark my-btn" onClick={this.handleNextClick} type="button">Next &#129062;</button>

      </div>
    )
  }
}

export default pagination



