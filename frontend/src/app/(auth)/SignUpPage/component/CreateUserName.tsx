"use client";

import {Dispatch, SetStateAction, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, useForm} from "react-hook-form";
import {z} from "zod";

import {ButtonComponent} from "./ButtonComponent";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(5, {message: "Name must be at least 5 characters."}),
});

const handleOnContinueButton = (values: z.infer<typeof formSchema>) => {
  console.log(values, "values");
};

export const CreateUserName = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div className="flex w-full h-full flex-col p-10 gap-[370px] items-center relative">
      <ButtonComponent
        buttonText={"Log in"}
        className="absolute top-8 right-20"
      ></ButtonComponent>
      <div className="w-[359px] h-fit flex gap-5 flex-col">
        <Form {...form}>
          <div>
            <p className="font-bold text-[24px]">Create your account</p>
            <p className="text-[#71717A] text-[14px]">
              Choose a username for your page
            </p>
          </div>
          <form
            onSubmit={form.(handleOnContinueButton)}
            className="space-y-8"
          />
          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input type="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonComponent buttonText="Continue"></ButtonComponent>
        </Form>
      </div>
    </div>
  );
};
