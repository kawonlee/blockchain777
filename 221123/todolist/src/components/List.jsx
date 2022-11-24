import styled from "styled-components";

export default function List({ list, setList }) {
  const listDiv = list.map((item, index) => {
    return <ListStyled key={`${index}-1`}>{item}</ListStyled>;
  });
  return listDiv;
}

const ListStyled = styled.div`
  font-size: 1rem;
  padding: 15px 0;
  letter-spacing: 5px;
  &:hover {
    color: blue;
  }
`;
