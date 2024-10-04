import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  const [count, setCount] = useState(0);

  const cartItems = useSelector(state => state.reducer);

  useEffect(() => {
    console.warn(cartItems);
    setCount(cartItems.length);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Mobile Phones</Text>
      <Text style={styles.textStyle}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 16,
    elevation: 4,
    shadowColor: '#ccc',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default Header;
