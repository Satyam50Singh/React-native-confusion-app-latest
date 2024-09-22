import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

export default function SectionListComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => console.warn('Button Clicked')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Work Experience</Text>
          <MaterialIcons
            name="read-more"
            size={30}
            color="white"
            style={{paddingLeft: 10}}
          />
        </View>
      </TouchableHighlight>

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
    fontSize: 18,
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
  buttonContainer: {
    alignItems: 'center', // Center vertically
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 18,
    borderColor: '#ddd',
    elevation: 4,
    marginTop: 12,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
});
