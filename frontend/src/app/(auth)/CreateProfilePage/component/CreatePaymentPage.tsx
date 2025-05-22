"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Coffee} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {ButtonComponent} from "../../SignUpPage/component";
import {countryMockData} from "../data";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
  name: z.string({required_error: "Please select an country to display."}),
  firstname: z
    .string()
    .min(5, {message: "Name must be at least 5 characters."}),
  lastname: z.string().min(5, {message: "Name must be at least 5 characters."}),
  cardnumber: z
    .string()
    .min(16, {message: "Name must be at least 16 characters."}),
  month: z.string({required_error: "Please select expires date."}),
  CVV: z.string().min(3, {message: "Please enter CVV code."}),
});

const handleOnContinueButton = (values: z.infer<typeof formSchema>) => {
const res = 
};

export const CreatePaymentPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div className="flex-col items-center p-10 flex gap-[200px]">
      <div className="flex gap-[500px]">
        <div className="flex gap-2 items-center font-bold">
          <Coffee className="size-8" />
          Buy Me Coffee
        </div>
        <div>
          <ButtonComponent buttonText="Log out" />
        </div>
      </div>
      <div className="w-[430px] h-[631px] flex gap-5 flex-col">
        <Form {...form}>
          <div>
            <p className="font-semibold text-2xl">
              How would you like to be paid?
            </p>
            <p className="text-[#71717A] text-[14px]">
              Enter location and payment details
            </p>
          </div>
          <form
            onSubmit={form.handleSubmit(handleOnContinueButton)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Select country</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryMockData.map((value, index) => {
                          return (
                            <SelectItem key={index} value={value}>
                              {value}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex-row flex gap-1">
              <FormField
                control={form.control}
                name="firstname"
                render={({field}) => (
                  <FormItem className="w-[50%]">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({field}) => (
                  <FormItem className="w-[50%]">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="cardnumber"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Enter card number</FormLabel>
                  <FormControl>
                    <Input placeholder="xxxx-xxxx-xxxx-xxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex-row flex gap-1">
              <FormField
                control={form.control}
                name="month"
                render={({field}) => (
                  <FormItem className="w-[50%]">
                    <FormLabel>Expires</FormLabel>
                    <FormControl>
                      <Input type="month" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="CVV"
                render={({field}) => (
                  <FormItem className="w-[50%]">
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ButtonComponent buttonText="Continue" />
          </form>
        </Form>
      </div>
    </div>
  );
};
