import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

// app/_layout.js
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"  
        options={{ 
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="black" />
         }}
      />
      <Tabs.Screen
        name="sumadora"  
        options={{ 
          title: 'Sumadora',
          tabBarIcon: ({ color }) => <FontAwesome6 name="calculator" size={28} color="black" />
        }}
      />
      <Tabs.Screen
        name="traductor"  
        options={{ 
          title: 'Traductor',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="translate" size={24} color="black" />
         }}
      />
      <Tabs.Screen
        name="tablaMultiplicar"  
        options={{
           title: 'Multiplicar',
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="multiplication" size={24} color="black" />
           }}
      />
      <Tabs.Screen
        name="experiencia"  
        options={{
           title: 'Experiencia',
           tabBarIcon: ({ color }) => <FontAwesome name="youtube-play" size={24} color="black" />
           }}
      />
    </Tabs>
  );
}
