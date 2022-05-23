import styled from "styled-components";

const CityStyle = styled.div`
  margin-bottom: ${(props) => props.margin_bottom};
`;
CityStyle.defaultProps = {
  margin_bottom: "20px",
};

const City = (props) => {
  return (
    <CityStyle margin_bottom={props.margin_bottom}>
      {props.children}
    </CityStyle>
  );
};

export default City;
