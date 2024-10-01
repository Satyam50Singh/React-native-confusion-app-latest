import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import CheckBox from 'react-native-check-box';
//import {AntDesign} from 'react-native-vector-icons/AntDesign';

const AgreeCheckBox = () => {
  return (
    <Text style={styles.agreeText}>
      I agree to the <Text style={styles.linkText}>Terms</Text> &{' '}
      <Text style={styles.linkText}>Conditions</Text>
    </Text>
  );
};

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
      nameError: false,
      designationError: false,
      emailError: false,
      emailValidError: false,
      mobileError: false,
      mobileLengthError: false,
      passwordError: false,
      passwordLengthError: false,
      genderError: false,
      isAgreeError: false,
    };
  }

  handleGenderChange = gender => {
    this.setState(prevState => ({
      isMale: gender === 'male' ? !prevState.isMale : false,
      isFemale: gender === 'female' ? !prevState.isFemale : false,
      isOthers: gender === 'others' ? !prevState.isOthers : false,
    }));
    this.setState({genderError: false});
  };

  toggleAgree = () => {
    this.setState(prevState => ({isAgree: !prevState.isAgree}));
  };

  callRegisterApi = async () => {
    const url = 'http://192.168.1.5:3000/register/';
    try {
      const reqBody = {
        name: this.state.name,
        designation: this.state.designation,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
        isMale: this.state.isMale,
        isFemale: this.state.isFemale,
        isOthers: this.state.isOthers,
        isAgree: this.state.isAgree,
      };

      let response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reqBody),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      result = await response.json();
      if (result) {
        console.info('Registration successful:', result);
        this.setState(prevState => ({isPressed: !prevState.isPressed}));
        setTimeout(() => {
          this.props.navigation.navigate('usersList');
        }, 3000);
      } else {
        console.error('Registration failed: No result returned');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  validate = () => {
    if (this.state.name === '') {
      this.setState({nameError: true});
      return false;
    } else {
      this.setState({nameError: false});
    }
    if (this.state.designation === '') {
      this.setState({designationError: true});
      return false;
    } else {
      this.setState({designationError: false});
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.state.email === '') {
      this.setState({emailError: true});
      return false;
    } else if (!emailRegex.test(this.state.email)) {
      this.setState({emailValidError: true});
      return false;
    } else {
      this.setState({emailValidError: false});
      this.setState({emailError: false});
    }
    if (this.state.mobile === '') {
      this.setState({mobileError: true});
      return false;
    } else if (this.state.mobile.length !== 10) {
      this.setState({mobileLengthError: true});
      return false;
    } else {
      this.setState({mobileLengthError: false});
      this.setState({mobileError: false});
    }
    if (this.state.password === '') {
      this.setState({passwordError: true});
      return false;
    } else if (this.state.password.length !== 6) {
      this.setState({passwordLengthError: true});
      return false;
    } else {
      this.setState({passwordLengthError: false});
      this.setState({passwordError: false});
    }

    if (!this.state.isMale && !this.state.isFemale && !this.state.isOthers) {
      this.setState({genderError: true});
      return false;
    } else {
      this.setState({genderError: false});
    }

    if (!this.state.isAgree) {
      this.setState({isAgreeError: true});
      return false;
    } else {
      this.setState({isAgreeError: false});
    }
    return true;
  };

  handleRegister = () => {
    if (this.validate()) {
      this.callRegisterApi();
    }
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
            onChangeText={text =>
              this.setState({name: text, nameError: text === ''})
            }
          />
          {this.state.nameError ? (
            <Text style={styles.errorText}> Please enter full name.</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder="Designation:"
            value={this.state.designation}
            onChangeText={text =>
              this.setState({
                designation: text,
                designationError: text === '',
              })
            }
          />
          {this.state.designationError ? (
            <Text style={styles.errorText}> Please enter designation.</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder="Email Id:"
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={text =>
              this.setState({email: text, emailError: text === ''})
            }
          />
          {this.state.emailError ? (
            <Text style={styles.errorText}> Please enter email.</Text>
          ) : null}
          {this.state.emailValidError ? (
            <Text style={styles.errorText}> Please enter valid email.</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number:"
            keyboardType="phone-pad"
            value={this.state.mobile}
            maxLength={10}
            onChangeText={text => {
              const numericText = text.replace(/[^0-9]/g, ''); // Allow only numeric input
              this.setState({mobile: numericText, mobileError: text === ''});
            }}
          />
          {this.state.mobileError ? (
            <Text style={styles.errorText}> Please enter mobile number.</Text>
          ) : null}
          {this.state.mobileLengthError ? (
            <Text style={styles.errorText}>
              Mobile number must be 10 digits.
            </Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder="Password:"
            value={this.state.password}
            secureTextEntry
            maxLength={6}
            onChangeText={text =>
              this.setState({password: text, passwordError: text === ''})
            }
          />
          {this.state.passwordError ? (
            <Text style={styles.errorText}> Please enter password.</Text>
          ) : null}
          {this.state.passwordLengthError ? (
            <Text style={styles.errorText}> Password must be 6 digits.</Text>
          ) : null}
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
          {this.state.genderError ? (
            <Text style={styles.errorText}> Please choose gender.</Text>
          ) : null}

          <CheckBox
            style={styles.agreeCheckbox}
            onClick={this.toggleAgree}
            isChecked={this.state.isAgree}
            rightTextView={<AgreeCheckBox />}
          />
          {this.state.isAgreeError ? (
            <Text style={styles.errorText}>
              {' '}
              Please check terms and conditions checkbox.
            </Text>
          ) : null}

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
    marginBottom: 4,
    marginTop: 4,
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
    fontSize: 16,
    marginLeft: 4,
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
  errorText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RegisterComponent;
