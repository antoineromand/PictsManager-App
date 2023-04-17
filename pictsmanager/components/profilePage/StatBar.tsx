import {View, StyleSheet} from 'react-native';
import ProfileStats from './ProfileStats';

interface IProps {
    stats: { title: string, value: number }[];
}

export default function StatBar(props: IProps) {
    return (
        <View style={styles.horizontalContainer}>
            {props.stats.map((stat) => <ProfileStats title={stat.title} value={stat.value}/>)}
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