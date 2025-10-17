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
    bluesky_link: string;
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
        abstract?: string;
        bio?: string;
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
    faq_items: Array<{
        question: string;
        answer: string;
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
    date: "November 9th, 2025",
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
    bluesky_link: "https://bsky.app/profile/blackboxnlp.bsky.social",
    program_events: [],
    // Example of program events
    // {
    //     "start_time": "9:00",
    //     "end_time": "9:10",
    //     "description": "Opening Remarks",
    //     papers: undefined
    // },
    // {
    //     "start_time": "9:10",
    //     "end_time": "10:00",
    //     "description": "Invited talk by **Speaker 1**",
    //     papers: undefined
    // },
    // {
    //     "start_time": "10:00",
    //     "end_time": "10:30",
    //     "description": "Oral presentations:",
    //     papers: [
    //         { title: "**Paper Title 1**", authors: "_Name Lastname, Name Lastname_" },
    //         { title: "**Paper Title 2**", authors: "_Name Lastname, Name Lastname_" },
    //     ]
    // },
    // {
    //     "start_time": "10:30",
    //     "end_time": "11:00",
    //     "description": "Break ☕",
    //     papers: undefined
    // },
    // {
    //     "start_time": "11:00",
    //     "end_time": "12:30",
    //     "description": "In-person & virtual **Poster Session 1**",
    //     papers: undefined
    // },
    // {
    //     "start_time": "12:30",
    //     "end_time": "14:00",
    //     "description": "Lunch 🥪",
    //     papers: undefined
    // },
    // {
    //     "start_time": "14:00",
    //     "end_time": "15:00",
    //     "description": "Invited talk by **Speaker 2**",
    //     papers: undefined
    // },
    // {
    //     "start_time": "15:00",
    //     "end_time": "15:30",
    //     "description": "Oral presentations:",
    //     papers: [
    //         { title: "**Paper Title 1**", authors: "_Name Lastname, Name Lastname_" },
    //         { title: "**Paper Title 2**", authors: "_Name Lastname, Name Lastname_" },
    //     ]
    // },
    // {
    //     start_time: '15:30',
    //     end_time: '16:00',
    //     description: 'Break ☕',
    //     papers: undefined
    // },
    // {
    //     start_time: '15:30',
    //     end_time: '16:30',
    //     description: 'In-person **Poster Session 2**',
    //     papers: undefined
    // },
    // {
    //     start_time: '16:30',
    //     end_time: '16:40',
    //     description: 'Closing remarks and awards',
    //     papers: undefined
    // },
    // {
    //     start_time: '16:40',
    //     end_time: '17:30',
    //     description: 'Panel discussion on **Topic**',
    //     papers: undefined
    // }
    invited_speakers: [
        {
            image_path: "https://sjtu-xai-lab.github.io/img/zqs.png",
            name: "Quanshi Zhang",
            affiliation: "Associate Professor, Shanghai Jiao Tong University",
            description: "Talk: Can Neural Network Interpretability Be the Key to Breaking Through Scaling Law Limitations in Deep Learning?",
            link: "https://sjtu-xai-lab.github.io/#people",
            abstract: "The “lack of interpretability” and the “constraints of the scaling law” are two major bottlenecks in deep learning, but they fundamentally converge on the same root cause—the absence of a foundational explanation, localization, and debugging representation problems of a neural network. Currently, most explainable AI research remains at the engineering level, and fails to build up a theoretical connection between the “detailed knowledge representation” and “generalization power.” The interaction-based Interpretability theory proposed by Dr. Quanshi Zhang has partially addressed these issues from a new perspective. It rigorously demonstrates that the complex inference logic of neural networks can be comprehensively summarized as sparse interactions. Based on these interactions, the theory successfully explains the root causes of neural network performance, thereby breaking free from the black-box training paradigm. This enables real-time monitoring and correction of model representation flaws, improving training and testing efficiency, and ultimately overcoming the constraints of the scaling law.",
            bio: "Dr. Quanshi Zhang is a tenured associate professor in the Department of Computer Science and Engineering at Shanghai Jiao Tong University. He has received the ACM China Rising Star Award. He obtained his Ph.D. from the University of Tokyo, Japan in 2014 and conducted postdoctoral research at the University of California, Los Angeles (UCLA) from 2014 to 2018. Dr. Zhang’s research mainly focuses on explainable AI, and has proposed theory system of interaction-based explanation. He serves as an action editor for TMLR, area chair for NeurIPS 2024 and 2025, presented tutorials on interpretability at IJCAI 2020 and IJCAI 2021."
        },
        {
            image_path: "/2025/verna.jpg",
            name: "Verna Dankers",
            affiliation: "Postdoctoral Researcher, McGill University",
            description: "Talk: Memorization: Myth or Mystery?",
            link: "https://www.vernadankers.com/",
            abstract: "In deep learning, the perspective on memorization of training examples is undergoing a paradigm shift. Previously linked to overfitting and poor generalization, memorization is now seen as benign, beneficial or concerning, depending on the data involved. This shift raises questions about the mystery that is memorization: what should and shouldn't models memorize, how is memorization implemented internally, and, more fundamentally, can we talk about memorization as a phenomenon that is separate from generalization or is this a myth? In this talk, I will provide you with the lay of the land on memorization analyses from a behavioural and model-internal perspective, reflecting on the pressing challenges it poses for interpretability research and why I think we should not shy away from them.",
            bio: "Verna Dankers is a postdoctoral researcher at McGill University, Canada, working with Siva Reddy. She obtained her PhD from the University of Edinburgh, UK, as part of the UKRI Centre for Doctoral Training in Natural Language Processing, under the supervision of Ivan Titov. Her research focuses on understanding how large language models work through the lenses of compositionality, memorization and generalization. She received the 2025 outstanding paper award at IJCAI and the best paper award at CoNLL 2021 for her work on generalization in language models."
        }
    ],
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Speaker 1",
    //         affiliation: "Affiliation",
    //         description: "Talk name",
    //         link: "/2025"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Speaker 2",
    //         affiliation: "Affiliation",
    //         description: "Talk name",
    //         link: "/2025"
    //     }
    // ],
    panelists: [],
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 1",
    //         affiliation: "Affiliation",
    //         link: "/2025"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 2",
    //         affiliation: "Affiliation",
    //         link: "/2025"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 3",
    //         affiliation: "Affiliation",
    //         link: "/2025"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 4",
    //         affiliation: "Affiliation",
    //         link: "/2025"
    //     },
    // ],
    sponsors: [],
    //     {
    //         image_path: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Google_DeepMind_logo.svg",
    //         link: "https://deepmind.google/"
    //     },
    //     {
    //         image_path: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
    //         link: "https://machinelearning.apple.com/",
    //     }
    // ],
    organizers: [
        {
            image_path: "/2025/yonatan.jpg",
            name: "Yonatan Belinkov",
            affiliation: "Senior Lecturer, Technion",
            description: "",
            link: "https://belinkov.com/"
        },
        {
            image_path: "https://aaronmueller.github.io/files/profpic_close_centered.jpeg",
            name: "Aaron Mueller",
            affiliation: "Assistant Professor, Boston University",
            description: "",
            link: "https://aaronmueller.github.io/"
        },
        {
            image_path: "https://www.bu.edu/cs/files/2023/03/new_pic-507x600.jpg",
            name: "Najoung Kim",
            affiliation: "Assistant Professor, Boston University",
            description: "",
            link: "https://najoung.kim/"
        },
        {
            image_path: "https://hanjiechen.github.io/photo/hanjie.jpeg",
            name: "Hanjie Chen",
            affiliation: "Assistant Professor, Rice University",
            description: "",
            link: "https://hanjiechen.github.io/"
        },
        {
            image_path: "/2025/hosein.jpg",
            name: "Hosein Mohebbi",
            affiliation: "PhD Candidate, Tilburg University",
            description: "",
            link: "https://hmohebbi.github.io/"
        },
        {
            image_path: "/2025/gabriele.jpg",
            name: "Gabriele Sarti",
            affiliation: "PhD Candidate, University of Groningen",
            description: "",
            link: "https://gsarti.com"
        },
        {
            image_path: "/2025/dana.jpg",
            name: "Dana Arad",
            affiliation: "PhD Candidate, Technion",
            description: "",
            link: "https://www.linkedin.com/in/dana-arad"
        }
    ],
    faq_items: [
        {
            question: "Are dual submissions allowed?",
            answer: "Yes, dual submissions are allowed if the other venue also allows dual submissions. If your submission is accepted to the archival track of BlackboxNLP, you will have to withdraw your submission to the other venue. Dual submissions to BlackboxNLP and EMNLP (including ARR) are not allowed."
        },
        {
            question: "How many models/tasks should I evaluate for the shared task?",
            answer: "Submissions to the Circuit Localization track should evaluate at least two models and two tasks, while there are no restrictions on the number of models and tasks for the Causal Variable Localization track. However, for any submission (regardless of the track) to be considered for our final ranking, it must be evaluated at least on the three less resource-intensive settings in MIB, namely: (1) GPT-2 on IOI (2) Qwen-2.5 on IOI; and (3) Qwen-2.5 on MCQA."
        },
        {
            question: "How are the shared task submissions evaluated?",
            answer: "Shared task submissions will be evaluated by the workshop organizers and MIB creators based on the novelty and effectiveness of the proposed method. In practice, including more model-task combinations in the evaluation will strengthen high-scoring submissions by demonstrating the generality of the proposed method's effectiveness. Novelty will be evaluated in light of currently established methods for each one of the tracks."
        },
        {
            question: "Are submissions to the shared task archival?",
            answer: "Yes, submissions to the shared task will be considered archival, and will be published in the BlackboxNLP 2025 workshop proceedings on the ACL Anthology."
        },
        {
            question: "How are shared task reports evaluated?",
            answer: "Shared task reports will be evaluated by the workshop organizers to assess whether they meet the requirements for archival publication."
        }
    ]
};

export default site_config;