import { BannerImageProps } from './types';
import { StyledBannerImage } from './styled';

const BannerImage = ({ src }: BannerImageProps) => {
  return <StyledBannerImage src={src} />;
};

export default BannerImage;
