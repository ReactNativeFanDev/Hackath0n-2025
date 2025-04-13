import {Dimensions, StyleSheet} from 'react-native';
import {GlobalColors, size} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  carousel: {
    width: Dimensions.get('screen').width,
  },
  carouselItem: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.5,
    backgroundColor: GlobalColors.primaryLight,
    alignSelf: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  carouselOverlay: {
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
  },
  carouselText: {
    color: GlobalColors.textInPrimaryLight,
    fontSize: size(18),
  },
  infoText: {
    color: GlobalColors.textInBackground,
    fontSize: size(18),
    marginLeft: '5%',
  },
  infoTextMargin: {
    marginTop: 12,
  },
  descriptionContainer: {
    backgroundColor: GlobalColors.primaryLight,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  descriptionTitle: {
    color: GlobalColors.textInPrimary,
    fontSize: size(18),
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 15,
  },
  descriptionText: {
    color: GlobalColors.textInPrimary,
    fontSize: size(14),
  },
  donateContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GlobalColors.activeColor,
    borderRadius: 10,
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: '2.5%',
    marginTop: 10,
  },
  donateTitle: {
    color: GlobalColors.textInActiveColor,
    textAlign: 'center',
    fontSize: size(20),
    fontWeight: '700',
  },
  donateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  donateButton: {
    backgroundColor: GlobalColors.primaryLight,
    borderRadius: 10,
  },
  donateButtonText: {
    color: GlobalColors.textInPrimaryLight,
    fontSize: size(16),
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 33,
    marginTop: 20,
    gap: 10,
  },
  infoButton: {
    backgroundColor: GlobalColors.primaryLight,
    flex: 0.5,
    paddingVertical: 14,
    borderRadius: 15,
  },
  infoButtonText: {
    color: GlobalColors.textInPrimary,
    fontWeight: '500',
    fontSize: size(14),
    textAlign: 'center',
  },
  saveFavoriteButton: {
    backgroundColor: GlobalColors.activeColor,
    paddingVertical: 14,
    flex: 1,
    borderRadius: 15,
  },
  removeFavoriteButton: {
    backgroundColor: GlobalColors.red,
    paddingVertical: 14,
    flex: 1,
    borderRadius: 15,
  },
  favoriteButtonText: {
    color: GlobalColors.primary,
    fontWeight: '500',
    fontSize: size(14),
    textAlign: 'center',
  },
  onPress: {
    opacity: 0.6,
  },
});
