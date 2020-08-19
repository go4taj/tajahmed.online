import { Search20, Notification20,AppSwitcher20 } from '@carbon/icons-react';
import styled from 'styled-components';
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  HeaderSideNavItems,
  SideNavItems,
} from 'carbon-components-react';
import logoImage from '@images/logo.png'
const action  = console.log;

const LogoImg = styled('img')`
  width: 12rem;
`;

const StyledHeaderName = styled(HeaderName)`
  &:hover {
    background: transparent !important;
  }
`;

const NavigationBar = ()=>{
  return (
    <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="TAJ AHMED">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
      <HeaderName href="#">
      TAJ AHMED
      </HeaderName>
      <HeaderNavigation aria-label="TAJ AHMED">
      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
      <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
      <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
      <HeaderGlobalAction
      aria-label="Search"
      onClick={action('search click')}>
      <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction
      aria-label="Notifications"
      onClick={action('notification click')}>
      <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction
      aria-label="App Switcher"
      onClick={action('app-switcher click')}>
      <AppSwitcher20 />
      </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav
      aria-label="Side navigation"
      expanded={isSideNavExpanded}
      isPersistent={false}>
      <SideNavItems>
      <HeaderSideNavItems>
      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
      <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
      <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
      </HeaderSideNavItems>
      </SideNavItems>
      </SideNav>
      </Header>
      )}
      />)
}

export default NavigationBar;