import React from 'react';
import { ClanLogo, getSrc } from '../../../../global/Images';
import { InfoContainer, IconClan, ContentWrapper, Content } from './styles';

export interface CharacterInfo {
  name: string;
  ambition: string;
  clan: string;
}

const InfoWrapper: React.FC<CharacterInfo> = ({
  ambition,
  name,
  clan,
}: CharacterInfo) => {
  const { IconName, IconAmbition } = getSrc.Icon;
  const clanLogo = ClanLogo(clan);
  return (
    <InfoContainer>
      <IconClan alt={clan} src={clanLogo} />
      <ContentWrapper>
        <Content>
          <img alt="name" src={IconName} />
          <p>{name}</p>
        </Content>
        <Content>
          <img alt="ambition" src={IconAmbition} />
          <p>{ambition}</p>
        </Content>
      </ContentWrapper>
    </InfoContainer>
  );
};

export default InfoWrapper;
