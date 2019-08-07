import React, { Component } from 'react';

class ViewToggle extends Component {
  isAdmin = () => {
    return window.location.href.endsWith('/admin')
  }

  render() {
    return (
      <button>
        {this.isAdmin() ? 'Map' : 'Admin' }
      </button>
    )
  }
}

export default ViewToggle;
