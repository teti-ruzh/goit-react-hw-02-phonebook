import PropTypes from 'prop-types';

const ContactItem = ({id, name, number, onDeleteContact}) => {
return (
    <li>{name}: {number}
    <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
)
}

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}