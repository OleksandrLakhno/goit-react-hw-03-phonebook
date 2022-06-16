import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem";

function ContactList({ options,onDeleteContactItem}) {
    return (
        <ul>
            {options.map(({ id, name, number }) => (
                <ContactListItem key={id}
                    name={name}
                    number={number}
                    onDeleteContactItem={()=> onDeleteContactItem(id)}
                />
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContactItem:PropTypes.func.isRequired,
};

export default ContactList;