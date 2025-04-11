import { ChangeEvent, createContext, useState } from 'react';

import { BlogManagerContainer, ButtonContainer } from './styles';
import Card from '../Card/Card';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { BlogContextInterface } from './types';

export const BlogContext = createContext<BlogContextInterface>({
  postedMessage: '',
  setPostedMessage: () => { }
})


function BlogManagement() {
  const [inputValue, setInputValue] = useState<string>('')
  const [postedMessage, setPostedMessage] = useState<string>('')

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const postMessage = () => {
    setPostedMessage(inputValue)
    setInputValue('')
  }

  return (
    <BlogContext.Provider value={{ postedMessage, setPostedMessage }}>
      <BlogManagerContainer>
        <Input name='message' value={inputValue} onChange={onChangeInput} />
        <ButtonContainer>
          <Button name="Post" onClick={postMessage} />
        </ButtonContainer>
        <Card />
      </BlogManagerContainer>
    </BlogContext.Provider>
  );
}

export default BlogManagement;

