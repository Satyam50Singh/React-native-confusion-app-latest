import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ExperienceComponent() {
  return (
    <View style={{padding: 16, flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => console.warn('Button Clicked')}
        activeOpacity={0.7}>
        <View style={styles.buttonContainer}>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={24}
            color="white"
            style={{padding: 4}}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          margin: 16,
          fontWeight: 600,
        }}>
        Select Type
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center', // Center vertically
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 12,
    borderColor: '#ddd',
    elevation: 4,
    marginTop: 12,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
});

export default ExperienceComponent;
