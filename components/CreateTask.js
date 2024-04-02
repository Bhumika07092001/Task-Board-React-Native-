import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const CreateTaskComponent = ({onCreate, setCreateTask}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');

  const handleCreateTask = () => {
    setCreateTask(false);
    const newTask = {
      title,
      description,
      team,
      assignee,
      priority,
    };

    onCreate(newTask);

    setTitle('');
    setDescription('');
    setTeam('');
    setAssignee('');
    setPriority('');
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'gray', marginBottom: 10}}
        value={title}
        onChangeText={setTitle}
      />
      <Text>Description:</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'gray', marginBottom: 10}}
        value={description}
        onChangeText={setDescription}
      />
      <Text>Team:</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'gray', marginBottom: 10}}
        value={team}
        onChangeText={setTeam}
      />
      <Text>Assignee:</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'gray', marginBottom: 10}}
        value={assignee}
        onChangeText={setAssignee}
      />
      <Text>Priority:</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'gray', marginBottom: 10}}
        value={priority}
        onChangeText={setPriority}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default CreateTaskComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  createButton: {
    marginTop: 10,
  },
});
