import { ClientsPage, Title, StyledLink } from "./styles"

function Clients() {
  return (
    <ClientsPage>
      <Title>Clients page</Title>
      <StyledLink to='amazon'>Amazon company</StyledLink>
      <StyledLink to='facebook'>Facebook company</StyledLink>
      <StyledLink to='google'>Google company</StyledLink>
    </ClientsPage>
  )
}

export default Clients