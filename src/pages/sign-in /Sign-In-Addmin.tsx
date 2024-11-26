import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
function SignInAddmin() {
  return (
    <>
      <div className="flex justify-center items-center h-[80%]">
        <Tabs defaultValue="account" className="w-[500px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="px-[3rem] w-full">
            <Card>
              <CardHeader>
                <CardTitle className="font-bold">Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="space-y-2">
                  <Label htmlFor="email">email</Label>
                  <Input
                    id="email"
                    placeholder="email"
                    className="border-none bg-inputBg text-inputTitle p-5 !text-inputText"
                  />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="password">password</Label>
                  <Input
                    id="password"
                    placeholder="password"
                    className="border-none bg-inputBg text-inputTitle p-5 !text-inputText"
                  />
                </div>
              </CardContent>
              <CardFooter className=" mt-7 flex flex-col items-end">
                <Button className="cursor-pointer bg-btnBackground w-full">
                  Save changes
                </Button>
                <Button className="cursor-pointer bg-blue-500 w-full mt-4">
                  Sign With Google
                </Button>
                <div className="text-start mt-9 font-bold cursor-pointer">
                  <Link to={"/sign-up-admin"}>Sign-Up</Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="px-[3rem]">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input
                    id="current"
                    type="password"
                    className=" bg-inputBg text-inputTitle"
                    placeholder="password"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input
                    id="new"
                    type="password"
                    className=" bg-inputBg"
                    placeholder="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default SignInAddmin;
