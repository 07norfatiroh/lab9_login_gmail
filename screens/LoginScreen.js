import React from "react";
import { StyleSheet, View, Button,Text } from "react-native";
import * as Google from "expo-google-app-auth";
const LoginScreen = ({ navigation }) => {
 const signInAsync = async () => {
 console.log("LoginScreen.js 6 | loggin in");
 try {
 const { type, user } = await Google.logInAsync({
 iosClientId: `554877890521-07qjuoh9h78id8vk9jsk875ian5omitc.apps.googleusercontent.com`,
 androidClientId: `554877890521-g911t5i9mbk81djkos98216i8obn702u.apps.googleusercontent.com`,
 });
 if (type === "success") {
 // Then you can use the Google REST API
 console.log("LoginScreen.js 17 | success, navigating toprofile");
 navigation.navigate("Profile", { user });
 }
 } catch (error) {
 console.log("LoginScreen.js 19 | error with login", error);
 }
 };
 return (
 <View style={styles.container}>
 <Text style={styles.header}>Sign in with Google</Text>
 <Button title="Sign in with Google" onPress={signInAsync} />
 </View>
 );
};
export default LoginScreen;
const styles = StyleSheet.create({
 container:{
 flex: 1,
 justifyContent:'center',
 alignItems: 'center'
 },
 header: {
 fontSize: 25
 },
});