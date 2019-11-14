import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoal(newGoal) {
    setAllGoals(allGoals => [
      ...allGoals,
      { id: Math.random().toString(), value: newGoal }
    ]);
  }

  function removeGoal(goalId) {
    const newGoals = allGoals.filter(goal => {
      return goal.id !== goalId;
    });
    setAllGoals(newGoals);
  }

  return (
    <View style={{ paddingTop: 40 }}>
      <Button
        icon=""
        title="add new goal"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      ></Button>
      <GoalInput
        addGoal={addGoal}
        visible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals}
        renderItem={itemData => {
          return (
            <GoalItem
              itemData={itemData}
              removeGoal={removeGoal}
              id={itemData.item.id}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view_one: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  input_one: {
    borderBottomColor: "black",
    marginRight: 5,
    borderBottomWidth: 1,
    flex: 3
  },
  button_one: {
    flex: 1
  },
  one_goal: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginRight: 5,
    flex: 3
  },
  delete_btn: {
    backgroundColor: "red",
    flex: 1
  },
  goal_list: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  goal_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4%",
    margin: 5,
    backgroundColor: "#BADA55"
  }
});
