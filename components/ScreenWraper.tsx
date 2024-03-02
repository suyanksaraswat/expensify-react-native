import React from 'react';
import {View} from 'react-native';

type Props = {
  children: React.ReactNode;
  className: string;
};

function ScreenWraper({children, className}: Props) {
  //   let statusBarHeight = StatusBar.currentHeight;
  let statusBarHeight = 0;

  return (
    <View style={{paddingTop: statusBarHeight}} className={className}>
      {children}
    </View>
  );
}

export default ScreenWraper;
