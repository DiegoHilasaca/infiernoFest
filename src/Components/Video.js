import React from 'react'


const Video = () => {
    return (
        <div class="card">
            {/*<img src="..." class="card-img-top" alt="..."/>*/}
            <iframe className="card-img-top embed-responsive-item" src="https://player.vimeo.com/video/487830882" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <div class="card-body">
                <h5 className="card-title text-dark">video</h5>
                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    )
}

export default Video
