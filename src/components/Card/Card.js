import React from "react";
import "./Card.css";
//import food from "../../assets/food.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default class Card extends React.Component {

  state = { 
    count: 193,
    liked: false
  }

  showMore = () => {
    // console.log(this);
    this.setState({ liked: !this.state.liked })

    if (this.state.liked === true) {
      console.log("this.state.liked true",this.state.liked);  
      this.setState({ count: this.state.count - 1 })
    }
    else {
      console.log("this.state.liked false",this.state.liked);
      this.setState({ count: this.state.count + 1 })
    }

}

  render() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{this.props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{this.props.recipeTitle}</h5>
          <div className="card-date">{this.props.recipeDate}</div>
        </div>
      </div>
      <img className="card-image" src={this.props.recipeImage} alt="Logo" />
      <div className="card-text">{this.props.recipeDescription}</div>
      <div className="card-like-bar">
        <button type="button" onClick={this.showMore} style={{border:"none", backgroundColor:"white"}}>
          {this.state.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        
          ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
          )}
        </button>
        

        <div className="like-text">
          <b>{this.state.count}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
  }
}
