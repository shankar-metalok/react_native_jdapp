import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const FoodAppHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../images/Frame.png')} style={styles.itemImage} />

        <Text style={styles.headerText}>
        </Text>
      </View>
      <ScrollView style={styles.itemContainer}>
        <View style={styles.item} >
          <Image source={require('../images/image2.png')} style={styles.itemImage} />
          <Text style={styles.itemTitle}>Revolt Bar N Kitchen</Text>
          <Text>Jubilee Hills, Hyderabad</Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../images/image3.png')} style={styles.itemImage} />
          <Text style={styles.itemTitle}>Prost</Text>
          <Text>Jubilee Hills, Hyderabad</Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../images/image1.jpeg')} style={styles.itemImage} />
          <Text style={styles.itemTitle}>Amnesia Sky Bar</Text>
          <Text>Jubilee Hills, Hyderabad</Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../images/image3.png')} style={styles.itemImage} />
          <Text style={styles.itemTitle}>The Sky Lounge</Text>
          <Text>Jubilee Hills, Hyderabad</Text>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
    
    padding: 10,

  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginVertical: 10,
 
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    alignItems: 'center',
  },
});

export default FoodAppHome;
