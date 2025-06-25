import { ReactElement } from 'react';

import { BackButton } from '../../../assets/svg/BackButton.tsx';
import { IconsCatalog } from '../models/enums/icons.enums.ts';

export const icons: Record<IconsCatalog, ReactElement> = {
  [IconsCatalog.BackButton]: <BackButton />,
};
