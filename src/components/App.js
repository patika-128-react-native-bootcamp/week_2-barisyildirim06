/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  //   StatusBar,
  // StyleSheet,
  Text,
  TextInput,
  //   useColorScheme,
  View,
} from 'react-native';
import ProductsView from './ProductsView';
import {v4 as uuidv4} from 'uuid';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(null);
  const [products, setProducts] = useState([]);

  const handleAddButtonClick = () => {
    setProducts(prevState => [
      ...prevState,
      {id: uuidv4(), productName, price, createdAt: Date.now()},
    ]);
  };
  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductsView products={products} setProducts={setProducts} />
      </ScrollView>
      <View>
        <Text>Name</Text>
        <TextInput
          value={productName}
          onChangeText={setProductName}
          style={{backgroundColor: 'grey', height: 40}}
        />
        <Text>Price</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={{backgroundColor: 'grey', height: 40}}
        />
        <Button onPress={handleAddButtonClick} title="Add" />
      </View>
    </SafeAreaView>
  );
};

export default App;
