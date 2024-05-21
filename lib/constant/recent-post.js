/*
    This is a temporary constant file that will mimic production database structure.
*/

export const recentPost = [
    {
        title: 'Thinking about making a discord bot',
        slug: 'thinking-about-making-a-discord-bot',
        article: `Building an osu! Discord bot was an exciting challenge that combined my love for the game with programming. I started by identifying the bot's core functionalities, such as fetching player stats, tracking scores, and providing game-related updates. Using Node.js and the Discord.js library, I set up my development environment and created a new bot application on the Discord Developer Portal, securing the provided token.
        \nFor accessing osu! data, I utilized the osu! API, which required an API key that I obtained from the osu! website. Integrating the osu! API with my bot, I wrote scripts to handle commands like b!osu stats [username] to fetch and display player statistics. 
        \nTesting and refining the bot ensured it accurately provided real-time game data and enhanced the Discord community's engagement with osu!. This project deepened my programming expertise and enriched the gaming experience for my server members.
        \nThough it was really fun creating and developing this bot, I ultimately scrapped it and left it unused 💀
        `,
        tags: ['dev'],
        date: new Date('01-03-2024 17:35:01')
    },
    {
        title: 'I finally built my own website',
        slug: 'i-finally-built-my-own-website',
        article: `After months of planning, learning, and coding, I finally built my own website. This journey has been a rewarding blend of creativity and technical challenges, pushing me to acquire new skills and overcome various obstacles.
        \nThe Idea\n
        The inspiration for my website stemmed from a desire to have a personal space on the internet where I could showcase my portfolio, share my thoughts through a blog, and connect with like-minded individuals. I wanted it to be more than just a digital resume; I envisioned it as a dynamic platform reflecting my personality and interests.
        \nI accidentally made my own CMS\n
        Selecting the right tools and technologies was crucial. At first, the usual choice is either WordPress, which uses PHP as its programming language, or Strapi, which uses JavaScript as it’s programming language. Although both had a extensive community support and also good documentation, I decided to build myself a content management system (CMS). It is not as robust as WordPress or Strapi, but it got all the feature that I need: Static Pages and Blogging Capability. Additionally, I think of it as a fun little project on the side.
        \nChallenges and Solutions\n
        Building a content management system is not without its challenges. One of the biggest hurdles I faced was optimizing the site for performance. Slow loading times can deter visitors, so I implemented the standard strategies such as image optimization, lazy loading, and leveraging browser caching but credit to NextJS because most of it were already handled by the framework. Another challenge was ensuring the site was secure, and for this reason I haven’t release the full CMS to my GitHub yet.
        \n
        Building my own website has been a transformative experience. It's a testament to the power of persistence and the joy of creating something from scratch. Well that’s all for now, I might write another blogposts later.
        `,
        tags: ['hobby'],
        date: new Date('05-12-2023 22:30:05')
    },
]