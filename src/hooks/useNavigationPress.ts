import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PostImage, RootStackParams} from '../types';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

export const useNavigationPress = ({
  title,
  date,
  url,
  explanation,
}: PostImage) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  return () => {
    navigate('Detail', {title, date, url, explanation});
  };
};
