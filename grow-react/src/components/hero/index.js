import Image from "../../assests/hero-plant.jpg"
import { Button } from "../button/Button.style";
import { 
    HeroBtnWrapper,
    HeroContainer,
    HeroBackground,
    HeroImg,
    HeroContent,
    HeroH1,
    HeroP
} from "./hero.style"

function Hero() {
    return (
        <HeroContainer>
            <HeroBackground>
                <HeroImg src={ Image } alt="Cactus Background"/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Flourising Passion</HeroH1>
                <HeroP>
                    GROW helps you discover the best plants for your space and delivers them to your door.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/plants">
                        Shop Plants
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
