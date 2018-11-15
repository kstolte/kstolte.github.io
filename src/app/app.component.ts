import { Component } from "@angular/core";

export class Job {
  title: string;
  employer: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  jobSummary: string;
  jobRoles?: Role[];
  jobTechnologies?: Technologies[];
  cvOnly?: boolean;
}

export class Role {
  Role: string;
}

export class Technologies {
  Technology: string;
  Color?: string;
}

const MSSQL: Technologies = {
  Technology: "MSSQL Server",
  Color: "is-sql"
};

const NetFramework: Technologies = {
  Technology: ".Net Framework",
  Color: "is-netFramework"
};

const NetCore: Technologies = {
  Technology: ".Net Core 2.0",
  Color: "is-netFramework"
};

const SharePoint: Technologies = {
  Technology: "SharePoint",
  Color: "is-warning"
};

const AppleComp: Technologies = {
  Technology: "MacOS",
  Color: "is-dark"
};

const JOBS: Job[] = [
  {
    title: "Software Developer",
    employer: "Yellow Dog Software",
    location: "Norfolk, VA",
    startDate: new Date("2016-11-01"),
    endDate: null,
    jobSummary: `Develop and maintain components of an inventory management software solution.
     The solution is based on a MSSQL database backend with a Long-Term Support WinForms Client application.
     Recent development has been based around new feature implementation in WinForms Client, Online Angular
     Web App, .Net Core API, and iOS/Android Applications.`,
    jobRoles: [
      {
        Role:
          "Resolve all issues with software and final escalation point for end users."
      },
      {
        Role:
          "Conceptualize, plan, and execute new features and technology into the software solution."
      },
      {
        Role:
          "Create system integrations between Yellow Dog Inventory Systems and Third Party."
      },
      {
        Role:
          "Architected a tool for Support and Implementation Groups to track real time system status to deliver proactive support and client assistance."
      }
    ],
    jobTechnologies: [
      { Technology: "React" },
      { Technology: "React-Native" },
      MSSQL,
      NetFramework,
      NetCore,
      { Technology: "GitHub", Color: "is-github" },
      { Technology: "Git" },
      { Technology: "Angular" },
      { Technology: "WinForms" },
      { Technology: "REST APIs" },
      { Technology: "GraphQL", Color: "is-graphql" },
      AppleComp
    ]
  },
  {
    title: "DBA / IT Manager",
    employer: "Yellow Dog Software",
    location: "Norfolk, VA",
    startDate: new Date("2016-05-15"),
    endDate: new Date("2016-10-31"),
    jobSummary: `Served in a DevOps Role for a Software Development Organization.
    Performed as the escalation point for support tickets to provide fixes and fact finding
    prior to being escalated to the development group. `,
    jobRoles: [
      {
        Role:
          "Maintained and supported 50+ physical servers that were both onsite and hosted through a third party datacenter."
      },
      { Role: "Implemented Tier 4 support for escalation of tickets." },
      {
        Role:
          "Pinpointed opportunities for database improvement in support of the software."
      },
      {
        Role:
          "Composed, released, and applied SQL Scripts to production environments to resolve bugs or optimize client systems."
      },
      { Role: "Assisted support team with timely ticket resolution." },
      {
        Role:
          "Installed a Network Management System to track uptime and maintained an uptime of 99.99% across the server and network infrastructure."
      }
    ],
    jobTechnologies: [MSSQL, NetFramework, { Technology: "PowerShell" }]
  },
  {
    title: "Application Support Analyst",
    employer: "Gold Key | PHR Hotels & Resorts",
    location: "Virginia Beach, VA",
    startDate: new Date("2015-06-01"),
    endDate: new Date("2016-05-15"),
    jobSummary:
      "Implemented and maintained the Software items in the Service " +
      "Portfolio and Pipeline. This includes tier 2 & 3 end user support, diagnosing software problems and scheduled maintenance. " +
      "In addition, they provide advanced system administration/configuration tasks and consult customers on proposed changes " +
      "within In House (Custom) Applications and third-party COTS software products.",
    jobRoles: [
      {
        Role:
          "Developed SQL reports and queries for IT Department and customer use."
      },
      {
        Role:
          "Maintained SharePoint site with on premise SharePoint Server Farm."
      },
      {
        Role:
          "Developed multifaceted SharePoint sites assist customers with storing and cataloging documents, data, and processes. "
      },
      { Role: "Provided 3rd tier support for end user support." },
      {
        Role:
          "Conducted deep dives into software application logic while troubleshooting and perform analysis on complex application usage scenarios."
      },
      {
        Role:
          "Provided advanced system administration/configuration tasks and consult customers on proposed changes within In House (Custom) Applications and 3rd party COTS software products."
      }
    ],
    jobTechnologies: [
      MSSQL,
      SharePoint,
      { Technology: "Visual Basic", Color: "is-netFramework" },
      { Technology: "WireShark" },
      { Technology: "Juniper Networks" },
      { Technology: "POSiTouch" },
      { Technology: "WireShark" },
      { Technology: "Micros POS" },
      { Technology: "Opera PMS" },
      { Technology: "OnQ PMS" },
      { Technology: "Microsoft Dynamics SL" },
      { Technology: "IIS" },
      AppleComp
    ]
  },
  {
    title: "Support Tech I",
    employer: "Gold Key | PHR Hotels & Resorts",
    location: "Virginia Beach, VA",
    startDate: new Date("2013-03-15"),
    endDate: new Date("2015-06-01"),
    jobSummary: "Provided onsite and phone support to all levels of employees",
    jobRoles: [
      {
        Role:
          "Developed low to medium level SQL reports and queries for IT Department and customer use."
      },
      {
        Role:
          "Executed desktop and server support for multiple hardware configurations, operating systems, and applications."
      },
      {
        Role:
          "Maintained SharePoint site with on premise SharePoint Server Farm."
      },
      {
        Role:
          "Conducted deep dives into software application logic while troubleshooting and perform analysis on complex application usage scenarios."
      },
      {
        Role:
          'Setup and delivered a SharePoint site that securely stores all associate personnel records.'
      },
      {
        Role:
          'Troubleshoot, maintain, and support multiple internal applications on a variety of platforms and frameworks.'
      },
      {
        Role:
          'Implement complex applications and products to outlets along the Virginia Beach Oceanfront.'
      }
    ],
    jobTechnologies: [
      MSSQL,
      SharePoint,
      { Technology: 'Visual Basic', Color: 'is-netFramework' },
      { Technology: 'WireShark' },
      { Technology: 'Juniper Networks' },
      { Technology: 'POSiTouch' },
      { Technology: 'WireShark' },
      AppleComp
    ]
  },
  {
    title: 'Junior Project Manager',
    employer: 'Met Life',
    location: 'Greater New York City Area',
    startDate: new Date('2012-06-15'),
    endDate: new Date('2013-03-15'),
    jobSummary: `Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.`,
    jobRoles: [
      {
        Role:
          'Co-Managed an Enterprise-wide migration from Lotus Notes applications and databases to SharePoint.'
      },
      {
        Role:
          'Constant communication to clients on a daily basis, to keep them notified on the status of their projects.'
      },
      {
        Role:
          'Maintained Excellent Customer Service with the Business Owners of Applications.'
      },
      {
        Role:
          'Assisted with maintaining security permissions on SharePoint websites.'
      }
    ],
    jobTechnologies: [SharePoint, { Technology: 'Lotus Notes' }]
  },
  {
    title: 'Production Assistant',
    employer: 'Studio Center Total Production',
    location: 'Norfolk, VA',
    startDate: new Date('2007-05-20'),
    endDate: new Date('2013-03-15'),
    jobSummary: `Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.
                  My components of the project was successful and termination was based on the ending of the project.`,
    jobRoles: [
      {
        Role:
          'Created a Collaboration tool to track the status of contacting talent in VArious localities and time zones.'
      },
      {
        Role:
          'Provide recording services for auditioning voice talent prior to being booked by a client.'
      },
      { Role: 'Troubleshoot Audio Routing and Patching issues.' },
      {
        Role:
          'Provide expert feedback and guide talent to performing at their best.'
      }
    ],
    jobTechnologies: [
      { Technology: 'Google Sheets' },
      { Technology: 'Pro Tools' },
      AppleComp
    ]
  },
  {
    title: 'Audio Engineer',
    employer: 'Roper Performing Arts Center',
    location: 'Norfolk, VA',
    startDate: new Date('2009-02-01'),
    endDate: new Date('2012-06-15'),
    jobSummary: ``,
    jobRoles: [
      {
        Role:
          'Perform as a Stage Manager to make critical decisions while in rehearsals and the performance of live theatrical performances.'
      },
      {
        Role:
          'Provide live sound reinforcement for various types of performing genres.'
      },
      {
        Role:
          'Designed the updated theatre’s sound system, still currently in use.'
      },
      {
        Role:
          'Assist with load-in and load-out of equipment and props for use during stage performances.'
      }
    ],
    jobTechnologies: [
      { Technology: 'Google Sheets' },
      { Technology: 'Pro Tools' },
      AppleComp
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Keith Stolte';
  jobs = JOBS;
  contributedRepo: Object = {
    contributedRepositories: {
      edges: [
        {
          node: {
            name: 'docs',
            url: 'https://github.com/sendgrid/docs',
            owner: {
              login: 'sendgrid',
              avatarUrl: 'https://avatars0.githubusercontent.com/u/181234?v=4'
            }
          }
        },
        {
          node: {
            name: 'bulma',
            url: 'https://github.com/jgthms/bulma',
            owner: {
              login: 'jgthms',
              avatarUrl: 'https://avatars1.githubusercontent.com/u/1254808?v=4'
            }
          }
        },
        {
          node: {
            name: 'awesome-public-datasets',
            url: 'https://github.com/caesar0301/awesome-public-datasets',
            owner: {
              login: 'caesar0301',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/499254?v=4'
            }
          }
        },
        {
          node: {
            name: 'SSH.NET',
            url: 'https://github.com/sshnet/SSH.NET',
            owner: {
              login: 'sshnet',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/16708801?v=4'
            }
          }
        },
        {
          node: {
            name: 'react-fullstack-graphql',
            url:
              'https://github.com/graphql-boilerplates/react-fullstack-graphql',
            owner: {
              login: 'graphql-boilerplates',
              avatarUrl: 'https://avatars2.githubusercontent.com/u/18574799?v=4'
            }
          }
        },
        {
          node: {
            name: 'atn-hubot',
            url: 'https://github.com/schie/atn-hubot',
            owner: {
              login: 'schie',
              avatarUrl: 'https://avatars1.githubusercontent.com/u/4561856?v=4'
            }
          }
        },
        {
          node: {
            name: 'pong-score-board',
            url: 'https://github.com/schie/pong-score-board',
            owner: {
              login: 'schie',
              avatarUrl: 'https://avatars1.githubusercontent.com/u/4561856?v=4'
            }
          }
        },
        {
          node: {
            name: 'kstolte.github.io',
            url: 'https://github.com/kstolte/kstolte.github.io',
            owner: {
              login: 'kstolte',
              avatarUrl: 'https://avatars0.githubusercontent.com/u/20091146?v=4'
            }
          }
        }
      ]
    }
  };
}

// GitHub GraphQL Query
// {
//   viewer {
//    contributedRepositories (first:20) {
//      edges {
//        node {
//          name
//          url
//          owner{
//            login
//            avatarUrl}
//        }
//      }
//    }
//    pullRequests(first: 100, orderBy: {field: UPDATED_AT, direction:DESC}){
//      totalCount
//      nodes{
//        repository{
//          nameWithOwner
//          owner{avatarUrl}
//        }
//        additions
//        deletions
//        title
//        merged
//      }
//    }
//    organizations(first:10){
//      nodes{
//        name
//        avatarUrl
//      }
//    }
//  }
//  }
