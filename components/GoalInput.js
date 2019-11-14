import React, { useState } from "react"
import { View, Button, TextInput, StyleSheet, Modal } from "react-native"

export default function GoalInput({ addGoal, visible, setModalVisible }) {
  const [newGoal, setNewGoal] = useState("")
  function newGoalChange(text) {
    setNewGoal(text)
  }
  function addGoalHandler() {
    if (newGoal.length === 0) return
    addGoal(newGoal)
    setModalVisible(false)
    setNewGoal("")
  }

  function cancelHandler() {
    setModalVisible(false)
    setNewGoal("")
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.view_one}>
        <TextInput
          style={styles.input_one}
          placeholder="what's the goal?"
          onChangeText={newGoalChange}
          value={newGoal}
        ></TextInput>
        <View style={styles.view_two}>
          <View style={styles.buttons}>
            <Button
              style={styles.button_one}
              title="Add goal"
              onPress={() => {
                addGoalHandler()
              }}
              color="green"
            ></Button>
          </View>
          <View style={styles.buttons}>
            <Button
              style={styles.button_one}
              title="cancel"
              onPress={() => {
                cancelHandler()
              }}
              color="red"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  view_one: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input_one: {
    borderBottomColor: "black",
    marginBottom: 5,
    borderBottomWidth: 1,
    width: "70%"
  },
  button_one: {
    margin: "5%"
  },
  view_two: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "60%"
  },
  buttons: {
    width: "45%"
  }
})
