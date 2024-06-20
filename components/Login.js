import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'sonu' && password === 'sonu') {
            navigation.navigate('Profile');
        } else {
            Alert.alert('Error', 'Invalid username or password');
        }
    }; 

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default Login;


// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// const Login = () => {

//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: '',
//     });

//     const [message, setMessage] = useState('');

//     const handleInput = (field, value) => {
//         setLoginData({
//             ...loginData,
//             [field]: value,
//         });
//     };

//     const handleSubmit = () => {
//         console.log(loginData);
//         if (loginData.username === 'vaman' && loginData.password === 'vaman') {
//             setMessage(`Hi ${loginData.username}! You've logged in successfully!`);
//         } else {
//             setMessage('Invalid credentials!');
//         }
//         setLoginData({
//             username: '',
//             password: '',
//         });
//     };

//     return (
//         <View>
//             <Text >Login Screen</Text>
//             <View>
//                 <TextInput
//                     placeholder="Username"
//                     value={loginData.username}
//                     onChangeText={text => handleInput('username', text)}
//                 />
//             </View>
//             <View>
//                 <TextInput
//                     secureTextEntry
//                     placeholder="Password"
//                     value={loginData.password}
//                     onChangeText={text => handleInput('password', text)}
//                 />
//             </View>
//             <TouchableOpacity
//                 onPress={handleSubmit}>
//                 <Text >LOGIN</Text>
//             </TouchableOpacity>
//             <Text> {message} </Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// };


// export default Login;

