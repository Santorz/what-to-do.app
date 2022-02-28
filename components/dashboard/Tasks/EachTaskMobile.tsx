import { FC, ReactNode } from 'react';
import { decrypt } from '../../../utils/crypto-js-utils';
import { TaskInterface } from '../../../parse-sdk/hooks';
import { Heading, Flex, Button, Icon } from '@chakra-ui/react';
import { FaEllipsisH } from 'react-icons/fa';
import { useDateFuncs } from '../../../utils/dateFuncs';

interface EachTaskMobileInterface extends TaskInterface {
  children?: ReactNode;
  index: number;
}

const EachTaskMobile: FC<EachTaskMobileInterface> = (props) => {
  const { id, dueDate, title, index } = props;

  // Hooks
  const { getShorthandDistanceDiff, checkBeforeorAfter, addColorOnTask } =
    useDateFuncs();

  // Main JSX
  return (
    <Button
      key={id}
      height='70px'
      w='full'
      rounded='xl'
      d='flex'
      shadow='md'
      justifyContent='space-between'
      name={`Task ${index}`}
      aria-label={title}
      alignItems='center'
      flexWrap='wrap'
    >
      <Flex
        textAlign='left'
        direction='column'
        maxWidth='85%'
        width='85%'
        flexWrap='wrap'
        wrap='wrap'
        gap='1'
      >
        <Heading
          fontSize='.79rem'
          w='full'
          whiteSpace='normal'
          color={addColorOnTask(new Date(dueDate))}
        >
          {getShorthandDistanceDiff(new Date(dueDate))}{' '}
          {checkBeforeorAfter(new Date(dueDate))}
        </Heading>
        <Heading fontSize='1.05rem' w='full' whiteSpace='normal'>
          {decrypt(title)}
        </Heading>
      </Flex>
      <Icon as={FaEllipsisH} aria-label={`Task ${index} options`} boxSize='5' />
    </Button>
  );
};

export default EachTaskMobile;
