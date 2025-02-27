import { View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { loginUser } from "@/api/LoginApiClient";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeText = (key: string, value: string) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
    if (key === "email") setEmailError("");
    if (key === "password") setPasswordError("");
    if (errorMessage) setErrorMessage("");
  };

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(data.email)) {
      setEmailError("Must be a valid email address");
      isValid = false;
    }

    if (!data.password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (data.password.length < 6) {
      setPasswordError("Password must be 6 or more characters long");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async () => {
    setErrorMessage("");
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await loginUser(data);
      console.log("Login Successful:", response);

      await AsyncStorage.setItem(
        "userToken",
        response.data.token_details.token
      );

      router.replace("/(dashBoard)/dashboard");
    } catch (error: any) {
      console.error("Login Failed:", error);
      setErrorMessage(error.message || "Wrong email or password. Try again");
    } finally {
      setLoading(false);
    }
  };
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    alert("Forgot Password");
  };

  return (
    <View className="flex items-center justify-center h-full mx-4 -mt-28">
      <Card className="w-full max-w-md pt-4 border border-white rounded-lg shadow-sm pb-36 bg-gray-50">
        <CardHeader>
          <Text className="flex items-center justify-center text-2xl font-semibold text-center">
            Login
          </Text>
        </CardHeader>
        <View className="mt-6">
          <View className="px-8">
            <Text className="font-semibold text-md">
              Email <Text className="text-red-500">*</Text>
            </Text>
            <View className="flex items-center justify-center pt-1">
              <Input
                placeholder="Enter Email ID..."
                value={data.email}
                onChangeText={(value) => onChangeText("email", value)}
                aria-labelledby="inputLabel"
                aria-errormessage="inputError"
                className="flex w-full h-12 max-w-sm pl-4 text-base placeholder-gray-400 bg-white border-gray-300 rounded-md"
                inputMode="email"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            {emailError ? (
              <View className="mt-1">
                <Text className="text-sm font-semibold text-red-600">
                  {emailError}
                </Text>
              </View>
            ) : null}
          </View>
          <View className="px-8 mt-4">
            <Text className="font-semibold text-md">
              Password <Text className="text-red-500">*</Text>
            </Text>
            <View className="relative flex items-center justify-center pt-1">
              <Input
                placeholder="Type here..."
                value={data.password}
                onChangeText={(value) => onChangeText("password", value)}
                aria-labelledby="inputLabel"
                aria-errormessage="inputError"
                className="flex w-full h-12 max-w-sm pl-4 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md"
                secureTextEntry={showPassword}
              />
              <TouchableOpacity
                onPress={handleShowPassword}
                className="absolute right-5"
              >
                {showPassword ? (
                  <Ionicons name="eye-off-outline" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-outline" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {passwordError && (
              <View className="mt-1">
                <Text className="text-sm font-semibold text-red-600">
                  {passwordError}
                </Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text className="mx-8 mt-2 font-semibold text-blue-800 cursor-pointer text-md hover:underline">
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {errorMessage && (
          <View className="mx-8 mt-2">
            <Text className="text-sm font-semibold text-red-600">
              {errorMessage}
            </Text>
          </View>
        )}

        <View className="mx-8 mt-4">
          <Button
            className="w-full h-12 mt-6 font-semibold bg-blue-900 rounded-md"
            onPress={handleLogin}
            disabled={loading}
          >
            <Text className="text-white">
              {loading ? (
                <AntDesign name="loading1" size={24} color="white" />
              ) : (
                "Submit"
              )}
            </Text>
          </Button>
        </View>
      </Card>
    </View>
  );
}
