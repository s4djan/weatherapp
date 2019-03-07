import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import * as images from './images';

const WeatherIcon = ({
    type, 
    size
}) => {
    const fileName = `${type}_${size}`;
    
    return (
        <Image 
            style={{flex:1}} 
            resizeMode="contain" 
            source={ images[fileName] }/>
    )
};

WeatherIcon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['lg','md', 'sm'])
}

WeatherIcon.defaultProps = {
    size: 'lg'
}

export default WeatherIcon;