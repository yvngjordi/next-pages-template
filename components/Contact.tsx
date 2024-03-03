import React, { CSSProperties } from 'react';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { TextInput, Textarea, Select, Button, Paper, Box, Title, Divider, Text, Image, Flex } from '@mantine/core';
import ReCAPTCHA from "react-google-recaptcha";
import Transition from './wrappers/Transition';

interface ContactProps {
    dropdown: { value: string; label: string }[];
    image: string;
    fetchLink: string;
    captcha: boolean;
    siteKey: string;
    heading?: string;
    subheading?: string;
    paragraph?: string[];
    buttonLabel?: string;
    button?: React.CSSProperties;
    style?: CSSProperties;
}

const Contact: React.FC<ContactProps> = ({
    dropdown,
    image,
    fetchLink,
    captcha,
    siteKey,
    heading,
    style,
    subheading,
    paragraph,
    buttonLabel,
    button,
}) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            message: '',
            purpose: '',
            recaptchaResponse: '',
        },
    });

    const recaptchaRef = React.createRef<ReCAPTCHA>();

    const handleSubmit = async (values: any) => {
        let formData = { ...values };
        if (captcha && recaptchaRef.current) {
            const recaptchaValue = recaptchaRef.current.getValue();
            formData.recaptchaResponse = recaptchaValue;
        }

        const response = await fetch(fetchLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    };

    return (
        <Paper style={style} pl="sm" pr="sm">
            <Transition transitionFrom="right">
                <Paper p="md">
                    {heading && <Title mb="sm">{heading}</Title>}
                    {subheading && <Text mt={4} color="dimmed">{subheading}</Text>}
                    <Box p="xs">
                      {typeof paragraph === 'string' ? (
                        <Text >{paragraph}</Text>
                      ) : (
                        paragraph?.map((p, index) => <Text key={index} >{p}</Text>)
                      )}
                    </Box>
                    <Divider my={12} />
                    <Flex direction={isMobile ? 'column-reverse' : 'row'}>
                        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: isMobile ? '100%' : '50%', marginTop: isMobile ? '4vh' : '0' }}>
                            <Transition blur transitionFrom="bottom">
                                <TextInput required radius="lg" label="Name" placeholder="Enter your name..." {...form.getInputProps('name')} />
                                <TextInput mt={4} required radius="lg" label="Email" placeholder="Enter your email..." {...form.getInputProps('email')} />
                                <Select style={{ zIndex: 999999 }} mt={4} radius="lg" label="Purpose" placeholder="Choose one" data={dropdown} {...form.getInputProps('purpose')} />
                                <Textarea mt={4} required radius="lg" label="Message" placeholder="Enter your message..." maxRows={6} minRows={6} {...form.getInputProps('message')} />
                                {captcha && siteKey && (
                                    <div style={{ marginTop: '1vh', marginBottom: '1vh' }}>
                                        <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} />
                                    </div>
                                )}
                                <Button mt="md" type="submit" style={{ ...button }}>{buttonLabel || 'Send Message'}</Button>
                            </Transition>
                        </form>
                        <div style={{ width: isMobile ? '100%' : '50%', padding: isMobile ? '0px' : '1%' }}>
                            <Transition blur transitionFrom="top">
                                <Image src={image} radius="md" my={8} mx={8} />
                            </Transition>
                        </div>
                    </Flex>
                </Paper>
            </Transition>
        </Paper>
    );
};

export default Contact;
