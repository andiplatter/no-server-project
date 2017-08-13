import React from 'react';
import '../story.css';

const Story = ({ title, author, url, thumbnail, action, isBookmark }) => {
  return (
    <div className="Story-container">
      <div className="Story-thumbnail">
        <img className="Story-image" src={thumbnail} />
      </div>
      <a className="Story-url" href={url} target="_blank">
        <h1 className="Story-title">
          {title}
        </h1>
      </a>
      <p className="Story-author">
        {author}
      </p>
      <button className="Story-button" type="save" onClick={action}>
        {isBookmark ? 'Remove' : 'Bookmark'}
      </button>
      <hr />
    </div>
  );
};

export default Story;
