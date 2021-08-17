import { Container, Icon, Row, Col, Input as InputItalia, Button, InputGroup, InputGroupAddon, InputGroupText as InputGrouTextItalia } from 'design-react-kit';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';



const InputGroupText = styled(InputGrouTextItalia)`
    margin-bottom: 3rem;
`;

export const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { loginUser } = useAuth();

    const login = (event) => {
        event.preventDefault();
        loginUser({ email, password }, () => history.push('/dashboard'));
    };

    return (
        <Container tag="div" fluid className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <form onSubmit={login}>
                <Row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <Icon
                                    color=""
                                    icon="it-user"
                                    padding={false}
                                    size="sm"
                                    style={{
                                        ariaHidden: true,
                                    }}
                                />
                            </InputGroupText>
                        </InputGroupAddon>
                        <InputItalia
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            style={{ width: '100%' }}
                        />
                    </InputGroup>
                </Row>

                <Row>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <Icon
                                    color=""
                                    icon="it-user"
                                    padding={false}
                                    size="sm"
                                    style={{
                                        ariaHidden: true,
                                    }}
                                />
                            </InputGroupText>
                        </InputGroupAddon>
                        <InputItalia
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                        />
                    </InputGroup>
                </Row>

                <Row>
                    <Button
                        color="primary"
                        icon={false}
                        tag="button"
                        type="submit"
                        block
                    >
                        Login
                    </Button>
                </Row>
            </form>
        </Container>
    );
};
