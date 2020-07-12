import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}</Text>
    </View>
  );
};

const LotsOfGreetings = () => {

    return (

        <View style={[styles.center, {top: 20}]}>

            <Greeting name = "Rexxar"></Greeting>
            <Greeting name = "Rexxar"></Greeting>
            <Greeting name = "Rexxar"></Greeting>
+-
        </View>
    );

}
export default LotsOfGreetings;