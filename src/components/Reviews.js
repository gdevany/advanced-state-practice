import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(<li>{this.props.review.description}</li>)
  }
}

export default Reviews;
