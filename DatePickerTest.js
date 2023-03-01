import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import DatePicker from 'react-native-datepicker'
const DatePickerTest = () => {
    const[Date, setDate]=useState({date:"2016-05-15"})
  return (
    <View>
      <Text>DatePickerTest</Text>

      <DatePicker
        style={{width: 200}}
        date={Date.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date1) => {setDate({date: date1})}}
      />
    </View>
  )
}

export default DatePickerTest

const styles = StyleSheet.create({})