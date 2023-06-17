import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Tick() {
  return (
    <Svg x="0px" y="0px" width={18} height={18} viewBox="0 0 48 48">
      <Path d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm0 3c9.407 0 17 7.593 17 17s-7.593 17-17 17S7 33.407 7 24 14.593 7 24 7zm7.47 10.986a1.5 1.5 0 00-1.03.453l-8.94 8.94-3.94-3.94a1.5 1.5 0 10-2.12 2.122l5 5a1.5 1.5 0 002.12 0l10-10a1.5 1.5 0 00-1.09-2.575z" />
    </Svg>
  );
}

export default Tick;
