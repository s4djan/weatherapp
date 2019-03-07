import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

const Loader = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#255df4" />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF'
  }
})

export default Loader;