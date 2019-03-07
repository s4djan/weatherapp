import { StyleSheet, Dimensions } from 'react-native';

import styles, {navigatorStyle} from '../../style';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#efefef',
        paddingTop: 8,
        paddingBottom: 8,
    },
    text: {
        width: '100%',
        paddingTop: 5,
        paddingBottom: 20,
        paddingLeft: 15,
        fontSize: 22,
        color: '#000'
    },
    scrollView: {
        flex:1
    },
    cardsWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    cardWrapper: {
        height: height/3, 
        width: (width - 16)/4-6,
        backgroundColor: '#FFF', 
        marginBottom: 6,
        marginLeft: 8
    }
});

export {
    navigatorStyle
}