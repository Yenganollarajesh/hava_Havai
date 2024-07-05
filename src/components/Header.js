import React from 'react';
import { Flex, Text, Image ,View} from '@adobe/react-spectrum';
import Profile from '../../src/assets/images/download (1).jpg';

const Header = () => {
  return (
    <View  gridArea="header" borderBottomWidth="thin" UNSAFE_style={{backgroundColor:"white"}}>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
           >
            <Text UNSAFE_style={{ fontWeight: 'bold', fontSize: '24px' }}>Hava Havai</Text>
            <Image src={Profile} alt="Profile Image" width="40px" height="40px" UNSAFE_style={{ borderRadius: '50%' }} />
          </Flex>
        </View>
  );
};

export default Header;
