import pic from "./Images/nidhi.jpg";
import "../App.css"
import { FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
function Main() {
    return (
        <>
            <div className="container bg-slate-900 w-max rounded-lg">
                <img className="pic" src={pic} />
                <div className="main text-center">
                    <h3 className="text-3xl p-3 font-bold text-slate-50 ">Nidhi Kumari</h3>
                    <p className="text-sm font-semibold text-orange-300 text-center">Frontend Developer</p>
                    <div className="social flex py-3 justify-center">
                        <div className="social-email bg-slate-50 px-3 py-1 mx-1 font-semibold rounded-md w-28 text-center"><MdEmail /> Email</div>
                        <div className="social-email bg-cyan-500 px-3 py-1 mx-1 font-semibold rounded-md w-28 text-center text-slate-50 "><BsLinkedin /> LinkedIn</div>
                    </div>
                    <div className="content w-60 m-10">
                        <div className="about text-justify text-slate-50">
                            <p className="text-3xl font-bold text-slate-50 py-3">About</p>
                            <p>I am a frontend developer with a particular interest
                                in making things simple and automating daily
                                tasks. I try to keep up with security and best
                                practices, and am always looking for new things to
                                learn.</p>
                        </div>
                        <div className="interest text-left text-slate-50">
                            <p className="text-3xl font-bold text-slate-50 py-3">Interests</p>
                            <p>Sketching. Reader. Internet
                                fanatic. Travel geek. Coffee fanatic. Graphic Designing. Fitness.</p>
                        </div>
                    </div>
                </div>
                <div className="footer bg-zinc-900 flex w-fit px-20 py-2 space-x-5">
                    <div className="twitter"><FaTwitterSquare size="2em" color="#D9D9D9" /></div>
                    <div className="website"><FaFacebookSquare size="2em" color="#D9D9D9" /></div>
                    <div className="instagram"><FaInstagramSquare size="2em" color="#D9D9D9" /></div>
                    <div className="github"><FaGithubSquare size="2em" color="#D9D9D9" /></div>
                </div>
            </div>

        </>
    )
}

export default Main;