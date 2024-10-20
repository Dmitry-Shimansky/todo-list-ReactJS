import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Head = () => {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                  rel="stylesheet"/>
        </Helmet>
    )
}