import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          href: null
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: 'CLIENTS',
          headerShown: false
        }} />
      <Tabs.Screen
        name="map"
        options={{
          title: 'MAP',
          headerShown: false
        }} />
      <Tabs.Screen
        name="login"
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          href: null
        }}
      />
      <Tabs.Screen
        name="createAccount"
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          href: null
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'ACCOUNT',
          headerShown: false
        }}
      />
            <Tabs.Screen
        name="detailClient"
        options={{
          title: 'DETAIL',
          headerShown: false,
          href: null

        }}
      />
    </Tabs>
  );
}
