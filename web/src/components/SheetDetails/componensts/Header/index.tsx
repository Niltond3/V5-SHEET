import React from 'react';
import LogoMain from '../../../../assets/logo-main.svg';
import {
  Logo,
  InformationWrapper,
  InformationCollum,
  Form,
  Text,
  Label,
  ContantName,
} from './styles';

interface InputProps {
  name: string;
}
const Input: React.FC<InputProps> = ({ name }: InputProps) => {
  return (
    <Form>
      <Text required />
      <Label>
        <ContantName>{name}</ContantName>
      </Label>
    </Form>
  );
};

const Header: React.FC = () => (
  <>
    <Logo src={LogoMain} alt="logo" />
    <InformationWrapper>
      <InformationCollum>
        <Input name="Conceito" />
        <Input name="Geração" />
      </InformationCollum>
      <InformationCollum>
        <Input name="Nome" />
        <Input name="Clã" />
        <Input name="Predador" />
      </InformationCollum>
      <InformationCollum>
        <Input name="Ambição" />
        <Input name="Senhor" />
      </InformationCollum>
    </InformationWrapper>
  </>
);

export default Header;
