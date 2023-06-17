import SCREENS from '~constants/screens';
import {HomeScreen} from '~containers/HomeScreen';
import {Home} from '~asssets/icons';
import Translate from '~asssets/icons/Translate';
import LanguagesTableScreen from '~containers/LanguagesTableScreen/LanguagesTableScreen';

const appScreens = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    title: 'Home',
    icon: Home,
  },
  {
    name: SCREENS.TRANSLATION_TABLE,
    component: LanguagesTableScreen,
    title: 'Languages',
    icon: Translate,
  },
];

export {appScreens};
