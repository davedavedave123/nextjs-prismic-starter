import React from 'react';

// import Text from '../Text';

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <div style={styles.error}>{error}</div>;
}

const styles = {
  error: {
    color: 'red',
  },
};
