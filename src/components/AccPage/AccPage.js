import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import FavoriteHeart from '.././FavoriteHeart/FavoriteHeart'
import hero from './accessories_hero.jpg'

import './AccPage.css';

class AccPage extends Component {
  constructor(props) {
    super(props)
    this.state ={
      list: []
  }

}

componentDidMount(){
  axios.get(`/api/departments/ACCESSORIES`)
  .then(response =>{ 
  this.setState({list: response.data})

  })

}
render() {
  const list = 
  
  this.state.list.map(function(item){
  return (<div className="list-item-whole" key={item.product_id}>
  <FavoriteHeart product={item}/>
  <Link to={`/details/${item.product_id}`}>
   <a className="black-text list-item">
    <div className="list-image" style={{backgroundImage: `url(${item.image_url})`}}>
    <div className="image-price">{item.price}</div>
    </div>
    <div className="filler_image_name">
    {item.name}
    </div>
    </a>
    </Link>
     </div>)
 })
  return (
      <div className="productPage-whole">
      <div className="page-image" style={{backgroundImage: `url(${hero})`}}>SWAG</div>
      <div className="section-line"></div> 
      <div className="filler-list"> {list}</div>
      
    </div>
  );
}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AccPage);
