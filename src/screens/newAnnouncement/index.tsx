import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import {GlobalColors, size} from '../../constants/Global';
import {LoginTextInput} from '../../components/authorizationComponents/loginTextinput';
import RNPickerSelect from 'react-native-picker-select';
import {
  ageYearsArray,
  choseDateTypeArray,
  healthStates,
  monthArray,
  speciesArray,
} from './const';
import PhotoSvg from '../../assets/svg/announcement/photo';
import useHook from './hooks';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';

export default function NewAnnouncement({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.NewAnnouncement>;
}) {
  const {
    name,
    setName,
    sex,
    setSex,
    species,
    donate,
    setDonate,
    setSpecies,
    breed,
    setBreed,
    age,
    setAge,
    ageType,
    setAgeType,
    error,
    photoArr,
    nextPressHandler,
    pickImagePressHandler,
    healthCondition,
    setHealthCondition,
    description,
    setDescription,
    deletePressHandler,
    saveChanges,
  } = useHook(route.params);

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subHeaderText}>Pet's name (optional)</Text>

          <LoginTextInput
            textInputPlaceholder="Write animal name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.subHeaderText}>Donate to animal</Text>

          <LoginTextInput
            textInputPlaceholder="Write you mono url"
            value={donate}
            onChangeText={setDonate}
          />

          <Text style={styles.subHeaderText}>Description</Text>

          <LoginTextInput
            textInputPlaceholder="Write description"
            value={description}
            onChangeText={setDescription}
            multiline={true}
          />

          <Text style={styles.subHeaderText}>Species</Text>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setSpecies(value)}
            items={speciesArray}>
            <View pointerEvents={'none'}>
              <LoginTextInput
                textInputPlaceholder="Choose animal species"
                value={species}
                onChangeText={() => {}}
              />
            </View>
          </RNPickerSelect>

          <Text style={styles.subHeaderText}>Breed</Text>

          <LoginTextInput
            textInputPlaceholder="Write animal Breed"
            value={breed}
            onChangeText={setBreed}
          />

          <Text style={styles.subHeaderText}>Gender</Text>

          <View style={styles.genderContainer}>
            <Pressable
              onPress={() => setSex('Male')}
              style={({pressed}) => [
                pressed && styles.onPress,
                sex === 'Male'
                  ? styles.chosenContainer
                  : styles.unChosenContainer,
              ]}>
              <Text
                style={
                  sex === 'Male' ? styles.chosenText : styles.unChosenText
                }>
                Male
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setSex('Female')}
              style={({pressed}) => [
                pressed && styles.onPress,
                sex === 'Female'
                  ? styles.chosenContainer
                  : styles.unChosenContainer,
              ]}>
              <Text
                style={
                  sex === 'Female' ? styles.chosenText : styles.unChosenText
                }>
                Female
              </Text>
            </Pressable>
          </View>

          <Text style={styles.subHeaderText}>Age</Text>

          <View style={styles.ageContainer}>
            <RNPickerSelect
              darkTheme
              onValueChange={value => setAge(value)}
              items={ageType === 'Month' ? monthArray : ageYearsArray}>
              <View pointerEvents={'none'}>
                <LoginTextInput
                  textInputPlaceholder="Animal age"
                  value={age}
                  onChangeText={() => {}}
                  containerStyle={styles.ageInput}
                />
              </View>
            </RNPickerSelect>

            <RNPickerSelect
              darkTheme
              onValueChange={value => setAgeType(value)}
              items={choseDateTypeArray}>
              <View pointerEvents={'none'}>
                <LoginTextInput
                  textInputPlaceholder="Chose interval"
                  value={ageType}
                  onChangeText={() => {}}
                  containerStyle={styles.ageInput}
                />
              </View>
            </RNPickerSelect>
          </View>

          <Text style={styles.subHeaderText}>Health condition</Text>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setHealthCondition(value)}
            items={healthStates}>
            <View pointerEvents={'none'}>
              <LoginTextInput
                textInputPlaceholder="Choose animal health condition"
                value={healthCondition}
                onChangeText={() => {}}
              />
            </View>
          </RNPickerSelect>

          <Text style={styles.subHeaderText}>Add photo (min 1)</Text>

          <View style={styles.addPhotoButtonContainer}>
            <FlatList
              data={photoArr}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={!!photoArr}
              ListEmptyComponent={
                <View style={styles.emptyPhotoContainer}>
                  <PhotoSvg
                    width={Dimensions.get('screen').width * 0.12}
                    height={Dimensions.get('screen').width * 0.12}
                    fill={GlobalColors.activeColor}
                  />
                </View>
              }
              ItemSeparatorComponent={() => (
                <View style={styles.photoSeparator} />
              )}
              ListHeaderComponent={() => <View style={styles.photoSeparator} />}
              ListFooterComponent={() => <View style={styles.photoSeparator} />}
              style={styles.photoList}
              renderItem={({item}) => (
                <View style={styles.photoItemContainer}>
                  <FastImage
                    source={{uri: item.uri}}
                    style={styles.photoItem}
                  />
                </View>
              )}
            />

            <Pressable
              hitSlop={15}
              onPress={pickImagePressHandler}
              style={({pressed}) => [
                pressed && styles.onPress,
                styles.changeButton,
              ]}>
              <Text style={styles.changeButtonText}>Change</Text>
            </Pressable>
          </View>

          <Text style={styles.errorText}>
            {error ? 'You did not fill in all the required fields' : ' '}
          </Text>

          <Pressable
            onPress={route.params ? saveChanges : nextPressHandler}
            style={({pressed}) => [
              pressed && styles.onPress,
              styles.nextButtonContainer,
            ]}>
            <Text style={styles.nextButtonText}>
              {route.params ? 'Save Changes' : 'Continue'}
            </Text>
          </Pressable>

          {route.params && (
            <Pressable
              onPress={deletePressHandler}
              style={({pressed}) => [
                pressed && styles.onPress,
                styles.nextButtonContainer,
                {backgroundColor: GlobalColors.red},
              ]}>
              <Text style={styles.nextButtonText}>Delete</Text>
            </Pressable>
          )}

          <View style={{height: 30}} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: '5%',
  },
  subHeaderText: {
    fontSize: size(12),
    marginVertical: 5,
    color: GlobalColors.textInBackground,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: GlobalColors.primaryLight,
    borderRadius: 10,
  },
  chosenText: {
    fontSize: size(14),
    textAlign: 'center',
    color: GlobalColors.textInActiveColor,
  },
  unChosenText: {
    fontSize: size(14),
    textAlign: 'center',
    color: GlobalColors.textInPrimaryLight,
  },
  chosenContainer: {
    flex: 1,
    backgroundColor: GlobalColors.activeColor,
    paddingVertical: 10,
    borderRadius: 10,
  },
  unChosenContainer: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
  },
  ageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ageInput: {
    width: Dimensions.get('screen').width * 0.4,
  },
  addPhotoButtonContainer: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: GlobalColors.primaryLight,
    height: Dimensions.get('screen').height * 0.3,
  },
  emptyPhotoContainer: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.85,
    alignItems: 'center',
  },
  photoSeparator: {
    width: 5,
  },
  photoList: {
    width: '99%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  photoItemContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  photoItem: {
    width: Dimensions.get('screen').width * 0.3,
    height: '98%',
    borderRadius: 10,
  },
  changeButton: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: GlobalColors.activeColor,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  changeButtonText: {
    fontSize: size(14),
    color: GlobalColors.textInActiveColor,
  },
  errorText: {
    color: GlobalColors.red,
    fontSize: size(12),
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 5,
  },
  nextButtonContainer: {
    backgroundColor: GlobalColors.activeColor,
    paddingVertical: 17,
    borderRadius: 10,
    marginBottom: 20,
  },
  nextButtonText: {
    fontSize: size(14),
    color: GlobalColors.textInActiveColor,
    textAlign: 'center',
  },
  onPress: {
    opacity: 0.7,
  },
});
