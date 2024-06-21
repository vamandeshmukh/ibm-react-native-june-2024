// Profile.js

import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { userLogout } from '../redux/UserSlice';
import styles from '../styles/styles';

const Profile = () => {
    const user = useSelector((state) => state.user.loggedInUser);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log('handleLogout');
        dispatch(userLogout());
        navigation.navigate('Home');
    };


    const handleEditProfile = () => {
        navigation.navigate('EditProfile', { user });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {user.username}!</Text>
            <Text style={styles.body}>Username: {user.username}</Text>
            <Text style={styles.body}>password: {user.password}</Text>
            <Text style={styles.body}>Name: {user.name}</Text>
            <Text style={styles.body}>Phone: {user.phone}</Text>
            <Text style={styles.body}>Email: {user.email}</Text>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Button title="Edit Profile" onPress={handleEditProfile} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default Profile;





// // Profile.js

// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Profile = () => {
//     const navigation = useNavigation();

//     const handleEditProfile = () => {
//         navigation.navigate('Edit Profile');
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Welcome to the Profile Screen!</Text>
//             <Button title="Edit Profile" onPress={handleEditProfile} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
// });

// export default Profile;



// // Profile.js

// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const Profile = () => {
//     const navigation = useNavigation();
//     const route = useRoute();

//     const { username, password, name, phone, email, avatar } = route.params || {};

//     const handleEditProfile = () => {
//         navigation.navigate('Edit Profile', { username, password });
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Welcome to the Profile Screen!</Text>
//             <Text style={styles.label}>Username: {username}</Text>
//             <Text style={styles.label}>Name: {name}</Text>
//             <Text style={styles.label}>Phone: {phone}</Text>
//             <Text style={styles.label}>Email: {email}</Text>
//             <Text style={styles.label}>Avatar: {avatar}</Text>
//             <Button title="Edit Profile" onPress={handleEditProfile} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 8,
//     },
// });

// export default Profile;



