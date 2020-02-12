import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';


const ResultsDetails=({details})=>{
    return(
        <View style={styles.container}>
            <Image 
                style={styles.imageStyle}
                source={{uri: details.image_url}}
            />
            <Text style={styles.nameSytle}>{details.name}</Text>
            <Text>{details.rating} Stars , {details.review_count} Reviews </Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        marginLeft:15,

    },
    imageStyle:{
        height:120,
        width:250,
        borderRadius:4
    },
    nameSytle:{
        fontSize:12,
        fontWeight:'bold'
    },
    resviewsStyle:{

    }
});

export default ResultsDetails