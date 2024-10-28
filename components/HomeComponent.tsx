import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {getData} from './../utils/AsyncStorageUtils';

const Card = ({title, backgroundColor, iconName}) => {
  return (
    <View style={[styles.innerCard, {backgroundColor}]}>
      <View>
        <Text style={styles.headingText}>{title}</Text>
        <View style={styles.cardTextLine} />
      </View>
      <FontAwesome
        name={iconName}
        size={80}
        style={styles.cardIcon}
        color={'white'}
      />
    </View>
  );
};

function HomeScreen({navigation, searchKey}: any) {
  const [isLoad, setIsLoad] = useState(false);
  const [username, setUsername] = useState('');
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const fetchUsername = async () => {
      var name = await getData('username');
      setUsername(name);
    };
    fetchUsername();
  }, [username]);

  const handleClick = cardId => {
    setIsLoad(true);
    var path = '';
    switch (cardId) {
      case 11:
        path = 'View User List';
        break;
      case 22:
        path = 'Buy Products';
        break;
      case 33:
        path = 'My Skills';
        break;
      case 44:
        path = 'My Experience';
        break;
      case 55:
        path = 'Read Posts';
        break;
      case 66:
        path = 'Top Navigation';
        break;
    }

    setTimeout(() => {
      setIsLoad(false);
      navigation.navigate(path);
    }, 400);
  };

  return (
    <View>
      <View style={styles.outerContainer}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={styles.bodyText}
              onLayout={event => {
                const {width} = event.nativeEvent.layout;
                setTextWidth(width); // Store the full text width
              }}>
              Welcome, {username}
            </Text>
            <View style={[styles.nameLine, {width: textWidth * 0.9}]} />
          </View>
        </View>

        <ScrollView>
          <Pressable onPress={() => handleClick(11)}>
            <Card
              title="View Employees"
              backgroundColor="#FFB74D"
              iconName={'users'}
            />
          </Pressable>
          <Pressable onPress={() => handleClick(22)}>
            <Card
              title="Buy Products"
              backgroundColor="#FF6F61"
              iconName={'shopping-cart'}
            />
          </Pressable>

          <Pressable onPress={() => handleClick(33)}>
            <Card
              title="User Skill"
              backgroundColor="#4DB6AC"
              iconName={'lightbulb-o'}
            />
          </Pressable>
          <Pressable onPress={() => handleClick(44)}>
            <Card
              title="User Experience"
              backgroundColor="#64B5F6"
              iconName={'star'}
            />
          </Pressable>
          <Pressable onPress={() => handleClick(55)}>
            <Card
              title="Read Post"
              backgroundColor="#BA68C8"
              iconName={'book'}
            />
          </Pressable>
          <Pressable onPress={() => handleClick(66)}>
            <Card
              title="Navigation"
              backgroundColor="#FF8A65"
              iconName={'arrows'}
            />
          </Pressable>
        </ScrollView>
      </View>
      {isLoad && (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingModal}>
            {Platform.OS === 'android' ? (
              <ActivityIndicator size={40} color="#E8471C" animating={isLoad} />
            ) : (
              <ActivityIndicator
                size="small"
                color="#E8471C"
                animating={isLoad}
              />
            )}
            <Text style={styles.loadingText}> Loading ...</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'times new roman',
    marginBottom: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // This will overlay the loading indicator over the rest of the content
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingModal: {
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: 'grey',
    elevation: 4,
  },
  imageStyle: {width: '100%', height: 240, marginBottom: 26},
  bodyText: {
    fontSize: 24,
    textAlign: 'justify',
    color: 'black',
    marginBottom: 4,
    marginLeft: 6,
    fontWeight: '600',
  },
  btnGroup: {flexDirection: 'row', justifyContent: 'space-around'},
  innerCard: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFB74D', // Light Red for card background
    borderColor: '#ffffff', // Darker Red for border
    borderWidth: 2,
    borderRadius: 12,
    elevation: 5,
    marginBottom: 16,
  },
  cardIcon: {
    opacity: 0.9,
    paddingRight: 16,
  },
  nameLine: {
    height: 4,
    backgroundColor: 'black',
    width: '62%',
    marginLeft: 6,
    marginBottom: 16,
  },
  cardTextLine: {
    height: 4,
    backgroundColor: 'white',
    width: '90%',
  },
  loadingText: {fontSize: 22, color: 'black', marginLeft: 8},
});

export default HomeScreen;
