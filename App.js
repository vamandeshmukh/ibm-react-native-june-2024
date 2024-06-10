import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
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
      // console.log(message);
    } else {
      setMessage('Invalid credentials!');
      // console.error(message);
    }
    setLoginData({
      username: '',
      password: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
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

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {

//   const [message, setMessage] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <Text>{message}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
