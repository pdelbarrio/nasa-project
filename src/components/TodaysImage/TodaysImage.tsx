import React, {FC} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PostImage} from '../../types';

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      {/* <View style={styles.buttonContainer}>
        <Button title="View" />
      </View> */}
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    borderRadius: 32,
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    alignItems: 'flex-end',
    borderColor: '#fff',
    color: '#fff',
    backgroundColor: '#2372bc',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
  },
  textButton: {
    color: '#fff',
  },
});

export default TodaysImage;
