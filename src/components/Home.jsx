import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptons = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: '4',
    size: '4xl'
}
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} bgColor={''} p={'16'}>
        <Heading 
        textTransform={'uppercase'} 
        py={'2'} 
        w={"fit-content"} 
        borderBottom={'2px solid'}
        m={"auto"}
        >
          Services
        </Heading>

        <Stack
        h={"full"}
        p={"4"}
        alignItems={"center"}
        direction={['column','row']}
        >
          <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>
          <Text letterSpacing={"widest"}lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est iusto labore veritatis, quod dolorum quasi quibusdam molestiae sapiente animi odio vel magnam incidunt dignissimos fuga possimus inventore debitis? Dolore quaerat voluptas odio pariatur nihil, at delectus deleniti sed est facilis obcaecati tenetur temporibus. Amet sapiente optio adipisci laborum delectus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe corporis maiores ut neque nulla natus dolor inventore illum? Ab aliquam vitae voluptas voluptatum dicta, nostrum quo ullam repudiandae aperiam quidem tempora doloremque eveniet nulla at totam? Enim dolor rerum pariatur minus dolore quis distinctio cumque dicta quasi eaque optio consequuntur, minima maxime, dolorem hic ad possimus provident maiores tempora. Ipsum laboriosam repellendus sint, sed quidem iste beatae laudantium dolorum fugiat impedit corporis ipsa
          </Text>
        </Stack>

      </Container>
    </Box>
  );
}

export default Home;

const MyCarousel = () => {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      interval={1000} 
      showStatus={false} 
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={['50vh', '100vh']}>
        <Image src={img1} />
        <Heading
          bgColor="blackAlpha.600"
          color="white"
          {...headingOptons}
        >
          Watch The Future
        </Heading>
      </Box>
      <Box w="full"  h={['50vh', '100vh']}>
        <Image src={img2} />
        <Heading
          bgColor="whiteAlpha.900"
          color="black"
          {...headingOptons}
        >
          Future is Gaming
        </Heading>
      </Box>
      <Box w="full" h={['50vh', '100vh']}>
        <Image src={img3} />
        <Heading
          bgColor="whiteAlpha.600"
          color="black"
          {...headingOptons}
        >
          Gaming on Console
        </Heading>
      </Box>
      <Box w="full"  h={['50vh', '100vh']}>
        <Image src={img4} />
        <Heading
          bgColor="whiteAlpha.600"
          color="black"
          {...headingOptons}
        >
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
}

// {...headingOptons} ek obect hain jiso upper bana lenge aur spread kr lege 