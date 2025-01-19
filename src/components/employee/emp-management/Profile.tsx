import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  const employee = {
    name: "John Doe",
    role: "Software Engineer",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    department: "Development",
    profileImage: "/profile.jpg",
    performance: {
      projectsHandled: 8,
      averageRating: 4.5,
      feedback: "Consistently meets expectations and delivers quality work.",
    },
    tasks: [
      { id: 1, title: "Fix login bug", status: "In Progress" },
      { id: 2, title: "Prepare Q1 report", status: "Pending" },
    ],
    notifications: [
      {
        id: 1,
        message: "Your leave request has been approved.",
        time: "2 hours ago",
      },
      {
        id: 2,
        message: "New task assigned: Build API integration.",
        time: "1 day ago",
      },
    ],
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resignationDate: "",
    qualification: "",
    skill: "",
    gender: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-500 p-8">
      <motion.div
        className="max-w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="flex items-center p-6 bg-white rounded-xl shadow-xl bottom-2">
            <Avatar className="w-24 h-24 mr-6">
              <AvatarImage src={employee.profileImage} alt="Profile Picture" />
              <AvatarFallback>{employee.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{employee.name}</h1>
              <p className="text-gray-500">{employee.role}</p>
              <div className="mt-2">
                <p>
                  <strong>Email:</strong> {employee.email}
                </p>
                <p>
                  <strong>Phone:</strong> {employee.phone}
                </p>
                <p>
                  <strong>Department:</strong> {employee.department}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <div className="max-w-full mx-auto p-6 bg-white shadow-xl border-2 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Update Profile</h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
          >
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Resignation Date */}
            <div className="space-y-2">
              <Label htmlFor="resignationDate">Resignation Date</Label>
              <Input
                type="date"
                id="resignationDate"
                name="resignationDate"
                value={formData.resignationDate}
                onChange={handleChange}
              />
            </div>

            {/* Qualification */}
            <div className="space-y-2">
              <Label htmlFor="qualification">Qualification</Label>
              <Input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Enter your qualification"
              />
            </div>

            {/* Skill */}
            <div className="space-y-2">
              <Label htmlFor="skill">Skill</Label>
              <Input
                type="text"
                id="skill"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                placeholder="Enter your skill"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                // onValueChange={handleGenderChange}
                value={formData.gender}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Address (Full Width) */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <Button type="submit" className="btn-orange">
                Update Profile
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
