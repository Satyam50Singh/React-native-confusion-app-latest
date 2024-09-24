import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState, useEffect} from 'react';

function HomeScreen({navigation}: {navigation: any}) {
  const [isLoad, setIsLoad] = useState(false);
  const userdetail = {
    userName: 'Satyam Singh',
    age: 24,
    email: 'singh35satyam@gmail.com',
    mobile: '9917847066',
    designation: 'Sr. Mobile App Developer',
  };

  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  });

  return (
    <>
      <View style={styles.outerContainer}>
        <Text style={styles.headingText}>Home</Text>
        <Image
          source={require('.././assets/images/banner.jpg')}
          style={styles.imageStyle}
        />
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          enim eaque earum amet ex deleniti magni repudiandae porro voluptatem
          obcaecati rerum labore nulla eos aspernatur ipsam, reiciendis numquam
          voluptatum pariatur.
        </Text>

        <View style={styles.btnGroup}>
          <Button
            icon={
              <Icon
                name="user-circle-o"
                size={20}
                color={'white'}
                style={{marginRight: 10}}
              />
            }
            title="Personal Details"
            buttonStyle={{backgroundColor: 'purple'}}
            onPress={() => {
              setIsLoad(true);
              setTimeout(() => {
                setIsLoad(false);
                navigation.navigate('Personal Details', {userdetail});
              }, 3000);
            }}
          />

          <Button
            icon={
              <MaterialIcons
                name="read-more"
                size={26}
                color={'white'}
                style={{marginRight: 10}}
              />
            }
            title="See my skills"
            buttonStyle={{backgroundColor: 'grey'}}
            onPress={() => navigation.navigate('Skill Set')}
          />
        </View>
        <Button
          icon={
            <EntypoIcon
              name="mail"
              size={24}
              color={'white'}
              style={{marginLeft: 10}}
            />
          }
          title="Connect"
          iconRight
          buttonStyle={{backgroundColor: 'blue', margin: 22}}
          onPress={() => navigation.navigate('Connect')}
        />
      </View>
      {isLoad && (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingModal}>
            {Platform.OS === 'android' ? (
              <ActivityIndicator size={40} color="black" animating={isLoad} />
            ) : (
              <ActivityIndicator
                size={small}
                color="black"
                animating={isLoad}
              />
            )}
            <Text style={{fontSize: 22, color: 'black'}}> Loading ...</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '500',
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
    marginBottom: 16,
    textAlign: 'justify',
    color: 'black',
    fontFamily: 'cursive',
  },
  btnGroup: {flexDirection: 'row', justifyContent: 'space-around'},
});

export default HomeScreen;
