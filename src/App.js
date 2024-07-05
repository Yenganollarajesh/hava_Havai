import React, { useState } from 'react';
import { Provider, defaultTheme, Grid, View } from '@adobe/react-spectrum';
import Header from '../src/components/Header.js';
import HomeContent from '../src/components/HomeContent.js';
import DashboardContent from '../src/components/DashboardContent.js';
import Sidebar from '../src/components/Sidebar.js';
import AirportList from '../src/components/AirportList.js';
import AirportEdit from './components/AirportEdit.js';

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [editingAirport, setEditingAirport] = useState(null);

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
    setEditingAirport(null); 
  };

  const handleEditClick = (airport) => {
    setEditingAirport(airport);
    setActiveMenuItem('editAirport');
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'home':
        return <HomeContent />;
      case 'dashboard':
        return <DashboardContent />;
      case 'airports':
        return <AirportList onEditClick={handleEditClick} />;
      case 'editAirport':
        return <AirportEdit airport={editingAirport} />;
      default:
        return null;
    }
  };

  return (
    <Provider theme={defaultTheme} colorScheme="light" UNSAFE_style={{ backgroundColor: "white" }}>
      <Grid
        areas={[
          'header  header',
          'sidebar content'
        ]}
        columns={['1fr', '5fr']}
        rows={['size-1000', 'auto']}
        height="size-6000"
        gap="size-100"
        margin="size-200"
      >
        <Header />
        <Sidebar onMenuItemClick={handleMenuItemClick} />
        <View backgroundColor="white-600" gridArea="content" padding="size-250" style={{ border: '1px solid black', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {renderContent()}
        </View>
      </Grid>
    </Provider>
  );
};

export default App;




 