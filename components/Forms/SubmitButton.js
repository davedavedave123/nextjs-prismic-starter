import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../Button';

export default function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      title={title}
      onClick={handleSubmit}
      type='submit'
      {...otherProps}
    />
  );
}
