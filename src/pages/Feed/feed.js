import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../Feed/feed.css';



import HeaderMain from "../../components/HeaderMain/HeaderMain";


function Feed() {
    const [posts, setPosts] = useState();




    useEffect(() => {
        axios.get("https://new-project-app.herokuapp.com/list_posts")
            .then((response) => {
                setPosts(response.data.posts);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("deu errado")
                console.log(error);
            })
    }, [])

    return (

        <div>

            <HeaderMain />

            <main>

                <div className="cards">

                    {posts && posts.map((post, key) => {
                        console.log(posts);

                        return (

                            <div className="card" key={key} >

                                <header>
                                    <h2>{post.title}</h2>
                                    {/* <img src={More} /> */}
                                </header>

                                <div className="line"></div>

                                <p>{post.description}</p>

                                <div className="btns" >

                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/edit/${post._id}` }} >
                                            <button>Edit</button>
                                        </Link>
                                    </div>

                                    <div className="btn-readmore" >
                                        <Link to={{ pathname: `/lermais/${post._id}` }} >
                                            <button>Ler mais</button>
                                        </Link>
                                    </div>

                                    <div className="btn-delete" >
                                        <button >delete</button>
                                    </div>

                                </div>
                            </div>
                        )

                    })}


                </div>

            </main>

        </div>
    )
}

export default Feed