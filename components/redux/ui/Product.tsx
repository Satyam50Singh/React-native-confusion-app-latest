import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from './../action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const Product = () => {
  const [addedItems, setAddedItems] = useState({});
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
    {
      id: 'P0005',
      name: 'Nokia 2378A',
      description:
        'Motorola Edge 50 Fusion 5G (Hot Pink, 8GB RAM, 128GB Storage)',
      price: '23,000',
      imageUrl:
        'https://m.media-amazon.com/images/I/51kH6DymEAL._SX300_SY300_QL70_FMwebp_.jpg',
    },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer.cartItems);

  useEffect(() => {
    console.info('cartItems: ', cartItems);
    let updatedItems = {};

    if (cartItems && cartItems?.length) {
      cartItems.forEach(element => {
        updatedItems[element.id] = true; // Mark items as added
      });
    }

    setAddedItems(updatedItems);
  }, [cartItems]);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products
          ? products.map(item => (
              <View key={item.id} style={styles.productContainer}>
                <View>
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    style={styles.productImage}
                  />
                </View>
                <View style={styles.innerContainer}>
                  <Text style={styles.productTitle}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    ₹ {item.price} + deliver
                  </Text>
                  <Text style={styles.productDesc}>{item.description}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    addedItems[item.id]
                      ? handleRemoveFromCart(item)
                      : handleAddToCart(item)
                  }>
                  <FontAwesome
                    name={addedItems[item.id] ? 'heart' : 'heart-o'}
                    size={20}
                    color="#E8471C"
                  />
                </TouchableOpacity>
              </View>
            ))
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffeeed',
    paddingTop: 8,
    paddingBottom: 64,
  },
  productContainer: {
    padding: 16,
    margin: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    marginLeft: 16,
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
  productImage: {width: 100, height: 130},
});

export default Product;
