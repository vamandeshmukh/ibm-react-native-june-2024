// EditProfile.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdate } from '../redux/UserSlice';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const EditProfile = () => {
    const user = useSelector((state) => state.user.loggedInUser);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const [avatar, setAvatar] = useState(user.avatar || '');
    const [name, setName] = useState(user.name || '');
    const [phone, setPhone] = useState(user.phone || '');
    const [email, setEmail] = useState(user.email || '');

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const handleSave = () => {
        const updatedUser = { ...user, name, phone, email, avatar };
        dispatch(userUpdate(updatedUser));
        navigation.navigate('Profile');
    };

    const handleCaptureAvatar = async () => {
        setShowCamera(true);
    };

    const handleTakePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setAvatar(photo.uri);
            setShowCamera(false);
        }
    };

    return (
        <View style={styles.container}>
            {!showCamera ? (
                <>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={user.username}
                        editable={false}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={user.password}
                        editable={false}
                        secureTextEntry
                    />
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your name"
                    />
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="Enter your phone number"
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                    />
                    <Text style={styles.label}>Avatar</Text>
                    {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : null}
                    <Button title="Capture Avatar" onPress={handleCaptureAvatar} />
                    <Button title="Save" onPress={handleSave} />
                </>
            ) : (
                <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
                    <View style={styles.cameraButtonContainer}>
                        <Button title="Take Picture" onPress={handleTakePicture} />
                    </View>
                </Camera>
            )}
        </View>
    );
};

export default EditProfile;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { userUpdate } from '../redux/UserSlice';
// import { Camera } from 'expo-camera';
// import { useNavigation } from '@react-navigation/native';
// import styles from '../styles/styles';

// const EditProfile = () => {
//     const user = useSelector((state) => state.user.loggedInUser);
//     const dispatch = useDispatch();
//     const navigation = useNavigation();

//     const [hasPermission, setHasPermission] = useState(null);
//     const [cameraRef, setCameraRef] = useState(null);
//     const [avatar, setAvatar] = useState(user.avatar || '');
//     const [name, setName] = useState(user.name || '');
//     const [phone, setPhone] = useState(user.phone || '');
//     const [email, setEmail] = useState(user.email || '');

//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestCameraPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }

//     const handleSave = () => {
//         const updatedUser = { ...user, name, phone, email, avatar };
//         dispatch(userUpdate(updatedUser));
//         navigation.navigate('Profile');
//     };

//     const handleCaptureAvatar = async () => {
//         if (cameraRef) {
//             const photo = await cameraRef.takePictureAsync();
//             setAvatar(photo.uri);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//                 style={styles.input}
//                 value={user.username}
//                 editable={false}
//             />
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//                 style={styles.input}
//                 value={user.password}
//                 editable={false}
//                 secureTextEntry
//             />
//             <Text style={styles.label}>Name</Text>
//             <TextInput
//                 style={styles.input}
//                 value={name}
//                 onChangeText={setName}
//                 placeholder="Enter your name"
//             />
//             <Text style={styles.label}>Phone</Text>
//             <TextInput
//                 style={styles.input}
//                 value={phone}
//                 onChangeText={setPhone}
//                 placeholder="Enter your phone number"
//             />
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//                 style={styles.input}
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Enter your email"
//             />
//             <Text style={styles.label}>Avatar</Text>
//             {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : null}
//             <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
//                 <View style={styles.cameraButtonContainer}>
//                     <Button title="Capture Avatar" onPress={handleCaptureAvatar} />
//                 </View>
//             </Camera>
//             <Button title="Save" onPress={handleSave} />
//         </View>
//     );
// };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         padding: 16,
// //     },
// //     label: {
// //         fontSize: 18,
// //         marginBottom: 8,
// //     },
// //     input: {
// //         height: 40,
// //         borderColor: 'gray',
// //         borderWidth: 1,
// //         marginBottom: 16,
// //         paddingHorizontal: 8,
// //     },
// //     avatar: {
// //         width: 100,
// //         height: 100,
// //         borderRadius: 50,
// //         marginBottom: 16,
// //     },
// //     camera: {
// //         height: 200,
// //         marginVertical: 16,
// //     },
// //     cameraButtonContainer: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// // });

// export default EditProfile;


// // EditProfile.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { userUpdate } from '../redux/UserSlice';
// import { launchCamera } from 'react-native-image-picker';
// import { useNavigation } from '@react-navigation/native';

// import styles from '../styles/styles';


// const EditProfile = () => {
//     const user = useSelector((state) => state.user.loggedInUser);
//     const dispatch = useDispatch();
//     const navigation = useNavigation();

//     const [name, setName] = useState(user.name || '');
//     const [phone, setPhone] = useState(user.phone || '');
//     const [email, setEmail] = useState(user.email || '');
//     const [avatar, setAvatar] = useState(user.avatar || '');

//     const handleSave = () => {
//         const updatedUser = { ...user, name, phone, email, avatar };
//         dispatch(userUpdate(updatedUser));
//         navigation.navigate('Profile');
//     };

//     const handleCaptureAvatar = () => {
//         console.log('handleCaptureAvatar');
//         launchCamera(
//             {
//                 mediaType: 'photo',
//                 cameraType: 'front',
//             },
//             (response) => {
//                 if (response.didCancel) {
//                     console.log('User cancelled image picker');
//                 } else if (response.errorCode) {
//                     console.log('ImagePicker Error: ', response.errorMessage);
//                 } else {
//                     const source = { uri: response.assets[0].uri };
//                     setAvatar(source.uri);
//                 }
//             }
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//                 style={styles.input}
//                 value={user.username}
//                 editable={false}
//             />
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//                 style={styles.input}
//                 value={user.password}
//                 editable={false}
//                 secureTextEntry
//             />
//             <Text style={styles.label}>Name</Text>
//             <TextInput
//                 style={styles.input}
//                 value={name}
//                 onChangeText={setName}
//                 placeholder="Enter your name"
//             />
//             <Text style={styles.label}>Phone</Text>
//             <TextInput
//                 style={styles.input}
//                 value={phone}
//                 onChangeText={setPhone}
//                 placeholder="Enter your phone number"
//             />
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//                 style={styles.input}
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Enter your email"
//             />
//             <Text style={styles.label}>Avatar</Text>
//             {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : null}
//             <Button title="Capture Avatar" onPress={handleCaptureAvatar} />
//             <Button title="Save" onPress={handleSave} />
//         </View>
//     );
// };

// export default EditProfile;


// // EditProfile.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const EditProfile = ({ route, navigation }) => {
//     const { username, password } = route.params;

//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [avatar, setAvatar] = useState('');

//     const handleSave = () => {
//         const updatedData = {
//             username,
//             password,
//             name,
//             phone,
//             email,
//             avatar,
//         };

//         // Navigate back to the Profile screen with updated data
//         navigation.navigate('Profile', updatedData);
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//                 style={styles.input}
//                 value={username}
//                 editable={false}
//             />
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//                 style={styles.input}
//                 value={password}
//                 editable={false}
//                 secureTextEntry
//             />
//             <Text style={styles.label}>Name</Text>
//             <TextInput
//                 style={styles.input}
//                 value={name}
//                 onChangeText={setName}
//                 placeholder="Enter your name"
//             />
//             <Text style={styles.label}>Phone</Text>
//             <TextInput
//                 style={styles.input}
//                 value={phone}
//                 onChangeText={setPhone}
//                 placeholder="Enter your phone number"
//             />
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//                 style={styles.input}
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Enter your email"
//             />
//             <Text style={styles.label}>Avatar</Text>
//             <TextInput
//                 style={styles.input}
//                 value={avatar}
//                 onChangeText={setAvatar}
//                 placeholder="Enter your avatar URL"
//             />
//             <Button title="Save" onPress={handleSave} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 8,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 16,
//         paddingHorizontal: 8,
//     },
// });

// export default EditProfile;
