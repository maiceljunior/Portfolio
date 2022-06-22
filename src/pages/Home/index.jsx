import NavBar from "../../components/NavBar";
import working from "../../assets/imgs/working.gif"
import codewarsIcon from "../../assets/imgs/codewarsIcon.png"
import githubIcon from "../../assets/imgs/githubIcon.png"
import linkedinIcon from "../../assets/imgs/linkedinIcon.png"
import gmailIcon from "../../assets/imgs/gmail.png"
import MaicelJuniorCV from "../../assets/pdfs/MaicelJuniorCV.pdf"
import Typical from 'react-typical'
import { Contacts, Container, DivContact, DivGif, MainContent } from "./style";

const Home = () => {

    return (
        <Container>
            <NavBar />
            <MainContent>
                <DivGif>
                    <div>
                        <h2>Olá, me chamo Maicel Junior ✌️</h2>

                        <Typical loop={Infinity} className="typical"
                            steps={["Front End Developer ✨", 5000, "Back End Student 🧱", 5000,]}
                        />
                        <span>
                            <a className="download-button" href={MaicelJuniorCV} type="application/pdf" download="curriculo_maicel_junior.pdf">
                                <div className="docs"><svg className="css-i6dzq1" fill="none" strokeWidth="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Baixar currículo</div>
                                <div className="download">
                                    <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                                </div>
                            </a>
                        </span>
                    </div>

                    <img src={working} alt="Coding" />
                </DivGif>

                <DivContact>
                    <Contacts href="https://github.com/maiceljunior" target="_blank">
                        <img src={githubIcon} alt="GitHub" />
                    </Contacts>

                    <Contacts href="mailto:junioraraujc@gmail.com" target="_blank" rel='noopener noreferrer'>
                        <img src={gmailIcon} alt="Gmail" />
                    </Contacts>

                    <Contacts href="https://www.linkedin.com/in/maiceljunior/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin" />
                    </Contacts>

                    <Contacts href="https://www.codewars.com/users/JuniorAraujoC" target="_blank">
                        <img src={codewarsIcon} alt="Codewars" />
                    </Contacts>
                </DivContact>
            </MainContent>
        </Container>
    )
}

export default Home;