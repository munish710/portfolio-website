import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <SocialLinks>
        <Link href="mailto:munish710@gmail.com">
          <AiOutlineMail />
        </Link>
        <Link href="https://github.com/munish710" target="_blank">
          <AiOutlineGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/munish-thakur-a14078190/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link href="https://twitter.com/munish710" target="_blank">
          <AiFillTwitterCircle />
        </Link>
      </SocialLinks>
      <Credits
        href="https://github.com/palakgupta2712/palakgupta2712.github.io"
        target="_blank"
      >
        Designed & Built by Palak Gupta
      </Credits>
    </Container>
  );
}

export default Footer;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px;
  font-size: 30px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
  &:hover {
    transform: scale(1.3);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Credits = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 12px;
`;
