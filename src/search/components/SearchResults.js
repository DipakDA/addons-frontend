import React, { PropTypes } from 'react';

import { gettext as _ } from 'core/utils';


export default class SearchResults extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    query: null,
    results: [],
  }

  render() {
    const { query, results } = this.props;

    let searchResults;
    let messageText;

    if (query && results.length > 0) {
      messageText = _(`Your search for "${query}" returned ${results.length} results.`);
      searchResults = (
        <ul ref="results">
          {results.map((result) => <li key={result.title}>{result.title}</li>)}
        </ul>
      );
    } else if (query && results.length === 0) {
      messageText = _(`No results were found for "${query}".`);
    } else if (query !== null) {
      messageText = _('Please supply a valid search');
    }

    const message = messageText ? <p ref="message">{messageText}</p> : null;

    return (
      <div ref="container" className="search-results">
        {message}
        {searchResults}
      </div>
    );
  }
}
