import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';

const UserPostList = () => {
  const [posts, setPosts] = useState([]);

  const callApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    let result = await fetch(url);
    result = await result.json();
    setPosts(result);
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
                <View style={styles.cardView} key={item.id}>
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
