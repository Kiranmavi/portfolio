import React from "react";

export default function ContactMe({closeModal}){
    return(
        <div className="fixed z-999 top-0 left-0 flex items-center justify-center w-full h-[100vh] bg-black/20" onClick={closeModal}>
            <form action="https://kiranmavi5502@gmail.com" method="POST" className="flex w-[60%] h-[60vh]">
                <input type="text" name="name" placeholder="Your Name" required className="border p-2" />
                <input type="email" name="email" placeholder="Your Email" required className="border p-2" />
                <textarea name="message" placeholder="Your Message" required className="border p-2" />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4">Send</button>
            </form>
        </div>
    )
}