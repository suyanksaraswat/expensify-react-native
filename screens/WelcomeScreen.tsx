import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWraper from '../components/ScreenWraper';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWraper className="flex-1">
      <View>
        <View className="flex-row justify-center mt-10">
          <Image
            source={require('../assets/images/welcome.gif')}
            className="w-96 h-96 shadow"
          />

          <Text>Imagei</Text>
        </View>

        <View className="mx-5 mb-20">
          <Text
            className={`${colors.heading} mb-10 text-center font-bold text-4xl`}>
            Expensify
          </Text>

          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            className="shadow p-3 rounded-full mb-5">
            <Text
              className="text-center text-white"
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            className="shadow p-3 rounded-full">
            <Text className="text-center text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWraper>
  );
}

export default WelcomeScreen;
