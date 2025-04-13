import {Dimensions, FlatList, Pressable, Text, View} from 'react-native';
import {GlobalColors} from '../../constants/Global';
import LogOutSvg from '../../assets/svg/profile/logOutSvg';
import useHook from './hooks';
import FastImage from '@d11/react-native-fast-image';
import EditSvg from '../../assets/svg/profile/editSvg';
import {LoginTextInput} from '../../components/authorizationComponents/loginTextinput';
import {styles} from './styles';

export default function ProfileScreen() {
  const {
    logOutPressHandler,
    userAnnouncements,
    userNameState,
    setUserNameState,
    contactEmail,
    setContactEmail,
    donateUrl,
    setDonateUrl,
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
          <FastImage source={{uri: avatarCurrent}} style={styles.avatarImage} />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.userName}>
            {type === 'Organization' ? 'Organization name' : 'Name'}
          </Text>

          <LoginTextInput
            textInputPlaceholder="Write organization name"
            value={userNameState}
            onChangeText={setUserNameState}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.textInput}
          />
          <Text style={styles.userName}>Contact email</Text>

          <LoginTextInput
            textInputPlaceholder="Write your email"
            value={contactEmail}
            onChangeText={setContactEmail}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.textInput}
          />
        </View>
      </View>

      {type === 'Organization' && (
        <>
          <Text style={styles.userName}>Donate url</Text>
          <LoginTextInput
            textInputPlaceholder="Write your url for donating"
            value={donateUrl}
            onChangeText={setDonateUrl}
            containerStyle={styles.donateInputContainer}
            textInputStyle={styles.textInput}
          />
        </>
      )}

      <Pressable
        onPress={saveChangeInProfile}
        style={({pressed}) => [pressed && styles.onPress, styles.saveButton]}>
        <Text style={styles.saveButtonText}>Save changes</Text>
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
