import React from "react";
import Reviews from './Reviews.js';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  buttonClick = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
    console.log(this.state.visible);
  };

  render() {
    const {name,description,rating,imgUrl} = this.props.product;
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<span className="glyphicon glyphicon-star" />);
    }

    const reviewIt = this.props.product.reviews.map((r) => {
      if(this.state.visible) {
        return <Reviews review={r} />
      }
      return <span></span>
    });

    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
          <div className="caption">
            <h4><a href="#">{name}</a>
            </h4>
            <p>{description}
            </p>
          </div>
          <div className="ratings">
            <div className="pull-right">

              <ol onClick={this.buttonClick}>
                {this.props.product.reviews.length} reviews {reviewIt}
              </ol>

            </div>
            <p>
              {stars}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
