// Register.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/styles';
import { userRegister } from '../redux/UserSlice';

const Register = ({ navigation }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '', confirmPassword: '' });
    const dispatch = useDispatch();

    const handleChange = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };

    const handleRegister = () => {
        const { username, password, confirmPassword } = credentials;
        if (username && password && confirmPassword) {
            if (password === confirmPassword) {
                dispatch(userRegister({ username, password }));
                Alert.alert(
                    'Registration Successful',
                    `Username: ${username}\nPassword: ${password}`,
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.navigate('Login'),
                        },
                    ]
                );
            } else {
                Alert.alert('Error', 'Passwords do not match.');
            }
        } else {
            Alert.alert('Error', 'Please fill out all fields.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={credentials.username}
                onChangeText={(text) => handleChange('username', text)}
                placeholder="Enter your username"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={credentials.password}
                onChangeText={(text) => handleChange('password', text)}
                placeholder="Enter your password"
                secureTextEntry={true}
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                value={credentials.confirmPassword}
                onChangeText={(text) => handleChange('confirmPassword', text)}
                placeholder="Confirm your password"
                secureTextEntry={true}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default Register;


// // Register.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import styles from '../styles/styles';
// import { userRegister } from '../redux/UserSlice';

// const Register = ({ navigation }) => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const dispatch = useDispatch();

//     const handleChange = (name, value) => {
//         setCredentials({ ...credentials, [name]: value });
//     };

//     const handleRegister = () => {
//         const { username, password } = credentials;
//         if (username && password) {
//             dispatch(userRegister(credentials));
//             Alert.alert(
//                 'Registration Successful',
//                 `Username: ${username}\nPassword: ${password}`,
//                 [
//                     {
//                         text: 'OK',
//                         onPress: () => navigation.navigate('Login'),
//                     },
//                 ]
//             );
//         } else {
//             Alert.alert('Error', 'Please fill out both fields.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//                 style={styles.input}
//                 value={credentials.username}
//                 onChangeText={(text) => handleChange('username', text)}
//                 placeholder="Enter your username"
//             />
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//                 style={styles.input}
//                 value={credentials.password}
//                 onChangeText={(text) => handleChange('password', text)}
//                 placeholder="Enter your password"
//                 secureTextEntry={true}
//             />
//             <Button title="Register" onPress={handleRegister} />
//         </View>
//     );
// };

// export default Register;


// // Register.js

// import React, { Component } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import styles from '../styles/styles';

// class Register extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         };
//     }

//     handleUsernameChange = (text) => {
//         this.setState({ username: text });
//     };

//     handlePasswordChange = (text) => {
//         this.setState({ password: text });
//     };

//     handleRegister = () => {
//         const { username, password } = this.state;
//         if (username && password) {
//             Alert.alert(
//                 'Registration Successful',
//                 `Username: ${username}\nPassword: ${password}`,
//                 [
//                     {
//                         text: 'OK',
//                         onPress: () => this.props.navigation.navigate('Login'),
//                     },
//                 ]
//             );
//         } else {
//             Alert.alert('Error', 'Please fill out both fields.');
//         }
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.label}>Username</Text>
//                 <TextInput
//                     style={styles.input}
//                     value={this.state.username}
//                     onChangeText={this.handleUsernameChange}
//                     placeholder="Enter your username"
//                 />
//                 <Text style={styles.label}>Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     value={this.state.password}
//                     onChangeText={this.handlePasswordChange}
//                     placeholder="Enter your password"
//                     secureTextEntry={true}
//                 />
//                 <Button title="Register" onPress={this.handleRegister} />
//             </View>
//         );
//     }
// }

// export default Register;
