import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: props => {
      return {
        body: {
          color: mode('gray.800', 'whiteAlpha.800')(props),
          bg: mode('gray.50', '#121212')(props),
        },
        // ignore this
        // a: {
        //   color: mode('purple.600', 'purple.300')(props),
        //   fontWeight: 'bold',
        //   _hover: {
        //     color: mode('gray.700', 'whiteAlpha.800')(props),
        //     color: mode('purple.600', 'purple.300')(props),
        //     textDecoration: 'underline',
        //   },
        // },
      };
    },
  },
  colors: {
    transparent: 'transparent',
    darkModal: 'rgba(255, 255, 255, 0.03)',
    orange: '#F6AD55',
    green: '#38A169',
    // your custom colors go here:
  },
  // you can override or add additional style props to components like below
  // IconButton: {
  //   sizes: {
  //     sm: {
  //       h: '32px',
  //       w: '32px',
  //     },
  //   },
  //   colorScheme: {
  //     purple: '#6B46C1',
  //   },
  // },
  // Button: {
  //   colorScheme: {
  //     purple: '#6B46C1',
  //   },
  // },
});

export default theme;
