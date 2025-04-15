import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/Ruang+Bumi+2.png" alt="logo" height={70} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
  