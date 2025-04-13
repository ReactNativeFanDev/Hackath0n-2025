import {
  Alert,
  Dimensions,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';
import FastImage from '@d11/react-native-fast-image';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {Asset} from 'react-native-image-picker';
import MaleSvg from '../../assets/svg/petInfo/maleSvg';
import FemaleSvg from '../../assets/svg/petInfo/femaleSvg';
import {useDispatch} from 'react-redux';
import {AppDispatch, useAppSelector} from '../../redux/store';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/announcement/announcementSlice';
import {fetchUserProfile} from '../../redux/profile/profileThunks';
import {ProfileState} from '../../redux/profile/profileSlice';
import {MonoSvg} from '../../assets/svg/organizationInfo/monoSvg';

function PhotoCarousel({
  data,
  name,
  sex,
}: {
  data: Asset[];
  name?: string;
  sex: string;
}) {
  const progress = useSharedValue<number>(0);

  return (
    <View
      id="carousel-component"
      dataSet={{kind: 'basic-layouts', name: 'parallax'}}>
      <Carousel
        autoPlayInterval={2000}
        data={data}
        height={Dimensions.get('screen').height * 0.5}
        loop={true}
        pagingEnabled={true}
        autoPlay
        snapEnabled={true}
        width={Dimensions.get('screen').width}
        style={{
          width: Dimensions.get('screen').width,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={progress}
        renderItem={({item}) => (
          <View
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height * 0.5,
              backgroundColor: GlobalColors.primaryLight,
              alignSelf: 'center',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
            <FastImage
              source={{uri: item.uri}}
              style={{width: '100%', height: '100%'}}
            />

            <View
              style={{
                position: 'absolute',
                right: 15,
                top: 15,
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
                backgroundColor: GlobalColors.primaryLight,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: GlobalColors.textInPrimaryLight,
                  fontSize: size(18),
                }}>
                {name}{' '}
              </Text>
              {sex === 'Male' ? (
                <MaleSvg
                  width={Dimensions.get('screen').width * 0.08}
                  height={Dimensions.get('screen').width * 0.08}
                  fill={GlobalColors.activeColor}
                />
              ) : (
                <FemaleSvg
                  width={Dimensions.get('screen').width * 0.08}
                  height={Dimensions.get('screen').width * 0.08}
                  fill={GlobalColors.red}
                />
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default function AnimalInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.AnimalInfo>;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const favoriteArray = useAppSelector(state => state.announcement.favorite);

  const {
    id,
    userId,
    sex,
    species,
    breed,
    donate,
    age,
    ageType,
    photoArr,
    // createdAt,
    name,
    healthCondition,
    location,
    description,
  } = route.params;

  const isFavorite = favoriteArray.some(
    favorite => JSON.stringify(favorite) === JSON.stringify(route.params),
  );

  const dispatch = useDispatch<AppDispatch>();

  function saveToFavoritePressHandler() {
    dispatch(addFavorite(route.params));
  }

  function removeFromFavorite() {
    dispatch(removeFavorite(route.params));
  }

  function donatePressHandler() {
    Linking.openURL(donate).catch(err =>
      console.error('Failed to open URL:', err),
    );
  }

  async function infoPressHandler() {
    try {
      const userData = await fetchUserProfile(userId);

      if (userId && userData) {
        navigation.navigate(Routes.OrganizationInfo, {...userData});
      } else {
        Alert.alert('Failed to fetch user data');
      }
    } catch (error) {
      Alert.alert('Error fetching user data:', 'No internet connection');
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: GlobalColors.background}}>
      <ScrollView indicatorStyle="white">
        <PhotoCarousel data={photoArr} name={name} sex={sex} />

        <Text
          style={{
            color: GlobalColors.textInBackground,
            fontSize: size(18),
            marginLeft: '5%',
          }}>
          Species {species}
        </Text>

        <Text
          style={{
            color: GlobalColors.textInBackground,
            fontSize: size(18),
            marginLeft: '5%',
            marginTop: 12,
          }}>
          Breed {breed}
        </Text>

        <Text
          style={{
            color: GlobalColors.textInBackground,
            fontSize: size(18),
            marginLeft: '5%',
            marginTop: 12,
          }}>
          Age - {age} {ageType.toLocaleLowerCase()}
        </Text>

        <Text
          style={{
            color: GlobalColors.textInBackground,
            fontSize: size(18),
            marginLeft: '5%',
            marginTop: 12,
          }}>
          Health Condition - {healthCondition}
        </Text>

        <Text
          style={{
            color: GlobalColors.textInBackground,
            fontSize: size(18),
            marginLeft: '5%',
            marginTop: 12,
          }}>
          Location - {location}
        </Text>

        <View
          style={{
            backgroundColor: GlobalColors.primaryLight,
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 15,
            marginTop: 15,
          }}>
          <Text
            style={{
              color: GlobalColors.textInPrimary,
              fontSize: size(18),
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: 15,
            }}>
            Description
          </Text>

          <Text style={{color: GlobalColors.textInPrimary, fontSize: size(14)}}>
            {description}
          </Text>
        </View>

        {donate && (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: GlobalColors.activeColor,
              borderRadius: 10,
              gap: 15,
              paddingVertical: 10,
              paddingHorizontal: '2.5%',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: GlobalColors.textInActiveColor,
                textAlign: 'center',
                fontSize: size(20),
                fontWeight: '700',
              }}>
              Donate for this pet
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Pressable
                onPress={donatePressHandler}
                style={({pressed}) => [
                  pressed && styles.onPress,
                  {
                    backgroundColor: GlobalColors.primaryLight,

                    borderRadius: 10,
                  },
                ]}>
                <Text
                  style={{
                    color: GlobalColors.textInPrimaryLight,
                    fontSize: size(16),
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  Donate
                </Text>
              </Pressable>

              <MonoSvg
                width={Dimensions.get('screen').width * 0.3}
                height={Dimensions.get('screen').width * 0.3}
              />
            </View>
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            marginBottom: 33,
            marginTop: 20,
            gap: 10,
          }}>
          <Pressable
            hitSlop={12}
            onPress={infoPressHandler}
            style={({pressed}) => [
              pressed && styles.onPress,
              {
                backgroundColor: GlobalColors.primaryLight,
                flex: 0.5,
                paddingVertical: 14,
                borderRadius: 15,
              },
            ]}>
            <Text
              style={{
                color: GlobalColors.textInPrimary,
                fontWeight: '500',
                fontSize: size(14),
                textAlign: 'center',
              }}>
              INFO
            </Text>
          </Pressable>

          <Pressable
            onPress={
              isFavorite ? removeFromFavorite : saveToFavoritePressHandler
            }
            hitSlop={12}
            style={({pressed}) => [
              pressed && styles.onPress,
              {
                backgroundColor: isFavorite
                  ? GlobalColors.red
                  : GlobalColors.activeColor,
                paddingVertical: 14,
                flex: 1,
                borderRadius: 15,
              },
            ]}>
            <Text
              style={{
                color: GlobalColors.primary,
                fontWeight: '500',
                fontSize: size(14),
                textAlign: 'center',
              }}>
              {isFavorite ? 'Remove from favorite' : 'Save to favorite'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  onPress: {
    opacity: 0.6,
  },
});
