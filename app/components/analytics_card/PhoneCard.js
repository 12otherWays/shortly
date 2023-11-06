import { Box, Typography, styled } from "@mui/material";
import mobile from "../../../public/mobile.svg";
import circleAbstract from "../../../public/circleAbstract.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const mobileVariant = {
  rest: {
    backgroundPosition: "-40% 90%,30% 0%",
  },
  move: {
    backgroundPosition: "-38% 89%,30% -2%",
  },
};
const mobileTextMotion = {
  move: {
    x: 4,
  },
};

const Card = styled(motion.div)(({ theme }) => ({
  borderRadius: "20px",
  padding: "28px 32px 24px 32px",
  backgroundColor: "white",
}));

const Text = styled(motion.p)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: 600,
  textTransform: "capitalize",
  fontFamily: "'Poppins', sans-serif",
}));

function PhoneCard() {
  return (
    <Card
      sx={{
        display: "flex",
        gap: "20px",
        backgroundImage: `url(${circleAbstract.src}),url(${circleAbstract.src})`,
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundSize: "39.625rem 38.625rem,35.4375rem 32rem",
      }}
      variants={mobileVariant}
      initial="rest"
      animate="rest"
      whileHover="move"
    >
      <Image src={mobile} width={20} height={40} alt="UI mobile image" />
      <Text variants={mobileTextMotion}>device compatible</Text>
    </Card>
  );
}

export default PhoneCard;
