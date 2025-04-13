import {Pressable, ScrollView, Text, View} from 'react-native';
import {GlobalColors} from '../../constants/Global';
import {LoginTextInput} from '../../components/authorizationComponents/loginTextinput';
import useHook from './hooks';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';
import RNPickerSelect from 'react-native-picker-select';
import {locationArray} from '../authorizationTypeScreen/const';
import {styles} from './styles';

export default function NewCabinet({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.NewCabinet>;
}) {
  const {
    name,
    setName,
    number,
    setNumber,
    email,
    setEmail,
    donate,
    setDonate,
    error,
    nextPressHandler,
    deletePressHandler,
    saveChanges,
    location,
    setLocation,
  } = useHook(route.params);

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subHeaderText}>Shelter Name</Text>

          <LoginTextInput
            textInputPlaceholder="Write shelter name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.subHeaderText}>Contact Phone Number</Text>

          <LoginTextInput
            textInputPlaceholder="Write phone number"
            value={number}
            onChangeText={setNumber}
          />

          <Text style={styles.subHeaderText}>Contact Email Address</Text>

          <LoginTextInput
            textInputPlaceholder="Write contact email address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.subHeaderText}>Monobank Donation Link</Text>

          <LoginTextInput
            textInputPlaceholder="Write you mono url"
            value={donate}
            onChangeText={setDonate}
          />

          <Text style={styles.subHeaderText}>Where are you?</Text>

          <RNPickerSelect
            darkTheme
            onValueChange={value => setLocation(value)}
            items={locationArray}>
            <View pointerEvents={'none'}>
              <LoginTextInput
                textInputPlaceholder="Choose your location"
                value={location}
                onChangeText={() => {}}
              />
            </View>
          </RNPickerSelect>

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
