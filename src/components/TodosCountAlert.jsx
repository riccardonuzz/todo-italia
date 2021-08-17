import { Alert } from 'design-react-kit';
import PropTypes from 'prop-types';

export const TodoCountAlert = ({ thingsToDo }) => {
    return (
        <Alert
            closeAriaLabel="Close"
            color="info"
            fade
            isOpen
            tag="div"
            transition={{
                appear: true,
                baseClass: 'fade',
                baseClassActive: 'show',
                enter: true,
                exit: true,
                in: true,
                mountOnEnter: false,
                tag: 'div',
                timeout: 150,
                unmountOnExit: true
            }}
        >
            You have {' '}
            <b>
                {thingsToDo}
            </b>
            {' '}
            thing{ thingsToDo > 1 ? 's' : '' } left to do.
        </Alert>
    )
};

TodoCountAlert.propTypes = {
    thingsToDo: PropTypes.number
}