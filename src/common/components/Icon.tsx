import { cloneElement, FC } from 'react';

import { IconProps } from '../models/interfaces/icon.interfaces.ts';
import { icons } from '../utils/icons.tsx';

export const Icon: FC<IconProps> = ({ name }) => {
  const currentIcon = icons[name];

  if (!currentIcon) return null;

  return cloneElement(currentIcon);
};
