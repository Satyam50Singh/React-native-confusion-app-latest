import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen({navigation}: {navigation: any}) {
  const userdetail = {
    userName: 'Satyam Singh',
    age: 24,
    email: 'singh35satyam@gmail.com',
    mobile: '9917847066',
    designation: 'Sr. Mobile App Developer',
  };
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
            onPress={() =>
              navigation.navigate('Personal Details', {userdetail})
            }
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
