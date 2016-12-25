'use strict';

var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({
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

class HelloWorld extends React.Component {
  render() {
    return (
      <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>
    );
  }
}

class PropertyFinder extends React.Component {
  render() {
    return (
      <ReactNative.Navigator
        initialRoute={{ title: 'Property Finder', index: 0 }}
        renderScene={(route, navigator) =>
          <HelloWorld />
        }
        navigationBar={
          <ReactNative.Navigator.NavigationBar
            routeMapper={{
              LeftButton: () => null,
              RightButton: () => null,
              Title: (route, navigator, index, navState) => <ReactNative.Text>Property Finder</ReactNative.Text>
            }}
            style={{backgroundColor: '#e0e0e0'}}
          />
        }
        style={styles.container}
      />
    );
  }
}

ReactNative.AppRegistry.registerComponent('tutorialReactnativeWenderlich', function() { return PropertyFinder });
