import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import TextInput from '../TextInput';

export default function FormField({ name, width, className, ...otherProps }) {
  const { errors, setFieldTouched, touched, setFieldValue, values } =
    useFormikContext();

  return (
    <>
      <TextInput
        onChange={event => setFieldValue(name, event.target.value)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        className={className}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
