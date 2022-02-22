import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { Divider } from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FirstPage from './screens/FirstScreen';
import SecondPage from './screens/SecondScreen';
import ThirdPage from './screens/ThirdScreen';
import FourthPage from './screens/FourthScreen';
import FifthPage from './screens/FifthScreen';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSideBar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Generate', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'rgb(43,191,14)', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: '900', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgb(43,191,14)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: '900', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'News', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function ThirdScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgb(43,191,14)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: '900', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Manage', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function FourthScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FourthPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgb(43,191,14)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: '900', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          title: 'Breach / Watch', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function FifthScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FifthPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgb(43,191,14)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: '900', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{
          title: 'Strength', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'rgb(22,155,22)',
          itemStyle: {
            marginVertical: 7.5,
            fontSize:225
            },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{
           title: 'Generate',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="lightbulb"
                 size={size}
                 color={'rgb(22,155,22)'}
              />
            
           ),
        }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
           options={{
           title: 'News',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="newspaper-variant-outline"
                 size={size}
                color={'rgb(22,155,22)'}
              />
            
           ),
        }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ThirdPage"
          options={{
           title: 'Manage',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="folder"
                 size={size}
                 color={'rgb(22,155,22)'}
              />
            
           ),
        }}
          component={ThirdScreenStack}
        />
        <Drawer.Screen
          name="FourthPage"
          options={{
           title: 'Breach Watch',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="file-find"
                 size={size}
                 color={'rgb(22,155,22)'}
              />
            
           ),
        }}
          component={FourthScreenStack}
        />
        <Drawer.Screen
         name="FifthPage"
         options={{
           title: 'Strength',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="lock-alert"
                 size={size}
                 color={'rgb(22,155,22)'}
              />
            
           ),
        }}
          component={FifthScreenStack}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
