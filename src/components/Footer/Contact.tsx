import { AddressIcon } from "../icons/AddressIcon";
import { MailIdIcon } from "../icons/MailIdIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

export const Contact = () => {
  return (
    <div>
      <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
        Contact
      </h6>
      <p className="grid grid-cols-8 mb-4 md:justify-start">
        <AddressIcon />
        <div className="col-span-7 text-left">
          AR building, D-28, D-street, Sasthamangalam, Trivandrum, Kerala 695010
        </div>
      </p>
      <p className="grid grid-cols-8 mb-4 md:justify-start">
        <MailIdIcon />
        <div className="col-span-7 text-left whitespace-pre-wrap">missionkasenquiry@gmail.com</div>
      </p>
      <p className="grid grid-cols-8 mb-4 md:justify-start">
        <PhoneIcon />
        <div className="col-span-7 text-left">+91-884-84986798</div>
      </p>
    </div>
  );
};
