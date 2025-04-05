"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ParticleBackground from "@/components/home-page/particle-background";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    // This is a placeholder for actual authentication logic
    console.log("Login data:", data);

    // Show success toast
    toast("Login Successful", {
      description: "Welcome back to NovaAI",
    });

    // Redirect to home page after successful login
    setTimeout(() => router.push("/"), 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ParticleBackground />

      <div className="glass-card w-full max-w-md p-8 space-y-8 relative z-10">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center mb-5">
            <span className="text-2xl font-bold gradient-text">
              Nova<span className="text-white">AI</span>
            </span>
          </Link>
          <h2 className="mt-2 text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Or{" "}
            <Link
              href="/sign-up"
              className="font-medium text-nova-blue hover:text-nova-purple"
            >
              create a new account
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        className="pl-10 bg-card/50 border-white/10 text-white focus:border-nova-blue"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Password</FormLabel>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 bg-card/50 border-white/10 text-white focus:border-nova-blue"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-white/20 data-[state=checked]:bg-[#00F5FF] text-black"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm font-medium text-gray-300 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                )}
              />

              <Link
                href="/forgot-password"
                className="text-sm text-nova-blue hover:text-nova-purple"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="neon-button w-full py-6">
              Sign In
            </Button>
          </form>
        </Form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="glass inline-flex justify-center items-center py-2 px-4 border border-white/10 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-white/5"
            >
              <span>
                <FaGoogle className="text-white w-4 h-4 mr-1" />
              </span>
              Google
            </button>
            <button
              type="button"
              className="glass inline-flex justify-center items-center py-2 px-4 border border-white/10 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-white/5"
            >
              <span>
                <FiGithub className="text-white w-4 h-4 mr-1" />
              </span>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
