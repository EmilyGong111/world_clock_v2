import styled from "styled-components";
import Clock from "./clock/Clock";


const ClockGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const App = (props) => {
  return (
    <ClockGroup>
      <Clock city={"Sydney"} timezone={10} />
      <Clock city={"China"} timezone={8} />
      <Clock city={"London"} timezone={1} />
      <Clock city={"New York"} timezone={-4} />
    </ClockGroup>
  );
};

export default App;
