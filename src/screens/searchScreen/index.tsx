import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';
import useHook from './hooks';
import FastImage from '@d11/react-native-fast-image';
import RNPickerSelect from 'react-native-picker-select';
import {locationArray} from '../authorizationTypeScreen/const';
import {ageYearsArray} from './const';
import {healthStates} from '../newAnnouncement/const';
import {styles} from './styles';

export default function SearchScreen({}) {
  const {
    filteredAnnouncement,
    openAnimal,
    location,
    setLocation,
    age,
    setAge,
    health,
    setHealth,
  } = useHook();

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <RNPickerSelect
            darkTheme
            onValueChange={value => setLocation(value)}
            items={locationArray}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerText}>
                {location ? location : 'Оберіть локацію'}
              </Text>
            </View>
          </RNPickerSelect>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setAge(value)}
            items={ageYearsArray}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerText}>{age ? age : 'Оберіть вік'}</Text>
            </View>
          </RNPickerSelect>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setHealth(value)}
            items={healthStates}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerText}>{health ? health : 'Стан'}</Text>
            </View>
          </RNPickerSelect>
        </ScrollView>
      </View>

      <FlatList
        data={filteredAnnouncement}
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

            <View style={styles.itemContent}>
              <View style={styles.row}>
                <Text style={styles.text}>Species</Text>
                <Text style={styles.text}>{item.species}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>Breed</Text>
                <Text style={styles.text}>{item.breed}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
