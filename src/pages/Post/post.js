import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/header";
import { useForm } from 'react-hook-form';
import '../Post/post.css'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const validarPost = yup.object().shape({
    title: yup.string().required("O titulo é obrigatório").max(40, "O titulo precisa ter menos de 30 caracteres"),
    description: yup.string().required("A descrição é obrigatória").max(150, "A descrição precisa ter menos de 150 caracteres"),
    content: yup.string().required("O conteudo é obrigatório").max(500, "O conteudo precisa ter menos de 500 caracteres")
})

function Post() {
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validarPost)
    });

    const addPost = data => axios.post("https://new-project-app.herokuapp.com/create_post", data)
        .then(() => {
            console.log("deu certo")
            navigate("/");
        }).catch(() => {
            console.log("deu errado")
        })

    return (
        <div>
            <Header />
            <main>
                <div className="card-post">

                    <h1>Criar postagem</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>titulo</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")}></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>
                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </main>
        </div>

    )
}

export default Post;