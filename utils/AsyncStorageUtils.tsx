import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error saving string data:', e);
  }
};

export const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user_request', jsonValue);
  } catch (e) {
    console.error('Error saving object data:', e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Error reading string data:', e);
  }
};

export const getObjectData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const result = jsonValue != null ? JSON.parse(jsonValue) : null;
    return result;
  } catch (e) {
    // error reading value
    console.error('Error reading object data:', e);
  }
};
