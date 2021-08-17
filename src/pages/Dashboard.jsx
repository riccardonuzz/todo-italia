import { Container, Card, CardBody, CardTitle, CardText, CardFooterCTA, CardSignature, Row, Col, Button } from 'design-react-kit';
import { useEffect, useState } from 'react';

import { TodoCountAlert } from '../components/TodosCountAlert';
import { CategoriesCard } from '../components/CategoriesCard';
import { LastTodoCard } from '../components/LastTodo';
import { Todos } from '../components/Todos';
import { useTodos } from "../hooks/useTodos";

export const Dashboard = ({ setIsGoToDashboardVisible }) => {
    const { todos, isLoading } = useTodos();
    const [thingsToDo, setThingsToDo] = useState(0);

    useEffect(() => {
        setIsGoToDashboardVisible(false);
    });

    useEffect(() => {
        const thingsToBeDone = todos?.reduce((accumulator, current) => {
            if (!current.done)
                return accumulator + 1;
            return 0;
        }, 0);
        setThingsToDo(thingsToBeDone);
    }, [todos]);

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <TodoCountAlert thingsToDo={thingsToDo} />
                </Col>
            </Row>
            <Row>
                <Col xs="12" lg="6">
                    <CategoriesCard />
                </Col>

                <Col xs="12" lg="6">
                    <LastTodoCard />
                </Col>
            </Row>

            <Row className="mt-4">
                <Todos todos={todos} isLoading={isLoading} />
            </Row>


        </Container>
    );
};
