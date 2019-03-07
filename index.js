import {AppRegistry} from 'react-native';
import Bootstrap from './app/modules/App/bootstrap';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Bootstrap);