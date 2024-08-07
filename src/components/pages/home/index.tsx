import { CenteredRow, Spacer } from '../../global/styled';
import InternalContainer from '../../organism/container';
import { useEffect, useState } from 'react';
import ThumbnailCarousel from '../../molecules/carousel';
import BannerImage from '../../atoms/bannerImage';
import SectionTitle from '../../atoms/sectionTitle';
import { news } from '../../../mock/news';
import { banners } from '../../../mock/banners';

const Home = () => {
  const [currentHotList, setCurrentHotList] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHotList((currentHotList) => {
        return currentHotList === banners.length - 1 ? 0 : currentHotList + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      <InternalContainer>
        <Spacer height="1em" />
        <BannerImage src={banners[currentHotList].image} />
        <Spacer height="52vh" />
        <CenteredRow margin="2em 0 3em 0">
          <SectionTitle>News</SectionTitle>
        </CenteredRow>
        <ThumbnailCarousel products={news} />
      </InternalContainer>
    </main>
  );
};

export default Home;
