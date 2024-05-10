import aboutImg from "../../../public/donate/img.3.webp";
import { MdOutlineSocialDistance } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
const AboutUs = () => {
  return (
    <div className="grid grid-cols-3 p-4">
      <div className="col-span-2">
        <h1 className="text-5xl text-center font-extrabold">
          Breaking Barriers: Overcoming <br /> Challenges Through Your Support
        </h1>
        <p className="text-2xl p-4">
          Our mission is to create a world where everyone has access to
          essential resources, opportunities, and support. By joining our
          community of compassionate givers, you become an integral part.
        </p>
        <div className="grid grid-cols-3 gap-2 p-4">
          <div>
            <MdOutlineSocialDistance className="text-4xl text-red-500 my-4" />
            <h1 className="text-2xl font-bold">Social Impact</h1>
            <p>Charity organizations play a crucial role in addressing</p>
          </div>
          <div>
            <GiThreeFriends className="text-4xl text-red-500 my-4" />
            <h1 className="text-2xl font-bold">Community Building</h1>
            <p>Charity organizations play a crucial role in addressing</p>
          </div>
          <div>
            <GrOptimize className="text-4xl text-red-500 my-4" />
            <h1 className="text-2xl font-bold">Personal Growth</h1>
            <p>Charity organizations play a crucial role in addressing</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img src={aboutImg} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
