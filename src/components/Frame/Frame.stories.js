import React from "react";
import { Frame } from "./Frame"; // Adjust the import based on your file structure

export default {
  title: "Components/Frame", // Title for the Storybook section
  component: Frame,         // The component you're documenting
};

// Default story with example args
export const Default = {
  args: {
    image: "https://via.placeholder.com/150", // Example image URL
    description: "This is a description.",      // Example description
    phone: "053-567-5524",                      // Example phone number
  },
};
