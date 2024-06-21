// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        color: '#ffffff',
    },

    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
    },
    button: {
        backgroundColor: '#1a1a1a',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#333333',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,
    },
    camera: {
        height: 200,
        marginVertical: 16,
    },
    cameraButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;
