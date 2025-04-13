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
import ShelterSvg from '../../assets/svg/navigation/shelter';

export default function ShelterList({}) {
  const {filteredCabinets, openAnimal, location, setLocation} = useHook();

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
        </ScrollView>
      </View>

      <FlatList
        data={filteredCabinets}
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
            <View
              style={{
                width: Dimensions.get('screen').width * 0.2,
                height: Dimensions.get('screen').width * 0.3,
                backgroundColor: GlobalColors.primaryLight,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ShelterSvg
                size={Dimensions.get('screen').width * 0.1}
                fill={GlobalColors.activeColor}
              />
            </View>

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
                  Shelter name
                </Text>

                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  {item.name}
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  Location
                </Text>

                <Text
                  style={{
                    color: GlobalColors.textInPrimary,
                    fontSize: size(16),
                  }}>
                  {item.location}
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
