import react from 'react';
import styled from 'styled-component';

const Wrapper = styled.main`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Text = styled.p`
  margin: 0 auto;
  font-size: 3rem;
`;

export default function Dashboard() {
  return (
    <Wrapper>
      <Text> Đây là trang admin </Text>
    </Wrapper>
  );
}
