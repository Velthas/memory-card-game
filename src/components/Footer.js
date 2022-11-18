import React from 'react';
import styled from 'styled-components';

function Footer() {
  const profileUrl = 'https://github.com/Velthas';
  const codeUrl = 'https://github.com/Velthas/buildrriculum';
  const author = 'Velthas';

  return (
    <FooterWrapper>
      <p>
        Coded by
        <Url href={profileUrl}>
          {' '}
          {author}
        </Url>
        {' '}
        2022.
        Source code
        {' '}
        <Url href={codeUrl}>
          here
        </Url>
        .
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 5px;

  background-color: black;
  color: white;

  font-family: sans-serif;
`

const Url = styled.a`
  text-decoration: none;
  color: #ee1b24;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`

export default Footer;
