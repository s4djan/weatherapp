import { StyleSheet } from 'react-native';

const solidStyles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    touchable: {
        textAlign: 'center',
        backgroundColor: '#ff6738',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon:{
        paddingLeft: 10,
        paddingTop: 2
    }
});

const clearStyles = StyleSheet.create({
    button: {
        color: '#255df4',
        fontSize: 17
    },
    touchable: {
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon:{
        paddingLeft: 7,
        paddingTop: 0
    }
});

export {
    solidStyles, 
    clearStyles
}