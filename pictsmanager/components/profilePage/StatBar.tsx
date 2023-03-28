import {View, Text, StyleSheet} from 'react-native';
import ProfileStats from './ProfileStats';

export default function StatBar() {
    return (
        <View style={styles.horizontalContainer}>
            <ProfileStats title={'Photos'} value={54} />
            <ProfileStats title={'Followers'} value={5} />
            <ProfileStats title={'Following'} value={504} />
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //space between the 3 stats
        justifyContent: 'space-between',
    }
});