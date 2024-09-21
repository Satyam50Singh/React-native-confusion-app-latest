import React from 'react';
import { Text, SafeAreaView, StyleSheet, SectionList, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const skills = [
    {
        id: 1,
        name: 'Web Development',
        data: ['HTML5', 'CSS3', 'JS'],
    },
    {
        id: 2,
        name: 'Android Development',
        data: ['Java', 'Kotlin', 'XML', 'Android Studio'],
    },
    {
        id: 3,
        name: 'Backend Development',
        data: ['PHP', '.NET', 'NodeJs', 'MongoDB', 'SQL'],
    },
];

export default function SectionListComponent() {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={skills}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Icon
                            name='circle-thin' // Ensure this is a valid name for the specified type
                            color='#517fa4'
                            size={16}
                            onPress={() => console.log('Icon pressed!')}
                        />
                        <Text style={styles.innerText}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={styles.paragraph}>{name}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        marginVertical: 8,
        marginHorizontal: 24,
        fontSize: 18,
        fontWeight: 'bold',
    },
    innerText: {
        marginVertical: 6,
        marginHorizontal: 8,
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
});
