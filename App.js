import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.layouts}>
      <CardComponent />
    </View>
  );
};

const CardComponent = () => {
  return (
    <View>
      <Text style={{marginBottom: 10, fontSize: 24, color: 'black'}}>
        List Items :{' '}
      </Text>
      <View style={styles.card}>
        <CardDetails />
      </View>
    </View>
  );
};

const CardDetails = () => {
  return (
    <View>
      {/* Image */}
      <Image
        source={require('./src/images/macbook.jpg')}
        style={styles.image}
      />
      {/* Item Detail */}
      <Text style={styles.titleText}>New Macbook M2 Pro</Text>
      {/* Item Price */}
      <Text style={styles.priceText}>Rp. 25.000.000</Text>
      {/* Item Location */}
      <Text style={styles.cityText}>Bandung</Text>
      {/* Button */}
      <TouchableOpacity
        onPress={() => Alert.alert('Button pressed')}
        style={styles.buttonLayout}>
        <Text style={styles.ButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layouts: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 170,
    height: 250,
    backgroundColor: '#DFDFDF',
    borderRadius: 18,
  },
  image: {
    marginBottom: 8,
    width: '100%',
    height: '60%',
    borderRadius: 8,
  },
  titleText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
  },
  priceText: {
    marginTop: 8,
    color: 'orange',
    fontWeight: '500',
    fontSize: 11,
  },
  cityText: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 9,
  },
  buttonLayout: {
    marginTop: 8,
    width: '100%',
    height: 20,
    backgroundColor: '#84BC9C',
    alignItems: 'center',
    borderRadius: 6,
  },
  ButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
