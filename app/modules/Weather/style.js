import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#efefef',
        padding: 8
    },
    hero: {
        flex: 6,
    },
    cards: {
        flex: 4, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    card: {
        flex: 1,
        paddingRight: 8,
        paddingTop: 8
    },
    cardLast: {
        flex: 1,
        paddingTop: 8
    },
    whitePlaceholder: {
        flex: 1,
        backgroundColor: 'white',
    }

});

export const navigatorStyle = {
    headerStyle: {
        backgroundColor: '#255df4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}