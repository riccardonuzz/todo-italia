import {
    Button,
    LinkList,
    LinkListItem,
    Header as MainHeader,
    Row,
    Icon,
    Col,
    HeaderContent,
    HeaderBrand,
    HeaderLinkZone,
    HeaderToggler,
    Collapse,
    HeaderRightZone,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from "design-react-kit";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";

export const Header = ({ isGoToDashboardVisible }) => {
    const history = useHistory();
    const { user } = useUser();
    const { logoutUser } = useAuth();

    const logout = () => {
        logoutUser(() => {
            history.push('/');
        });
    };

    const authButton = () => {
        return user ?
            <Button
                onClick={logout}
                color="primary"
                icon={false}
                size="sm"
                tag="button"
            >
                Logout
            </Button>

            : <Button
                onClick={() => history.push('/login')}
                color="primary"
                icon={false}
                size="sm"
                tag="button"
            >
                Login
            </Button>;
    }




    const goToDashboard = () => {
        if (user) {
            history.push('/dashboard');
        } else {
            history.push('/login');
        }
    }

    return (
        <MainHeader
            small={false}
            theme=""
            type="slim"
        >
            <HeaderContent>
                <HeaderBrand
                    responsive={false}
                    tag="a"
                    onClick={() => history.push('/')}
                >
                    The best to-do list app you ever seen
                </HeaderBrand>
                <HeaderLinkZone>
                    {
                        isGoToDashboardVisible && <Collapse
                            appear={false}
                            enter
                            exit
                            header
                            in={false}
                            isOpen={false}
                            mountOnEnter={false}
                            tag="div"
                            timeout={350}
                            unmountOnExit={false}
                        >
                            <LinkList tag="div">
                                <LinkListItem
                                    onClick={goToDashboard}
                                    tag="a"
                                >
                                    Go to dashboard
                                </LinkListItem>
                            </LinkList>
                        </Collapse>
                    }
                </HeaderLinkZone>
                <HeaderRightZone>
                    <UncontrolledDropdown
                        nav
                        tag="div"
                    >
                        <DropdownToggle
                            aria-haspopup
                            caret
                            color="secondary"
                            nav
                        >
                            ITA
                            <Icon
                                className="d-none d-lg-block"
                                color="icon-white"
                                icon="it-expand"
                                padding={false}
                                size=""
                            />
                        </DropdownToggle>
                        <DropdownMenu
                            flip
                            tag="div"
                        >
                            <Row
                                tag="div"
                                widths={[
                                    'xs',
                                    'sm',
                                    'md',
                                    'lg',
                                    'xl'
                                ]}
                            >
                                <Col
                                    size="12"
                                    tag="div"
                                    widths={[
                                        'xs',
                                        'sm',
                                        'md',
                                        'lg',
                                        'xl'
                                    ]}
                                >
                                    <LinkList tag="div">
                                        <LinkListItem
                                            href="#"
                                        >
                                            <span>
                                                ITA
                                            </span>
                                        </LinkListItem>
                                        <LinkListItem
                                            href="#"
                                        >
                                            <span>
                                                ENG
                                            </span>
                                        </LinkListItem>
                                    </LinkList>
                                </Col>
                            </Row>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <HeaderBrand
                        responsive={false}
                        tag="a"
                        onClick={() => history.push('/')}
                    >
                         {user && `Hi, ${user?.name}`}
                    </HeaderBrand>
                    {authButton()}
                </HeaderRightZone>
            </HeaderContent>
        </MainHeader>
    );
}