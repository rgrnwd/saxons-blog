import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Post from "./components/Post.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Dashboard} path="/" exact />
        <Route component={Post} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
