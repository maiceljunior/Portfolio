import { Drawer, IconButton, Stack } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"

import codewarsIcon from "../../assets/imgs/codewarsIcon.png"
import githubIcon from "../../assets/imgs/githubIcon.png"
import linkedinIcon from "../../assets/imgs/linkedinIcon.png"
import gmailIcon from "../../assets/imgs/gmail.png"

import { Anchor, Aside, Box, Img, LinkStyle } from './style';
import { useState } from 'react';

const NavBar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <Aside>
            <IconButton className="iconButton" size="large" edge="end" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon className="menuIcon" />
            </IconButton>

            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box>
                    <Stack mt={5} spacing={4} bgcolor="#e5e5e5">
                        <LinkStyle to="/">Pagina Inicial</LinkStyle>
                        <LinkStyle to="/sobre">Sobre Mim</LinkStyle>
                        <LinkStyle to="/projetos">Projetos</LinkStyle>
                    </Stack>

                    <Stack mt={5} spacing={3} bgcolor="#e5e5e5">

                        <Anchor href="https://github.com/maiceljunior" target="_blank">
                            <Img src={githubIcon} alt="GitHub" />
                        </Anchor>

                        <Anchor href="https://www.linkedin.com/in/maiceljunior/" target="_blank">
                            <Img src={linkedinIcon} alt="Linkedin" />
                        </Anchor>

                        <Anchor href="mailto:junioraraujc@gmail.com" target="_blank" rel='noopener noreferrer'>
                            <Img src={gmailIcon} alt="Gmail" />
                        </Anchor>

                        <Anchor href="https://www.codewars.com/users/JuniorAraujoC" target="_blank">
                            <Img src={codewarsIcon} alt="Codewars" />
                        </Anchor>
                    </Stack>
                </Box>
            </Drawer>
        </Aside>
    )
}

export default NavBar