import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 4,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    borderRadius: 6,
    borderColor: '#E8471C',
    padding: 12,
    borderWidth: 2,
  },
  innerContainer: {flexDirection: 'row', alignItems: 'center'},
  textStyle: {
    fontSize: 18,
  },
  flexBox: {flex: 1},
  passwordFlex: {},
  emailFlex: {},
  iconContainer: {flexDirection: 'row'},
  editIconStyle: {marginRight: 8},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ccc',
    backgroundColor: 'white',
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: 'red',
  },
  titleEditUser: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 18,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  noButton: {
    // Add any specific styles for the "No" button if needed
  },
  yesButton: {
    backgroundColor: 'red',
  },
  updateButton: {
    backgroundColor: 'green',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 4,
    marginTop: 4,
    padding: 8,
  },
  textSearchInput: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom: 4,
    margin: 18,
    padding: 8,
  },
});
