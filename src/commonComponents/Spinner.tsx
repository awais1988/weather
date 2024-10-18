import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../constants/ColorConst';

const Spinner: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
