import { Card, CardBody, CardTitle, CardText, CardFooterCTA, CardSignature, Button } from 'design-react-kit';

export const LastTodoCard = () => {
    return (
        <Card
            className="card-bg card-big no-after"
            noWrapper={false}
            tag="div"
        >
            <CardBody tag="div">
                <CardTitle tag="h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
                </CardTitle>
                <CardText tag="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardFooterCTA>
                    <CardSignature>
                        di Federico De Paolis
                    </CardSignature>
                    <Button
                        color="primary"
                        icon={false}
                        outline
                        tag="button"
                    >
                        Action
                    </Button>
                </CardFooterCTA>
            </CardBody>
        </Card>
    );
};
