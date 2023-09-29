"use client"
import { useState } from "react";
import Image from "next/image";
import loadingImage from "@/assets/loading-25.gif"
import { validator } from "@/validators/validatorContact";

const Page = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [sentEmail, setSentEmail] = useState(false)
    const [isError, setIsError] = useState(false)

    const [info, setInfo] = useState({
        name: "",
        work: "",
        contact: ""
    })

    const handlerChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
        setIsError(false)
    }

    const handlerSubmit = async e => {
        e.preventDefault()

        if (!validator(info.contact)) return setIsError(true)

        setIsLoading(true)
        const res = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(info)
        })
        const data = await res.json()
        if (data.id) {
            setSentEmail(true)
            setIsLoading(false)
            setInfo({
                name: "",
                work: "",
                contact: ""
            })
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="max-w-xs p-2 bg-white shadow-md rounded-lg">
                <h1 className="text-lg font-semibold mb-2 text-center">Contáctame por correo</h1>
                <div className="mb-2">
                    <label className="block text-gray-600 text-sm font-medium">Nombre:</label>
                    <input
                        placeholder="nombre empresa o el suyo"
                        onChange={handlerChange}
                        type="text"
                        name="name"
                        value={info.name}
                        className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-600 text-sm font-medium">Trabajo:</label>
                    <textarea
                        placeholder="breve descripción del cargo o el rol que necesite"
                        onChange={handlerChange}
                        name="work"
                        cols="30"
                        rows="5"
                        value={info.work}
                        className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    ></textarea>
                </div>
                <div className="mb-2">
                    <label className="block text-gray-600 text-sm font-medium">Medio de contacto:</label>
                    <input
                        placeholder="email o numero de telefono"
                        onChange={handlerChange}
                        type="text"
                        name="contact"
                        value={info.contact}
                        className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    />
                    {isError && <>lo que ingreso es invalido, intente con un email o telefono</>}
                </div>
                <div className="text-center flex items-center justify-center">
                    {
                        sentEmail ? <>Enviado</> : <button
                            type="submit"
                            onClick={handlerSubmit}
                            className="w-36 h-10 flex items-center justify-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                        >
                            {
                                isLoading ? <Image className="w-6 h-6 mr-2" src={loadingImage} alt="loading" /> : <>Enviar Mail</>
                            }
                        </button>
                    }
                </div>
            </form>
        </div>
    );
}

export default Page;
