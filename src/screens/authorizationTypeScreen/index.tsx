import {Alert, Dimensions, Keyboard, Pressable, Text, View} from 'react-native';
import {GlobalColors} from '../../constants/Global';
import {useState} from 'react';
import {LoginTextInput} from '../../components/authorizationComponents/loginTextinput';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthorizationParamList} from '../../navigation/types';
import {useAppDispatch} from '../../redux/store';
import {changeProfileData} from '../../redux/profile/profileThunks';
import RNPickerSelect from 'react-native-picker-select';
import {logout} from '../../redux/auth/authThunks';
import {styles} from './styles';
import {institutionCategoriesArray, locationArray} from './const';

export default function AuthorizationTypeScreen() {
  const navigation = useNavigation<NavigationProp<AuthorizationParamList>>();
  const dispatch = useAppDispatch();
  const [chosenType, setChosenType] = useState<'Organization' | 'Volunteer'>(
    'Volunteer',
  );
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  function continuePressHandler() {
    if (chosenType === 'Organization') {
      if (name && category && location) {
        setError(false);
        dispatch(
          changeProfileData({
            userName: name,
            type: chosenType,
            category: category,
            location: location,
          }),
        );

        return;
      }
    } else {
      if (name) {
        setError(false);
        dispatch(
          changeProfileData({
            userName: name,
            type: chosenType,
            category: category,
            location: location,
          }),
        );

        return;
      }
    }

    Alert.alert(
      'Validation Error',
      'All fields are required. Please complete the form and try again.',
    );
    setError(true);
  }

  function backPressHandler() {
    dispatch(logout());
    navigation.goBack();
  }

  return (
    <View onTouchStart={Keyboard.dismiss} style={styles.container}>
      <View style={styles.flexHalf} />
      <Text style={styles.title}>{'Provide additional information'}</Text>

      <Text style={styles.questionText}>
        {chosenType === 'Organization'
          ? 'Write your organization name'
          : 'Write your name'}
      </Text>

      <LoginTextInput
        textInputPlaceholder="Name.."
        value={name}
        onChangeText={setName}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.textInput}
        placeholderTextColor={`${GlobalColors.textInPrimary}80`}
      />

      {chosenType === 'Organization' && (
        <>
          <View style={styles.rowContainer}>
            <RNPickerSelect
              darkTheme
              onValueChange={value => setCategory(value)}
              items={institutionCategoriesArray}>
              <View pointerEvents={'none'}>
                <LoginTextInput
                  textInputPlaceholder="Chose interval"
                  value={category}
                  onChangeText={() => {}}
                  containerStyle={{width: Dimensions.get('screen').width * 0.4}}
                />
              </View>
            </RNPickerSelect>

            <View style={styles.flexOne} />

            <Text style={styles.categoryText}>Institution Category</Text>

            <View style={styles.flexHalf} />
          </View>

          <Text style={styles.questionText}>Where are you?</Text>

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
        </>
      )}

      <View style={styles.row}>
        <Pressable
          onPress={() => setChosenType('Volunteer')}
          style={({pressed}) => [
            pressed && styles.onPress,
            chosenType === 'Volunteer'
              ? styles.chosenContainer
              : styles.unChosenContainer,
          ]}>
          <Text
            style={
              chosenType === 'Volunteer'
                ? styles.chosenText
                : styles.unChosenText
            }>
            Volunteer
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setChosenType('Organization')}
          style={({pressed}) => [
            pressed && styles.onPress,
            chosenType === 'Organization'
              ? styles.chosenContainer
              : styles.unChosenContainer,
          ]}>
          <Text
            style={
              chosenType === 'Organization'
                ? styles.chosenText
                : styles.unChosenText
            }>
            Organization
          </Text>
        </Pressable>
      </View>

      <View style={styles.flexOne} />

      <Text style={styles.errorText}>
        {error ? 'Please fill in all fields and try again' : ' '}
      </Text>

      <View style={styles.footer}>
        <Pressable
          onPress={backPressHandler}
          style={({pressed}) => [
            styles.cancelButtonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.loginButtonTextCancel}>Cancel</Text>
        </Pressable>

        <Pressable
          onPress={continuePressHandler}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.loginButtonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
