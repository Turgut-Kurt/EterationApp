import React, {Suspense, lazy, useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from './config-store';
import {navigationRef} from '~utils';

const Router = lazy(() => import('./navigation/index.js'));
const {store, persistor} = configureStore();
const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1);
  }, []);
  return (
    <Suspense fallback={<ActivityIndicator size={'large'} style={{flex: 1}} />}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer ref={navigationRef}>
              <Router />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </Suspense>
  );
};

export default App;
