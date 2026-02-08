import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../Schame/Register/Register";

export default function Register() {
  ///  vaildation

  function onSubmitForm(data) {
    console.log(data);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
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
  console.log(errors);

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
          <RadioGroup {...register("gender")} label="Select gender">
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </RadioGroup>
          <Button color="secondary" type="submit">
            {" "}
            Sign UP
          </Button>
        </form>
      </div>
    </section>
  );
}
