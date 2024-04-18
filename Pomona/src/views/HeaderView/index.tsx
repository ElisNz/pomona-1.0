import React from 'react';
import { 
  View, 
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import styles from './styles';

type HeaderItemProps = {
  title: string;
};

const HeaderView = () => {
  const items = ['Home', 'About', 'Contact'];

  const Item = ({title}: HeaderItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item}
        horizontal
      />
    </SafeAreaView>
  );
};

export default HeaderView;
