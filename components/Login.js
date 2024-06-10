import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleInput = (field, value) => {
    setLoginData({
      ...loginData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log(loginData);
    if (loginData.username === 'vaman' && loginData.password === 'vaman') {
      setMessage(`Hi ${loginData.username}! You've logged in successfully!`);
    } else {
      setMessage('Invalid credentials!');
    }
    setLoginData({
      username: '',
      password: '',
    });
  };

  return (
    <View>
      <Text >Login Screen</Text>
      <View>
        <TextInput
          placeholder="Username"
          value={loginData.username}
          onChangeText={text => handleInput('username', text)}
        />
      </View>
      <View>
        <TextInput
          secureTextEntry
          placeholder="Password"
          value={loginData.password}
          onChangeText={text => handleInput('password', text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit}>
        <Text >LOGIN</Text>
      </TouchableOpacity>
      <Text> {message} </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login;

