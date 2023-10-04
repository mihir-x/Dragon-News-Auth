import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-2 space-y-3 mb-5'>
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>

            <div className='p-2'>
                <h2 className="text-2xl font-semibold mb-3">Find Us On</h2>
                <a href="" className='p-4 flex gap-3 items-center text-lg border rounded-t-md'><FaFacebookF></FaFacebookF> Facebook </a>
                <a href="" className='p-4 flex gap-3 items-center text-lg border-x'><FaTwitter></FaTwitter> Twitter </a>
                <a href="" className='p-4 flex gap-3 items-center text-lg border rounded-b-md'><FaInstagram></FaInstagram> Instagram </a>
            </div>

            <div className='p-2 space-y-3 mb-5'>
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;