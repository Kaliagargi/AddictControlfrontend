import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Image} from "expo-image";
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Text>only for development purposes</Text>
      <TouchableOpacity>
        <Text>login</Text>
        <Link href="/(auth)/index">Login</Link>

      </TouchableOpacity>

    </View>
  )
}

export default index