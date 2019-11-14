import React from "React"
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native"

export default function GoalItem({ itemData, removeGoal, id }) {
  function deleteGoal() {}

  return (
    <TouchableHighlight
      onPress={() => {
        removeGoal(id)
      }}
    >
      <View style={styles.goal_view}>
        <Text style={styles.one_goal}>{itemData.item.value}</Text>
        <Button
          title="del goal"
          style={styles.delete_btn}
          onPress={() => {
            removeGoal(id)
          }}
          color="red"
        ></Button>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  one_goal: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
    marginRight: 5,
    flex: 3,
    textAlign: "center"
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
    margin: 5
  }
})

// view only takes the space the children require
