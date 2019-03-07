import { StyleSheet } from 'react-native';

import { scale } from 'app/modules/App/utils/font';

export default StyleSheet.create({
    devider: {
        height: 1,
        backgroundColor: '#efefef'
    },  
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    topWrapper: {
        flex: 1, 
        flexDirection: 'row',
        paddingTop: 12,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15
    },
    dateText: {
        color: '#ff6738',
        fontWeight: 'bold',
        fontSize: 16
    },
    degreeWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    degreeText: {
        fontSize: scale(60),
        color: '#000'
    },
    degreeLightText: {
        fontSize: scale(40),
        color: '#b7b7b7',
        paddingTop: 8
    },
    descText:{
        fontSize: scale(20),
        color: '#b1b1b1'
    },
    additionalWrapper:{ 
        flexDirection: 'row',
        paddingTop: 12,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15
    },
    listText:{
        fontSize: 17,
        color: '#000000',
        marginBottom: 3
    },
    listLightText:{
        fontSize: 17,
        color: '#858585',
        marginBottom: 3
    }
});