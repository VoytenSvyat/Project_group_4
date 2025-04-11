import { useContext } from 'react';

import Button from '../../../../components/Button/Button';
import { MessageContainer, MessageComponent } from './styles';
import { BlogContext } from '../BlogManagement/BlogManagement';

function Message() {
  const { postedMessage, setPostedMessage } = useContext(BlogContext)

  const deleteMessage = () => {
    setPostedMessage('')
  }

  return (
    <MessageComponent>
      <MessageContainer>{postedMessage}</MessageContainer>
      <Button name='DELETE MESSAGE' onClick={deleteMessage} danger />
    </MessageComponent>
  );
}

export default Message;

