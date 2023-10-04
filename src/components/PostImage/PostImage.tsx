import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';

const PostImage: FC<PostImageTypes> = ({title, date}) => {
  const onPress = () => {};

  return (
    <View style={styles.container}>
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
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
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

export default PostImage;
