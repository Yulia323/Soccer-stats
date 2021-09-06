import React from 'react';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className='error-crash'>{this.props.message}</h1>
      );
    }
    return this.props.children;
  }
}
