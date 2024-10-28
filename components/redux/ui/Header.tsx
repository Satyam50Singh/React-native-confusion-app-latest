import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {View, Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Header = ({navigation}) => {
  const [count, setCount] = useState(0);

  const cartItems = useSelector(state => state.reducer.cartItems);

  useEffect(() => {
    console.info(cartItems);
    setCount(cartItems?.length);
  }, [cartItems]);

  const handleBack = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleBack}>
        <FontAwesome name={'arrow-circle-left'} color={'#E8471C'} size={24} />
      </Pressable>
      <Text style={styles.textStyle}>Products</Text>
      <Text style={styles.textStyle}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffeeed',
    padding: 16,
    elevation: 4,
    shadowColor: '#ccc',
    borderBottomWidth: 2,
    borderBottomColor: '#888',
  },
  textStyle: {
    color: '#E8471C',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default Header;
