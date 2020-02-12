import React,{useEffect,useState} from 'react';
import yelp from '../api/yelp';


export default ()=>{
    const [results,setResults]=useState([]);
    const [errorMsg,seetErrorMsg]=useState('');

    const searchApi=async (searchTerm)=>{
        try{
            const response=await yelp.get('/search',{
                    params:{
                        limit:50,
                        term:searchTerm,
                        location:'san jose'
                    }
            });
            setResults(response.data.businesses);
        }catch(error){
            seetErrorMsg('Something Went Wrong');
        }
    }

    //For the initial start
    useEffect(()=>{
        searchApi('pasta');
    },[]);

    return [searchApi,results,errorMsg];
}
