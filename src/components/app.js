import React, { useState } from 'react'
import Select from 'react-select'
import DatePrickerContainer from './date-picker-container'
import ArticleList from './article-list'

function App({ articles }) {
  const [username, setUsername] = useState('Roma')
  const [selected, setSelected] = useState()

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <div>
      <h1>Article App</h1>
      Username:{' '}
      <input
        type="text"
        value={username}
        onChange={handleUserChange}
        style={{
          color: username.length < 5 ? 'red' : 'black'
        }}
      />
      <DatePrickerContainer />
      <Select value={selected} onChange={setSelected} options={options} isMulti />
      <ArticleList articles={articles} />
    </div>
  )
}

App.propTypes = {}

export default App
