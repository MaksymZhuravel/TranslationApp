import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconType} from '~types/icons';
import {ThemeColors} from '~asssets/theme';

const Translate = ({focused = true, color}: IconType) => {
  const disabledColor = color || ThemeColors.gray300;
  const strokeColor = focused ? ThemeColors.primaryBright : disabledColor;

  return (
    <Svg x="0px" y="0px" width={20} height={20} viewBox="0 0 50 50">
      <Path
        stroke={strokeColor}
        d="M6 3C4.3 3 3 4.3 3 6v20c0 1.7 1.3 3 3 3h.406L8 27H6c-.602 0-1-.398-1-1V6c0-.602.398-1 1-1h20c.602 0 1 .398 1 1v15h-3c-1.7 0-3 1.3-3 3v3h-5l1.594 2H21v3.406l2 1.688V24c0-.602.398-1 1-1h20c.602 0 1 .398 1 1v20c0 .602-.398 1-1 1H24c-.602 0-1-.398-1-1v-2l-2 1.688V44c0 1.7 1.3 3 3 3h20c1.7 0 3-1.3 3-3V24c0-1.7-1.3-3-3-3H29V6c0-1.7-1.3-3-3-3zm10 5v2H8v2h11.906c-.308 2.227-1.613 4.055-3.25 5.531-2.508-2.199-3.781-4.5-3.781-4.5l-1.75.938s1.309 2.41 3.938 4.812c-.067.047-.122.11-.188.157-2.64 1.82-5.281 2.718-5.281 2.718l.625 1.907s2.906-.965 5.812-2.97c.207-.144.418-.312.625-.468a17.872 17.872 0 003.969 2.219l.75-1.875a15.481 15.481 0 01-3.094-1.688c1.828-1.73 3.356-3.988 3.657-6.781H25v-2h-7V8zm-4 17l-5 6h3v4h4v-4h3zm21 1.406l-5.188 13.782h2.5L31.407 37h5.282l1.124 3.188h2.5l-5.218-13.782zm1 3l2 5.688h-4zM19 33v3h-9l4 4h5v3l6-5z"
      />
    </Svg>
  );
};

export default Translate;
