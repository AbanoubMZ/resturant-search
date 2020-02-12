import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen=({navigation})=>{
    const id = navigation.getParam('id');
    const [imgs,setImgs]=useState(null);
    const getResultById= async id=>{
        try{
            const response=await yelp.get(`/${id}`);
            setImgs(response.data);
            console.log(response.data);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getResultById(id);
    },[])
    if(!imgs){
        return null;
    }
    return(
        <View>
            <Text>{imgs.name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={imgs.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return(
                        <Image source={{uri:item}} style={styles.img}/>
                    )
                }}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    img:{
        height:200,
        width:200,
        margin:10
    }
});

export default ResultsShowScreen