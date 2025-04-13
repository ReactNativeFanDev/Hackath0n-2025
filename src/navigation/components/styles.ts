import {Dimensions, StyleSheet} from 'react-native';
import {DeviceSize, GlobalColors} from '../../constants/Global';

export const iconSize = DeviceSize.width * 0.075;

export const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: GlobalColors.secondary,
    padding: 20,
    borderRadius: 50,
  },
  tabBarContainer: {
    backgroundColor: GlobalColors.background,
    height: DeviceSize.hight * 0.08,
    paddingBottom: 0,
    borderTopWidth: 0,
  },
  tabBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  indicatorContainer: {
    width: Dimensions.get('screen').width / 1,
    height: '100%',
    position: 'absolute',
    left: 0,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorSquare: {
    backgroundColor: GlobalColors.secondary,
    width: iconSize * 2,
    height: iconSize * 2,
    borderRadius: (iconSize * 1.7) / 2,
  },
});
