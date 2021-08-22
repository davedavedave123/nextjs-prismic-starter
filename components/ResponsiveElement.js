import React, { useEffect, forwardRef } from 'react';

import useBreakPoints from '../hooks/useBreakPoints';

const objIsEmpty = obj => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

const Tag = forwardRef(
  (
    {
      children,
      CustomType,
      style_sm,
      style_md,
      style_lg,
      style_xl,
      style_xxl,
      style_smDown,
      style_mdDown,
      style_lgDown,
      style_xlDown,
      style_xxlDown,
      style_smUp,
      style_mdUp,
      style_lgUp,
      style_xlUp,
      style_xxlUp,
      style,
      type,
      ...otherProps
    },
    ref
  ) => {
    const TagType = type == 'img' ? 'img' : type == 'span' ? 'span' : 'div';

    const {
      isSm,
      isMd,
      isLg,
      isXl,
      isXxl,
      isSmDown,
      isMdDown,
      isLgDown,
      isXlDown,
      isXxlDown,
      isSmUp,
      isMdUp,
      isLgUp,
      isXlUp,
      isXxlUp,
    } = useBreakPoints();

    let styles = {};

    if (isSm && style_sm) styles = { ...style, ...style_sm };
    if (isMd && style_md) styles = { ...style, ...style_md };
    if (isLg && style_lg) styles = { ...style, ...style_lg };
    if (isXl && style_xl) styles = { ...style, ...style_xl };
    if (isXxl && style_xl) styles = { ...style, ...style_xl };

    // DOWN
    if (isSmDown && style_smDown) styles = { ...style, ...style_smDown };
    if (isMdDown && style_mdDown) styles = { ...style, ...style_mdDown };
    if (isLgDown && style_lgDown) styles = { ...style, ...style_lgDown };

    if (isXlDown && style_xlDown) styles = { ...style, ...style_xlDown };
    if (isXxlDown && style_xxlDown) styles = { ...style, ...style_xxlDown };

    // UP
    if (isSmUp && style_smUp) styles = { ...style, ...style_smUp };
    if (isMdUp && style_mdUp) styles = { ...style, ...style_mdUp };
    if (isLgUp && style_lgUp) styles = { ...style, ...style_lgUp };
    if (isXlUp && style_xlUp) styles = { ...style, ...style_xlUp };
    if (isXxlUp && style_xxlUp) styles = { ...style, ...style_xxlUp };

    if (objIsEmpty(styles)) styles = { ...style };

    if (CustomType && children)
      return (
        <CustomType style={styles} {...otherProps} ref={ref}>
          {children}
        </CustomType>
      );

    if (CustomType && !children)
      return <customType style={styles} {...otherProps} ref={ref} />;

    if (type === 'img') return <img style={styles} {...otherProps} ref={ref} />;

    return (
      <TagType style={styles} {...otherProps} ref={ref}>
        {children}
      </TagType>
    );
  }
);

export const Div = forwardRef((props, ref) => {
  return (
    <Tag type='div' {...props} ref={ref}>
      {props.children}
    </Tag>
  );
});

export const Img = forwardRef((props, ref) => {
  return <Tag type='img' {...props} ref={ref} />;
});

export const Span = forwardRef((props, ref) => {
  return (
    <Tag type='span' {...props} ref={ref}>
      {props.children}
    </Tag>
  );
});

export default Tag;
