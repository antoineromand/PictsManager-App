import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import EditScreenInfo from '../EditScreenInfo';

export default function ProfilePage() {
    return(
        <View>
            <ScrollView stickyHeaderIndices={[2]}>
                <ProfileTop />
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    circularImage: {
      marginVertical: 30,
      height: 100,
      width: 100,
      borderRadius: 50,
    },
  });