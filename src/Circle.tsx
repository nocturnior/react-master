import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  // ts가 알아서 추론해서 state의 기본값을 설정함
  const [counter, setCounter] = useState(1);

  // type이 number가 될수도있고 string이 될수도 있음
  const [value, setValue] = useState<number | string>(0);
  setValue('hello');
  setCounter(2);

  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

export default Circle;
