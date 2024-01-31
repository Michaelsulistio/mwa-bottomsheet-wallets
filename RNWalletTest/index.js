/**
 * @format
 */
import {Buffer} from 'buffer';
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import MobileWalletAdapterEntrypointBottomSheet from './mwa_bottomsheet/MobileWalletAdapterEntrypointBottomSheet';
import App from './App';
import {name as appName} from './app.json';

// Mock event listener functions to prevent them from fataling.
window.addEventListener = () => {};
window.removeEventListener = () => {};
window.Buffer = Buffer;

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(
    'MobileWalletAdapterEntrypoint',
    () => MobileWalletAdapterEntrypointBottomSheet,
);
