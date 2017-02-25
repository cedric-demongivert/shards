import React, { Component } from 'react'

import { Namespaced } from './Namespaced'

@Namespaced
export class Namespace extends Component {
  render () {
    return this.props.children
  }
}

Namespace.propTypes = {
  'children': React.PropTypes.element
}
