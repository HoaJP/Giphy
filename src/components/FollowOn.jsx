import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="font-bold text-sm text-gray-400 pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.facebook.com/luong.manh.hoa.2025/">
          <FaFacebook size={20} />
        </a>
        <a href="https://www.instagram.com/manhhoa291211/">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/itlmh23">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
