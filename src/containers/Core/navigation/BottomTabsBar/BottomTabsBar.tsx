import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import SCREENS from '~constants/screens';
import {appScreens} from '~containers/Core/navigation/screens';
import {ThemeColors} from '~asssets/theme/colors';
import styles from '~containers/Core/navigation/BottomTabsBar/styles';

const BottomNavigationStack = createBottomTabNavigator();

const BottomTabsBar = () => {
  return (
    <BottomNavigationStack.Navigator initialRouteName={SCREENS.HOME}>
      {appScreens.map(screen => (
        <BottomNavigationStack.Screen
          key={screen.name}
          name={screen.title}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  {screen.icon({
                    focused,
                    isFromBottomTab: true,
                    color: ThemeColors.gray500,
                  })}
                </View>
              );
            },

            headerShown: true,
            headerStyle: {backgroundColor: ThemeColors.interface},
            tabBarLabelPosition: 'below-icon',
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={[
                    styles.labelStyle,
                    {
                      color: focused
                        ? ThemeColors.primaryBright
                        : ThemeColors.gray500,
                    },
                  ]}>
                  {screen.title}
                </Text>
              );
            },
          }}>
          {screen.component}
        </BottomNavigationStack.Screen>
      ))}
    </BottomNavigationStack.Navigator>
  );
};

export default BottomTabsBar;
