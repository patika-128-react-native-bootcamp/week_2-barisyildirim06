import React, {useState} from 'react';

import {Text, View, Button} from 'react-native';

export default function ProductsView({products, setProducts}) {
  const handleSortProducts = type => {
    let _products = [...products];
    if (type === 'priceIncreasing') {
      _products = _products.sort((a, b) => a.price - b.price);
      setProducts(_products);
    } else if (type === 'priceDecreasing') {
      _products = _products.sort((a, b) => b.price - a.price);
      setProducts(_products);
    } else if (type === 'productCreatedAt') {
      _products = _products.sort((a, b) => a.createdAt - b.createdAt);
      setProducts(_products);
    }
  };
  const productList = products.map((el, index) => {
    let styles = {
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10,
      borderBottomColor: 'grey',
      borderBottomWidth: 0,
    };
    if (index < products.length - 1) {
      styles = {...styles, borderBottomWidth: 1};
    }
    return (
      <View key={el.id} style={styles}>
        <Text>{el.productName}</Text>
        <Text style={{fontWeight: 'bold'}}>{el.price}</Text>
      </View>
    );
  });

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Button
          title="Artan Fiyat"
          onPress={() => handleSortProducts('priceIncreasing')}
        />
        <Button
          title="Azalan Fiyat"
          onPress={() => handleSortProducts('priceDecreasing')}
        />
        <Button
          title="Tarih"
          onPress={() => handleSortProducts('productCreatedAt')}
        />
      </View>
      {productList}
    </View>
  );
}

ProductsView;
