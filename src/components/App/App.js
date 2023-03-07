import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export default function App() {

  const [urls, setUrls] = useState([])

  useEffect(() => {
    getUrls()
    .then(data => setUrls(data.urls))
    .catch(error => console.log(error))
  }, [])

  const addUrl = newUrl => setUrls([...urls, newUrl])
 
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={addUrl}/>
        </header>

        <UrlContainer urls={urls}/>
      </main>
    )
  
}


