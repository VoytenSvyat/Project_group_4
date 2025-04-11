import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { StyledNavLink } from './styles'; // Импортируем StyledNavLink
import {
  LayoutComponent,
  Header,
  LogoText,
  Nav,
  Main,
  Footer,
  ButtonContainer
} from './styles';
import { LayoutProps, NavLinkObj } from './types';
import { navLinksData } from './data';
import Logo from '../../assets/avatar.jpg'; // Проверь правильность пути к изображению
import Button from '../Button/Button';  // Убедись, что путь к Button правильный

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  // Функция для возврата на предыдущую страницу
  const goBack = () => {
    navigate(-1);
  };

  // Генерация ссылок на основе данных из navLinksData
  const navLinks = navLinksData.map((navLink: NavLinkObj) => (
    <StyledNavLink
      key={uuidv4()}  // Генерация уникальных ключей
      to={navLink.to}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {navLink.linkName}
    </StyledNavLink>
  ));

  return (
    <LayoutComponent>
      <Header>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
        </Link>
        <Nav>{navLinks}</Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <ButtonContainer>
          <Button name="<-" onClick={goBack} />
        </ButtonContainer>
        <LogoText>Company name</LogoText>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
