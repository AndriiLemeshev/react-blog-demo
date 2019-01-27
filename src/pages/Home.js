import React from 'react';
import PostTeaser from "../components/PostTeaser";

const Home = (props) => (
    <div className={"container my-1"}>
        <PostTeaser title={"Hello World"}
                    body={"Lorem ipsum dolores sit amer. Lorem ipsum dolores sit amer. "}/>
        <PostTeaser title={"Blah-blah"}
                    body={"Lorem ipsum dolores sit amer. Lorem ipsum dolores sit amer. "}/>
        <PostTeaser title={"Ku-ku-ku"}
                    body={"Lorem ipsum dolores sit amer. Lorem ipsum dolores sit amer. "}/>
    </div>
);

export default Home;