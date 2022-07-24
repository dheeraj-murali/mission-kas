import { useLocale } from "../../hooks/useLocale";
import { AddressIcon } from "../icons/AddressIcon";
import { MailIdIcon } from "../icons/MailIdIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

export const Contact = () => {
  const t = useLocale([
    "CONTACT",
    "AR building, D-28, D-street, Sasthamangalam, Trivandrum, Kerala 695010",
  ]);
  return (
    <div>
      <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
        {t["CONTACT"]}
      </h6>
      <div className="grid grid-cols-8 mb-4 md:justify-start">
        <AddressIcon />
        <p className="col-span-7 text-left">
          {
            t[
              "AR building, D-28, D-street, Sasthamangalam, Trivandrum, Kerala 695010"
            ]
          }
        </p>
      </div>
      <div className="grid grid-cols-8 mb-4 md:justify-start">
        <MailIdIcon />
        <p className="col-span-7 text-left whitespace-pre-wrap">
          missionkasenquiry@gmail.com
        </p>
      </div>
      <div className="grid grid-cols-8 mb-4 md:justify-start">
        <PhoneIcon />
        <p className="col-span-7 text-left">+91-884-84986798</p>
      </div>
    </div>
  );
};
