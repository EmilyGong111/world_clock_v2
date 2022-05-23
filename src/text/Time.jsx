import styled from 'styled-components';

const TimeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
`;

const Time = (props) => {
  return (<TimeStyle>{props.children}</TimeStyle>);
}

export default Time;