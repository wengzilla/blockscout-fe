import type { drawerAnatomy as parts } from '@chakra-ui/anatomy';
import type { SystemStyleFunction, PartsStyleFunction, SystemStyleObject } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';
const transitionProps = getDefaultTransitionProps();

const baseStyleOverlay: SystemStyleObject = {
  ...transitionProps,
  bg: 'blackAlpha.800',
  zIndex: 'overlay',
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: '100vh' }),
    ...transitionProps,
    zIndex: 'modal',
    maxH: '100vh',
    bg: mode('white', 'gray.900')(props),
    color: 'inherit',
    boxShadow: mode('lg', 'dark-lg')(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialog: baseStyleDialog(props),
});

const Drawer = {
  baseStyle,
};

export default Drawer;