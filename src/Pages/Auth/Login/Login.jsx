import React, { useState } from "react";
import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
 
import { Alert } from "@heroui/alert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { sendLoginRequest } from "../../../Services/Login.service";
import { loginSchema } from "../../Schame/Register/Login";
export default function Login() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmitForm(data) {
    setIsError(false);
    setIsSuccess(false);
    try {
      let response = await sendLoginRequest(data);
      console.log(response);
      setIsSuccess(true);
      setIsError(false);
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsSuccess(false);
      toast.error("Something went wrong");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="w-full md:w-1/2 ">
          <h1 className="text-4xl text-secondary text-center font-bold mb-5">
            Login
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            {isError ? (
              <Alert color="danger" title={`Something went wrong`} />
            ) : null}
            {isSuccess ? (
              <Alert color="success" title={`Account created successfully`} />
            ) : null}
            <Input
              {...register("email")}
              type="text"
              label="User Email "
              variant="bordered"
            />
            {errors.email && (
              <p className="text-red-500"> {errors.email?.message}</p>
            )}
            <Input
              {...register("password")}
              type="password"
              label="Password"
              variant="bordered"
            />
            {errors.password && (
              <p className="text-red-500"> {errors.password?.message}</p>
            )}

            <Button isLoading={isSubmitting} color="secondary" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
