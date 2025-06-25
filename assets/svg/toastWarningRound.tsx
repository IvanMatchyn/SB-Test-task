import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const ToastWarningRound = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#FDF3F3" />
      <Path
        d="M20 21.1201V17.3801"
        stroke="#D13134"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.999 24.1251C19.861 24.1251 19.749 24.2371 19.75 24.3751C19.75 24.5131 19.862 24.6251 20 24.6251C20.138 24.6251 20.25 24.5131 20.25 24.3751C20.25 24.2371 20.138 24.1251 19.999 24.1251"
        stroke="#D13134"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M22.0288 12.1391L29.6878 25.5431C30.5778 27.1011 29.4528 29.0401 27.6588 29.0401H12.3408C10.5458 29.0401 9.42076 27.1011 10.3118 25.5431L17.9708 12.1391C18.8678 10.5681 21.1318 10.5681 22.0288 12.1391Z"
        stroke="#D13134"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
