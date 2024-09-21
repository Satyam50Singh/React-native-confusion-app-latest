import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function DetailsScreen({ route, navigation }: { route: any, navigation: any }) {
    const { userName, age, email, mobile, designation } = route.params;
    return (
        <View style={{ flex: .3, justifyContent: 'center', padding: 24 }}>
            <Text style={{ fontWeight: '800', fontSize: 20 }}>Hi, {userName}</Text>

            <View style={{
                borderWidth: 1,
                borderColor: 'purple',
                width: '50%', // full width
                height: 0, // height of 0 to create a line
                backgroundColor: 'purple', // color of the line
                marginVertical: 6, // spacing above and below
            }} />
            <Text style={{ fontWeight: '400', fontSize: 18 }}><Text style={{ fontWeight: 600 }}>Designation:</Text> {designation}</Text>
            <Text style={{ fontWeight: '400', fontSize: 18 }}><Text style={{ fontWeight: 600 }}>Age: </Text> {JSON.stringify(age)}</Text>
            <Text style={{ fontWeight: '400', fontSize: 18 }}><Text style={{ fontWeight: 600 }}>Email: </Text>{email}</Text>
            <Text style={{ fontWeight: '400', fontSize: 18, marginBottom: 20 }}><Text style={{ fontWeight: 600 }}>Mobile:</Text> {mobile}</Text>
            <Button buttonStyle={{ backgroundColor: 'purple' }} title='Go back' onPress={() => navigation.goBack()} icon={
                <Icon
                    name="home" // Use the icon name you want
                    size={20}
                    color="white" // Or any color you prefer
                    style={{ marginRight: 10 }} // Spacing between icon and text
                />
            } />
        </View>
    );
}


export default DetailsScreen