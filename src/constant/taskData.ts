export const tasks = [
  {
    id: 1,
    title: "Design Homepage Layout",
    startDate: "2024-01-08",
    dueDate: "2024-01-15",
    collaborators: [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Alice", lastName: "Johnson" },
      { firstName: "Jane", lastName: "Smith" },
      { firstName: "Bob", lastName: "Williams" },
      { firstName: "Alex", lastName: "Taylor" },
      { firstName: "Grace", lastName: "Brown" },
    ],
  },
  {
    id: 2,
    title: "Implement User Authentication",
    startDate: "2024-01-10",
    dueDate: "2024-01-20",
    collaborators: [
      { firstName: "Jane", lastName: "Smith" },
      { firstName: "Bob", lastName: "Williams" },
      { firstName: "Alex", lastName: "Taylor" },
      { firstName: "Grace", lastName: "Brown" },
    ],
  },
  {
    id: 3,
    title: "Refactor Codebase for Performance",
    startDate: "2024-01-12",
    dueDate: "2024-01-25",
    collaborators: [
      { firstName: "Alex", lastName: "Taylor" },
      { firstName: "Grace", lastName: "Brown" },
    ],
  },
  {
    id: 4,
    title: "Create API Integration Tests",
    startDate: "2024-01-15",
    dueDate: "2024-02-01",
    collaborators: [
      { firstName: "Daniel", lastName: "Miller" },
      { firstName: "Sophia", lastName: "White" },
    ],
  },
  {
    id: 5,
    title: "Optimize Database Queries",
    startDate: "2024-01-18",
    dueDate: "2024-02-05",
    collaborators: [
      { firstName: "Michael", lastName: "Anderson" },
      { firstName: "Olivia", lastName: "Moore" },
    ],
  },
  {
    id: 6,
    title: "Bug Fixing and Testing",
    startDate: "2024-01-20",
    dueDate: "2024-02-10",
    collaborators: [
      { firstName: "William", lastName: "Clark" },
      { firstName: "Emily", lastName: "Hall" },
    ],
  },
  {
    id: 7,
    title: "Write Technical Documentation",
    startDate: "2024-01-22",
    dueDate: "2024-02-15",
    collaborators: [
      { firstName: "Liam", lastName: "Baker" },
      { firstName: "Ava", lastName: "Barnes" },
    ],
  },
  {
    id: 8,
    title: "Deploy to Staging Environment",
    startDate: "2024-01-25",
    dueDate: "2024-02-20",
    collaborators: [
      { firstName: "James", lastName: "Fisher" },
      { firstName: "Mia", lastName: "Perry" },
    ],
  },
  {
    id: 9,
    title: "UI/UX Review and Enhancements",
    startDate: "2024-01-28",
    dueDate: "2024-02-25",
    collaborators: [
      { firstName: "Jackson", lastName: "Carter" },
      { firstName: "Isabella", lastName: "Ward" },
    ],
  },
  {
    id: 10,
    title: "Implement Notification System",
    startDate: "2024-01-30",
    dueDate: "2024-03-01",
    collaborators: [
      { firstName: "Logan", lastName: "Cooper" },
      { firstName: "Sophie", lastName: "Jones" },
    ],
  },
  {
    id: 11,
    title: "User Feedback Analysis",
    startDate: "2024-02-02",
    dueDate: "2024-03-05",
    collaborators: [
      { firstName: "Ethan", lastName: "Smith" },
      { firstName: "Emma", lastName: "Johnson" },
    ],
  },
  {
    id: 12,
    title: "Localization Support Implementation",
    startDate: "2024-02-05",
    dueDate: "2024-03-10",
    collaborators: [
      { firstName: "Landon", lastName: "Williams" },
      { firstName: "Zoe", lastName: "Taylor" },
    ],
  },
  {
    id: 13,
    title: "Code Review and Cleanup",
    startDate: "2024-02-08",
    dueDate: "2024-03-15",
    collaborators: [
      { firstName: "Sebastian", lastName: "Brown" },
      { firstName: "Avery", lastName: "Miller" },
    ],
  },
  {
    id: 14,
    title: "Integrate Analytics Platform",
    startDate: "2024-02-10",
    dueDate: "2024-03-20",
    collaborators: [
      { firstName: "Peyton", lastName: "White" },
      { firstName: "Harper", lastName: "Clark" },
    ],
  },
  {
    id: 15,
    title: "Performance Monitoring Setup",
    startDate: "2024-02-12",
    dueDate: "2024-03-25",
    collaborators: [
      { firstName: "Sawyer", lastName: "Anderson" },
      { firstName: "Mackenzie", lastName: "Moore" },
    ],
  },
  {
    id: 16,
    title: "Security Audit and Enhancements",
    startDate: "2024-02-15",
    dueDate: "2024-03-30",
    collaborators: [
      { firstName: "Riley", lastName: "Hall" },
      { firstName: "Evelyn", lastName: "Baker" },
    ],
  },
  {
    id: 17,
    title: "Collaborate on Marketing Landing Page",
    startDate: "2024-02-18",
    dueDate: "2024-04-01",
    collaborators: [
      { firstName: "Jordan", lastName: "Perry" },
      { firstName: "Morgan", lastName: "Carter" },
    ],
  },
  {
    id: 18,
    title: "Accessibility Improvements",
    startDate: "2024-02-20",
    dueDate: "2024-04-05",
    collaborators: [
      { firstName: "Peyton", lastName: "Ward" },
      { firstName: "Harley", lastName: "Cooper" },
    ],
  },
  {
    id: 19,
    title: "User Onboarding Flow Optimization",
    startDate: "2024-02-22",
    dueDate: "2024-04-10",
    collaborators: [
      { firstName: "Eli", lastName: "Johnson" },
      { firstName: "Taylor", lastName: "Miller" },
    ],
  },
  {
    id: 20,
    title: "Prepare for Product Launch",
    startDate: "2024-02-25",
    dueDate: "2024-04-15",
    collaborators: [
      { firstName: "Jordan", lastName: "Barnes" },
      { firstName: "Taylor", lastName: "Fisher" },
    ],
  },
  {
    id: 21,
    title: "Prepare for Product Launch",
    startDate: "2024-02-25",
    dueDate: "2024-04-15",
    collaborators: [
      { firstName: "Jordan", lastName: "Barnes" },
      { firstName: "Taylor", lastName: "Fisher" },
    ],
  },
];

export const taskExample = {
  title: "Task",
  description: "<p>Task Description</p>",
  timeFrame: [
    new Date("2024-01-09T23:00:00.000Z"),
    new Date("2024-01-19T23:00:00.000Z"),
  ],
  collaborators: "My Business Unit",
  specificPeople: [],
  subTask: [
    {
      title: "Task 1",
      assignee: "1",
      timeFrame: [
        new Date("2024-01-09T23:00:00.000Z"),
        new Date("2024-01-11T23:00:00.000Z"),
      ],
      description: "<p>Task Description</p>",
    },
    {
      title: "Task 2",
      assignee: "2",
      timeFrame: [
        new Date("2024-01-12T23:00:00.000Z"),
        new Date("2024-01-13T23:00:00.000Z"),
      ],
      description: "<p>Task Description 2</p>",
    },
    {
      title: "Task 3",
      assignee: "3",
      timeFrame: [
        new Date("2024-01-16T23:00:00.000Z"),
        new Date("2024-01-17T23:00:00.000Z"),
      ],
      description: "<p>Another description</p>",
    },
    {
      title: "Task 4",
      assignee: "4",
      timeFrame: [
        new Date("2024-01-16T23:00:00.000Z"),
        new Date("2024-01-18T23:00:00.000Z"),
      ],
      description: "<p>Another description to be cleared</p>",
    },
    {
      title: "Task 5",
      assignee: "5",
      timeFrame: [
        new Date("2024-01-14T23:00:00.000Z"),
        new Date("2024-01-16T23:00:00.000Z"),
      ],
      description: "<p>The last description ever</p>",
    },
    {
      title: "Task 6",
      assignee: "7",
      timeFrame: [
        new Date("2024-01-17T23:00:00.000Z"),
        new Date("2024-01-19T23:00:00.000Z"),
      ],
      description: "<p>cleared</p>",
    },
    {
      title: "Task 7",
      assignee: "8",
      timeFrame: [
        new Date("2024-01-10T23:00:00.000Z"),
        new Date("2024-01-17T23:00:00.000Z"),
      ],
      description: "<p>cleared 2</p>",
    },
    {
      title: "Task 8",
      assignee: "9",
      timeFrame: [
        new Date("2024-01-17T23:00:00.000Z"),
        new Date("2024-01-19T23:00:00.000Z"),
      ],
      description: "<p>Cleared 5</p>",
    },
    {
      title: "Task 9",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-17T23:00:00.000Z"),
        new Date("2024-01-18T23:00:00.000Z"),
      ],
      description: "<p>Cleared 6</p>",
    },
    {
      title: "Task 10",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-10T23:00:00.000Z"),
        new Date("2024-01-12T23:00:00.000Z"),
      ],
      description: "<p>Cleared 7</p>",
    },
    {
      title: "Task 11",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-17T23:00:00.000Z"),
        new Date("2024-01-19T23:00:00.000Z"),
      ],
      description: "<p>Cleared 5</p>",
    },
    {
      title: "Task 12",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-15T23:00:00.000Z"),
        new Date("2024-01-16T23:00:00.000Z"),
      ],
      description: "<p>Cleared 6</p>",
    },
    {
      title: "Task 13",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-15T23:00:00.000Z"),
        new Date("2024-01-17T23:00:00.000Z"),
      ],
      description: "<p>Arbitration of the highest order</p>",
    },
    {
      title: "Task 14",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-09T23:00:00.000Z"),
        new Date("2024-01-12T23:00:00.000Z"),
      ],
      description: "<p>Last description test</p>",
    },
    {
      title: "Task 15",
      assignee: "Me",
      timeFrame: [
        new Date("2024-01-09T23:00:00.000Z"),
        new Date("2024-01-11T23:00:00.000Z"),
      ],
      description: "<p>Assigness</p>",
    },
    {
      title: "Task 16",
      assignee: "3",
      timeFrame: [
        new Date("2024-01-10T23:00:00.000Z"),
        new Date("2024-01-12T23:00:00.000Z"),
      ],
      description: "<p>John Doe task</p>",
    },
    {
      title: "Task 17",
      assignee: "3",
      timeFrame: [
        new Date("2024-01-18T23:00:00.000Z"),
        new Date("2024-01-19T23:00:00.000Z"),
      ],
      description: "<p>John Doe</p>",
    },
    {
      title: "Task 18",
      assignee: "3",
      timeFrame: [
        new Date("2024-01-17T23:00:00.000Z"),
        new Date("2024-01-18T23:00:00.000Z"),
      ],
      description: "<p>John Doe again</p>",
    },
    {
      title: "Task 19",
      assignee: "3",
      timeFrame: [
        new Date("2024-01-09T23:00:00.000Z"),
        new Date("2024-01-10T23:00:00.000Z"),
      ],
      description: "<p>Clearable</p>",
    },
    {
      title: "Task 20",
      assignee: "2",
      timeFrame: [
        new Date("2024-01-16T23:00:00.000Z"),
        new Date("2024-01-18T23:00:00.000Z"),
      ],
      description: "<p>Alice description</p>",
    },
    {
      title: "Task 21",
      assignee: "7",
      timeFrame: [
        new Date("2024-01-16T23:00:00.000Z"),
        new Date("2024-01-17T23:00:00.000Z"),
      ],
      description: "<p>David</p>",
    },
  ],
  priority: "medium",
};

export const head = [
  "S/N",
  "Task Title",
  "Start Date",
  "Due Date",
  "Collaborators",
  "Status",
  "Actions",
];

export const actionBtn = [
  {
    title: "View",
    variant: "default",
    href: (index: string) => `/tasks/${index}`,
  },
  {
    title: "Edit",
    variant: "light",
    color: "yellow.9",
    href: (index: string) => `/tasks/edit/${index}`,
  },
];

export const description =
  "<p>Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere. Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  </p> <p>Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere. Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  </p><p>Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere. Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  </p><p>Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere. Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  </p><p>Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere. Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere . Ensure there’s nothing around the HVAC unit that could obstruct the fans’ circulation, or interfere  </p>";
