import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
  const url = image.url
  return <article className='product'>
    {/* <h4>single product</h4> */}
    <img src={image.url || url} alt={name || 'default name'} />
    <h4>{name || 'default name'}</h4>
    <p>${price || 3.99}</p>
  </article>;
};

// Product.propTypes = {
//   image:PropTypes.object.isRequired,
//   name:PropTypes.string.isRequired,
//   price:PropTypes.number.isRequired
// }

Product.defaultProps = {
  name: 'undefined',
  price: 5.99,
  image: defaultImage
}

export default Product;
