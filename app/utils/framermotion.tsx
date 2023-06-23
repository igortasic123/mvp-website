import { useInView } from "framer-motion";


export const slideIn = (
    direction:any,
    type:any,
    delay:any,
    duration:any,
    useInView:any
    
    ) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

    export const slideUp = (
    


    type:any,
    delay:any,
    duration:any

    ) => ({

    hidden: {
      y: '100%',
    },

    show: {
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },

    exit: {
      y: '100%',
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
    });


    export const slideDown = (
        
        type:any,
        delay:any,
        duration:any

        ) => ({
        hidden: {
          y: '-100%',
        },

        show: {
          y: 0,
          transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
          },
        },

        exit: {
          y: '-100%',
          transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
          },
        },
        });

