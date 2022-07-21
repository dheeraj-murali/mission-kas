import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TelegramIcon } from "../icons/TelegramIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

export const SocialHeader = () => {
  return (
    <div className="flex items-center justify-center p-6 border-b border-gray-300 lg:justify-between">
      <div className="hidden mr-12 lg:block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div className="flex justify-center">
        <a href="https://www.youtube.com/channel/UC9urjbvYBqLWfGFmSrfOlAw" target="blank" className="mr-6 text-gray-600">
         <YoutubeIcon />
        </a>
        <a href="https://t.me/missionkasonline" target="blank" className="mr-6 text-gray-600">
          <TelegramIcon />
        </a>
        <a href="#!" target="blank" className="mr-6 text-gray-600">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/MissionKASonline/" target="blank" className="mr-6 text-gray-600">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/missionkas" target="blank" className="mr-6 text-gray-600">
         <TwitterIcon />
        </a>
        <a href="https://wa.me/918848498679?text=" target="blank" className="text-gray-600">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};
