import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Button, Input} from "react-native-elements";

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

   /*  const SignIn = (navigation) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

    } 

    useEffect(()=>{
        const auth = getAuth();
            const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('Chat');
            } else {
                // User is signed out
                // ...
                  navigation.canGoBack() &&
                navigation.popToTop();  
            }
            });
            return unsubscribe;
    },[]) */

    return (
        <View style = {styles.container}>
           <Input placeholder="enter email" label="email" leftIcon={{type:"material", name:"email"}} value={email} 
           onChangeText={text=> setEmail(text)}/>
           <Input placeholder="enter Password" label="Password" leftIcon={{type:"material", name:"lock"}} value={password} 
           onChangeText={text=> setPassword(text)} secureTextEntry/>

           <Button title = 'SignIn' style = {styles.button} onPress={()=>navigation.navigate('Login')}/>

           <Button title = 'Register' style = {styles.button} onPress={()=>navigation.navigate('Register')}/>
           <Button title = 'Products' style = {styles.button} onPress={()=>navigation.navigate('Flatlist')}/>

        </View>
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})