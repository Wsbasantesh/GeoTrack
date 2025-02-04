import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen
        name="login"
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name="createAccount"
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen name="main" options={{ headerShown: false }} />
    </Tabs>

  );
}
