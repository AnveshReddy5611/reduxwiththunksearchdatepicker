import React, {useState} from 'react';
import {View, Text,Button, Platform, SafeAreaView , StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function DateTimepicker1() {
   const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
   const currentDate = selectedDate || mydate;
   setDate(currentDate);
   setShow(false);

   console.log(currentDate,"currentdate")
};
const showMode = (currentMode) => {
   setShow(true);
   setMode(currentMode);
};
const displayDatepicker = () => {
   showMode('time');
};
return (
   <SafeAreaView style={styles.container}>
    <Text>{JSON.stringify(mydate)}</Text>
      <View>
         <Button onPress={displayDatepicker} title="Show date picker!" />
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )}
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
});