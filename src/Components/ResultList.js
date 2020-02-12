import React from 'react';
import {View,Text,StyleSheet , TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetails from '../Components/ResultsDetails'; 
import {withNavigation} from 'react-navigation';


const ResultList=({title,resturantList,navigation})=>{

    if(!resturantList.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={resturantList}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show' ,{id:item.id})} >
                            <ResultsDetails details={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    titleStyle:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:15,
        marginBottom:5  
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultList);