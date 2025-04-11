
import { CardContainer, Name } from './styles'
import Message from '../Message/Message';
import { useContext } from 'react';
import { BlogContext } from '../BlogManagement/BlogManagement';


function Card() {
    const { postedMessage } = useContext(BlogContext)

    return (
        <CardContainer>
            <Name>John Johnson: </Name>
            {postedMessage !== '' && <Message />}
        </CardContainer>)
}
export default Card;