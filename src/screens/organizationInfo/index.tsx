import {
  Alert,
  Dimensions,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';
import FastImage from '@d11/react-native-fast-image';
import {MonoSvg} from '../../assets/svg/organizationInfo/monoSvg';
import {styles} from './styles';

export default function OrganizationInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.OrganizationInfo>;
}) {
  const {userName, email, avatar, donate, category, location, type} =
    route.params;

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
    <View style={styles.container}>
      <ScrollView indicatorStyle="white">
        <Text style={styles.userName}>{userName}</Text>

        <FastImage source={{uri: avatar}} style={styles.avatar} />

        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Text style={styles.infoHeaderText}>Category</Text>
          </View>
          <Text style={styles.infoText}>{category}</Text>

          <View style={styles.infoHeader}>
            <Text style={styles.infoHeaderText}>Type</Text>
          </View>
          <Text style={styles.infoText}>{type}</Text>

          <View style={styles.infoHeader}>
            <Text style={styles.infoHeaderText}>Location</Text>
          </View>
          <Text style={styles.infoText}>{location}</Text>
        </View>

        {donate && (
          <View style={styles.donateContainer}>
            <Text style={styles.donateTitle}>Donate to organization</Text>
            <View style={styles.donateActions}>
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

        {email && (
          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>Contact with us</Text>
            <Pressable
              style={({pressed}) => [
                pressed && styles.onPress,
                styles.contactButton,
              ]}
              onPress={openEmailPressHandler}>
              <Text style={styles.contactButtonText}>Contact</Text>
            </Pressable>
          </View>
        )}

        <View style={styles.footerSpacing} />
      </ScrollView>
    </View>
  );
}
