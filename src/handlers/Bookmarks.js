import React, { Component } from 'react';
import '../App.css';
import Story from '../components/Story';

class App extends Component {
  state = {
    bookmarks: []
  };
  componentDidMount() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    this.setState({ bookmarks });
  }
  destroyBookmark = index => {
    const bookmarksArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarksArr.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksArr));
    console.log('saving');
    this.setState({ bookmarks: bookmarksArr });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bookmarks</h2>
        </div>
        {this.state.bookmarks.map((story, i) => {
          return (
            <Story
              isBookmark={true}
              title={story.title}
              key={story.id}
              author={story.author}
              thumbnail={story.thumbnail}
              url={story.url}
              action={() => this.destroyBookmark(i)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
