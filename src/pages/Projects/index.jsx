import NavBar from "../../components/NavBar";
import { CardsProject, Container, MainContent, VitrineDiv } from "./style";
import { projectCards } from "./cards";
import { toast } from "react-toastify";
import { useRef } from "react";

const Projects = () => {

    const toastId = useRef(null);

    function webSite(site) {
        if (site !== "") {
            return window.open(site, '_blank')
        }

        if (!toast.isActive(toastId.current)) {
            toastId.current = toast("🥵 Site indisponível no momento!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "toastify-color-progress-error"
            });
        }
    }

    function repository(repo) {
        if (repo !== "") {
            return window.open(repo, '_blank')
        }

        if (!toast.isActive(toastId.current)) {
            toastId.current = toast("🥵 Repositório indisponível no momento!", {
                position: "top-right",
                autoClose: 1400,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "toastify-color-progress-error"
            });
        }
    }

    return (
        <Container>
            <NavBar />
            <MainContent>
                <VitrineDiv>
                    {
                        projectCards.map(({ name, img, site, rep }, index) => {
                            return (
                                <CardsProject key={index}>
                                    <div className="card">
                                        <div className="card__content">
                                            <div className="card__content-heading">
                                                <h2>{name}</h2>

                                            </div>
                                            <div className="card__content-body">
                                                <img src={img} alt={name} />
                                            </div>
                                            <div className="card__content-footer">
                                                <button onClick={() => webSite(site)}> Demo
                                                </button>
                                                <button className="btnRep" onClick={() => repository(rep)}> Repositorio
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CardsProject>
                            )
                        })
                    }
                </VitrineDiv>

            </MainContent>

        </Container>
    )

}

export default Projects;


