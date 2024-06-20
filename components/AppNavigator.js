import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import EditProfile from './EditProfile';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Register" component={Register} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Edit Profile" component={EditProfile} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

