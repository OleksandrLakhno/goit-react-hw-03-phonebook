import React, { Component } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";
import f from './Form.module.css';

class FormContact extends Component { 
    state = {
        name: '',
        number:'',
    };

    inputNameId = shortid.generate();
    inputNumberId = shortid.generate();

    handleChange = e => { 
        const { name, value } = e.currentTarget;
        console.log(e.currentTarget.value);
        this.setState({ [name]: value });
    };

    handleSubmit = e => { 
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => { 
        this.setState({name:'',number:''})
    };

    render() { 
        return (
            <form className={f.form} onSubmit={ this.handleSubmit}>
                    <span>Name</span>
                <label htmlFor={ this.inputNameId}>
                    <input className={f.label}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        value={ this.state.name}
                        id={this.inputNameId}
                        
                    />
                </label>
                <label htmlFor={this.inputNumberId}>
                    <span>Number</span>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        value={ this.state.number}
                        id={ this.inputNumberId}
                    />
                </label>
                <button type="submit" > Add contact</button>
            </form>
        )
    }
};

FormContact.propTypes = {
    onSubmit:PropTypes.func.isRequired,
};

export default FormContact;