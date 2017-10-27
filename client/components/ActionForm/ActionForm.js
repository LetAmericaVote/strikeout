import React from 'react';
import icons from './icons';
import { Grid, Column } from '../../core/grid';

const ActionButton = ({ onClick, icon, label }) => (
  <Column size={6}>
    <button onClick={onClick} className="grid grid-justify-center grid-align-center margin-small">
      <img className="icon-small" src={icon} />
      <div className="padding-small-horizontal">
        <p>{label}</p>
      </div>
    </button>
  </Column>
);

const Subheader = ({ text }) => <h2 className="text-large-size">{ text }</h2>;
const FormInput = ({ label, size, type }) => (
  <Column size={size} classes={['padding-small-horizontal', 'margin-vertical']}>
    <label>{ label }</label>
    <input type={type} className="width-100 text-medium-size border-bottom-black margin-top" />
  </Column>
);

class ActionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        zipcode: '',
        mobile: '',
        textUpdates: false,
      },
    };
  }

  render() {
    return (
      <Grid classes={['grid-column-direction']}>
        <Column size={12}>
          <Subheader text="Tell us how you can help." />
        </Column>
        <Grid classes={['grid-wrap']}>
          <ActionButton icon={icons.call} label="Call legislators" />
          <ActionButton icon={icons.share} label="Share your story" />
          <ActionButton icon={icons.write} label="Write letters to the editor" />
          <ActionButton icon={icons.knock} label="Knock on doors" />
        </Grid>
        <Column size={12}>
          <Subheader text="How can we get in contact?" />
        </Column>
        <Grid classes={['grid-wrap']}>
          <FormInput label='First Name' size={3} type="text" />
          <FormInput label='Last Name' size={3} type="text" />
          <FormInput label='Email' size={6} type="email" />
        </Grid>
      </Grid>
    );
  }
}

export default ActionForm;
