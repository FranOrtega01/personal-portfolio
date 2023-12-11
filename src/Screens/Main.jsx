import React, { useState } from 'react'
import { DotsContainer } from '../Components/Background/DotsContainer';


export const Main = () => {
    const [allowMove, setAllowMove] = useState(true);

    return (
        <>
            <DotsContainer allowMove={allowMove} />
            {/* <Home /> */}
            

        </>

    );
}
