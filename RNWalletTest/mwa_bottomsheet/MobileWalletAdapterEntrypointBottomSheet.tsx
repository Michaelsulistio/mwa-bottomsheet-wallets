import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MobileWalletAdapterEntrypointBottomSheet() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomSheet}>
        <Text>Hi, this is the bottom sheet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    color: 'black',
    fontSize: 8,
  },
});
