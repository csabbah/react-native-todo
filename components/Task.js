import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (prop) => {
  return (
    <View>
      <Text>{prop.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Task;
