import {FlatList, Pressable, Text, View} from 'react-native';
import useHook from './hooks';
import FastImage from '@d11/react-native-fast-image';
import {styles} from './styles';

export default function OrganizationManagerScreen() {
  const {
    addAnnouncementPressHandler,
    addNewCabinetPressHandler,
    userAnnouncements,
    userCabinets,
  } = useHook();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Announcements</Text>

      <View style={styles.announcementContainer}>
        <FlatList
          data={userAnnouncements}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListText}>
                {'You have no\nannouncements'}
              </Text>
            </View>
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListFooterComponent={() => <View style={styles.itemSeparator} />}
          ListHeaderComponent={() => <View style={styles.itemSeparator} />}
          renderItem={({item}) => (
            <View>
              <FastImage
                source={{uri: item.photoArr[0].uri}}
                style={styles.image}
              />
              <Text style={styles.itemText}>{item.species}</Text>
            </View>
          )}
        />
      </View>

      <Pressable
        onPress={addAnnouncementPressHandler}
        style={({pressed}) => [pressed && styles.onPress, styles.addButton]}>
        <Text style={styles.addButtonText}>Add Announcement</Text>
      </Pressable>

      <Text style={styles.headerText}>Your Cabinets for Animal Reception</Text>

      <View style={styles.cabinetContainer}>
        <FlatList
          data={userCabinets}
          horizontal
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListText}>
                {'You have no\n shelters'}
              </Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListFooterComponent={() => <View style={styles.itemSeparator} />}
          ListHeaderComponent={() => <View style={styles.itemSeparator} />}
          renderItem={({item}) => (
            <View style={styles.cabinetItem}>
              <Text style={styles.cabinetText}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <Pressable
        onPress={addNewCabinetPressHandler}
        style={({pressed}) => [pressed && styles.onPress, styles.addButton]}>
        <Text style={styles.addButtonText}>Add Cabinet</Text>
      </Pressable>
    </View>
  );
}
