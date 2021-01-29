import { Turn as Hamburger } from 'hamburger-react'

import {MenuH, ContentMenu} from './styles'

const HamburgerMenu = ({children}) => {
  const [isOpen, setOpen] = React.useState(false)

  return (
    <>
    <MenuH>
    <Hamburger 
    toggled={isOpen} toggle={setOpen}
    />
    
    </MenuH>
    {isOpen && <ContentMenu>{children}</ContentMenu>}
    </>
  );
}

export default HamburgerMenu;

