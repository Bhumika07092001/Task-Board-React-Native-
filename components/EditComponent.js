import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const EditTaskComponent = ({
  task,
  description,
  assignee,
  priority,
  setDisplayEdit,
}) => {
  const [editedTask, setEditedTask] = useState(task);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedAssignee, setEditedAssignee] = useState(assignee);
  const [editedPriority, setEditedPriority] = useState(priority);

  const handleSave = () => {
    setDisplayEdit(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={{color: 'darkblue', fontSize: 30, textAlign: 'center'}}>
          {' '}
          Edit Task
        </Text>
        <Text style={{color: 'black'}}>Task:</Text>
        <TextInput
          style={styles.textInput}
          value={editedTask}
          onChangeText={text => setEditedTask(text)}
        />
        <Text style={{color: 'black'}}>Description:</Text>
        <TextInput
          style={styles.textInput}
          value={editedDescription}
          onChangeText={text => setEditedDescription(text)}
        />
        <Text style={{color: 'black'}}>Assignee Name:</Text>
        <TextInput
          style={styles.textInput}
          value={editedAssignee}
          onChangeText={text => setEditedAssignee(text)}
        />
        <Text style={{color: 'black'}}>Priority:</Text>
        <TextInput
          style={styles.textInput}
          value={editedPriority}
          onChangeText={text => setEditedPriority(text)}
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default EditTaskComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
});
