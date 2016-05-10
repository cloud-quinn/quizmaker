import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Content from '../components/Content'
import Submit from '../components/Submit'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Submit />
      </div>
    )
  }
}

App.propTypes = {
  // TODO
}

function mapStateToProps(state) {
  return {
  // TODO
  }
}

function mapDispatchToProps(dispatch) {
  return {
  // TODO
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
