import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const CustomList = () => {
  const [posts, setPosts] = useState([]);

  const callApi = async () => {
    const url = 'http://192.168.1.5:3000/todos/';
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let result = await response.json();
      setPosts(result);
    } catch (err) {
      console.error(err.message); // Set error message in state
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Using Custom List</Text>
      <ScrollView style={styles.container}>
        <View>
          {posts.length ? (
            posts.map(item => {
              return (
                <View style={styles.cardView} key={item.id.toString()}>
                  <Text style={styles.cardHeading}>{item.title}</Text>
                  <View>
                    {item.completed ? (
                      <Text style={styles.greenText}>Approved</Text>
                    ) : (
                      <Text style={styles.redText}>Declined</Text>
                    )}
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={styles.loadingText}>Loading</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FlatListComponent = () => {
  const [posts, setPosts] = useState([]);

  const callApi = async () => {
    const url = 'http://192.168.1.5:3000/posts/';
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let result = await response.json();
      setPosts(result);
    } catch (err) {
      console.error(err.message); // Set error message in state
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <View>
      <Text style={styles.heading}>Using Flat List</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.cardView2}>
              <Text style={styles.titleText}>Title: {item.title}</Text>
              <Text style={styles.bodyText}>Description: {item.body}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const UserPostList = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Custom List" component={CustomList} />
      <Tab.Screen name="Flatlist" component={FlatListComponent} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    margin: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  cardView: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: '#purple',
    borderRadius: 12,
    marginVertical: 4,
    flexDirection: 'row',
  },
  cardView2: {
    padding: 10,
    borderColor: '#purple',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 4,
  },
  titleText: {
    fontSize: 18,
    margin: 4,
    fontWeight: '600',
  },
  bodyText: {
    fontSize: 16,
    margin: 4,
    fontWeight: '500',
  },
  cardHeading: {
    fontSize: 18,
    margin: 14,
    textAlign: 'start',
    fontWeight: '600',
    flex: 4,
  },
  greenText: {
    color: 'green',
    fontSize: 18,
    fontWeight: '700',
  },
  redText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
  },
  loadingText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default UserPostList;
