import { StyleSheet, Text,ScrollView, View,FlatList } from 'react-native'
import React from 'react'

const MOCKDATA=[
      {
        id:1,
        title:"Bought Apple",
        category:'Food',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
    
      },
      {
        id:2,
        title:"WaterRides",
        category:'Entertainment',
        amount:2440,
    
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:4,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:5,
        title:"Bought Apple",
        category:'Others',
        amount:244,
        emojis:[
            '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
            '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
            '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
            '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
            '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
            '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
            '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
            '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
            '✅', '❎', '💯',
          ]
      
      },
      {
        id:2,
            title:"WaterRides",
        category:'Entertainment',
        amount:2440,
       
      },
      {
        id:3,
        title:"Bought Apple",
        category:'Commute',
        amount:244,
    
      },
      {
        id:41,
        title:"Bought Apple",
        category:'Shopping',
        amount:244,
    
      },
      {
        id:15,
        title:"Bought Apple",
        category:'Others',
        amount:844,
    
      },
    ]

const FlatTest = () => {
  return (
    <ScrollView>
      <Text>FlatTest</Text>
      <FlatList
          data={MOCKDATA}
          renderItem={({item})=><Text>{item.amount}</Text>}
          showsVerticalScrollIndicator={false}
          keyExtractor={item=>item.id}
          />          
    </ScrollView> 
  )
}

export default FlatTest

const styles = StyleSheet.create({})