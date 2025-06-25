import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { IconsCatalog } from '../models/enums/icons.enums.ts';
import { IShowToast } from '../models/interfaces/toast.interfaces.ts';

export const useToastShow = () => {
  const { top } = useSafeAreaInsets();

  const showToast = ({ autoHide, titleText, subTitleText, toastType, time = 300 }: IShowToast) => {
    setTimeout(() => {
      Toast.show({
        autoHide: autoHide ?? true,
        type: toastType ?? 'success',
        text1: titleText,
        text2: subTitleText,
        topOffset: top + 10,
        props: {
          iconName: IconsCatalog.ToastWarningRound,
          text2NumberOfLines: 2,
        },
      });
    }, time);
  };

  return { showToast };
};
