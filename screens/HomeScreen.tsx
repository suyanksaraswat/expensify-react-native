import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWraper from '../components/ScreenWraper';
import {colors} from '../theme';

const items = [
  {
    id: 0,
    place: 'Delhi',
    country: 'India',
  },
  {
    id: 1,
    place: 'Londin',
    country: 'England',
  },
  {
    id: 2,
    place: 'Dubai',
    country: 'UAE',
  },
  {
    id: 3,
    place: 'Berlin',
    country: 'Germany',
  },
  {
    id: 4,
    place: 'Delhi',
    country: 'India',
  },
  {
    id: 5,
    place: 'Londin',
    country: 'England',
  },
  {
    id: 6,
    place: 'Dubai',
    country: 'UAE',
  },
  {
    id: 7,
    place: 'Berlin',
    country: 'Germany',
  },
];

function HomeScreen() {
  return (
    <ScreenWraper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>

        <TouchableOpacity className="p-2 px-3 bg-white border-gray-200 rounded-full">
          <Text className={colors?.heading}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-cente bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>

      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>

          <TouchableOpacity className="p-2 px-3 bg-white border-gray-200 rounded-full">
            <Text className={colors?.heading}>Add Trips</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 430}}>
          <FlatList
            data={items}
            numColumns={2}
            keyExtractor={({id}) => id.toString()}
            showsVerticalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            renderItem={({item}) => {
              return (
                <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                  <View>
                    <Image
                      source={require('../assets/images/2.png')}
                      className="w-36 h-36 mb-2"
                    />
                    <Text className={`${colors?.heading} font-bold`}>
                      {item?.place}
                    </Text>
                    <Text className={`${colors?.heading} text-sm`}>
                      {item?.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWraper>
  );
}

export default HomeScreen;
