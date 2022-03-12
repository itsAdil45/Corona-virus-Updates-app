import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {
  const [data, setdata ] = useState([]);
  const [masterdata, setMasterData]= useState("");
  const [search, setSearch] = useState("")
  useEffect(()=>{  
    axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')

    .then(function (response) {
      // // handle success
      setdata(response.data.locations);
      setMasterData(response.data.locations)
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    })},[])

    const searchFilter=(text)=>{
      if(text){
        const newData = masterdata.filter((item)=>{
          const itemData =item.country? item.country.toUpperCase():"".toUpperCase()
          const textData = text.toUpperCase();
          return itemData.indexOf(textData)>-1;
        });
        setdata(newData);
        setSearch(text);
      }
      else{
        setdata(masterdata);
        setSearch(text);
      }
    }
  
  return (
    <View>
      
{/* 
    {data.map((item , index )=><Text key={index}>{item.country} </Text>)}  */}
    <FlatList data={data}
    ListHeaderComponent={ <TextInput placeholder='Search Here' value={search} onChangeText={(text)=>{searchFilter(text)}} style={style.input}/>}
       renderItem={
        ({item}) =>
        <View>
          <View style={style.container}>
           <Text style={style.countries}>Country Name:{item.country}</Text>
          </View>
          <View style={style.container}>
           <Text style={style.countries}>Confirmed Cases:{item.latest.confirmed}</Text>
           <Text style={style.countries}>Deaths:{item.latest.deaths}</Text>
           <Text style={style.countries}>Recovered Cases:{item.latest.recovered}</Text>
          </View>
           </View>
          } 
    />
   
    </View>

   
  )
}

const style =  StyleSheet.create({
container:{
margin:20
},
countries:{
fontSize:19,
color:"black"
},
input:{
textAlign:"center",
fontSize:25,

}


})