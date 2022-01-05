import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changeName } from '../reducer2/actions/counts';
import { CHANGE_EMAIL, CHANGE_NAME } from '../reducer2/constants';
export default function Screen1(){
    const {name,email}=useSelector(state=>state.user);
    const dispatch=useDispatch();
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="write your name here" onChangeText={(text)=>{dispatch(changeName(text))}}
        />
        <TextInput style={styles.input} placeholder="write your email here" onChangeText={(text)=>{dispatch(changeEmail(text))}}
        />
        <Text>your name is {name} and email is {email}</Text>
        <StatusBar style="auto" />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: .5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
      },
  });
  