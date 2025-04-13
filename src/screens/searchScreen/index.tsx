import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';
import React from 'react';
import useHook from './hooks';
import FastImage from '@d11/react-native-fast-image';
import RNPickerSelect from 'react-native-picker-select';
import {locationArray} from '../authorizationTypeScreen/const';
import {ageYearsArray} from './const';
import {healthStates} from '../newAnnouncement/const';

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
    <View style={{flex: 1, backgroundColor: GlobalColors.background}}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: GlobalColors.background,
            flexDirection: 'row',
            paddingHorizontal: '5%',
            paddingBottom: 10,
            paddingTop: 10,
          }}>
          <RNPickerSelect
            darkTheme
            onValueChange={value => setLocation(value)}
            items={locationArray}>
            <View
              style={{
                backgroundColor: GlobalColors.primaryLight,
                borderRadius: 12,
                paddingHorizontal: 10,
                paddingVertical: 4,
                marginRight: 10,
              }}>
              <Text style={{color: '#FFF', fontSize: size(12)}}>
                {location ? location : 'Оберіть локацію'}
              </Text>
            </View>
          </RNPickerSelect>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setAge(value)}
            items={ageYearsArray}>
            <View
              style={{
                backgroundColor: GlobalColors.primaryLight,
                borderRadius: 12,
                paddingHorizontal: 10,
                paddingVertical: 4,
                marginRight: 10,
              }}>
              <Text style={{color: '#FFF', fontSize: size(12)}}>
                {age ? age : 'Оберіть вік'}
              </Text>
            </View>
          </RNPickerSelect>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setHealth(value)}
            items={healthStates}>
            <View
              style={{
                backgroundColor: GlobalColors.primaryLight,
                borderRadius: 12,
                paddingHorizontal: 10,
                paddingVertical: 4,
                marginRight: 10,
              }}>
              <Text style={{color: '#FFF', fontSize: size(12)}}>
                {health ? health : 'Стан'}
              </Text>
            </View>
          </RNPickerSelect>
        </ScrollView>
      </View>

      <FlatList
        data={filteredAnnouncement}
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
    opacity: 0.7,
  },
});
