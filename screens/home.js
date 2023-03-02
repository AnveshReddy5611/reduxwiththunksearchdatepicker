import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from "react-native";
import React from "react";
import Screenwrapper from "../components/commonfolder/screenwrapper";
import { COLORS } from "../theme/theme";
import { IMAGES, RANDOM_THUMBNAIL, THUMBNAILS } from "../assets/assets";
import EmptyList from "../components/home/empty-list";
import { useSelector } from "react-redux";

// const MOCKDATA=[
//   {id:1,
//   banner:RANDOM_THUMBNAIL(),
//   place:'GOA1',
//   country:'INDIA',
// },
// {id:2,
//   banner:RANDOM_THUMBNAIL(),
//   place:'GOA2',
//   country:'INDIA',
// },
// {id:3,
//   banner:RANDOM_THUMBNAIL(),
//   place:'GOA3',
//   country:'INDIA',
// },
// {id:4,
//   banner:RANDOM_THUMBNAIL(),
//   place:'GOA4',
//   country:'INDIA',
// },
// {id:5,
//   banner:RANDOM_THUMBNAIL(),
//   place:'GOA5',
//   country:'INDIA',
// },
// {id:6,
//   banner:RANDOM_THUMBNAIL(),
//   place:'GOA6',
//   country:'INDIA',
// },

// ]

const Home = ({ navigation }) => {
  const tripList= useSelector(state=>state.trips.trips)
  return (
    <Screenwrapper>
      <View>
        <View stle={styles.homeHeader}>
          <Text style={styles.heading}>Tripify</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={IMAGES.TRIPIFY_BANNER}/>
          <TouchableOpacity onPress={()=>navigation.navigate("Add Trip")}>
            <View style={styles.addTripButton}>
              <Text styles={styles.addButtonText}>Add Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subheading}>RECENT TRIPS</Text>
      <View style={styles.listWrapper}>
        <FlatList data={tripList}
        keyExtractor={item=> item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.tripsList}
        ListEmptyComponent={<EmptyList/>}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Trip Expenses', item)}>
            <View style={styles.tripcard}>
              <Image source={item.banner} style={styles.tripBanner}/>
              <Text style={styles.place}>{item.place}</Text>
              <Text style={styles.country}>{item.country}</Text>
            </View>
          </TouchableOpacity>
        )} />
      </View>
    </Screenwrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
    addButtonText:{
        fontWeight:'700',
        color:COLORS.TEXT
    },
    addTripButton:{
        position:'absolute',
        backgroundColor:COLORS.WHITE,
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:12,
        bottom:25,
        left:50,

    },
  banner: {
    width: "150%",
    height: 300,
    resizeMode: "contain",
  },
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  country:{
    fontSize:10,
    fontWeight:'600',
    marginLeft:6,

  },
  heading: {
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  listWrapper:{
    marginBottom:120,
    height:220,

  },
  place:{
    fontSize:14,
    fontWeight:'600',
    marginLeft:6,

  },
  subheading:{
    fontSize:18,
    fontWeight:'700',
    color:COLORS.TEXT,
    marginBottom:12,
  },
  tripBanner:{
    height:120,
    width:140,
  },
  tripcard:{
    backgroundColor:COLORS.WHITE,
    marginBottom:12,
    padding:8,
    borderRadius:18,

  },
  tripsList:{
    justifyContent:'space-between',
  },

});
