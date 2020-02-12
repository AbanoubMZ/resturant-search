import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';

const SearchSreen=()=>{
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMsg]=useResults();
    
    const filterResultsByPrice=(price)=>{
        /// price === '$ || '$$' || '$$$'

        return results.filter(result=>{
            return result.price===price;
        });
    };

    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={()=>setTerm(term)} 
                onTermSubmit={searchApi}
            />
            {errorMsg ?<Text>{errorMsg}</Text> :null}
            <ScrollView>
                <ResultList title="Cost Effective" resturantList={filterResultsByPrice('$')}/>
                <ResultList title="Bit Pricer" resturantList={filterResultsByPrice('$$')}/>
                <ResultList title="Big Spender" resturantList={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </>
    );
}

const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15
    }
})

export default SearchSreen