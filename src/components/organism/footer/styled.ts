import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Column, Row } from '../../global/styled';
import { Divider } from '@mui/material';

const FooterText = styled.p`
  font-size: 1.1em;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-align: start;
`;

const StyledLinksColumn = styled(Column)`
  flex: 1;
`;

const StyledLinksDivider = styled(Divider)`
  height: 0.05em;
  width: 100%;
  background: #fff;
  margin: 0.5em 0 1em 0 !important;
`;

const StyledFooterDivider = styled(Divider)`
  height: 0.05em;
  width: 100%;
  background: #fff;
  margin: 2em 0 !important;
`;

const StyledFooter = styled.footer`
  margin-top: 2em;
  background-color: #8c83ad;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  width: 100%;

  & > nav {
    width: 100%;
    padding: 0 1em;
    max-width: 1300px;
  }
`;

const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.05em;
  font-weight: 400;
  cursor: pointer;
`;

const StyledFooterSocialMedias = styled(Row)`
  & > svg {
    font-size: 1.5em;
    margin-right: 0.5em;
    cursor: pointer;
    color: #fff;
  }
`;

export {
  FooterText,
  StyledFooter,
  StyledFooterLink,
  StyledLinksColumn,
  StyledLinksDivider,
  StyledFooterDivider,
  StyledFooterSocialMedias,
};
