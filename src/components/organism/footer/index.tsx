import { Column, Row, Spacer } from '../../global/styled';
import {
  FooterText,
  StyledFooter,
  StyledFooterDivider,
  StyledFooterLink,
  StyledFooterSocialMedias,
  StyledLinksColumn,
  StyledLinksDivider,
} from './styled';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import DefaultInput from '../../atoms/defaultInput';
import DefaultButton from '../../atoms/defaultButton';

const handleOpenNewTab = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  url: string,
) => {
  e.preventDefault();
  window.open(url, '_blank');
};

const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <Row align="flex-start" width="100%" justify="space-between">
          <StyledLinksColumn>
            <FooterText>Docs</FooterText>
            <StyledLinksDivider />
            <StyledFooterLink to="/policy/privacy">
              Privacy Policy
            </StyledFooterLink>
            <StyledFooterLink to="/policy/refund">
              Refund Policy
            </StyledFooterLink>
            <StyledFooterLink to="/policy/terms">
              Terms of Service
            </StyledFooterLink>
          </StyledLinksColumn>

          <Spacer width="1em" />

          <StyledLinksColumn>
            <FooterText>Info</FooterText>
            <StyledLinksDivider />
            <StyledFooterLink to="/policy/privacy">About Us</StyledFooterLink>
          </StyledLinksColumn>

          <Spacer width="1em" />

          <StyledLinksColumn>
            <FooterText>Contact Us</FooterText>
            <StyledLinksDivider />
            <StyledFooterLink to="/contact">Contact</StyledFooterLink>
            <Spacer height="0.5em" />
            <DefaultInput
              inputValue=""
              label="Join our mailing list"
              setDefaultInput={() => null}
            />
            <Spacer height="0.2em" />
            <DefaultButton width="7em" color="primary">
              Join
            </DefaultButton>
          </StyledLinksColumn>
        </Row>

        <StyledFooterDivider />

        <StyledFooterSocialMedias>
          <FooterText>{`© ${new Date().getFullYear()} • Powered by GG`}</FooterText>
          <FacebookIcon />
          <InstagramIcon />
          <PinterestIcon />
          <TwitterIcon />
        </StyledFooterSocialMedias>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
