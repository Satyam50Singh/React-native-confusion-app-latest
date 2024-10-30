import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getData} from './../utils/AsyncStorageUtils';

const skills = [
  {
    id: 1,
    name: 'Web Development',
    data: ['HTML5', 'CSS3', 'JS'],
  },
  {
    id: 2,
    name: 'Android Development',
    data: ['Java', 'Kotlin', 'XML', 'Android Studio'],
  },
  {
    id: 3,
    name: 'Backend Development',
    data: ['PHP', '.NET', 'NodeJs', 'MongoDB', 'SQL'],
  },
];

export default function SectionListComponent({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const [username, setUsername] = useState('');
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const fetchUsername = async () => {
      var name = await getData('username');
      setUsername(name);
    };
    fetchUsername();
  }, [username]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={styles.bodyText}
            onLayout={event => {
              const {width} = event.nativeEvent.layout;
              setTextWidth(width);
            }}>
            {username}'s Skills
          </Text>
          <View style={[styles.nameLine, {width: textWidth * 0.9}]} />
        </View>
      </View>

      <SectionList
        sections={skills}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Icon
              name="circle-thin" // Ensure this is a valid name for the specified type
              color="#517fa4"
              size={16}
              onPress={() => console.log('Icon pressed!')}
            />
            <Text style={styles.innerText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.paragraph}>{name}</Text>
        )}
      />
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('User Experience')}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Work Experience</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerText: {
    marginVertical: 6,
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 26,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  btnContainer: {
    alignItems: 'center', // Center vertically
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 18,
    backgroundColor: '#E8471C',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  bodyText: {
    marginTop: 8,
    fontSize: 24,
    textAlign: 'justify',
    color: 'black',
    marginBottom: 4,
    marginLeft: 6,
    fontWeight: '600',
  },
  nameLine: {
    height: 4,
    backgroundColor: 'black',
    width: '62%',
    marginLeft: 6,
    marginBottom: 16,
  },
});
