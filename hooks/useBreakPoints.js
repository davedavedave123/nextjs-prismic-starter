import React, { useEffect, useReducer } from 'react';
import { useMediaQuery } from 'react-responsive';

const breakPoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const { key, value } = action.payload;
      return { ...state, [key]: value };
  }
};

const useBreakPoints = () => {
  const [state, dispatch] = useReducer(reducer, {
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    isXxl: false,
    isSmDown: false,
    isMdDown: false,
    isLgDown: false,
    isXlDown: false,
    isXxlDown: false,
    isSmUp: false,
    isMdUp: false,
    isLgUp: false,
    isXlUp: false,
    isXxlUp: false,
  });

  /////// WITHIN A RANGE ///////
  const isSm = useMediaQuery({
    query: `(max-width: ${breakPoints.sm}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isSm', value: isSm } });
  }, [isSm]);

  const isMd = useMediaQuery({
    query: `(min-width: ${breakPoints.sm}px) and (max-width: ${breakPoints.md}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isMd', value: isMd } });
  }, [isMd]);

  const isLg = useMediaQuery({
    query: `(min-width: ${breakPoints.md}px) and (max-width: ${breakPoints.lg}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isLg', value: isLg } });
  }, [isLg]);

  const isXl = useMediaQuery({
    query: `(min-width: ${breakPoints.lg}px) and (max-width: ${breakPoints.xl}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isXl', value: isXl } });
  }, [isXl]);

  const isXxl = useMediaQuery({
    query: `(min-width: ${breakPoints.xl}px) and (max-width: ${breakPoints.xxl}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isXxl', value: isXxl } });
  }, [isXxl]);

  /////// DOWN ///////
  const isSmDown = useMediaQuery({
    query: `(max-width: ${breakPoints.sm}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isSmDown', value: isSmDown } });
  }, [isSmDown]);

  const isMdDown = useMediaQuery({
    query: `(max-width: ${breakPoints.md}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isMdDown', value: isMdDown } });
  }, [isMdDown]);

  const isLgDown = useMediaQuery({
    query: `(max-width: ${breakPoints.lg}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isLgDown', value: isLgDown } });
  }, [isLgDown]);

  const isXlDown = useMediaQuery({
    query: `(max-width: ${breakPoints.xl}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isXlDown', value: isXlDown } });
  }, [isXlDown]);

  const isXxlDown = useMediaQuery({
    query: `(max-width: ${breakPoints.xxl}px)`,
  });
  useEffect(() => {
    dispatch({
      type: 'update',
      payload: { key: 'isXxlDown', value: isXxlDown },
    });
  }, [isXxlDown]);

  /////// UP ////////
  const isSmUp = useMediaQuery({
    query: `(min-width: ${breakPoints.sm}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isSmUp', value: isSmUp } });
  }, [isSmUp]);

  const isMdUp = useMediaQuery({
    query: `(min-width: ${breakPoints.md}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isMdUp', value: isMdUp } });
  }, [isMdUp]);

  const isLgUp = useMediaQuery({
    query: `(min-width: ${breakPoints.lg}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isLgUp', value: isLgUp } });
  }, [isLgUp]);

  const isXlUp = useMediaQuery({
    query: `(min-width: ${breakPoints.xl}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isXlUp', value: isXlUp } });
  }, [isXlUp]);

  const isXxlUp = useMediaQuery({
    query: `(min-width: ${breakPoints.xxl}px)`,
  });
  useEffect(() => {
    dispatch({ type: 'update', payload: { key: 'isXxlUp', value: isXxlUp } });
  }, [isXxlUp]);

  return state;
};

export default useBreakPoints;
