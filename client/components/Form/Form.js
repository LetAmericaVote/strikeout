import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './form.scss';

const NAVY_BACKGROUND = 'Navy Background';
const BLUE_BACKGROUND = 'Blue Background';

const COMPACT_DISPLAY = 'Compact';
const FULL_WIDTH_DISPLAY = 'Full Width';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      callToActionCopy, colorStyle, displayStyle,
      inputs, requireMessagingDisclaimer,
    } = this.props;

    const FormContainer = ({ children }) => (
      <div
        className={classnames('form', {
          '-navy': colorStyle === NAVY_BACKGROUND,
          '-blue': colorStyle === BLUE_BACKGROUND,
          '-compact': displayStyle === COMPACT_DISPLAY,
          '-full': displayStyle === FULL_WIDTH_DISPLAY,
        })}
      >
        <div className="form__container">
          { children }
        </div>
      </div>
    );

    const Inputs = () => inputs.map(({ fields }) => {
      if (fields.type === 'checkbox') {
        return (<p>TODO: checkbox</p>);
      }

      return (
        <input
          key={fields.label}
          type={fields.type}
          placeholder={fields.label}
          required={fields.isRequired}
          className="form__input"
        />
      );
    });

    const MessagingDisclaimer = () => requireMessagingDisclaimer ? (
      <p className="form__disclaimer">
        Subscribing means you agree to receive periodic automated text messages and calls on your cell phone from Let America Vote. Message & data rates may apply. Text STOP to cancel or HELP for help.
      </p>
    ) : null;

    return (
      <FormContainer>
        <div className="form__inputs">
          <Inputs />
        </div>
        <MessagingDisclaimer />
        <button className="form__submit">{callToActionCopy}</button>
      </FormContainer>
    );
  }
}

Form.propTypes = {
  callToActionCopy: PropTypes.string,
  colorStyle: PropTypes.oneOf([NAVY_BACKGROUND, BLUE_BACKGROUND]),
  displayStyle: PropTypes.oneOf([COMPACT_DISPLAY, FULL_WIDTH_DISPLAY]),
  inputs: PropTypes.array,
  requireMessagingDisclaimer: PropTypes.bool,
};

Form.defaultProps = {
  callToActionCopy: 'Submit',
  colorStyle: BLUE_BACKGROUND,
  displayStyle: COMPACT_DISPLAY,
  inputs: [],
  requireMessagingDisclaimer: false,
};

export default Form;
