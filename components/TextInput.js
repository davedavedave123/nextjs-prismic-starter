import React from 'react';
import Image from 'next/image';

// import Text from './Text';

const Input = ({ className, textArea, value, style, ...otherProps }) => {
  if (textArea)
    return (
      <textarea
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 14,
          resize: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          paddingTop: 10,
          ...style,
        }}
        // placeholderTextColor={colors.medium}
        value={value}
        {...otherProps}
      />
    );
  return (
    <input
      style={{ ...styles.textInput, ...style }}
      placeholderTextColor={colors.medium}
      value={value}
      className={className}
      {...otherProps}
    />
  );
};

// import colors from '../config/colors';
// import defaultStyles from '../config/styles';
// import Avatar from './Avatar';

const colors = {
  light: 'lightgrey',
  medium: 'grey',
  dark: 'black',
};

export default function TextInput({
  className,
  icon,
  disabled,
  disableInput,
  width = '100%',
  value,
  containerStyle,
  children,
  dim,
  size,
  submitIcon,
  styleIcon,
  styleSubmitIcon,
  onSubmit,
  onClick,
  textArea,
  style,
  iconClassName,
  wrapperClassName,
  ...otherProps
}) {
  // return <div>nothing here</div>;
  return (
    <div
      style={{
        // ...styles.container,
        width: width,
        ...containerStyle,
        justifyContent: submitIcon ? 'space-between' : 'flex-start',
      }}
      className={`py-1 px-4 my-3 relative rounded-xl border border-black flex ${wrapperClassName}`}
    >
      {icon && (
        <div style={styleIcon} className={`mr-3 flex ${iconClassName}`}>
          <Image
            src={icon}
            // src='/icons/email-outline.svg'
            width={20}
            height={20}
            // layout='fill'
            // objectFit='cover'
            // size={20}
            // color={colors.medium}
            // style={{ ...styles.icon, ...styleIcon }}
          />
        </div>
      )}
      {disableInput ? (
        <div style={styles.textInput}>
          <div dim={dim} size={size}>
            {/* <Text dim={dim} size={size}> */}
            {value}
            {/* </Text> */}
          </div>
        </div>
      ) : (
        <Input
          textArea={textArea}
          value={value}
          style={style}
          className={className}
          {...otherProps}
        />
        // <input
        //   style={styles.textInput}
        //   placeholderTextColor={colors.medium}
        //   value={value}
        //   {...otherProps}
        // />
      )}
      {submitIcon && (
        <button
          style={{ ...styles.buttonUnstyled, ...styles.submitWrapper }}
          onClick={onSubmit}
          disabled={disabled}
          style={{ right: 0 }}
        >
          <img src={submitIcon} style={styleSubmitIcon} />
        </button>
      )}
    </div>
  );
}

const styles = {
  buttonUnstyled: {
    display: 'inline-block',
    border: 'none',
    padding: '1rem 2rem',
    margin: 0,
    textDecoration: 'none',
    // background: '#0069ed',
    background: 'transparent',
    color: '#fffff',
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
    // transition: 'back ground 250ms ease-in-out, transform 150ms ease',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '&:focus': {
      background: '#ffffff',
      outline: '1px solid #fff',
      outlineOffset: -4,
    },
    '&:hover': {
      background: '#ffffff',
    },
    '&:active': {
      transform: 'scale(0.99)',
    },
  },
  container: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: '0 15px 0 15px',
    margin: '10px 0 10px',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  icon: {
    marginRight: 10,
  },
  submitWrapper: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.medium,
  },
  textInput: {
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
};
