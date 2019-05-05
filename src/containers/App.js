import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsIfNeeded } from '../actions';
import Search from '../components/Search/search';
import Results from '../components/Results/results';
import Loader from '../components/Loader/loader';

import './App.css';

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, searchStr } = this.props;
    dispatch(fetchItemsIfNeeded(searchStr));
  }

  handleChange(searchStr) {
    this.props.dispatch(fetchItemsIfNeeded(searchStr));
  }

  render() {
    const { searchStr, items, isFetching } = this.props;
    return (
      <div className="container">
        <header className="header">
          <Search value={searchStr} onChange={this.handleChange} />
        </header>
        <section className="content">
          {isFetching && items.length === 0 &&
            <Loader />
          }
          {!isFetching && items.length === 0 &&
            <h2>No Results</h2>
          }
          {items.length > 0 &&
            <Results items={items} />
          }
        </section>
      </div>
    );
}
}


function mapStateToProps(state) {
  const { searchStr, itemsBySearchString } = state;
  const { isFetching, items } = itemsBySearchString[searchStr] || {
    searchStr,
    isFetching: true,
    items: [],
  };

  return {
    searchStr,
    items,
    isFetching,
  };
}

export default connect(mapStateToProps)(AsyncApp);
