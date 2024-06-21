import React from 'react';
import { Button, View, Text } from 'react-native';
import { userLogout } from '../redux/UserSlice';
import styles from '../styles/styles';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log('handleLogout');
    dispatch(userLogout());
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};


export default Logout;

