import { StyleSheet, Text, View,ScrollView, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/theme'

const Screenwrapper = ({children}) => {
  return (
    <View style={styles.screenWrapper}>
      {children}
    </View>
  )
}

export default Screenwrapper

const styles = StyleSheet.create({
    screenWrapper:{
        paddingTop:Platform.OS=== 'ios' ?30:30,        
        paddingHorizontal:16,
        paddingBottom:32,
        backgroundColor:COLORS.BACKGROUND,
        minHeight:'100%',

    }
})