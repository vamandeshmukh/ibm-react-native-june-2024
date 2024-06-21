// Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/UserSlice';
import styles from '../styles/styles';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const registeredUser = useSelector((state) => state.user.loggedInUser);

    const handleLogin = () => {
        const { username, password } = credentials;
        const isDefaultLogin = username === 'sonu' && password === 'sonu';

        if (
            (registeredUser.username === '' && isDefaultLogin) ||
            (username === registeredUser.username && password === registeredUser.password)
        ) {
            dispatch(userLogin({ username, password }));
            navigation.navigate('Profile');
        } else {
            Alert.alert('Error', 'Invalid username or password');
        }
    };

    const handleChange = (field, value) => {
        setCredentials({ ...credentials, [field]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={credentials.username}
                onChangeText={(value) => handleChange('username', value)}
                placeholder="Enter your username"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={credentials.password}
                onChangeText={(value) => handleChange('password', value)}
                placeholder="Enter your password"
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Login;


// // Login.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../redux/UserSlice';
// import styles from '../styles/styles';

// const Login = () => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const navigation = useNavigation();
//     const dispatch = useDispatch();

//     const handleLogin = () => {
//         const { username, password } = credentials;
//         if (username === 'sonu' && password === 'sonu') {
//             dispatch(userLogin({ username, password }));
//             navigation.navigate('Profile');
//         } else {
//             Alert.alert('Error', 'Invalid username or password');
//         }
//     };

//     const handleChange = (field, value) => {
//         setCredentials({ ...credentials, [field]: value });
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//                 style={styles.input}
//                 value={credentials.username}
//                 onChangeText={(value) => handleChange('username', value)}
//                 placeholder="Enter your username"
//             />
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//                 style={styles.input}
//                 value={credentials.password}
//                 onChangeText={(value) => handleChange('password', value)}
//                 placeholder="Enter your password"
//                 secureTextEntry
//             />
//             <Button title="Login" onPress={handleLogin} />
//         </View>
//     );
// };

// export default Login;


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


