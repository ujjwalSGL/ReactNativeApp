import { View } from "react-native";
import { Image } from "react-native";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Login from "./Login";

export default function Index() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="h-full bg-gradient-to-r from-blue-200 via-orange-200 to-pink-200">
        <View className="flex items-center justify-center m-10 lg:mt-10 lg:ml-20 md:items-start lg:items-start">
          <Image
            source={require("@/assets/images/companyIcon.png")}
            style={{ width: 200, height: 50 }}
            className="flex justify-center"
          />
        </View>

        <Login />
        {/* <View className="justify-center flex-1 p-6">
          <Tabs
            value={value}
            onValueChange={setValue}
            className="w-full mx-auto flex-col gap-1.5"
          >
            <TabsList className="flex-row w-full">
              <TabsTrigger value="email" className="flex-1">
                <TouchableOpacity>
                  <Text className="text-lg font-semibold">Email</Text>
                </TouchableOpacity>
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex-1">
                <TouchableOpacity>
                  <Text className="text-lg font-semibold">Phone</Text>
                </TouchableOpacity>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <Login />
            </TabsContent>
            <TabsContent value="phone"></TabsContent>
          </Tabs>
        </View> */}
        {/* <View className="justify-center flex-1 p-6">
          <Tabs
            value={value}
            onValueChange={setValue}
            className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
          >
            <TabsList className="flex-row w-full">
              <TabsTrigger value="account" className="flex-1">
                <Text>Account</Text>
              </TabsTrigger>
              <TabsTrigger value="password" className="flex-1">
                <Text>Password</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="gap-4 native:gap-2">
                  <View className="gap-1">
                    <Label nativeID="name">Name</Label>
                    <Input
                      aria-aria-labelledby="name"
                      defaultValue="Pedro Duarte"
                    />
                  </View>
                  <View className="gap-1">
                    <Label nativeID="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </View>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Text>Save changes</Text>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="gap-4 native:gap-2">
                  <View className="gap-1">
                    <Label nativeID="current">Current password</Label>
                    <Input
                      placeholder="********"
                      aria-labelledby="current"
                      secureTextEntry
                    />
                  </View>
                  <View className="gap-1">
                    <Label nativeID="new">New password</Label>
                    <Input
                      placeholder="********"
                      aria-labelledby="new"
                      secureTextEntry
                    />
                  </View>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Text>Save password</Text>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
