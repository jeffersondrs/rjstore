import React from 'react';
import { Stack } from 'expo-router';
import '../../global.css';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Index' }} />
      <Stack.Screen name="(tabs)" options={{ title: 'About' }} />
    </Stack>
  );
}
