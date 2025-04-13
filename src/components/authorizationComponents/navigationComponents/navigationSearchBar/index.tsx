import {useEffect, useState} from 'react';
import {Dimensions, TextInput, View} from 'react-native';
import {GlobalColors} from '../../../../constants/Global';
import SearchSvg from '../../../../assets/svg/navigation/searchSvg';
import {useAppDispatch, useAppSelector} from '../../../../redux/store';
import {changeSearchState} from '../../../../redux/announcement/announcementThunks';

export default function NavigationSearchBar() {
  const [search, setSearch] = useState('');
  const announcement = useAppSelector(
    state => state.announcement.allAnnouncements,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search.length > 0) {
      const filteredAnnouncements = announcement.filter(item =>
        item.species?.toLowerCase().startsWith(search.toLowerCase()),
      );

      dispatch(changeSearchState(filteredAnnouncements));
    } else {
      dispatch(changeSearchState(announcement));
    }
  }, [search, announcement, dispatch]);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center',
        gap: 10,
      }}>
      <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder="Пошук"
        placeholderTextColor={`${GlobalColors.textInPrimary}60`}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: GlobalColors.primaryLight,
          backgroundColor: GlobalColors.primary,
          color: GlobalColors.textInPrimary,
          borderRadius: 8,
          flex: 1,
        }}
      />

      <SearchSvg
        width={Dimensions.get('screen').width * 0.08}
        height={Dimensions.get('screen').width * 0.08}
        fill={GlobalColors.activeColor}
      />
    </View>
  );
}
