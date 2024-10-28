import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Header from './Header';
import Product from './Product';

const MainComponent = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <ScrollView>
        <Product />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainComponent;
