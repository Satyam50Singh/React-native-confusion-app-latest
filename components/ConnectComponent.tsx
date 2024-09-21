import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';

class ConnectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      designation: '',
      email: '',
      mobile: '',
      isMale: false,
      isOthers: false,
      isFemale: false,
      isAgree: false,
      isPressed: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={{justifyContent: 'center', flex: 0.8}}>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 16,
            marginTop: 16,
            color: 'black',
            fontWeight: 500,
          }}>
          Please fill out below form to connect with me.
        </Text>
        {this.state.isPressed ? (
          <Text>{JSON.stringify(this.state, null, 2)}</Text>
        ) : null}

        <View style={{paddingHorizontal: 16, marginTop: 12}}>
          <TextInput
            style={styles.textInput}
            placeholder={'Your Name'}
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Your Designation'}
            value={this.state.designation}
            onChangeText={text => this.setState({designation: text})}
          />

          <TextInput
            style={styles.textInput}
            placeholder={'Your Email'}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Your Mobile Number'}
            value={this.state.mobile}
            onChangeText={text => this.setState({mobile: text})}
          />

          <View style={styles.checkboxContainer}>
            <Text style={{flex: 0.2, fontSize: 16, fontWeight: 600}}>
              Gender:{' '}
            </Text>
            <CheckBox
              style={{flex: 0.22, padding: 10}}
              onClick={() => {
                this.setState({
                  isMale: !this.state.isMale,
                });
              }}
              isChecked={this.state.isMale}
              rightText="Male"
            />
            <CheckBox
              style={{flex: 0.28, padding: 10}}
              onClick={() => {
                this.setState({
                  isFemale: !this.state.isFemale,
                });
              }}
              isChecked={this.state.isFemale}
              rightText="Female"
            />
            <CheckBox
              style={{flex: 0.25, padding: 10}}
              onClick={() => {
                this.setState({
                  isOthers: !this.state.isOthers,
                });
              }}
              isChecked={this.state.isOthers}
              rightText="Others"
            />
          </View>
          <CheckBox
            style={{paddingVertical: 10}}
            onClick={() => {
              this.setState({
                isAgree: !this.state.isAgree,
              });
            }}
            isChecked={this.state.isAgree}
            rightText={
              <Text style={{color: 'black'}}>
                I agree to the{' '}
                <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
                  Terms
                </Text>{' '}
                &{' '}
                <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
                  Conditions
                </Text>
              </Text>
            }
          />

          <Button
            title="Send"
            icon={
              <Icon
                name="send"
                size={24}
                color="white"
                style={{marginLeft: 10, fontSize: 22}}
              />
            }
            iconRight
            buttonStyle={{
              marginVertical: 18,
              backgroundColor: 'green',
            }}
            onPress={() => this.setState({isPressed: !this.state.isPressed})}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'purple',
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default ConnectComponent;
