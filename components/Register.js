import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleUsernameChange = (text) => {
        this.setState({ username: text });
    };

    handlePasswordChange = (text) => {
        this.setState({ password: text });
    };

    handleRegister = () => {
        const { username, password } = this.state;
        if (username && password) {
            Alert.alert(
                'Registration Successful',
                `Username: ${username}\nPassword: ${password}`,
                [
                    {
                        text: 'OK',
                        onPress: () => this.props.navigation.navigate('Login'),
                    },
                ]
            );
        } else {
            Alert.alert('Error', 'Please fill out both fields.');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={this.handleUsernameChange}
                    placeholder="Enter your username"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
                <Button title="Register" onPress={this.handleRegister} />
            </View>
        );
    }
}

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

export default Register;
