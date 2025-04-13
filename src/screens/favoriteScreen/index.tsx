import {FlatList, Pressable, Text, View} from 'react-native';
import {useAppSelector} from '../../redux/store';
import FastImage from '@d11/react-native-fast-image';
import {Announcement} from '../../redux/announcement/announcementSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';
import {styles} from './styles';

export default function FavoriteScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const favoriteArray = useAppSelector(state => state.announcement.favorite);

  function openAnimal(props: Announcement) {
    navigation.navigate(Routes.AnimalInfo, props);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteArray}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyMessageBox}>
              <Text style={styles.emptyMessageText}>
                You don’t have any favorite animals yet. Add one and come back!
              </Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({item}) => (
          <Pressable
            onPress={() => openAnimal(item)}
            style={({pressed}) => [
              pressed && styles.onPress,
              styles.pressableContainer,
            ]}>
            <FastImage
              source={{uri: item.photoArr[0].uri}}
              style={styles.image}
            />

            <View style={styles.itemDetailsContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.itemLabel}>Species</Text>
                <Text style={styles.itemValue}>{item.species}</Text>
              </View>

              <View style={styles.itemRow}>
                <Text style={styles.itemLabel}>Breed</Text>
                <Text style={styles.itemValue}>{item.breed}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
