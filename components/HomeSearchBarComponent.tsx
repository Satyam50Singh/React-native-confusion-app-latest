import React, {useState} from 'react';
import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const RightHeader = props => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleTextChange = text => {
    props.onWrite(text);
  };

  return (
    <View style={styles.container}>
      {searchVisible ? (
        <TextInput
          onChangeText={text => handleTextChange(text)}
          placeholder="Search . . ."
          placeholderTextColor="white"
          style={styles.searchTextInput}
        />
      ) : null}
      <Pressable
        onPress={() => {
          setSearchVisible(!searchVisible);
          handleTextChange('');
        }}
        style={styles.iconMargin}>
        <FontAwesome name="search" size={20} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  iconMargin: {marginRight: 16},
  searchTextInput: {width: 120, color: 'white', fontSize: 18},
});
export default RightHeader;
