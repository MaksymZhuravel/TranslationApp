import SCREENS from '~constants/screens';
import {HomeScreen} from '~containers/HomeScreen';
import {Home} from '~asssets/icons';
import {TranslationsTableScreen} from '~containers/TranslationsTableScreen';
import Translate from '~asssets/icons/Translate';

const appScreens = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    title: 'Home',
    icon: Home,
  },
  {
    name: SCREENS.TRANSLATION_TABLE,
    component: TranslationsTableScreen,
    title: 'Languages',
    icon: Translate,
  },
];

export {appScreens};
