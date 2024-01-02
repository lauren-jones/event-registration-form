import coder from "./assets/coder.svg";
import firework from "./assets/firework.svg";
import "@fontsource/poppins";
import { Input } from "./components/input";
import { Checkbox } from "./components/checkbox";
import { useState } from "react";
import { attendee } from "./types/attendee";
import { validationResult } from "./types/validationResult";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "./validation/functions/attendee";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [attendee, setAttendee] = useState<attendee>({
    name: "",
    email: "",
    phone: "",
    techInterests: [
      {
        tech: "React",
        checked: false,
      },
      {
        tech: "Node JS",
        checked: false,
      },
      {
        tech: "TypeScript",
        checked: false,
      },
      {
        tech: "Angular",
        checked: false,
      },
      {
        tech: "AWS",
        checked: false,
      },
    ],
  });

  const [nameValidationResult, setNameValidationResult] =
    useState<validationResult>(validateName(attendee.name));

  const [emailValidationResult, setEmailValidationResult] =
    useState<validationResult>(validateEmail(attendee.email));

  const [phoneValidationResult, setPhoneValidationResult] =
    useState<validationResult>(validatePhone(attendee.phone));

  const updateTechInterests = (id: number) => {
    let nextTechInterests = attendee.techInterests.map(
      (techInterest, index) => {
        if (index === id) {
          return {
            ...techInterest,
            checked: !techInterest.checked,
          };
        } else return techInterest;
      }
    );

    setAttendee({ ...attendee, techInterests: nextTechInterests });
  };

  return (
    <div
      className={`flex flex-col min-h-screen items-center w-full md:px-[20px] min-h-screen justify-center items-center ${
        isRegistered ? "bg-bgPrimary" : "bg-bgSecondary md:bg-accent"
      }`}
    >
      {!isRegistered && (
        <div className="w-full max-w-[812px] flex flex-col gap-[16px] pt-[60px] md:py-[40px] md:flex-row md:gap-0">
          <div className="flex flex-col justify-center items-center w-[325px] gap-[6px] w-full md:bg-bgSecondary md:rounded-l-3xl">
            <p className="text-base font-normal text-center md:text-xl">
              Join us for the
            </p>
            <h2 className="text-4xl font-semibold text-center md:text-5xl">
              CodeBelle Hackathon
            </h2>
            <div>
              <img src={coder} className="" />
            </div>
          </div>
          <div className="bg-bgPrimary flex flex-col gap-[30px] px-[30px] py-[50px] w-full rounded-t-3xl md:rounded-l-none md:rounded-r-3xl">
            <Input
              label="Name"
              value={attendee.name}
              onChange={(name: string) =>
                setAttendee({ ...attendee, name: name })
              }
              placeholder="Ada Lovelace"
              validationResult={nameValidationResult}
              setValidationResult={(name: string) =>
                setNameValidationResult(validateName(name))
              }
            />
            <Input
              label="Email"
              value={attendee.email}
              onChange={(email: string) =>
                setAttendee({ ...attendee, email: email })
              }
              placeholder="adalovelace@gmail.com"
              validationResult={emailValidationResult}
              setValidationResult={(email: string) =>
                setEmailValidationResult(validateEmail(email))
              }
            />
            <Input
              label="Phone"
              value={attendee.phone}
              onChange={(phone: string) =>
                setAttendee({ ...attendee, phone: phone })
              }
              placeholder="01234 567 890"
              validationResult={phoneValidationResult}
              setValidationResult={(phone: string) =>
                setPhoneValidationResult(validatePhone(phone))
              }
            />
            <div className="flex flex-col gap-[6px]">
              <p className="text-sm font-medium text-textPrimary md:text-base">
                Areas of interest
              </p>
              {attendee.techInterests.map((techInterest, index) => {
                return (
                  <Checkbox
                    techInterest={techInterest}
                    onChange={(index: number) => updateTechInterests(index)}
                    index={index}
                  />
                );
              })}
            </div>
            <button
              className="bg-action text-bgPrimary text-base font-semibold rounded py-[10px] hover:bg-focus"
              onClick={(e) => {
                e.preventDefault();
                setIsRegistered(true);
              }}
              disabled={
                !(
                  nameValidationResult.isValid &&
                  emailValidationResult.isValid &&
                  phoneValidationResult.isValid
                )
              }
            >
              Register
            </button>
          </div>
        </div>
      )}
      {isRegistered && (
        <div className="flex flex-col gap-[16px] justify-center items-center">
          <img src={firework} className="w-[200px] md:w-[350px] h-auto" />
          <p className="text-textPrimary text-lg font-medium md:text-2xl">
            See you there
          </p>
          <p className="text-3xl font-semibold md:text-5xl text-textPrimary">
            You're signed up!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
