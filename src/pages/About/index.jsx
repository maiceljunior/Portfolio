import NavBar from "../../components/NavBar";
import { Container, MainContent, DivContainer, SelectAbout, VitrineSkills, SelectSection, CardSkills } from "./style";
import { useState } from "react";
import programming from "../../assets/imgs/programming.png"
import { skillsCards } from "./cards";


const About = () => {

    const [section, setSection] = useState(true)

    return (
        <Container>
            <NavBar />

            <MainContent>

                <DivContainer>

                    {section === true ?
                        <>
                            <img className="programming" src={programming} alt="programming" />

                            <SelectSection>
                                <SelectAbout>
                                    <button className="about" onClick={() => setSection(true)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>Sobre</span>
                                    </button>

                                    <button className="skills" onClick={() => setSection(false)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>Habilidades</span>
                                    </button>
                                </SelectAbout>
                                <div className="container">
                                    <div className="container_terminal"></div>
                                    <div className="terminal_toolbar">
                                        <div className="butt">
                                            <button className="btn btn-color"></button>
                                            <button className="btn"></button>
                                            <button className="btn"></button>
                                        </div>

                                    </div>
                                    <div className="terminal_body">
                                        <div className="terminal_promt">
                                            <span className="terminal_location">~</span>
                                            <span className="terminal_bling">$</span>
                                            <span className="terminal_cursor"></span>
                                            <span className="terminal_user">Minha relação com a tecnologia começou quando eu tinha 13 anos, a partir de jogos on-line e vídeo games. Logo após a conclusão do ensino médio, optei por cursar uma faculdade voltada para a área. Escolhi a Análise e Desenvolvimento de Sistemas para me especializar e aprender um pouco sobre o mundo da programação.
                                                <br /> <br />
                                                Quando me formei, em 2021, percebi que ainda não me sentia pronto para iniciar no mercado de trabalho. Devido a isso, decidi buscar um curso que aperfeiçoasse meus conhecimentos e me desse uma base maior da programação, assim, me deixando apto para ingressar no mercado.
                                                <br /> <br />
                                                Em novembro de 2021, decidi entrar na <span style={{ fontWeight: "bold" }}>Kenzie Academy</span> e iniciar de fato a minha trilha de aprendizagem na programação.
                                                Escolhi o  <span style={{ fontWeight: "bold" }}>JavaScript</span> como a linguagem materna do meu aprendizado e não pretendo parar por aí! Já com a formação no módulo de Front End, pretendo não parar com os estudos e agora focar o aprendizado no Back End, afinal o mundo da tecnologia é enorme e junto a isso, ainda tenho muito a aprender.</span>
                                        </div>
                                    </div>
                                </div>
                            </SelectSection>
                        </>

                        :

                        <>
                            <img className="programming" src={programming} alt="programming" />

                            <SelectSection>
                                <SelectAbout>
                                    <button className="about" onClick={() => setSection(true)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>Sobre</span>
                                    </button>

                                    <button className="skills" onClick={() => setSection(false)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>Habilidades</span>
                                    </button>
                                </SelectAbout>
                                <VitrineSkills>
                                    {skillsCards.map(({ name, img }, index) => {

                                        return (
                                            <CardSkills key={index}>
                                                <img src={img} alt={name} />
                                                <span>{name}</span>
                                            </CardSkills>
                                        )
                                    })

                                    }

                                </VitrineSkills>
                            </SelectSection>
                        </>
                    }


                </DivContainer>
            </MainContent >

        </Container >
    )
}

export default About;


