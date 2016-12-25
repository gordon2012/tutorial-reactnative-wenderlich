'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
let { NavigationBar } = Navigator;

import SearchPage from './SearchPage';

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinder extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Property Finder', index: 0 }}
        renderScene={(route, navigator) =>
          <SearchPage />
        }
        navigationBar={
          <NavigationBar
            routeMapper={{
              LeftButton: () => null,
              RightButton: () => null,
              Title: (route, navigator, index, navState) =>
                <Text>
                  Property Finder
                </Text>
            }}
            style={{backgroundColor: '#e0e0e0'}}
          />
        }
        style={styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('tutorialReactnativeWenderlich', function() { return PropertyFinder });
