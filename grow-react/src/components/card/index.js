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
    imageUrl,
    routeUrl
}) {
    price = parseFloat(price).toFixed(2)

    return (
        <>
            <CardContainer>
                <CardLink to={ routeUrl }>
                    <CardImage backgroundImage={ imageUrl }/>
                    <CardContent>
                        <CardH3>{ name }</CardH3>
                        <CardP>£{ price }</CardP>
                    </CardContent>
                </CardLink>
            </CardContainer>
        </>
    )
}

export default Card
