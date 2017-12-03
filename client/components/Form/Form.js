import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Markdown from '../Markdown';

import './form.scss';

const NAVY_BACKGROUND = 'Navy Background';
const BLUE_BACKGROUND = 'Blue Background';
const RED_BACKGROUND = 'Red Background';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      additionalCopy, callToActionCopy, colorStyle,
      displayStyle, inputs, requireMessagingDisclaimer,
      useArrowStyling, useCompactStyling,
    } = this.props;

    const useDualLayout = additionalCopy !== null;

    const FormContainer = ({ children }) => (
      <div
        className={classnames('form', {
          '-navy': colorStyle === NAVY_BACKGROUND,
          '-blue': colorStyle === BLUE_BACKGROUND,
          '-red': colorStyle === RED_BACKGROUND,
          '-arrow': useArrowStyling,
          '-compact': useCompactStyling,
          '-dual': useDualLayout,
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
        Message & data rates may apply. Text STOP to cancel or HELP for help.
      </p>
    ) : null;

    const CompleteForm = () => [
      <div key="inputs" className="form__inputs">
        <Inputs />
      </div>,
      <button
        key="submit"
        className="form__submit"
      >{callToActionCopy}</button>,
      <MessagingDisclaimer key="disclaimer" />,
    ];

    const FormContent = () => additionalCopy ? (
      <div className="form__primary">
        <Markdown markdown={additionalCopy} />
      </div>
    ) : null;

    const FormLayout = () => useDualLayout ? ([
      <FormContent key="primary" />,
      <div key="secondary" className="form__secondary">
        <CompleteForm />
      </div>
    ]) : (
      <CompleteForm />
    );

    return (
      <FormContainer>
        <FormLayout />
      </FormContainer>
    );
  }
}

Form.propTypes = {
  additionalCopy: PropTypes.string,
  callToActionCopy: PropTypes.string,
  colorStyle: PropTypes.oneOf([
    NAVY_BACKGROUND, BLUE_BACKGROUND, RED_BACKGROUND,
  ]),
  inputs: PropTypes.array,
  requireMessagingDisclaimer: PropTypes.bool,
  useArrowStyling: PropTypes.bool,
  useCompactStyling: PropTypes.bool,
};

Form.defaultProps = {
  additionalCopy: null,
  callToActionCopy: 'Submit',
  colorStyle: BLUE_BACKGROUND,
  inputs: [],
  requireMessagingDisclaimer: false,
  useArrowStyling: false,
  useCompactStyling: false,
};

export default Form;
