import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

export default SearchBar = props => {
  const [searchText, setSearchText] = useState('');

  const filterUsers = async text => {
    console.info('text.length', text.length);
    console.info(props.data);
    setSearchText(text);
    if (text.length > 2) {
      const filteredData = props.data.filter(item => {
        return item.name.toLowerCase().includes(text.toLowerCase());
      });
      props.onSearch(filteredData);
    } else {
      props.onSearch(props.data);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textSearchInput}
        placeholder="Search User"
        value={searchText} // Set the value from state
        onChangeText={text => {
          filterUsers(text);
        }}
      />
    </View>
  );
};
