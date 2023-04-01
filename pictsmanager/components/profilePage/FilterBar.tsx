import { Text, View } from '../Themed';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';

function FilterBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }

export default function FilterBar() {
    return (
        <View style={styles.horizontalContainer}>
            <FilterBarIcon name="picture-o" color={'black'} />
            <FilterBarIcon name="folder-open" color={'black'} />
        </View>
    );
}


const styles = StyleSheet.create({
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        height: 50,
        backgroundColor: 'white',
    }
});