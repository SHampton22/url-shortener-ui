import React, { useState } from 'react';
import { postUrls } from '../../apiCalls';

export default function UrlForm({addUrl}) {

  const [title, setTitle] = useState('')
  const [long_url, setLong_url] = useState('')
  // constructor(props) {
  //   super();
  //   this.props = props;
  //   this.state = {
  //     title: '',
  //     urlToShorten: ''
  //   };
  // }

  // handleNameChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      long_url,
      title
    }
    postUrls(newUrl)
    .then((data) => {
      console.log(data)
      addUrl(data)
    })
    .catch(error => console.log(error))
   clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    setLong_url('')
   
  }
  
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={long_url}
          onChange={e => setLong_url(e.target.value)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  
}


