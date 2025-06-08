import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SignupFormInputs = {
  email: string;
  password: string;
  username: string;
};

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center relative h-screen items-center">
      <Link
        to="/"
        className="absolute top-[30px] flex flex-row gap-2 items-center left-[20px] text-xs px-4 py-1 rounded shadow"
      >
        <FaArrowLeftLong /> back to landing page
      </Link>
      <div className=" flex w-full items-start md:mt-0 mt-[90px] md:items-center md:w-[70%] h-[85%] justify-center">
        <div className="flex flex-col w-[85%] md:w-[50%] justify-center gap-4">
          <h1 className="text-[#031D3D] font-semibold text-2xl">
            Create an account
          </h1>

          {/* register form */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full mt-3"
          >
            <div className="flex flex-col gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
                className={`border p-2 w-full rounded-md ${
                  errors.username ? "border-red-500" : ""
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className={`border p-2 w-full rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`border p-2 w-full rounded-md ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              // disabled={isPending}
              type="submit"
              className="bg-bluedark hover:bg-bluedark/90 w-full button-shadow px-6 py-[8px] rounded-[10px] text-white disabled:bg-gray-400"
            >
              {/* {isPending ? "creating account" : "sign up"} */}
              sign up
            </Button>
          </form>

          <p className="flex flex-row gap-1 items-center text-xs">
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-400 underline">
              Login
            </Link>
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
