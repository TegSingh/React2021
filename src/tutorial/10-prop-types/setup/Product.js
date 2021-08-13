import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  // AND operator in javascript returns the second value if the first value is true. Here, url is being set if the image exists
  const url = image && image.url
  return <article className='product'>
    {/* If we wish to display the default image here, we need to know that image.url property does not exist for the imported default image. Due to this issue, the image if ont set will not be displayed. This can be resolved by using short circuit */}
    <img src={url || defaultImage} alt={name || 'Default name'} />
    {/* image property hasnt been specified for the last item in the api */}
    <h4>{name}</h4>
    <h4>${price || 3.99}</h4>
  </article>;
};

// At times some of the values in the API data might be missing which could lead to potential errors
// These errors can be avoided using default props
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Specify the default props in case a prop is missing
Product.defaultProps = {
  image: defaultImage,
  name: 'Default Name',
  price: 3.99,
}

export default Product;
