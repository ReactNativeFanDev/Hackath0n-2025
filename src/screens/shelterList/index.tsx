import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {GlobalColors} from '../../constants/Global';
import React from 'react';
import useHook from './hooks';
import RNPickerSelect from 'react-native-picker-select';
import {locationArray} from '../authorizationTypeScreen/const';
import ShelterSvg from '../../assets/svg/navigation/shelter';
import {styles} from './styles';

export default function ShelterList({}) {
  const {filteredCabinets, openAnimal, location, setLocation} = useHook();

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
        </ScrollView>
      </View>

      <FlatList
        data={filteredCabinets}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({item}) => (
          <Pressable
            onPress={() => openAnimal(item)}
            style={({pressed}) => [
              pressed && styles.onPress,
              styles.pressableContainer,
            ]}>
            <View style={styles.shelterIconContainer}>
              <ShelterSvg
                size={Dimensions.get('screen').width * 0.1}
                fill={GlobalColors.activeColor}
              />
            </View>

            <View style={styles.itemDetailsContainer}>
              <View style={styles.row}>
                <Text style={styles.textPrimary}>Shelter name</Text>
                <Text style={styles.textPrimary}>{item.name}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.textPrimary}>Location</Text>
                <Text style={styles.textPrimary}>{item.location}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
