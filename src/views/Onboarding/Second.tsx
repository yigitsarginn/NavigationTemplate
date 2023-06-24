import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAppNavigation } from "../../utils/useAppNavigation";

const Second = () => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text>Second</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
