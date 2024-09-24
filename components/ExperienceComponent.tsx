import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  View,
  TextInput,
  Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const typesOfShits = [
  {
    id: 1,
    shift: 'Morning Shift',
  },
  {
    id: 2,
    shift: 'Evening Shift',
  },
  {
    id: 3,
    shift: 'Night Shift',
  },
];

function SelectShiftComponent(props) {
  const [selectedRadio, setSelectedRadio] = useState(-1);

  const handlePress = (id, shift) => {
    setSelectedRadio(id);
    // Notify parent to close the modal
    setTimeout(() => {
      props.onClose(shift); // Call the function passed from the parent to close the modal
    }, 500);
  };
  return (
    <Modal transparent={true} visible={props.visible} animinationType="slide">
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 40,
            paddingVertical: 30,
            borderRadius: 12,
            borderWidth: 2,
            elevation: 6,
            borderColor: '#ddd',
          }}>
          {typesOfShits.map((item, index) => {
            return (
              <Pressable
                key={item.id}
                onPress={() => handlePress(item.id, item.shift)}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.selectShiftBox,
                      {
                        textAlign: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 8,
                        justifyContent: 'space-between',
                      },
                    ]}>
                    <Text
                      style={{fontSize: 18, color: 'black', fontWeight: 500}}>
                      {item.shift}
                    </Text>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        marginLeft: 10,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: 'blue',
                      }}>
                      {selectedRadio === item.id ? (
                        <FontAwesome
                          name="check-circle"
                          size={22}
                          color="blue"
                        />
                      ) : null}
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

function ExperienceComponent() {
  const [isYesSelected, setIsYesSelected] = useState(false);
  const [isNoSelected, setIsNoSelected] = useState(false);
  const [isShiftSelected, setIsShiftSelected] = useState(false);
  const [selectedShift, setSelectedShift] = useState('');

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
          <Pressable onPress={() => setIsShiftSelected(true)}>
            <View style={styles.selectBox}>
              {!isShiftSelected ? (
                <Text style={{fontSize: 16, color: 'black'}}>
                  {selectedShift}
                </Text>
              ) : (
                <Text>Select Shift</Text>
              )}
            </View>
          </Pressable>
        </View>
      ) : null}

      <SelectShiftComponent
        visible={isShiftSelected}
        onClose={val => {
          setIsShiftSelected(false);
          setSelectedShift(val);
        }}
      />
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
    paddingHorizontal: 6,
    marginBottom: 8,
    fontSize: 16,
    color: 'black',
  },
  selectBox: {
    alignItems: 'start', // Center vertically
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    padding: 4,
    borderColor: 'purple',
    height: 50,
    marginBottom: 8,
  },

  selectShiftBox: {
    alignItems: 'start', // Center vertically
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    padding: 4,
    width: 180,
    borderColor: 'purple',
    height: 50,
    marginBottom: 8,
  },
});

export default ExperienceComponent;
