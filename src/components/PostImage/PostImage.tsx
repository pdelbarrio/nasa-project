import React, {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';

const PostImage: FC<PostImageTypes> = ({title, date}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <View>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
  },
  button: {},
});

export default PostImage;