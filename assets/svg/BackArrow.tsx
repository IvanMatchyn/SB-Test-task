import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const BackArrow = (props: SvgProps) => {
  return (
    <Svg width={20} height={16} viewBox="0 0 20 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.79.387L8.707.293A1 1 0 007.387.21l-.094.083-7 7-.042.044-.055.068-.071.11-.054.114-.035.105-.03.148L0 8l.003.075.017.126.03.111.044.111.052.098.074.104.073.082 7 7a1 1 0 001.497-1.32l-.083-.094L3.416 9H19a1 1 0 100-2H3.414l5.293-5.293A1 1 0 008.79.387L8.707.293l.083.094z"
        fill={props.stroke ?? '#184F17'}
      />
    </Svg>
  );
};
