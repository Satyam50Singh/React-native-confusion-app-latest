import React from 'react';

import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {addToCart} from './../action';

const Product = () => {
  const products = [
    {
      id: 'P0001',
      name: 'Motorola Edge 50 Fusion 5G',
      description:
        'Motorola Edge 50 Fusion 5G (Hot Pink, 8GB RAM, 128GB Storage)',
      price: '30,000',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLAb2Fjq5a9GvbiSAcfgJ_5hpArcZv8vhiW364j-XyuVu6cGFuk0KUJv2wt3YRfgBtOgedRldF1h6SXJa0sUh7yPZCuaWTRb6JYY8cht7e7z9g7VocORFQ3Q',
    },
    {
      id: 'P0002',
      name: 'Samsung Galaxy S24 5G',
      description:
        'Samsung Galaxy S24 5G AI Smartphone (Marble Gray, 8GB, 128GB Storage)',
      price: '69,000',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkh8HpSyHKEF2xjFBvdGVAL3lGNPRJE4pGMDhoaQ4OXYoRoirXtY6T50QkjG-bgVyKOfMn1PJMFJNYGgqEiojNX6CVSnUq6woTDgFCsAACNfg5BpmN6o5U8xI',
    },
    {
      id: 'P0003',
      name: 'Motorola Edge 50 Fusion 5G',
      description:
        'Motorola Edge 50 Fusion 5G (Hot Pink, 8GB RAM, 128GB Storage)',
      price: '30,000',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLAb2Fjq5a9GvbiSAcfgJ_5hpArcZv8vhiW364j-XyuVu6cGFuk0KUJv2wt3YRfgBtOgedRldF1h6SXJa0sUh7yPZCuaWTRb6JYY8cht7e7z9g7VocORFQ3Q',
    },
    {
      id: 'P0004',
      name: 'Apple i15 Edge',
      description:
        'Motorola Edge 50 Fusion 5G (Hot Pink, 8GB RAM, 128GB Storage)',
      price: '30,000',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkh8HpSyHKEF2xjFBvdGVAL3lGNPRJE4pGMDhoaQ4OXYoRoirXtY6T50QkjG-bgVyKOfMn1PJMFJNYGgqEiojNX6CVSnUq6woTDgFCsAACNfg5BpmN6o5U8xI',
    },
  ];

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  return (
    <SafeAreaView>
      {products
        ? products.map(item => (
            <View key={item.id} style={styles.productContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.productPrice}>
                  ₹ {item.price} + deliver
                </Text>
                <Text style={styles.productDesc}>{item.description}</Text>
                <Button
                  title="Add to Cart"
                  buttonStyle={styles.cartButtonStyle}
                  onPress={() => handleAddToCart(item)}
                />
              </View>
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={styles.productImage}
              />
            </View>
          ))
        : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    margin: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
  },
  innerContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    width: '80%',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  productDesc: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  productImage: {width: 90, height: 120},
  cartButtonStyle: {
    marginTop: 16,
    width: '40%',
  },
});

export default Product;
