import {Dimensions, Pressable, ScrollView, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation/types';
import {MonoSvg} from '../../assets/svg/organizationInfo/monoSvg';
import {styles} from './styles';
import useHook from './hooks';

export default function ShelterInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, Routes.ShelterInfo>;
}) {
  const {name, donate, number, email, location} = route.params;
  const {infoPressHandler, openEmailPressHandler, donatePressHandler} = useHook(
    route.params,
  );

  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle="white">
        <View style={styles.row}>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.divider} />

        <View style={[styles.row, styles.marginTop]}>
          <Text style={styles.text}>Location</Text>
          <Text style={styles.text}>{location}</Text>
        </View>

        <View style={styles.divider} />

        <View style={[styles.row, styles.marginTop]}>
          <Text style={styles.text}>Number</Text>
          <Text style={styles.text}>{number}</Text>
        </View>

        {donate && (
          <View style={styles.donateContainer}>
            <Text style={styles.donateText}>Donate to organization</Text>
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

        <Text style={styles.description}>
          Write to us, and we’ll be happy to welcome your pet
        </Text>

        <Pressable
          hitSlop={12}
          onPress={infoPressHandler}
          style={({pressed}) => [pressed && styles.onPress, styles.infoButton]}>
          <Text style={styles.infoButtonText}>INFO</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
