import React, {useState} from 'react';
import EditConponent from './components/EditComponent';
import CreateTask from './components/CreateTask';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pending = [
  {
    id: '1',
    title: 'Task1',
    tag: '@praveen',
    desc: 'Create a mobile application that allows users to create and manage their to-do lists. Users should be able to add new tasks with titles, descriptions, and due dates.',
  },
  {
    id: '2',
    title: 'Task2',
    tag: '@praveen',
    desc: 'this is pending task',
  },
  {
    id: '3',
    title: 'task4',
    tag: '@praveen',
    desc: 'this is pending task',
  },
  {
    id: '4',
    title: 'task5',
    tag: '@praveen',
    desc: 'this is pending task',
  },
  {
    id: '5',
    title: 'task6',
    tag: '@praveen',
    desc: 'this is pending task',
  },
];

const filterList = [
  {
    id: '1',
    taskname: 'Assignee name',
  },
  {
    id: '2',
    taskname: 'Priority',
  },
  {
    id: '3',
    taskname: 'DD-MM-YYYY',
  },
];

function App() {
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayCreateTask, setCreateTask] = useState(false);

  const renderItem = ({item}) => (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{item.taskname}</Text>
    </View>
  );
  const renderItem_2 = ({item}) => (
    <View style={styles.filterItem}>
      <View
        style={{
          width: 18,
          height: 15,
          color: '#fff',
          backgroundColor: '#265899',
          marginTop: 10,
          marginLeft: 200,
        }}>
        <Text style={{fontSize: 10, textAlign: 'center'}}>P0</Text>
      </View>
      <Text style={styles.filterItem2}>{item.title}</Text>
      <Text style={styles.filterItem3}>{item.desc}</Text>
      <View
        style={{
          width: 18,
          height: 15,
          color: '#fff',
          backgroundColor: '#265899',
          marginTop: 10,
          marginLeft: 200,
        }}>
        <Text
          onPress={() => {
            setDisplayEdit(true);
          }}
          style={{fontSize: 10, textAlign: 'center'}}>
          &#8230;
        </Text>
      </View>
      <View>
        <Text style={{color: 'black', margin: 7, fontWeight: 'bold'}}>
          {item.tag}
        </Text>
      </View>
      <Button color="#265899" title="Assign"></Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <View
          style={{
            marginLeft: 300,
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: 35,
            }}>
            &#128100;
          </Text>
        </View>
        <Text style={styles.headText}>Task Board</Text>
      </View>
      <View
        style={{
          borderWidth: 4,
          borderColor: 'white',
          margin: 15,
          borderRadius: 10,
          height: 680,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            paddingLeft: 10,
            backgroundColor: '#f2e1f1',
          }}>
          Filter by:
        </Text>
        <FlatList
          style={{margin: 3}}
          horizontal
          data={filterList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
        <ScrollView horizontal style={styles.flatListContainer}>
          <View style={styles.block}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                backgroundColor: 'grey',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                textAlign: 'center',
                padding: 10,
              }}>
              Pending
            </Text>
            <FlatList
              data={Pending}
              renderItem={renderItem_2}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.block}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                backgroundColor: '#de8d0b',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                textAlign: 'center',
                padding: 10,
              }}>
              In-progress
            </Text>
            <FlatList
              data={Pending}
              renderItem={renderItem_2}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.block}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                backgroundColor: 'green',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                textAlign: 'center',
                padding: 10,
              }}>
              Completed
            </Text>
            <FlatList
              data={Pending}
              renderItem={renderItem_2}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.block}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                backgroundColor: '#032654',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                textAlign: 'center',
                padding: 10,
              }}>
              Deployed
            </Text>
            <FlatList
              data={Pending}
              renderItem={renderItem_2}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.block}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                backgroundColor: '#e0776e',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                textAlign: 'center',
                padding: 10,
              }}>
              Deffered
            </Text>
            <FlatList
              data={Pending}
              renderItem={renderItem_2}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: 200,
            marginLeft: 50,
            marginBottom: 10,
          }}
          onPress={() => setCreateTask(true)}>
          <Button color="#265899" title="Add new task" />
        </View>
      </View>
      {displayEdit ? <EditConponent setDisplayEdit={setDisplayEdit} /> : null}
      {displayCreateTask ? <CreateTask setCreateTask={setCreateTask} /> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 5,
    height: 45,
    margin: 2,
  },
  buttonText: {
    color: '#969693',
    fontWeight: 'bold',
  },
  taskCategory: {
    fontSize: 30,
    color: 'black',
  },
  flatListContainer: {},
  container: {
    backgroundColor: '#f2e1f1',
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
  },
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  filterButtons: {
    backgroundColor: '#f2e1f1',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterItem: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#f7f7f0',
  },
  filterItem2: {
    fontSize: 20,
    color: '#827d82',
    padding: 7,
    borderBottomWidth: 1,
  },
  filterItem3: {
    fontSize: 12,
    color: 'black',
    padding: 7,
  },
  item: {
    color: 'black',
    height: 200,
  },
  block: {
    width: 250,
    borderBlockColor: 'black',
    height: 500,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

export default App;
