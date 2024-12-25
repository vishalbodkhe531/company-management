import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

function Setting() {
  const [notificationType, setNotificationType] = useState("email");
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");

  return (
    <TabsContent value="settings" className="space-y-6">
      <div className="p-6 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400">
            Manage and configure application settings.
          </p>
        </div>

        {/* Theme Settings */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Enable Dark Mode
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Dark/Light Mode</span>
            <div className="flex items-center space-x-">
              <Switch
                id="airplane-mode"
                className="w-10 h-6 bg-gray-200 rounded-full relative focus:outline-none  focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800"
              >
                <span
                  className="block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-100 translate-x-0 dark:bg-gray-300"
                  aria-hidden="true"
                />
              </Switch>
              <label
                htmlFor="airplane-mode"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Toggle
              </label>
            </div>
          </div>
        </div>

        {/* Language Preference */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Language Preference
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Select Language</span>
            <Select
              value={language}
              onValueChange={(value) => setLanguage(value)}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            General Settings
          </h2>
          <div className="space-y-4">
            {/* Enable Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Enable Notifications</span>
              <Checkbox />
            </div>

            {/* Default Notification Type */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Default Notification Type</span>
              <Select
                value={notificationType}
                onValueChange={(value) => setNotificationType(value)}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="push">Push Notification</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Security Settings
          </h2>
          <div className="space-y-4">
            {/* Password Policy */}
            <div>
              <label className="block text-gray-300 mb-2">
                Password Policy
              </label>
              <Input
                placeholder="Minimum password length (e.g., 8)"
                type="number"
                className="w-full"
              />
            </div>

            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300">
                Enable Two-Factor Authentication
              </span>
              <Checkbox />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button variant="ghost">Save Changes</Button>
        </div>
      </div>
    </TabsContent>
  );
}

export default Setting;

// 1. General Settings
// This section covers the essential settings that affect the overall behavior of the application.

// Enable Dark Mode (Checkbox): Allows users to toggle dark mode on/off.
// Language Preference (Dropdown): Dropdown to select the preferred language.
// Time Zone (Dropdown): Dropdown to choose the user's time zone.
// Company Name (Input Text): Input field for entering the company name.
// Logo Upload (File Upload): Upload a company logo

// 4. Notification Settings
// Control the delivery and type of notifications.

// Enable Notifications (Checkbox): Checkbox to enable or disable notifications.
// Default Notification Type (Dropdown): Dropdown to select default notification type (Email, SMS, Push).
// Daily Summary Emails (Checkbox): Checkbox for daily summary emails.
// Urgent Alerts (Checkbox): Checkbox to enable urgent alerts.
// Marketing Communication Preferences (Dropdown or Multi-select): Dropdown or checkboxes to choose communication preferences.
