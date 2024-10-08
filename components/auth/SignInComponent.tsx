import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

function SignInComponent(props) {
  return (
    <SafeAreaView style={styles.safeareaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headingText}>Welcome Back</Text>
          <Text style={styles.headingSmallText}>
            Enter Your Crediential for Login
          </Text>
          <View style={styles.emptyView} />
          <View style={styles.textInputContainer}>
            <Feather name="user" size={28} />
            <TextInput placeholder="Username" style={styles.textInput} />
          </View>
          <View style={styles.textInputContainer}>
            <Feather name="lock" size={28} />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
            />
          </View>
          <Pressable>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </Pressable>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>
              Don't have an account?{' '}
              <Pressable onPress={() => props.navigation.navigate('register')}>
                <Text style={styles.bottomTextSignUp}>Sign Up</Text>
              </Pressable>
            </Text>
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
    color: 'black',
    fontSize: 42,
    fontWeight: '800',
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
    backgroundColor: '#E8471C',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  forgotPasswordText: {
    marginVertical: '20%',
    fontSize: 16,
    textAlign: 'center',
    color: '#E8471C',
  },
  bottomContainer: {
    marginTop: '6%',
    justifyContent: 'center',
    alignItems: 'bottom',
  },
  bottomText: {
    marginVertical: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomTextSignUp: {
    color: '#E8471C',
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
    backgroundColor: '#E8471C',
    alignItems: 'right',
  },
});

export default SignInComponent;
