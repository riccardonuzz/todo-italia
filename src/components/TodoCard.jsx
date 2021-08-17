import { Card, CardBody, CardTitle, CardText, Col } from 'design-react-kit';


export const TodoCard = ({ todo }) => {
    return (
        <Col lg="3" className="mb-3">
            <Card
                className="card-bg no-after"
                noWrapper={false}
                tag="div"
            >
                <CardBody tag="div">
                    <CardTitle tag="h5">
                        {todo.title}
                    </CardTitle>
                    <CardText tag="p">
                        {todo.body}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
};
