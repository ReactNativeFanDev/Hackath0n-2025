import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';
import LogOutSvg from '../../assets/svg/profile/logOutSvg';
import useHook from './hooks';
import FastImage from '@d11/react-native-fast-image';
import EditSvg from '../../assets/svg/profile/editSvg';
import {LoginTextInput} from '../../components/authorizationComponents/loginTextinput';

export default function ProfileScreen() {
  const {
    logOutPressHandler,
    // userName,
    // email,
    userAnnouncements,
    userNameState,
    setUserNameState,
    contactEmail,
    setContactEmail,
    donateUrl,
    setDonateUrl,
    // avatar,
    // description,
    // phone,
    // chats,
    avatarCurrent,
    type,
    saveChangeInProfile,
    changeAvatarPressHandler,
    editMyPost,
  } = useHook();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={changeAvatarPressHandler}
          style={({pressed}) => [pressed && styles.onPress, styles.avatar]}>
          <FastImage
            source={{uri: avatarCurrent}}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
        </Pressable>

        <View style={{gap: 10}}>
          <Text style={styles.userName}>
            {type === 'Organization' ? 'Organization name' : 'Name'}
          </Text>

          <LoginTextInput
            textInputPlaceholder="Write organization name"
            value={userNameState}
            onChangeText={setUserNameState}
            containerStyle={{width: Dimensions.get('screen').width * 0.6}}
            textInputStyle={{paddingVertical: 10, width: '100%'}}
          />
          <Text style={styles.userName}>Contact email</Text>

          <LoginTextInput
            textInputPlaceholder="Write your email"
            value={contactEmail}
            onChangeText={setContactEmail}
            containerStyle={{width: Dimensions.get('screen').width * 0.6}}
            textInputStyle={{paddingVertical: 10, width: '100%'}}
          />
        </View>
      </View>

      {type === 'Organization' && (
        <>
          <Text style={[styles.userName]}>Donate url</Text>
          <LoginTextInput
            textInputPlaceholder="Write your url for donating"
            value={donateUrl}
            onChangeText={setDonateUrl}
            containerStyle={{width: '100%', marginTop: 10}}
            textInputStyle={{paddingVertical: 10, width: '100%'}}
          />
        </>
      )}

      <Pressable
        onPress={saveChangeInProfile}
        style={({pressed}) => [
          pressed && styles.onPress,
          {
            backgroundColor: GlobalColors.activeColor,
            borderRadius: 10,
            marginTop: 10,
          },
        ]}>
        <Text
          style={{
            color: GlobalColors.textInActiveColor,
            fontSize: size(14),
            fontWeight: '600',
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          Save changes
        </Text>
      </Pressable>

      <View style={styles.separator} />

      <FlatList
        data={userAnnouncements}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        ListHeaderComponent={() => <View style={styles.listHeaderFooter} />}
        ListFooterComponent={() => <View style={styles.listHeaderFooter} />}
        style={styles.flatList}
        renderItem={({item}) => (
          <Pressable
            onPress={() => editMyPost(item)}
            style={({pressed}) => [
              pressed && styles.onPress,
              styles.announcementContainer,
            ]}>
            <FastImage
              style={styles.announcementImage}
              source={{uri: item.photoArr[0].uri}}
            />

            <View style={styles.announcementDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name</Text>
                <Text style={styles.detailValue}>{item.name}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Species</Text>
                <Text style={styles.detailValue}>{item.species}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Breed</Text>
                <Text style={styles.detailValue}>{item.breed}</Text>
              </View>
            </View>

            <View style={styles.flexSpacer} />

            <EditSvg
              width={Dimensions.get('screen').width * 0.08}
              height={Dimensions.get('screen').width * 0.08}
              fill={GlobalColors.activeColor}
            />
          </Pressable>
        )}
      />

      <View style={styles.bottomSeparator} />

      <Pressable
        onPress={logOutPressHandler}
        hitSlop={12}
        style={({pressed}) => [pressed && styles.onPress, styles.logOutButton]}>
        <Text style={styles.logOutText}>Вийти</Text>

        <LogOutSvg
          width={Dimensions.get('screen').width * 0.07}
          height={Dimensions.get('screen').width * 0.07}
          fill={GlobalColors.red}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: '5%',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
  },
  avatar: {
    height: Dimensions.get('screen').width * 0.27,
    width: Dimensions.get('screen').width * 0.27,
    borderRadius: 15,
    backgroundColor: GlobalColors.primaryLight,
    overflow: 'hidden',
  },
  userName: {
    fontSize: size(14),
    letterSpacing: 2,
    color: GlobalColors.textInBackground,
    fontWeight: '500',
  },
  email: {
    fontSize: size(12),
    fontWeight: '300',
    color: `${GlobalColors.textInBackground}90`,
    letterSpacing: 1,
    width: '80%',
  },
  separator: {
    height: 1,
    backgroundColor: `${GlobalColors.textInBackground}60`,
    marginTop: 20,
  },
  itemSeparator: {
    height: 15,
  },
  listHeaderFooter: {
    height: 20,
  },
  flatList: {
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
  },
  announcementContainer: {
    flexDirection: 'row',
    backgroundColor: GlobalColors.primary,
    alignItems: 'center',
    gap: 15,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: Dimensions.get('screen').width * 0.06,
    paddingRight: 20,
  },
  announcementImage: {
    width: Dimensions.get('screen').width * 0.25,
    height: Dimensions.get('screen').width * 0.25,
    backgroundColor: GlobalColors.primaryLight,
  },
  announcementDetails: {
    justifyContent: 'space-around',
    height: Dimensions.get('screen').width * 0.25,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 10,
  },
  detailLabel: {
    color: GlobalColors.textInPrimary,
    fontSize: size(12),
  },
  detailValue: {
    color: GlobalColors.textInPrimary,
    fontSize: size(12),
  },
  flexSpacer: {
    flex: 1,
  },
  bottomSeparator: {
    height: 1,
    backgroundColor: `${GlobalColors.lightContainer}60`,
    marginBottom: 10,
  },
  logOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  logOutText: {
    fontSize: size(14),
    color: GlobalColors.red,
  },
  onPress: {
    opacity: 0.5,
  },
});
