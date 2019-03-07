import { StyleSheet } from 'react-native';

import { verticalScale } from 'app/modules/App/utils/font';

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
        paddingTop: verticalScale(12),
        paddingRight: 15,
        paddingBottom: verticalScale(10),
        paddingLeft: 15
    },
    dateText: {
        color: '#ff6738',
        fontWeight: 'bold',
        fontSize: verticalScale(16)
    },
    degreeWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    degreeText: {
        fontSize: verticalScale(60),
        color: '#000'
    },
    degreeLightText: {
        fontSize: verticalScale(40),
        color: '#b7b7b7',
        paddingTop: verticalScale(8)
    },
    descText:{
        fontSize: verticalScale(18),
        color: '#b1b1b1'
    },
    additionalWrapper:{ 
        flexDirection: 'row',
        paddingTop: verticalScale(12),
        paddingRight: 15,
        paddingBottom: verticalScale(10),
        paddingLeft: 15
    },
    listText:{
        fontSize: verticalScale(17),
        color: '#000000',
        marginBottom: verticalScale(3)
    },
    listLightText:{
        fontSize: verticalScale(17),
        color: '#858585',
        marginBottom: verticalScale(3)
    }
});