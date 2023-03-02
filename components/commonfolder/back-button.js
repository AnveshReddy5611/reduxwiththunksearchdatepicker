import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";
import { ICONS } from "../../assets/assets";

import { COLORS } from "../../theme/theme";

const BackButton = props => {
  const {onPress} = props;
  return (
    <View>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={ICONS.BACK_ICON} style={styles.backIcon} />
      </View>
    </TouchableOpacity>
    </View>
    
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backIcon: {
    height: 25,
    width: 25,
  },
  iconWrapper: {
    padding: 6,
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    width: 40,
    height: 40,
  },
});
