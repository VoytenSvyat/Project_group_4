import { UsersWrapper, Title, StyledLink } from "./styles"

function Users() {
  return (
    <UsersWrapper>
      <Title>Users pages</Title>
      {/* Если мы переходим на дополнительную страницу, у которой маршрут имеет формат
      '/<адрес текущей страницы>/<адрес дополнительной страницы>', то можно сделать
       упрощение to='<адрес дополнительной страницы>'
      */}
      <StyledLink to='manager'>Manager</StyledLink>
      <StyledLink to='/users/designer'>Designer</StyledLink>
    </UsersWrapper>
  )
}

export default Users