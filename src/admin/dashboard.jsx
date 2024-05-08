import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <Container>
        <Title>Đây là trang admin</Title>
        <Description>Chào mừng bạn đến với trang quản trị</Description>
      </Container>
    </Wrapper>
  );
}