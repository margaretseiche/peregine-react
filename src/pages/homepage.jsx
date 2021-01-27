import React from 'react';

function Homepage() {
    return (
        <div id="main">
            <h5>Peregrine</h5>
            <h2>Find your wanderlust.</h2>
            <div className="ui search">

                <div className="results"></div>
                <button className="ui button" id="peregrineDB-search">
                    Submit
                </button>
            </div>
            <h6>Or create a review!</h6>
            <div className="ui large inverted button" id="submit"><a className="item" href="post.html">Create</a> <i
                className="right arrow icon"></i></div>
        </div>
    )
}

export default Homepage;