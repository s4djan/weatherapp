import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Loader from './components/Loader'
import NavigationService from './services/Navigation';
import createContainer from './router';


const AppNavigationContainer = createContainer();

class App extends Component {
  render() {
    const { showLoader } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <AppNavigationContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
        {showLoader && <Loader />}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLoader: state.app.showLoader
  }
}

export default connect(mapStateToProps)(App);
