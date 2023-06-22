import { Link } from "@remix-run/react";
import { AkarIconsTwitterFill } from "../icons/social-icons";

const SocialIcons = () => {
  return (
    <div className="bg-transparent rounded-4 border border-white border-opacity-20 h-10">
      <div className="flex px-6 py-2.5 gap-6">
        <Link to="#">
          <AkarIconsTwitterFill />
        </Link>
        <Link to="#">
          <AkarIconsTwitterFill />
        </Link>
        <Link to="#">
          <AkarIconsTwitterFill />
        </Link>
        <Link to="#">
          <AkarIconsTwitterFill />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
