import React from 'react';
import Course from './Course/Course';
import Head from './Head/Head';
import Head2 from './Head2/Head2';
import Head3 from './Head3/Head3';
import Head4 from './Head4/Head4';
import Head5 from './Head5/Head5';
import Purpose from './Purpose/Purpose';
import { AnimatePresence } from 'framer-motion'

const Home = () => {

    return(
        <AnimatePresence>
            <>
                <Head />
                <Head2 />
                <Purpose />
                <Head3 />
                <Head4 />
                <Head5 />
                <Course />
            </>
        </AnimatePresence>
    )
}

export default Home;