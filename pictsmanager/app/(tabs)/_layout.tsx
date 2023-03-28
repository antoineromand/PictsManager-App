import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, useColorScheme, View } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../../constants/Colors';
import { useAuth } from '../context/authProvider';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { signOut }: any = useAuth();
  const colorScheme = 'light';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors['dark'].background }}>
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Text onPress={signOut}>
                <FontAwesome name="arrow-circle-o-down" size={24} color="black" />
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="addPhoto"
        options={{
          title: 'Photo',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </Tabs>
    </SafeAreaView>
  );
}