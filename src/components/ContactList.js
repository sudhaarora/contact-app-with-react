import React from 'react';
import ContactCard from './ContactCard';

const Contactlist = (props) => {
    console.log(props);
    
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} key={contact.id}></ContactCard>
        )
    });
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default Contactlist;