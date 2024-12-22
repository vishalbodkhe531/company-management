import { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../ui/select";
import { Separator } from "../../ui/separator";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Shubham", role: "Developer", email: "shubham@example.com" },
    { id: 2, name: "Ram", role: "Designer", email: "ram@example.com" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("Select Role");
  const [email, setEmail] = useState("");

  const roles = ["Developer", "Designer", "Manager", "QA Tester", "Other"];

  const handleAddMember = () => {
    if (!name || role === "Select Role" || !email) {
      alert("Please fill out all fields!");
      return;
    }

    const newMember = {
      id: teamMembers.length + 1,
      name,
      role,
      email,
    };

    setTeamMembers([...teamMembers, newMember]);
    setName("");
    setRole("Select Role");
    setEmail("");
  };

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  return (
    <div className="p-6 text-white min-h-screen">
      <Card className="border-none ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Team Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-7">
          {/* Add Team Member */}
          <div className="space-y-7">
            <div className="">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter team member name"
                className="mt-1 border-2 h-10 !text-inputText"
              />
            </div>
            <div className="">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={(value) => setRole(value)}>
                <SelectTrigger className="mt-2 border-2">
                  <span>{role}</span>
                </SelectTrigger>
                <SelectContent className="bg-contentBg text-white">
                  {roles.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter team member email"
                className="mt-1 border-2 h-10 !text-inputText"
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleAddMember}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Add Team Member
              </Button>
            </div>
          </div>

          <Separator />

          {/* Team Members List */}
          <div className="space-y-4 ">
            <h2 className="text-xl font-bold">Team Leaders</h2>
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="bg-secondary p-4 border-none bg-contentBg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p>Role: {member.role}</p>
                    <p>Email: {member.email}</p>
                  </div>
                  <Button
                    onClick={() => handleRemoveMember(member.id)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamManagement;
