interface SiteConfig {
    website_url: string,
    banner_path: string,
    x_handle: string,
    keywords: string,
    authors: string,
    logo_path: string;
    name: string;
    description: string;
    main_conf: string;
    main_conf_link: string;
    location: string;
    date: string;
    nav_title: string;
    nav_items: Array<{ name: string; href: string }>;
    buttons: Array<{ name: string; href: string }>;
    anthology_link: string;
    email_link: string;
    youtube_link: string;
    x_link: string;
    github_link: string;
    program_events: Array<{
        start_time: string;
        end_time: string;
        description: string;
        papers: Array<{ title: string; authors: string }> | undefined;
    }>;
    invited_speakers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
    panelists: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        link: string;
    }>;
    sponsors: Array<{
        image_path: string;
        link: string;
    }>;
    organizers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
}

const site_config: SiteConfig = {
    website_url: "https://blackboxnlp.github.io",
    banner_path: "2025/banner.png",
    x_handle: "@BlackboxNLP",
    keywords: "BlackboxNLP, EMNLP, NLP, Workshop, XAI, Interpretability, Language Models, Explainability",
    authors: "BlackboxNLP 2025 Organizers",
    logo_path: "/2025/logo.svg",
    name: "BlackboxNLP 2025",
    description: "The Eight Workshop on Analyzing and Interpreting Neural Networks for NLP",
    main_conf: "EMNLP 2025",
    main_conf_link: "https://2025.emnlp.org",
    location: "Suzhou, China",
    date: "November 10th, 2025",
    nav_title: "BlackboxNLP",
    nav_items: [
        { name: "Call for Papers", href: "/2025/call" },
        { name: "Shared Task", href: "/2025/task" },
        { name: "News", href: "/2025/#news" },
        { name: "Program", href: "/2025/#program" },
        { name: "Organizers", href: "/2025/#organizers" },
    ],
    buttons: [
        { name: "Call for Papers", href: "/2025/call" },
        { name: "Shared Task", href: "/2025/task" },
    ],
    anthology_link: "https://aclanthology.org/venues/blackboxnlp/",
    email_link: "mailto:blackboxnlp@googlegroups.com",
    youtube_link: "https://www.youtube.com/@blackboxnlp",
    x_link: "https://twitter.com/BlackboxNLP",
    github_link: "https://github.com/blackboxnlp",
    program_events: [
        {
            "start_time": "9:00",
            "end_time": "9:10",
            "description": "Opening Remarks",
            papers: undefined
        },
        {
            "start_time": "9:10",
            "end_time": "10:00",
            "description": "Invited talk by **Speaker 1**",
            papers: undefined
        },
        {
            "start_time": "10:00",
            "end_time": "10:30",
            "description": "Oral presentations:",
            papers: [
                { title: "**Paper Title 1**", authors: "_Name Lastname, Name Lastname_" },
                { title: "**Paper Title 2**", authors: "_Name Lastname, Name Lastname_" },
            ]
        },
        {
            "start_time": "10:30",
            "end_time": "11:00",
            "description": "Break ☕",
            papers: undefined
        },
        {
            "start_time": "11:00",
            "end_time": "12:30",
            "description": "In-person & virtual **Poster Session 1**",
            papers: undefined
        },
        {
            "start_time": "12:30",
            "end_time": "14:00",
            "description": "Lunch 🥪",
            papers: undefined
        },
        {
            "start_time": "14:00",
            "end_time": "15:00",
            "description": "Invited talk by **Speaker 2**",
            papers: undefined
        },
        {
            "start_time": "15:00",
            "end_time": "15:30",
            "description": "Oral presentations:",
            papers: [
                { title: "**Paper Title 1**", authors: "_Name Lastname, Name Lastname_" },
                { title: "**Paper Title 2**", authors: "_Name Lastname, Name Lastname_" },
            ]
        },
        {
            start_time: '15:30',
            end_time: '16:00',
            description: 'Break ☕',
            papers: undefined
        },
        {
            start_time: '15:30',
            end_time: '16:30',
            description: 'In-person **Poster Session 2**',
            papers: undefined
        },
        {
            start_time: '16:30',
            end_time: '16:40',
            description: 'Closing remarks and awards',
            papers: undefined
        },
        {
            start_time: '16:40',
            end_time: '17:30',
            description: 'Panel discussion on **Topic**',
            papers: undefined
        }
    ],
    invited_speakers: [
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Speaker 1",
            affiliation: "Affiliation",
            description: "Talk name",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Speaker 2",
            affiliation: "Affiliation",
            description: "Talk name",
            link: "/2025"
        }
    ],
    panelists: [
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Panelist 1",
            affiliation: "Affiliation",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Panelist 2",
            affiliation: "Affiliation",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Panelist 3",
            affiliation: "Affiliation",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Panelist 4",
            affiliation: "Affiliation",
            link: "/2025"
        },
    ],
    sponsors: [
        {
            image_path: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Google_DeepMind_logo.svg",
            link: "https://deepmind.google/"
        },
        {
            image_path: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
            link: "https://machinelearning.apple.com/",
        }
    ],
    organizers: [
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Organizer 1",
            affiliation: "Affiliation",
            description: "Description",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Organizer 2",
            affiliation: "Affiliation",
            description: "Description",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Organizer 3",
            affiliation: "Affiliation",
            description: "Description",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Organizer 4",
            affiliation: "Affiliation",
            description: "Description",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Organizer 5",
            affiliation: "Affiliation",
            description: "Description",
            link: "/2025"
        },
        {
            image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
            name: "Organizer 6",
            affiliation: "Affiliation",
            description: "Description",
            link: "/2025"
        }
    ]
};

export default site_config;