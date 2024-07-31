import SectionTitle from "./shared/SectionTitle.tsx";
import RadioGroup from "./shared/RadioGroup.tsx";
import TextInput from "./shared/TextInput.tsx";
import TextArea from "./shared/TextArea.tsx";
import Button from "./shared/Button.tsx";

function ContactUs() {
  return (
    <div className="mt-[100px]">
      <SectionTitle title="Contact Us">
        <p>
          Connect with Us: Let's Discuss Your
          <br className="hidden desktop:inline" />
          Digital Marketing Needs
        </p>
      </SectionTitle>
      <div className="flex justify-between mt-[80px] rounded-[45px] bg-p-grey overflow-hidden">
        <div className="flex flex-col flex-grow justify-start w-full lg:max-w-[650px] p-7 lg:p-16 z-10">
          <div className="flex gap-8">
            <RadioGroup
              options={[
                { name: "Say Hi", value: "say-hi" },
                { name: "Get a Quote", value: "get-quote" },
              ]}
            />
          </div>
          <TextInput label="Name" placeholder="Name" containerClassName="mt-[40px]" />
          <TextInput label="Email" placeholder="Email" type="email" required containerClassName="mt-[25px]" />
          <TextArea label="Message" placeholder="Message" required containerClassName="mt-[25px]" />
          <Button className="py-5 mt-[40px]">
            Send Message
          </Button>
        </div>
        <div className="hidden lg:flex flex-grow relative my-16">
          <svg height="100%" viewBox="0 0 651 649" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-[310px]">
            <path
              d="M325.641 162.061L346.068 0.5L345.909 163.337L386.445 5.60362L366.017 167.165L426.024 15.6514L385.488 173.545L464.007 30.6432L403.841 182.157L499.756 50.2603L421.077 193.162L532.632 74.343L436.876 206.08L562.475 102.253L450.761 220.913L588.489 133.673L462.73 237.499L610.353 168.122L472.625 255.362L627.749 204.964L480.126 274.341L640.356 243.719L485.233 294.118L648.017 283.751L487.786 314.213L650.57 324.42L487.786 334.628L648.017 365.09L485.233 354.883L640.356 405.121L480.126 374.659L627.749 444.036L472.625 393.638L610.353 480.878L462.73 411.501L588.489 515.328L450.761 427.928L562.475 546.747L436.876 442.76L532.632 574.657L421.077 455.838L499.756 598.58L403.841 466.684L464.007 618.197L385.488 475.455L426.024 633.189L366.017 481.676L386.445 643.396L345.909 485.503L346.068 648.5L325.641 486.779L305.213 648.5L305.213 485.503L264.676 643.396L285.264 481.676L225.257 633.189L265.794 475.455L187.274 618.197L247.44 466.684L151.526 598.58L230.205 455.838L118.49 574.657L214.405 442.76L88.8058 546.747L200.52 427.928L62.7923 515.328L188.551 411.501L40.9282 480.878L178.656 393.638L23.5326 444.036L171.155 374.659L10.9248 405.121L166.048 354.883L3.26441 365.09L163.495 334.628L0.710937 324.42L163.495 314.213L3.26441 283.751L166.048 294.118L10.9248 243.719L171.155 274.341L23.5326 204.964L178.656 255.362L40.9282 168.122L188.551 237.499L62.7923 133.673L200.52 220.913L88.8058 102.253L214.405 206.08L118.49 74.343L230.205 193.162L151.526 50.2603L247.44 182.157L187.274 30.6432L265.794 173.545L225.257 15.6514L285.264 167.165L264.676 5.60362L305.213 163.337V0.5L325.641 162.061Z"
              stroke="black"
              strokeWidth="1"
              strokeMiterlimit="10"
            />
          </svg>
          <svg height="220" viewBox="0 0 253 253" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[200px] right-[120px]">
            <path
              d="M171.102 82.0649L252.777 126.566L171.102 171.425L126.422 252.922L81.7418 171.425L0.0665586 126.566L81.7418 82.0649L126.422 0.210938L171.102 82.0649Z"
              fill="#191A23"
            />
          </svg>
          <svg height="120" viewBox="0 0 253 253" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[470px] right-[250px]">
            <path
              d="M171.102 82.0649L252.777 126.566L171.102 171.425L126.422 252.922L81.7418 171.425L0.0665586 126.566L81.7418 82.0649L126.422 0.210938L171.102 82.0649Z"
              fill="#B9FF66"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;