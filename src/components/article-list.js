import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>

    const { articles, toggleOpenItem, openItemId } = this.props
    const articleItems = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          onBtnClick={toggleOpenItem(article.id)}
        />
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default accordion(ArticleList)
