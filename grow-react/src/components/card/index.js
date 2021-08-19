import { NavLink as Link } from 'react-router-dom'
import {
    CardContainer,
    CardImage,
    CardContent,
    CardH3,
    CardP
} from './card.style'

function Card({
    name,
    price,
    imageUrl
}) {
    return (
        <>
            <CardContainer>
                <Link to="/about">
                    <CardImage backgroundImage={imageUrl}/>
                    <CardContent>
                        <CardH3>{ name }</CardH3>
                        <CardP>£{ price }</CardP>
                    </CardContent>
                </Link>
            </CardContainer>
        </>
    )
}

export default Card
