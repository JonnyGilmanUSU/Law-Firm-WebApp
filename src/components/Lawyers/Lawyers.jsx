import React from 'react'
import Main from '../UI/Main/Main'

const Lawyers = ({ data }) => {
    return (
        <Main>
            <h1>Our Lawyers</h1>
            {Object.keys(data).map(title =>
                <div className="section" key={title}>
                    <h2>{title}</h2>
                    <ul>
                        {data[title].map((lawyer) => {

                            //Build a path to the image
                            const imagePath = new URL(`../../assets/images/${lawyer.image}`, import.meta.url).href;

                            return (
                                <li>
                                    <div className="frame4">
                                        <div className="box">
                                            <img src={imagePath} alt="Img" height="94" width="90" />
                                        </div>
                                    </div>
                                    <p>
                                        <b>{lawyer.name}</b> {lawyer.bio}
                                    </p>
                                </li>
                            )
                        })}


                    </ul>
                </div>

            )}

        </Main>
    )
}

export default Lawyers