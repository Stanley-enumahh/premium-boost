import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <div className="w-full flex justify-center relative h-screen items-center">
      <div className=" flex w-full md:w-[70%] justify-center flex-row h-[85%]">
        <div className="flex flex-col w-[85%] md:w-[50%] h-fit mt-[40px] md:mt-[70px] justify-center gap-4">
          <h1 className="text-[#031D3D] font-semibold text-2xl">
            {" "}
            Welcome back, login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 h-full w-full mt-3"
          >
            <div className="flex flex-col gap-3">
              <Label htmlFor="username">Email</Label>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className={`border p-2 w-full rounded-md ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Link
              to="/forget-password"
              className=" text-blue-400 underline flex flex-row gap-1 items-center text-xs"
            >
              forget password
            </Link>
            <Button
              // disabled={isPending}
              type="submit"
              className="bg-bluedark hover:bg-bluedark/90 w-full mt-5 button-shadow px-6 py-[8px] rounded-[10px] text-white disabled:bg-gray-400"
            >
              {/* {isPending ? "logging in" : "login"} */}
              login
            </Button>
          </form>

          <p className="flex flex-row gap-1 items-center text-xs">
            Don't have an account?
            <Link to="/signup" className=" text-blue-400 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
