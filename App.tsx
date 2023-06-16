/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsBar} from '~containers/Core/navigation/BottomTabsBar';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from '~redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabsBar />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
