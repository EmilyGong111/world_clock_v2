import styled from 'styled-components';

const BasicPointer = styled.div.attrs((props) => ({
  style: {
    transform: `rotateZ(${props.rotate}deg)`
  },
  size: 100,
  tail: 0,
  bg_radius: "6px 6px 3px 3px",
  z_index: 0,
  width: 4,
}))`
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  /* transform: ${(props) => `rotateZ(${props.rotate}deg)`}; */
  z-index: ${(props) => props.z_index};
  /* background-color: green; */
  ::before {
    content: "";
    /* position: absolute; */
    width: ${(props) => props.width}px;
    height: ${(props) => `calc( ${props.size / 2}px + ${props.tail}px )`};
    /* height: ${(props) => props.size / 2 + props.tail}px; */
    background: ${(props) => props.is_white ? props.bg_white : props.bg_black};
    border-radius: ${(props) => props.bg_radius};
  }
`

export default BasicPointer