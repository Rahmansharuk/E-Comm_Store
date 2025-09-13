import { useState } from "react"

const Contactold = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Mesg:", msg);
    }

    return (
        <>
            <p className="text-center bg-blue-400">Contact Form</p>

            <div>
                <form className="flex flex-col items-center bg-slate-400 p-10 gap-3"
                onSubmit={handleSubmit}
                >
                    <label htmlFor="Name">Name</label>
                    <input id="name" type="name"
                        className="border border-red-500"
                        onChange={(e) => {
                            setName(e.target.value) //RE render the component
                        }}
                    />

                    <label htmlFor="Email">E-mail</label>
                    <input id="email" type="email"
                        className="border border-red-500"
                        onChange={(e) => {
                            setEmail(e.target.value) //RE render the component
                        }}
                    />

                    <label htmlFor="Message">Message</label>
                    <textarea
                        className="border border-red-500 w-[180px]"
                        onChange={(e) => {
                            setMsg(e.target.value) //RE render the component
                        }}
                    ></textarea>

                    <button
                        className="px-3 py-2 rounded-lg bg-green-500 text-white"
                        type="submit"
                    >Submit</button>

                </form>
            </div>

        </>
    )
}

export default Contactold