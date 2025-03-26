import { Button} from '@chakra-ui/react';
import React from 'react';
import { BiAddToQueue } from 'react-icons/bi';

const CreateUserModal = () => {
  return (<>
    <Button>
      <BiAddToQueue size={20}></BiAddToQueue>
    </Button>
    
  </>
  );
};

export default CreateUserModal;

