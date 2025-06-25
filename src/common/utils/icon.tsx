import { ReactElement } from 'react';

import { BackArrow } from '../../../assets/svg/BackArrow.tsx';
import { BackButton } from '../../../assets/svg/BackButton.tsx';
import { DeleteIcon } from '../../../assets/svg/Delete.tsx';
import { FaceId } from '../../../assets/svg/FaceId.tsx';
import { IconsCatalog } from '../models/enums/icons.enums.ts';

export const icons: Record<IconsCatalog, ReactElement> = {
  [IconsCatalog.BackButton]: <BackButton />,
  [IconsCatalog.FaceId]: <FaceId />,
  [IconsCatalog.BackArrow]: <BackArrow />,
  [IconsCatalog.DeleteIcon]: <DeleteIcon />,
};
