import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import Story from '../components/Story';

class Search extends Component {
  state = {
    searchValue: '',
    subReddit: '',
    data: [],
    isLoading: false,
    error: null
  };
  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  async handleSubmit() {
    // starting
    this.setState({
      subReddit: this.state.searchValue,
      searchValue: '',
      isLoading: true,
      data: []
    });

    // fetching
    const data = await this.fetchData(this.state.searchValue);

    // displaying
    this.setState({
      data: data ? data : [],
      isLoading: false
    });
  }
  async fetchData(sub) {
    try {
      const { data: { children } } = await $.getJSON(
        `https://reddit.com/r/${sub}.json?jsonp=?`,
        data => data
      );
      return children;
    } catch (err) {
      this.setState({
        error: err
      });
    }
  }
  handleSave = story => {
    const bookmarksArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarksArr.push(story);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksArr));
    console.log('saving', story);
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search</h2>
          <input
            value={this.state.searchValue}
            onChange={this.handleChange}
            type="text"
            placeholder="subReddit"
          />
          <button onClick={this.handleSubmit.bind(this)}>Search</button>
          {this.state.subReddit &&
            <h2>
              Subreddit: {this.state.subReddit}
            </h2>}
        </div>
        {this.state.error && <p>Oopsie poopsie</p>}
        {this.state.data.map((story, i) => {
          return (
            <Story
              isBookmark={false}
              title={story.data.title}
              key={story.data.id}
              author={story.data.author}
              thumbnail={story.data.thumbnail}
              url={story.data.url}
              action={() => this.handleSave(story.data)}
            />
          );
        })}
      </div>
    );
  }
}

export default Search;
