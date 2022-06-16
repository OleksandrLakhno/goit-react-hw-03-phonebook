import React from "react";
import l from './ListItem.module.css';

function ContactListItem({id,number,name, onDeleteContactItem}) {
    return (
         <li key={id}>
            <div className={l.item}>
                <p className={ l.nameStyle}>{name + ':'}</p>
                <p className={l.numberStyle}>{number}</p>
                        <button
                            className={l.buttonStyle}
                            type="button"
                            onClick={onDeleteContactItem}>
                            Delete
                        </button>
          </div>
        </li>
  )  
};

export default ContactListItem;