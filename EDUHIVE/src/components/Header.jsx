import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.img`
  height: 200px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Header = () => (
  <HeaderContainer>
    <Logo src="./assets/Logo.png" alt="EduHive Logo" />
    <Title>
      Build or find your future start up, research, project teams and graduate school advisor in EduHive!
    </Title>
  </HeaderContainer>
);

export default Header;
