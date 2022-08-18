import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
        <form className='row'>
            <div class="form-group col-sm-8 col-md-6 col-lg-4">
                <label htmlFor="searchInput">Email address</label>
                <input type="text" class="form-control" id="searchInput"  placeholder="search"></input>
            </div>

            <div class="form-group">
                <label htmlFor="checkInput">Only produck in stock</label>
                <input type="checkbox" class="form-form-check-input" id="checkInput" ></input>
            </div>
        </form>
    )
  }
}
