import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector,useDispatch, createSelectorHook, ReactReduxContext } from 'react-redux';
import { changeCount } from '../reducer1/actions/counts';
export default function HomeComponent({navigation}){
  
    const {count}=useSelector(state=>state.count)
    const dispatch = useDispatch();
    return (
      <View style={styles.container}>
        <Button title="Dcrement" onPress={()=>{
            if(count==0){
              dispatch(changeCount(0))
            }
            else{
            dispatch(changeCount(count-1))
            }
          }
          }></Button>
        <View style={{height:20}}></View>
        
<Text>You have pressed this button <Text style={{fontSize:20,fontWeight:"bold"}}>{count}</Text> times</Text>
        <View style={{height:20}}></View>
        <Button title="Increment" onPress={()=>dispatch(changeCount(count+1))}></Button>
        <View style={{height:20}}></View>
        <StatusBar style="auto" />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  