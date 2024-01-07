import { useState } from "react"

export const Contact =()=>{

    const [user,setUser] = useState({
        username :"",
        email:"",
        message:"",
    });
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
       setUser({...user,[name]:value});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
    }

    
    return (
        <>
        <section>
            <main>
                <div className="section-contact">
                    <div className="container grid grid-two-cols">
                    
                        <div className="contact-image">
                            <h1>Contact Us</h1>
                            <br />
                            <img src="./images/support.png" alt="support.png" width={400} height={400} />
                        </div>
                        <div className="contact-form">  
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" placeholder="Enter Your Username here.." name="username" autoComplete="off" value={user.username} onChange={handleInput} required/>
                                </div>
                                <div>
                                    <label htmlFor="username">Email</label>
                                    <input type="email" id="email" placeholder="Enter Your Email here.." name="email" autoComplete="off" value={user.email} onChange={handleInput} required/>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder="Drop Your Message Here.." cols="50" rows="6" autoComplete="off" maxLength={120} value={user.message} onChange={handleInput} required></textarea>
                                </div>
                                <br />
                                <button className="btn btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1955302176007!2d80.93366967561172!3d26.833732563479952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd15f15582bf%3A0x33c00515a209da85!2scodeviq!5e0!3m2!1sen!2sin!4v1704471623954!5m2!1sen!2sin" width="100%" height="350" allowFullScreen="yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            
                </div>

            </main>
        </section>
        </>
    )
}
