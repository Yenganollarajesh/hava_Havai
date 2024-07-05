 import React, { useState } from 'react';
import { View, Text, Button, Flex, ActionButton } from '@adobe/react-spectrum';
import HomeIcon from '@spectrum-icons/workflow/Home';
import DashboardIcon from '@spectrum-icons/workflow/Dashboard';

const Sidebar = ({ onMenuItemClick }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleItemClick = (item) => {
      onMenuItemClick(item);
      setActiveButton(item);
    };
  
    const getButtonStyle = (item) => {
      return {
        backgroundColor: activeButton === item ? '#e0e0e0' : 'transparent',
        color: activeButton === item ? '#ffffff' : '#000000',
        border: 'none',
        borderRadius: 'none',
        padding: '0px'
      };
    };

  return (
    <View backgroundColor="white" gridArea="sidebar" borderRightWidth="thin" padding="size-250">
      <View>
        <ActionButton onPress={() => handleItemClick('home')} UNSAFE_style={getButtonStyle('home')}  >
          <HomeIcon size="S" />
          <Text>Home</Text>
        </ActionButton>
        <ActionButton onPress={() => handleItemClick('dashboard')}   UNSAFE_style={getButtonStyle('dashboard')}>
          <DashboardIcon size="S" />
          <Text>Dashboard</Text>
        </ActionButton>
      </View>
      <View marginTop="size-200">
        <Text UNSAFE_style={{ fontWeight: 'bold' }}>Services</Text>
        <Flex direction="column" alignItems="start" gap="size-10" marginTop="size-100">
          <ActionButton onPress={() => handleItemClick('airports')} isQuiet UNSAFE_style={getButtonStyle('airports')}>
            <Text UNSAFE_style={{ fontWeight: 'normal' }}>Airports</Text>
          </ActionButton>
          <ActionButton UNSAFE_style={{border:"none",borderRadius:"none",padding:"0px"}}>
            <Text UNSAFE_style={{ fontWeight: 'normal' }}>Videos</Text>
          </ActionButton>
        </Flex>
      </View>
      <View marginTop="size-200">
        <Text UNSAFE_style={{ fontWeight: 'bold' }}>Other</Text>
        <Flex direction="column" alignItems="start" gap="size-200" marginTop="size-200">
          <Text>List1</Text>
          <Text>List2</Text>
          <Text>List3</Text>
        </Flex>
      </View>
    </View>
  );
};

export default Sidebar;


 

