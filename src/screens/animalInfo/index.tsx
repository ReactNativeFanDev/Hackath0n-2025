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

import {MonoSvg} from '../../assets/svg/organizationInfo/monoSvg';
import {styles} from './styles';

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
        style={styles.carousel}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={progress}
        renderItem={({item}) => (
          <View style={styles.carouselItem}>
            <FastImage source={{uri: item.uri}} style={styles.carouselImage} />

            <View style={styles.carouselOverlay}>
              <Text style={styles.carouselText}>{name} </Text>
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
    <View style={styles.container}>
      <ScrollView indicatorStyle="white">
        <PhotoCarousel data={photoArr} name={name} sex={sex} />

        <Text style={styles.infoText}>Species {species}</Text>
        <Text style={[styles.infoText, styles.infoTextMargin]}>
          Breed {breed}
        </Text>
        <Text style={[styles.infoText, styles.infoTextMargin]}>
          Age - {age} {ageType.toLocaleLowerCase()}
        </Text>
        <Text style={[styles.infoText, styles.infoTextMargin]}>
          Health Condition - {healthCondition}
        </Text>
        <Text style={[styles.infoText, styles.infoTextMargin]}>
          Location - {location}
        </Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        {donate && (
          <View style={styles.donateContainer}>
            <Text style={styles.donateTitle}>Donate for this pet</Text>
            <View style={styles.donateRow}>
              <Pressable
                onPress={donatePressHandler}
                style={({pressed}) => [
                  pressed && styles.onPress,
                  styles.donateButton,
                ]}>
                <Text style={styles.donateButtonText}>Donate</Text>
              </Pressable>
              <MonoSvg
                width={Dimensions.get('screen').width * 0.3}
                height={Dimensions.get('screen').width * 0.3}
              />
            </View>
          </View>
        )}

        <View style={styles.actionButtonsContainer}>
          <Pressable
            hitSlop={12}
            onPress={infoPressHandler}
            style={({pressed}) => [
              pressed && styles.onPress,
              styles.infoButton,
            ]}>
            <Text style={styles.infoButtonText}>INFO</Text>
          </Pressable>

          <Pressable
            onPress={
              isFavorite ? removeFromFavorite : saveToFavoritePressHandler
            }
            hitSlop={12}
            style={({pressed}) => [
              pressed && styles.onPress,
              isFavorite
                ? styles.removeFavoriteButton
                : styles.saveFavoriteButton,
            ]}>
            <Text style={styles.favoriteButtonText}>
              {isFavorite ? 'Remove from favorite' : 'Save to favorite'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
