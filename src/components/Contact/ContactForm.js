"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("Your request has been sent! We’ll get back to you shortly.");
        reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending your request.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in w-full"
    >
      <textarea
        {...register("details", { required: true })}
        placeholder="Tell us about your car wash or detailing needs..."
        rows={5}
        className="w-full outline-none border-2 p-3 mx-0 focus:ring-0 placeholder:text-lg border-gray rounded-lg bg-transparent focus:border-dark dark:focus:border-light"
      />
      {errors.details && (
        <p className="text-red-500 mt-2">Please enter your request details.</p>
      )}
      <input
        type="submit"
        value="Send Request"
        className="mt-6 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer hover:bg-dark hover:text-light transition-colors"
      />
    </form>
  );
}
