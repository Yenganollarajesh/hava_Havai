 
import React from 'react';
import { Flex, Text, Button } from '@adobe/react-spectrum';
import Add  from '@spectrum-icons/workflow/Add';

const DashboardContent = () => {
  return (
    <Flex direction="column" gap="size-200">
      <Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom="size-200">
        <Text UNSAFE_style={{ fontWeight: 'bold', fontSize: '20px' }}>Dashboard</Text>
        <Button variant="primary" style="fill">
          <Add />
          <Text>Add More</Text>
        </Button>
      </Flex>
      
    </Flex>
  );
};

export default DashboardContent;
