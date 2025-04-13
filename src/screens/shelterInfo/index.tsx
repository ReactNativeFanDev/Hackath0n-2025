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
import {fetchUserProfile} from '../../redux/profile/profileThunks';
import {MonoSvg} from '../../assets/svg/organizationInfo/monoSvg';

export default function ShelterInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.ShelterInfo>;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {name, donate, number, email, location, id, userId} = route.params;

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

  function openEmailPressHandler() {
    const subject = 'доброго дня';
    const body = 'Хочу повідомити вас, що я зацікавлений в..';

    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(err =>
      Alert.alert('Помилка', 'Не вдалося відкрити поштовий клієнт.'),
    );
  }

  function donatePressHandler() {
    Linking.openURL(donate).catch(err =>
      console.error('Failed to open URL:', err),
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: GlobalColors.background}}>
      <ScrollView indicatorStyle="white">
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: GlobalColors.textInBackground,
              fontSize: size(18),
            }}>
            Name
          </Text>

          <Text
            style={{
              color: GlobalColors.textInBackground,
              fontSize: size(18),
            }}>
            {name}
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 1,
            backgroundColor: `${GlobalColors.lightContainer}60`,
            marginTop: 12,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text
            style={{
              color: GlobalColors.textInBackground,
              fontSize: size(18),
            }}>
            Location
          </Text>

          <Text
            style={{
              color: GlobalColors.textInBackground,
              fontSize: size(18),
            }}>
            {location}
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 1,
            backgroundColor: `${GlobalColors.lightContainer}60`,
            marginTop: 12,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text
            style={{
              color: GlobalColors.textInBackground,
              fontSize: size(18),
            }}>
            Number
          </Text>

          <Text
            style={{
              color: GlobalColors.textInBackground,
              fontSize: size(18),
            }}>
            {number}
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
              marginTop: 20,
            }}>
            <Text
              style={{
                color: GlobalColors.textInActiveColor,
                textAlign: 'center',
                fontSize: size(20),
                fontWeight: '700',
              }}>
              Donate to organization
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

        {email && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: size(16),
                color: GlobalColors.textInBackground,
                textTransform: 'uppercase',
              }}>
              Contact with us
            </Text>

            <Pressable
              style={({pressed}) => [
                pressed && styles.onPress,
                {backgroundColor: GlobalColors.activeColor, borderRadius: 15},
              ]}
              onPress={openEmailPressHandler}>
              <Text
                style={{
                  color: GlobalColors.textInActiveColor,
                  fontSize: size(14),
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  fontWeight: '500',
                  textTransform: 'uppercase',
                }}>
                Contact
              </Text>
            </Pressable>
          </View>
        )}

        <Text
          style={{
            color: GlobalColors.textInBackground,
            fontSize: size(20),
            marginHorizontal: '5%',
            textAlign: 'justify',
            marginTop: 10,
            marginBottom: 12,
          }}>
          Write to us, and we’ll be happy to welcome your pet
        </Text>

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
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  onPress: {
    opacity: 0.6,
  },
});
