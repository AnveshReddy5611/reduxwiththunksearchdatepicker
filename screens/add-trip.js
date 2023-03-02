import { StyleSheet, Text, View,Image, TextInput, ScrollView} from "react-native";
import React, { useState, useEffect } from "react";
import Screenwrapper from "../components/commonfolder/screenwrapper";
import { RANDOM_THUMBNAIL } from "../assets/assets";
import BackButton from "../components/commonfolder/back-button";
import { COLORS } from "../theme/theme";
import AddButton from "../components/commonfolder/add-button";
import { useDispatch } from "react-redux";
import { addTrip } from "../redux/slice/trips";

const AddTrip = ({navigation}) => {
  const [placeBanner, setPlaceBanner] = useState();
  const[place, setPlace]=useState('');
  const[country, setCountry]=useState('');
  const dispatch=useDispatch();
  useEffect(() => {
    setPlaceBanner(RANDOM_THUMBNAIL());
  }, []);
  
  const handleAddTrip=()=>{
    const tripData={
      id:Date.now(),
      place,
      country,
      banner:placeBanner,
      expenses:[],
    };
    dispatch(addTrip(tripData));
    navigation.navigate("Home");
  }
  return (
    <Screenwrapper>
      <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.bannerContainer}>
            <Image source={placeBanner} style={styles.banner}/>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.subheading}>Where on earth?</Text>
              <TextInput value={place} onChangeText={e=>setPlace(e)} style={styles.input}/>
            </View>
            <View style={styles.formItem}>
              <Text style={styles.subheading}>Which country?</Text>
              <TextInput value={country} onChangeText={e=>setCountry(e)} style={styles.input}/>
            </View>

          </View>
        </View>
        <AddButton buttonText={"ADD TRIP"} onPress={handleAddTrip}/>
      </View>
    </Screenwrapper>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  addTripWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  banner:{
    height:240,
    width:'120%',
    resizeMode:'cover',

  },
  bannerContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  form:{
    marginVertical:24,    
  },
  formItem:{
    marginVertical:16,
  },
  input:{
    backgroundColor:COLORS.WHITE,
    marginTop:12,
    fontSize:16,
    padding:12,
    borderRadius:18,
  },
  subheading:{
    fontSize:20,
    fontWeight:'600',
    colors:COLORS.TEXT,
  }
});
