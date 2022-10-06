import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <StatusBar style='light' />
            <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIkbGnv2Cla0l_lnbchUGh2fcAMzG1PwAB21YSI_peGxYjCsqdekBym1Xo8MIOj8LjRE&usqp=CAU"
            }}
                style={{ width: 170, height: 170 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
})