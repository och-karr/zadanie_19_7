import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js';

const App = () => {
  return (
    <div className="App">
      <h1>
        Tu będzie lista komentarzy!
      </h1>
      <CommentsListContainer/>
    </div>
  );
};

export default App;
