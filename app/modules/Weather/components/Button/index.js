import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {solidStyles, clearStyles} from './style';

const SolidButton = ({
    backgroundColor,
    title,
    onPress
}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={solidStyles.touchable}>
        <Text style={solidStyles.button}>{title}</Text>
        <Icon
            name="arrow-right"
            size={22}
            color="white"
            style={solidStyles.icon}
            />
    </TouchableOpacity>
)

const ClearButton = ({
    title,
    onPress,
    justifyContent
}) => (
    <TouchableOpacity 
    onPress={onPress}
    style={{...clearStyles.touchable, justifyContent}}>
        <Text style={clearStyles.button}>{title}</Text>
        <Icon
            name="arrow-right"
            size={25}
            color="#255df4"
            style={clearStyles.icon}
            />
    </TouchableOpacity>
)

ClearButton.propTypes = {
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
    justifyContent: PropTypes.string
}

ClearButton.defaultProps = {
    backgroundColor: '#255df4',
    justifyContent: 'center'
}

export {
    SolidButton,
    ClearButton
}