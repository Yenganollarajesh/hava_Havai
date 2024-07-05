 import React, { useState } from 'react';
import { View, Heading, TextField, Button, Picker, Item, Switch, Text, Flex, Image, ActionButton, Tabs, TabList, TabPanels } from '@adobe/react-spectrum';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import More from "@spectrum-icons/workflow/More";
import Card from "../assets/images/Image.png";

const Modal = ({ isOpen, onClose, onContinue }) => {
  const [description, setDescription] = useState('');

  const handleContinue = () => {
    onContinue(description);
    setDescription('');
  };

  return isOpen ? (
    <View UNSAFE_style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
      <View UNSAFE_style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px' }}>
        <Heading level={3}>Terminal Title</Heading>
        <TextField label="Description" value={description} onChange={setDescription} />
        <Flex direction="row" justifyContent="end" marginTop="size-250">
         
          <Button variant="cta" onPress={handleContinue} marginEnd="size-100">Continue</Button>
          <Button variant="primary" onPress={onClose}>Cancel</Button>
        </Flex>
      </View>
    </View>
  ) : null;
};

function AirportEdit({ airport }) {
  const [showModal, setShowModal] = useState(false);

  const handleUploadImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleContinueModal = (description) => {
    console.log('Description:', description);
    handleCloseModal();
  };

  if (!airport) return null;

  return (
    <View flex UNSAFE_style={{ overflowY: 'auto', backgroundColor: "white" }}>
      <View>
        <Heading level={3} UNSAFE_style={{ display: 'flex', alignItems: 'center', fontSize: "10px" }}>
          <Text UNSAFE_style={{ color: '#999999' }}>Airports</Text>
          <ChevronRight size="S" color="black" style={{ margin: '0 8px' }} />
          {airport.name}
        </Heading>
      </View>
      <Heading level={2}>{airport.name}</Heading>
      <Tabs aria-label="History of Ancient Rome">
        <TabList>
          <Item key="FoR">Terminals</Item>
          <Item key="MaR">Transport</Item>
          <Item key="Emp">Contact Details</Item>
        </TabList>
        <TabPanels>
          <Item key="FoR">
            <Flex direction="row" UNSAFE_style={{ padding: 20, columnGap: "20px" }}>
              <Flex columnGap="10px">
                <Image src={Card} alt="Profile Image" width="50px" height="60px" />
                <Flex direction="column" UNSAFE_style={{ justifyContent: "space-between" }}>
                  <Flex>
                    <Text>Terminal 1</Text>
                    <ActionButton aria-label="Actions" UNSAFE_style={{ border: "none" }}>
                      <More marginBottom="size-150" />
                    </ActionButton>
                  </Flex>
                  <Flex>
                    <Text UNSAFE_style={{ flexWrap: "wrap" }}>Optional Metadata should be two lines</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex columnGap="10px">
                <Image src={Card} alt="Profile Image" width="50px" height="60px" />
                <Flex direction="column" UNSAFE_style={{ justifyContent: "space-between" }}>
                  <Flex>
                    <Text>Terminal 2</Text>
                    <ActionButton aria-label="Actions" UNSAFE_style={{ border: "none" }}>
                      <More marginBottom="size-150" />
                    </ActionButton>
                  </Flex>
                  <Flex>
                    <Text UNSAFE_style={{ flexWrap: "wrap" }}>Optional Metadata should be two lines</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex>
              <Button variant="cta" marginTop="size-200">+Add Terminal</Button>
              </Flex>
            </Flex>
          </Item>
          <Item key="MaR">
          Transport
          </Item>
          <Item key="Emp">
            Contact Details
          </Item>
        </TabPanels>
      </Tabs>
      <Flex direction="column" UNSAFE_style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '10px' }}>
        <Heading level={3}>Services</Heading>
        <Heading level={4}>Lost & found</Heading>
      </Flex>
      <Flex UNSAFE_style={{ flexDirection: "row", justifyContent: "space-between", gap: "10" }}>
        <Flex UNSAFE_style={{ flexDirection: "row", gap: "10px" }}>
          <TextField label="Service Name" defaultValue="Lost & found" marginBottom="size-200" />
          <Picker label="Category" marginBottom="size-200">
            <Item>Option 1</Item>
            <Item>Option 2</Item>
          </Picker>
          <Picker label="Sub Category" marginBottom="size-200">
            <Item>Option 1</Item>
            <Item>Option 2</Item>
          </Picker>
          <Button variant="primary" marginTop="size-250" onPress={handleUploadImageClick}>Upload Image</Button>
          <Switch marginTop="size-250">Show Image</Switch>
        </Flex>
        <Flex>
          <Button variant="cta" marginTop="size-250">Save</Button>
        </Flex>
      </Flex>
      <TextField label="Description" placeholder="type here" marginBottom="size-250" />
      <Flex direction="column">
        <Text UNSAFE_style={{ borderBottom: '2px solid #e0e0e0', padding: "10px" }}>Lounge</Text>
        <Text UNSAFE_style={{ borderBottom: '2px solid #e0e0e0', padding: "10px" }}>Money Exchange</Text>
      </Flex>

      <Modal isOpen={showModal} onClose={handleCloseModal} onContinue={handleContinueModal} />
    </View>
  );
}

export default AirportEdit;


