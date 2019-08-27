import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import KnowledgeContainer from './src/knowledge/components/knowledgeContainer';
import MissionContainer from './src/mission/components/missionContainer';
import ScoreContainer from './src/score/components/scoreContainer';
import TeamContainer from './src/team/components/teamContainer';
import LoginContainer from './src/login/components/loginContainer';
import SplashScreenContainer from './src/splash/components/splashScreenContainer';
import AuthContainer from './src/auth/authContainer';
import MissionDetailsContainer from './src/mission/components/missionDetailsContainer';

const AppNavigator = createBottomTabNavigator(
    {
        Score: {
            screen: ScoreContainer
        },
        Mission: {
            screen: MissionContainer
        },
        Team: {
            screen: TeamContainer
        },
        Knowledge: {
            screen: KnowledgeContainer
        }
    },
    {
        initialRouteName: 'Score',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = '';
                if (routeName === 'Score') {
                    iconName = 'md-trophy';
                } else if (routeName === 'Mission') {
                    iconName = 'md-star';
                } else if (routeName === 'Team') {
                    iconName = 'md-people';
                } else if (routeName === 'Knowledge') {
                    iconName = 'md-book';
                }
                return <Icon name={iconName} size={32} color='black' />;
            }
        })
    }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginContainer,
    Auth: AuthContainer
  },
  {
    initialRouteName: "Login",
    headerMode: 'none'
  }
); 
  
const MissionStack = createStackNavigator(
  {
    MissionDetails: {
      screen: MissionDetailsContainer
    }
  },
  {
    headerMode: 'none'
  }
)

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppNavigator,
        Other: MissionStack,
        SplashScreen: SplashScreenContainer
    },
    {
        initialRouteName: 'Auth'
    }
);

const Navigation = createAppContainer(SwitchNavigator);

export default Navigation;
