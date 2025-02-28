import React, { useState, useEffect } from 'react';
import getTopScore from '../server/connect';

function Stats() {
    // const [topScore, setTopScore] = useState<number | null>(null);

    // const fetchTopScore = async () => {
    //     const score = await getTopScore();
		
    //     setTopScore(score);
    // };

    // useEffect(() => {
    //     fetchTopScore();
    // }, []);

    return (
        <section>
            <p>Stats menu</p>
            <br />
            {/* <p>{topScore !== null ? topScore : 'Loading...'}</p> */}
        </section>
    );
}

export default Stats;

