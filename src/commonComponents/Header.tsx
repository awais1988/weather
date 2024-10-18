import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Colors from '../constants/ColorConst';

const Header: React.FC<any> = ({headerLabel}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.txtColor}>Back</Text>
      </Pressable>
      <View>
        <Text style={styles.labelStyle}>{headerLabel}</Text>
      </View>
      <Pressable>
        <Text style={styles.txtColor}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelStyle: {
    fontSize: 20,
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
  txtColor: {
    color: Colors.whiteColor,
  },
});

export default Header;
