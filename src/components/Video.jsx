import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

// Import video files from the assets folder
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const Video = () => {

    const videosArr = [
        { src: video1, title: "Video Title 1" },
        { src: video2, title: "Video Title 2" },
        { src: video3, title: "Video Title 3" },
        { src: video1, title: "Video Title 4" },
        { src: video2, title: "Video Title 5" },
        { src: video3, title: "Video Title 6" },
    ];

    const [videoSrc, setVideoSrc] = useState(videosArr[0].src);
    const [videoTitle, setVideoTitle] = useState(videosArr[0].title);

    const handleVideoClick = (video) => {
        setVideoSrc(video.src);
        setVideoTitle(video.title);
    };

    return (
        <Stack
            direction={['column', 'row']}
            h={'100vh'}
        >
            <VStack w={'full'}>
                <video
                    controls
                    controlsList='nodownload'
                    src={videoSrc} 
                    style={{
                        width: "90%",
                    }}
                >
                </video>

                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                    <Heading>{videoTitle}</Heading>
                    <Text>This is a sample video for testing and demo. This is called description.</Text>
                </VStack>
            </VStack>

            <VStack
                w={['full', 'xl']}
                alignItems={'stretch'}
                p="8"
                spacing={'8'}
                overflowY={'auto'}
            >
                {
                    videosArr.map((item, index) => (
                        <Button 
                            variant={'ghost'} 
                            colorScheme={'purple'} 
                            onClick={() => handleVideoClick(item)} 
                            key={index}
                        >
                            {item.title}
                        </Button>
                    ))
                }
            </VStack>
        </Stack>
    )
}

export default Video;
