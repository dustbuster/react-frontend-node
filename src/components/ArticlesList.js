import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  // Fetch articles when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5001/api/articles')
      .then(response => {
        console.log(process.env.API_HOST);
        setArticles(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.length > 0 ? (
        articles.map(article => (
          <Article key={article.id} article={article} />
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}

export default ArticleList;
