import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {userSignUp} from './../redux/action.ts';
import {storeData} from './../../utils/AsyncStorageUtils';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

function RegisterComponent(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const dispatch = useDispatch();
  const userSignUpResponse = useSelector(
    state => state.user.successResponse || state.user.errorResponse,
  );

  useEffect(() => {
    console.info('isRegistering : ', isRegistering);
    if (isRegistering === true) {
      try {
        if (userSignUpResponse?.status === 200) {
          console.warn('Success message : ', userSignUpResponse.message);
          const data = userSignUpResponse.data;
          storeData('token', data.email + '$$' + data.password);
          storeData('username', data.username);
          storeData('email', data.email);
          clearFields();
          props.navigation.navigate('dashboard');
        } else if (userSignUpResponse?.status === 400) {
          console.warn('Error message : ', userSignUpResponse.message);
        }
        setIsRegistering(false);
        dispatch(resetUserSignUpResponse());
      } catch (error) {
        console.info('error : ', error);
      }
    }
  }, [userSignUpResponse, props.navigation, dispatch]);

  const clearFields = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  // dispatch signup action with payload
  const handleSignUp = () => {
    const requestBody = {
      username,
      email,
      password,
      confirmPassword,
    };
    console.info('requestBody: ', requestBody);
    setIsRegistering(true);
    dispatch(userSignUp(requestBody));
  };

  return (
    <SafeAreaView style={styles.safeareaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headingText}>Sign Up</Text>
          <Text style={styles.headingSmallText}>Create Your Account</Text>
          <View style={styles.emptyView} />
          <View style={styles.textInputContainer}>
            <Feather name="user" size={28} />
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              inputMode="text"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View style={styles.textInputContainer}>
            <MaterialCommunityIcons name="email-outline" size={28} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              maxLength={40}
              inputMode="email"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Feather name="lock" size={28} />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Feather name="lock" size={28} />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              style={styles.textInput}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
          <Pressable onPress={handleSignUp}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Sign Up</Text>
            </View>
          </Pressable>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>Don't have an account?</Text>
              <Pressable
                style={styles.loginText}
                onPress={() => props.navigation.navigate('signIn')}>
                <Text style={styles.bottomTextSignUp}> Login</Text>
              </Pressable>
            </View>
            <View style={styles.bottomLineContainer}>
              <View style={styles.bottomLineInner} />
              <View style={styles.bottomLineInner2} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    margin: 28,
    justifyContent: 'center',
    flex: 1,
  },
  headingText: {
    fontSize: 42,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  headingSmallText: {
    fontSize: 16,
    textAlign: 'center',
  },
  textInputContainer: {
    marginVertical: 8,
    elevation: 4,
    flexDirection: 'row',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    textAlign: 'start',
  },
  emptyView: {
    height: 54,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  btnContainer: {
    fontSize: 18,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  forgotPasswordText: {
    marginVertical: '20%',
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'bottom',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    marginVertical: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomTextSignUp: {
    color: 'red',
    fontWeight: '600',
  },
  bottomLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  bottomLineInner: {
    height: 4,
    backgroundColor: '#ccc',
    flex: 2.5,
    justifyContent: 'center',
  },
  bottomLineInner2: {
    height: 4,
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'right',
  },
  loginText: {marginHorizontal: 4},
});

export default RegisterComponent;
