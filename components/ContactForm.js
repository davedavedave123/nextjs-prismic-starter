import React, { useState } from 'react';
import * as Yup from 'yup';

import Button from './Button';
import Form from './Forms/Form';
import FormField from './Forms/FormField';
import SubmitButton from './Forms/SubmitButton';
import ErrorMessage from './Forms/ErrorMessage';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label('Full Name'),
  email: Yup.string().email().required().label('Email'),
  phone: Yup.number().typeError('Phone must be a number').label('Phone'),
  message: Yup.string().label('Message').max(1000),
});

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

const getVariantStyles = variant => {
  let submitClassName = '';
  let formFieldClassName = '';
  const icon = {};
  switch (variant) {
    case 1:
      icon.user = '/icons/user-outline.svg';
      icon.email = '/icons/email-outline.svg';
      icon.phone = '/icons/phone-outline.svg';
      icon.message = '/icons/pencil-outline.svg';
      break;

    case 2:
      icon.user = '/icons/user-outline-white.svg';
      icon.email = '/icons/email-outline-white.svg';
      icon.phone = '/icons/phone-outline-white.svg';
      icon.message = '/icons/pencil-outline-white.svg';
      formFieldClassName = 'border-white';
      submitClassName = 'border-white text-gray-200';
    default:
      break;
  }

  return { submitClassName, formFieldClassName, icon };
};

export default function ContactForm({ variant = 1 }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorSubmitting, setErrorSubmitting] = useState(false);

  // Change style and icons based on variant number
  const { submitClassName, formFieldClassName, icon } =
    getVariantStyles(variant);

  const handleSubmit = async values => {
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      console.log('response status', response.status);

      if (response.status >= 200 && response.status < 300) {
        setSubmitted(true);
        setSubmitting(false);
      } else {
        console.log('something went wrong....');
        setSubmitting(false);
        setErrorSubmitting(true);
      }
    } catch (error) {
      console.log('error submitting contact form:', error);
    }
  };

  return (
    <div className='w-full relative'>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          name='fullName'
          placeholder='Full Name'
          // containerStyle={styles.formField}
          style={{ fontWeight: 500 }}
          icon={icon.user}
          styleIcon={{ width: 25 }}
          className={formFieldClassName}
        />
        <FormField
          name='email'
          placeholder='Email'
          // containerStyle={styles.formField}
          inputmode='email'
          type='email'
          icon={icon.email}
          styleIcon={{ width: 25 }}
          className={formFieldClassName}
        />
        <FormField
          name='phone'
          placeholder='Phone'
          // containerStyle={styles.formField}
          style={{ width: '100%' }}
          inputmode='tel'
          icon={icon.phone}
          styleIcon={{ width: 25 }}
          className={formFieldClassName}
        />
        <FormField
          name='message'
          placeholder='Message'
          textArea
          icon={icon.message}
          iconClassName='items-start pt-3'
          style={{
            height: 100,
            width: '100%',
            resize: 'none',
          }}
          containerStyle={styles.textArea}
          className={formFieldClassName}
        />
        <SubmitButton
          title={
            submitted
              ? 'SENT :)'
              : errorSubmitting
              ? 'Something went wrong :/'
              : 'SEND MESSAGE'
          }
          style={styles.button}
          disabled={submitted || submitting || errorSubmitting}
          spinner={submitting}
          className={submitClassName}
        />
        <ErrorMessage
          visible={errorSubmitting}
          error="Whoops, it looks like that didn't work. Try emailing or old fashioned calling instead ;)"
        />
      </Form>
    </div>
  );
}

const styles = {
  formField: {
    backgroundColor: 'transparent',
    border: 'solid 2px white',
    // width: 200,
  },
};
