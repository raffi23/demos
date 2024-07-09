import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../utils";

const Input: FC<{ label: string } & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  name,
  className,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className={cn("border rounded-md px-2 py-1", className)}
        {...rest}
      />
    </div>
  );
};

const Content03 = () => {
  return (
    <div
      id="content-03"
      className="relative rounded-3xl overflow-hidden flex flex-col items-center"
    >
      <img
        src="/challenges/01/300sl-1.jpg"
        className="absolute -z-10 brightness-50 inset-0 w-full h-full object-cover"
      />

      <div className="text-white flex flex-col gap-2 items-center mb-28 mt-14">
        <p>Mercedes 300 SL</p>
      </div>

      <div className="w-2/3">
        <div
          id="form"
          className="bg-white w-full rounded-3xl p-6 pb-0 rounded-b-none space-y-2"
        >
          <h4 className="text-lg text-center">Login to your account</h4>
          <form>
            <Input label="Username" name="username" defaultValue="raffi" />
            <Input
              label="Password"
              name="password"
              type="password"
              defaultValue="raffi123123123"
              className="mb-4"
            />

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  style={{ appearance: "none" }}
                  className="bg-lime-200 w-4 h-4 border-2 border-black rounded"
                />
                <label htmlFor="remember" className="text-sm">
                  Remember me
                </label>
              </div>

              <a className="text-xs text-[#aeaeae]" href="/">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-2xl"
            >
              login
            </button>
          </form>
        </div>
        <div
          id="drawer"
          className="relative -z-10 h-36 border-[1.5rem] rounded-3xl rounded-t-none border-white w-full"
        ></div>
      </div>
    </div>
  );
};

export default Content03;
