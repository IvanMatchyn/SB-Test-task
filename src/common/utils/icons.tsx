import { ReactElement } from 'react';

import { AppleIcon } from '../../../assets/svg/AppleIcon.tsx';
import { BackArrow } from '../../../assets/svg/BackArrow.tsx';
import { BackButton } from '../../../assets/svg/BackButton.tsx';
import { BackButtonWhite } from '../../../assets/svg/BackButtonWhite.tsx';
import { DeleteIcon } from '../../../assets/svg/Delete.tsx';
import { FaceId } from '../../../assets/svg/FaceId.tsx';
import { ToastWarningRound } from '../../../assets/svg/toastWarningRound.tsx';
import { IconsCatalog } from '../models/enums/icons.enums.ts';

export const icons: Record<IconsCatalog, ReactElement> = {
  [IconsCatalog.BackButton]: <BackButton />,
  [IconsCatalog.BackButtonWhite]: <BackButtonWhite />,
  [IconsCatalog.FaceId]: <FaceId />,
  [IconsCatalog.BackArrow]: <BackArrow />,
  [IconsCatalog.DeleteIcon]: <DeleteIcon />,
  [IconsCatalog.AppleIcon]: <AppleIcon />,
  [IconsCatalog.ToastWarningRound]: <ToastWarningRound />,
};
