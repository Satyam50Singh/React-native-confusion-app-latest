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
import config from './../../config';

const Tab = createMaterialTopTabNavigator();

const CustomList = () => {
  const [posts, setPosts] = useState([]);

  const callApi = async () => {
    const url = `${config.baseURL}/todos`;
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
    const url = `${config.baseURL}/posts`;
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
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: 'red',
        },
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },

        tabBarActiveTintColor: '#E8471C', // Color of the selected tab icon and text
        tabBarInactiveTintColor: '#888888',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen name="Custom List" component={CustomList} />
      <Tab.Screen name="Flatlist" component={FlatListComponent} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 16,
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
