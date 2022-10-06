import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from 'expo-status-bar';
const LoginScreen = () => {
    return (
        <View>
            <StatusBar style='light' />
            <Text>LoginScreen</Text>
            <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIkbGnv2Cla0l_lnbchUGh2fcAMzG1PwAB21YSI_peGxYjCsqdekBym1Xo8MIOj8LjRE&usqp=CAU"
            }}
                style= {{width: 200, height: 200}}
            />
            <Button
              title="LOG IN"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

})