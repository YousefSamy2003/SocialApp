import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "../../Schame/Register/Register";
import { sendSignUpRequest } from "../../../Services/Register.service";
import { Alert } from "@heroui/alert";
import { set } from "zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmitForm(data) {
    setIsError(false);

    setIsSuccess(false);
    try {
      let response = await sendSignUpRequest(data);
      console.log(response);
      setIsSuccess(true);
      setIsError(false);
      toast.success("Account created successfully");
     setTimeout(() => {
      navigate("/auth/signin");
     },3000)
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
    control,
    formState: { errors ,isSubmitting},
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    mode: "onBlur",
  });

  return (
    <section className="h-screen flex justify-center items-center ">
      <div className=" w-full md:w-1/2 mx-auto   p-3.75  rounded-xl  bg-white shadow-2xl">
        <h1 className="text-[30px] font-bold text-center my-4 text-secondary">
          Sign UP
        </h1>
        <form
          className="  flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          {isError ? (
            <Alert color="danger" title={`Something went wrong`} />
          ) : null}
          {isSuccess ? (
            <Alert color="success" title={`Account created successfully`} />
          ) : null}
          <Input
            {...register("name")}
            type="text"
            label="User Name "
            variant="bordered"
          />
          {errors.name ? (
            <p className="text-red-500">{errors.name?.message}</p>
          ) : null}
          <Input
            {...register("email")}
            ype="email"
            label="Email "
            variant="bordered"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Input
            {...register("password")}
            type="password"
            label="Password "
            variant="bordered"
          />
          {errors.password && (
            <p className="text-red-500"> {errors.password?.message}</p>
          )}
          <Input
            {...register("rePassword")}
            type="password"
            label="Confirm Password "
            variant="bordered"
          />
          {errors.rePassword && (
            <p className="text-red-500"> {errors.rePassword?.message}</p>
          )}
          <Input
            {...register("dateOfBirth")}
            type="date"
            label="Date of Birth"
            variant="bordered"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500"> {errors.dateOfBirth?.message}</p>
          )}
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <RadioGroup {...field} label="Select gender">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </RadioGroup>
            )}
          />
          {errors.gender && (
            <p className="text-red-500"> {errors.gender?.message}</p>
          )}
          <Button isLoading={isSubmitting} color="secondary" type="submit">
            {" "}
            Sign UP
          </Button>
        </form>
      </div>
    </section>
  );
}
