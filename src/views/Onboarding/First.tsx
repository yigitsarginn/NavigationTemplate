import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAppNavigation } from "../../utils/useAppNavigation";

const First = () => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text>First</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Onboarding", {
            screen: "Second",
          })
        }
      >
        <Text>Go to Second</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
