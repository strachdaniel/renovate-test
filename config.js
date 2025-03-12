module.exports = {
  platform: "github", // Specify GitHub as the platform
  token: process.env.GITHUB,
  repositories: ["strachdaniel/renovet-test"], // Replace with your GitHub repo

  // Optional: Enable dependency updates
  extends: ["config:base"],

  // Optional: Customize PR behavior
  prConcurrentLimit: 2,
  prHourlyLimit: 2,
  labels: ["dependencies"],

  // Optional: Schedule updates
  schedule: ["at 8am on Monday"],

  // Optional: Group minor updates together
  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch"],
      groupName: "Minor and Patch Updates",
    },
  ],

  // Enable dependency dashboard
  dependencyDashboard: true,
};
