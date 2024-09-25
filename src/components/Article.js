import React from 'react';

function Article({ article }) {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p><strong>Topic:</strong> {article.topic}</p>
      <p>{article.content}</p>
      {article.tags && (
        <p><strong>Tags:</strong> {article.tags.tags.join(', ')}</p>
      )}
      <hr />
    </div>
  );
}

export default Article;