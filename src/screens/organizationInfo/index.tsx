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
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';
import FastImage from '@d11/react-native-fast-image';
import {MonoSvg} from '../../assets/svg/organizationInfo/monoSvg';

export default function OrganizationInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.OrganizationInfo>;
}) {
  const {
    userName,
    email,
    avatar,
    description,
    phone,
    chats,
    donate,
    category,
    location,
    type,
  } = route.params;

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
        <Text
          style={{
            color: GlobalColors.textInBackground,
            textAlign: 'center',
            fontSize: size(16),
            marginBottom: 10,
            textTransform: 'uppercase',
          }}>
          {userName}
        </Text>

        <FastImage
          source={{uri: avatar}}
          style={{
            width: Dimensions.get('screen').width * 0.8,
            height: Dimensions.get('screen').height * 0.3,
            backgroundColor: GlobalColors.primaryLight,
            alignSelf: 'center',
            borderRadius: 15,
          }}
        />

        <View style={{gap: 10, marginBottom: 20}}>
          <View
            style={{
              backgroundColor: GlobalColors.primary,
              paddingVertical: 10,
              width: '90%',
              alignSelf: 'center',
              marginTop: 12,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: GlobalColors.textInBackground,
                textAlign: 'center',
                fontSize: size(16),

                textTransform: 'uppercase',
              }}>
              Category
            </Text>
          </View>

          <Text
            style={{
              color: GlobalColors.textInBackground,
              textAlign: 'center',
              fontSize: size(16),
              textTransform: 'uppercase',
              marginTop: 10,
            }}>
            {category}
          </Text>

          <View
            style={{
              backgroundColor: GlobalColors.primary,
              paddingVertical: 10,
              width: '90%',
              alignSelf: 'center',
              marginTop: 12,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: GlobalColors.textInBackground,
                textAlign: 'center',
                fontSize: size(16),

                textTransform: 'uppercase',
              }}>
              Type
            </Text>
          </View>

          <Text
            style={{
              color: GlobalColors.textInBackground,
              textAlign: 'center',
              fontSize: size(16),
              textTransform: 'uppercase',
              marginTop: 10,
            }}>
            {type}
          </Text>

          <View
            style={{
              backgroundColor: GlobalColors.primary,
              paddingVertical: 10,
              width: '90%',
              alignSelf: 'center',
              marginTop: 12,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: GlobalColors.textInBackground,
                textAlign: 'center',
                fontSize: size(16),

                textTransform: 'uppercase',
              }}>
              location
            </Text>
          </View>

          <Text
            style={{
              color: GlobalColors.textInBackground,
              textAlign: 'center',
              fontSize: size(16),
              textTransform: 'uppercase',
              marginTop: 10,
            }}>
            {location}
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

        <View style={{height: 50}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  onPress: {
    opacity: 0.6,
  },
});
