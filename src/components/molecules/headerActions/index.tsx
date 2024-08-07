import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Row, Spacer } from '../../global/styled';

const HeaderActions = () => {
  return (
    <Row>
      <SearchIcon />
      <Spacer width="1em" height="0" />
      <AccountCircleIcon />
      <Spacer width="1.5em" height="0" />
      <Row>
        <p>My Cart</p>
        <Spacer width="0.2em" height="0" />
        <ShoppingCartIcon />
        <Spacer width="0.2em" height="0" />
        <p>0</p>
      </Row>
    </Row>
  );
};

export default HeaderActions;
