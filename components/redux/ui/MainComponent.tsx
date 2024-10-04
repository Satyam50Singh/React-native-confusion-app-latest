import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from './Header';
import Product from './Product';

const MainComponent = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Product />
      </ScrollView>
    </View>
  );
};

export default MainComponent;
