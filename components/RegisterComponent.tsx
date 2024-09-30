import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import CheckBox from 'react-native-check-box';
//import {AntDesign} from 'react-native-vector-icons/AntDesign';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      designation: '',
      email: '',
      mobile: '',
      password: '',
      isMale: false,
      isFemale: false,
      isOthers: false,
      isAgree: false,
      isPressed: false,
    };
  }

  handleGenderChange = gender => {
    this.setState(prevState => ({
      isMale: gender === 'male' ? !prevState.isMale : false,
      isFemale: gender === 'female' ? !prevState.isFemale : false,
      isOthers: gender === 'others' ? !prevState.isOthers : false,
    }));
  };

  toggleAgree = () => {
    this.setState(prevState => ({isAgree: !prevState.isAgree}));
  };

  callRegisterApi = async () => {
    const url = 'http://192.168.1.6:3000/register/';
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      result = await response.json();
      if (result) {
        console.info('Registration successful:', result);
        this.setState(prevState => ({isPressed: !prevState.isPressed}));
      } else {
        console.error('Registration failed: No result returned');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  handleRegister = () => {
    this.callRegisterApi();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>
          Please fill out the form below to create your account.
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name:"
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Designation:"
            value={this.state.designation}
            onChangeText={text => this.setState({designation: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Id:"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number:"
            value={this.state.mobile}
            onChangeText={text => this.setState({mobile: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password:"
            value={this.state.password}
            secureTextEntry
            onChangeText={text => this.setState({password: text})}
          />
          <View style={styles.checkboxContainer}>
            <Text style={styles.genderLabel}>Gender:</Text>
            <CheckBox
              style={styles.checkbox}
              onClick={() => this.handleGenderChange('male')}
              isChecked={this.state.isMale}
              rightText="Male"
            />
            <CheckBox
              style={styles.checkbox}
              onClick={() => this.handleGenderChange('female')}
              isChecked={this.state.isFemale}
              rightText="Female"
            />
            <CheckBox
              style={styles.checkbox}
              onClick={() => this.handleGenderChange('others')}
              isChecked={this.state.isOthers}
              rightText="Others"
            />
          </View>

          <CheckBox
            style={styles.agreeCheckbox}
            onClick={this.toggleAgree}
            isChecked={this.state.isAgree}
            rightText={
              <Text style={styles.agreeText}>
                I agree to the <Text style={styles.linkText}>Terms</Text> &{' '}
                <Text style={styles.linkText}>Conditions</Text>
              </Text>
            }
          />

          <Button
            title="Register"
            // icon={
            //   <AntDesign
            //     name="form"
            //     size={24}
            //     color="white"
            //     style={styles.iconStyle}
            //   />
            // }
            iconRight
            buttonStyle={styles.registerButton}
            onPress={this.handleRegister}
          />
        </View>
        {this.state.isPressed && (
          <Text style={styles.successMsg}>User Registered Successfully!</Text>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  heading: {
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    color: 'black',
    fontWeight: '500',
  },
  successMsg: {
    fontSize: 20,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    color: 'green',
    fontWeight: '600',
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'purple',
    marginBottom: 8,
    padding: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderLabel: {
    flex: 0.2,
    fontSize: 16,
    fontWeight: '600',
  },
  checkbox: {
    flex: 0.25,
    padding: 10,
  },
  agreeCheckbox: {
    paddingVertical: 10,
  },
  agreeText: {
    color: 'black',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  registerButton: {
    marginVertical: 18,
    backgroundColor: 'green',
  },
  iconStyle: {
    marginLeft: 10,
    fontSize: 22,
  },
});

export default RegisterComponent;
