import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';
import {useAppSelector} from '../../redux/store';
import FastImage from '@d11/react-native-fast-image';
import {Announcement} from '../../redux/announcement/announcementSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';

export default function FavoriteScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const favoriteArray = useAppSelector(state => state.announcement.favorite);

  function openAnimal(props: Announcement) {
    navigation.navigate(Routes.AnimalInfo, props);
  }
  return (
    <View style={{flex: 1, backgroundColor: GlobalColors.background}}>
      <FlatList
        data={favoriteArray}
        ListEmptyComponent={() => (
          <View
            style={{
              width: '100%',
              height: Dimensions.get('screen').height * 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: GlobalColors.activeColor,
                width: '70%',
                alignSelf: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: GlobalColors.textInActiveColor,
                  fontSize: size(16),
                  textAlign: 'center',
                }}>
                You don’t have any favorite animals yet. Add one and come back!
              </Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        renderItem={({item}) => (
          <Pressable
            onPress={() => openAnimal(item)}
            style={({pressed}) => [
              pressed && styles.onPress,
              {
                width: '90%',
                alignSelf: 'center',
                backgroundColor: GlobalColors.primary,
                borderRadius: 15,
                overflow: 'hidden',
                flexDirection: 'row',
                gap: 15,
              },
            ]}>
            <FastImage
              source={{uri: item.photoArr[0].uri}}
              style={{
                width: Dimensions.get('screen').width * 0.2,
                height: Dimensions.get('screen').width * 0.3,
                borderRadius: 15,
              }}
            />

            <View
              style={{
                flex: 1,
                paddingRight: 20,
                justifyContent: 'space-around',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  Species
                </Text>

                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  {item.species}
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  Breed
                </Text>

                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  {item.breed}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  onPress: {
    opacity: 0.6,
  },
});
