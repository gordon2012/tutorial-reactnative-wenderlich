'use strict';

var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class tutorialReactnativeWenderlich extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }
}

ReactNative.AppRegistry.registerComponent('tutorialReactnativeWenderlich', function() { return tutorialReactnativeWenderlich });
