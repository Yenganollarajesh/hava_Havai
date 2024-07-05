import React, { useState } from 'react';
import { Flex, Text, ActionButton, TableView, TableHeader, TableBody, Column, Row, Cell, Dialog, DialogTrigger, Heading, Content, ButtonGroup, Button } from '@adobe/react-spectrum';
import Add from '@spectrum-icons/workflow/Add';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';

const initialAirports = [
  { id: 1, name: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 5 },
  { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
];

const AirportList = ({ onEditClick }) => {
  const [airports, setAirports] = useState(initialAirports);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = (id) => {
    setAirports(airports.filter(airport => airport.id !== id));
  };

  const handleEditClick = (airport) => {
    onEditClick(airport); // Trigger the edit callback
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Flex direction="column">
      <Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom="size-200">
        <Text UNSAFE_style={{ fontWeight: 'bold', fontSize: '20px' }}>Airports</Text>
        <Button variant="primary" style="fill">
          <Add />
          <Text>Add More</Text>
        </Button>
      </Flex>
      <Flex>
        <TableView aria-label="Airport table" selectionMode="multiple">
          <TableHeader>
            <Column minWidth={600}>
              <Flex direction="row" alignItems="center" gap="size-50">
                <Text>All Airports</Text>
                <ChevronDown size="S" />
              </Flex>
            </Column>
            <Column minWidth={100}>Country</Column>
            <Column minWidth={100} align="end">Code</Column>
            <Column minWidth={100} align="end">Terminals</Column>
          </TableHeader>
          <TableBody>
            {airports.map((airport) => (
              <Row key={airport.id}>
                <Cell>{airport.name}</Cell>
                <Cell>{airport.country}</Cell>
                <Cell>{airport.code}</Cell>
                <Cell>{airport.terminals}</Cell>
              </Row>
            ))}
          </TableBody>
        </TableView>
        <TableView aria-label="Actions table" selectionMode="none">
          <TableHeader>
            <Column minWidth={100} align="end"></Column>
          </TableHeader>
          <TableBody>
            {airports.map((airport) => (
              <Row key={airport.id}>
                <Cell>
                  <Flex direction="row" columnGap="size-60">
                    <ActionButton isQuiet onPress={() => handleEditClick(airport)}>
                      <Edit size="S" />
                    </ActionButton>
                    <ActionButton isQuiet onPress={() => handleDeleteClick(airport.id)}>
                      <Delete size="S" />
                    </ActionButton>
                  </Flex>
                </Cell>
              </Row>
            ))}
          </TableBody>
        </TableView>
      </Flex>

      {isDialogOpen && (
        <DialogTrigger isOpen onDismiss={handleClose}>
          <Dialog>
            <Heading>Edit</Heading>
            <Content>Edit button is clicked</Content>
            <ButtonGroup>
              <Button variant="secondary" onPress={handleClose}>Cancel</Button>
              <Button variant="cta" onPress={handleClose}>OK</Button>
            </ButtonGroup>
          </Dialog>
        </DialogTrigger>
      )}
    </Flex>
  );
};

export default AirportList;

