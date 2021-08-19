import {
    CardContainer,
    CardImage,
    CardContent,
    CardH3,
    CardP,
    CardLink
} from './card.style'

function Card({
    name,
    price,
    imageUrl
}) {
    return (
        <>
            <CardContainer>
                <CardLink to="/about">
                    <CardImage backgroundImage={imageUrl}/>
                    <CardContent>
                        <CardH3>{ name }</CardH3>
                        <CardP>£{ price.toFixed(2) }</CardP>
                    </CardContent>
                </CardLink>
            </CardContainer>
        </>
    )
}

export default Card
