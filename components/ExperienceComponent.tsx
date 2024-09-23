import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ExperienceComponent() {
  const [isYesSelected, setIsYesSelected] = useState(false);
  const [isNoSelected, setIsNoSelected] = useState(false);

  return (
    <View style={{flex: 1}}>
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

      <Text style={{padding: 16, fontSize: 20, color: 'black'}}>
        Are you a corporate Customer ?
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 16}}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setIsYesSelected(!isYesSelected)}>
            <View
              style={{
                borderRadius: 12,
                borderColor: 'grey',
                borderWidth: 2,
                paddingVertical: 16,
                alignItems: 'center',
                paddingHorizontal: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  // padding: 2,
                  borderColor: 'black',
                  borderWidth: 2,
                  width: 22,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 22,
                  borderRadius: 25,
                  // backgroundColor: 'red',
                  marginRight: 8,
                }}>
                {isYesSelected ? (
                  <View
                    style={{
                      width: 11,
                      height: 11,
                      backgroundColor: 'black',
                      borderRadius: 25,
                    }}></View>
                ) : null}
              </View>
              <Text style={{fontSize: 18, color: 'black'}}>Yes</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{padding: 16}}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setIsNoSelected(!isNoSelected)}>
            <View
              style={{
                borderRadius: 12,
                borderColor: 'grey',
                borderWidth: 2,
                paddingVertical: 16,
                alignItems: 'center',
                paddingHorizontal: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  // padding: 2,
                  borderColor: 'black',
                  borderWidth: 2,
                  width: 22,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 22,
                  borderRadius: 25,
                  // backgroundColor: 'red',
                  marginRight: 8,
                }}>
                {isNoSelected ? (
                  <View
                    style={{
                      width: 11,
                      height: 11,
                      backgroundColor: 'black',
                      borderRadius: 25,
                    }}></View>
                ) : null}
              </View>
              <Text style={{fontSize: 18, color: 'black'}}>No</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {isNoSelected ? (
        <View style={{paddingHorizontal: 16, paddingVertical: 3}}>
          <TextInput
            style={styles.textInput}
            placeholder={'Select Account Type'}
          />
        </View>
      ) : null}
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
  textInput: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'purple',
    marginBottom: 8,
  },
});

export default ExperienceComponent;
