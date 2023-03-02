import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Screenwrapper from "../components/commonfolder/screenwrapper";
import BackButton from "../components/commonfolder/back-button";
import { COLORS } from "../theme/theme";
import ExpenseCard from "../trips/expense-card";
import EmptyExpenses from "../trips/emptyexpenses";
import { useSelector } from "react-redux";
// const MOCKDATA=[
//   {
//     id:1,
//     title:"Bought Apple",
//     category:'Food',
//     amount:244,

//   },
//   {
//     id:2,
//     title:"WaterRides",
//     category:'Entertainment',
//     amount:2440,

//   },
//   {
//     id:3,
//     title:"Bought Apple",
//     category:'Commute',
//     amount:244,

//   },
//   {
//     id:4,
//     title:"Bought Apple",
//     category:'Shopping',
//     amount:244,

//   },
//   {
//     id:5,
//     title:"Bought Apple",
//     category:'Others',https://www.youtube.com/watch?v=AkEnidfZnCU
//     amount:244,

//   },
// ]
const TripExpenses = ({ navigation, route }) => {
  const selectedTrip = route.params;
  const expenses=useSelector(state=>{
    const trips=state.trips.trips;
    const expensesToBeShown= trips.filter(trip=>trip.id===selectedTrip.id);
    if(expensesToBeShown.length>0){
     // console.log(expensesToBeShown.length,"here are the expensesToBeShown")
      return expensesToBeShown[0].expenses;
    }
    return []
  })
  console.log(expenses,"expenses 1223")
  return (
    <Screenwrapper>
      <View >
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.bannerContainer}>
          <Image source={selectedTrip.banner} style={styles.banner} />
          <View style={styles.placeContainer}>
            <Text style={styles.place}>{selectedTrip.place}</Text>
          </View>
        </View>
        <View style={styles.txtbtn}>
          <Text style={styles.subHeading}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Add Expense", selectedTrip)}
          >
            <Text style={styles.buttonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
          data={expenses}
          renderItem={({item})=><ExpenseCard expense={item}/>}
          showsVerticalScrollIndicator={false}
          keyExtractor={item=>item.id}
          ListEmptyComponent={<EmptyExpenses/>}
          />
        </View>
      </View>
    </Screenwrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({
  banner: {
    height: 240,
    width: "125%",
    resizeMode: "cover",
  },
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonText: {
    color: COLORS.DARK_ORANGE,
    fontWeight: "700",
  },
  place: {
    textAlign: "center",
    color: COLORS.DARK_ORANGE,
    fontSize: 20,
    fontWeight: "700",
  },
  placeContainer: {
    backgroundColor: COLORS.WHITE,
    minWidth: "50%",
    paddingVertical: 12,
    borderRadius: 18,
    position: "absolute",
    bottom: 10,
  },
  txtbtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 24,
  },
  subHeading: {
    fontWeight: "600",
    fontSize: 18,
    color: COLORS.TEXT,
  },
});
