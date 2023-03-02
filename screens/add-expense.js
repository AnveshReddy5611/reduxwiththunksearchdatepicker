import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Screenwrapper from "../components/commonfolder/screenwrapper";
import BackButton from "../components/commonfolder/back-button";
import AddButton from "../components/commonfolder/add-button";
import { IMAGES } from "../assets/assets";
import { COLORS } from "../theme/theme";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/slice/trips";
const CATEGORIES = ["Shopping", "Food", "Commute", "Entertainment", "Others"];
const AddExpense = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const selectedTrip = route.params;
  const dispatch=useDispatch();
  const handleExpenseAdded = () => {
    const expense={
      id: Date.now(),
      title,
      amount,
      category,
    };
    const data={
      tripId:selectedTrip.id,
      expense,
    };
    dispatch(addExpense(data));
    navigation.navigate("Trip Expenses", selectedTrip);
  };
  return (
    <Screenwrapper>
      <View style={styles.addExpenseWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.bannerContainer}>
            <Image source={IMAGES.ADD_EXPENSES_BANNER} style={styles.banner} />
            <View style={styles.subHeadingContainer}>
              <Text style={styles.subHeading}>ADD NEW EXPENSE</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.label}>For What?</Text>
              <TextInput
                value={title}
                onChangeText={(e) => setTitle(e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>How much?</Text>
              <TextInput
                value={amount}
                onChangeText={(e) => setAmount(Number(e))}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Category?</Text>
              <View style={styles.categoryOptions}>
                {CATEGORIES.map((cat, index) => {
                  return (
                    <TouchableOpacity  key={index}
                      style={{
                        ...styles.category,
                        backgroundColor:
                          category === cat ? COLORS.DARK_ORANGE : COLORS.WHITE,
                      }}
                      onPress={()=>setCategory(cat)}
                    >
                      <Text style={{...styles.categoryLabel, color:category === cat? COLORS.WHITE:'black'}}>{cat}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <AddButton onPress={handleExpenseAdded} />
      </View>
    </Screenwrapper>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  addExpenseWrapper: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  banner: {
    height: 40,
    //change it to see banner
    width: "120%",
  },
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  category:{
    paddingVertical:12,
    paddingHorizontal:24,
    marginRight:6,
    marginBottom:16,
    borderRadius:18
  },
  categoryLabel:{
    fontSize:12,
    fontWeight:'600'
  },
  categoryOptions:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:12
  },
  form:{
    marginVertical:24, 
    marginBottom:0,   
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
  label:{
    fontSize:20,
    fontWeight:'600',
    colors:COLORS.TEXT,

  },
  subHeading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  subHeadingContainer: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 12,
    width: "70%",
    backgroundColor: COLORS.WHITE,
    borderRadius: 18,
  },
});
///11:19(6)
