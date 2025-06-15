'use client';
import { ContextValue } from '@/component/Context';
import { ArrowRightFromLine, Book, CalendarCheck2, Crosshair, FolderCheck, Github, Instagram, Mail, Milestone, Notebook, Rocket, Sparkles, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const Page = () => {
    const { darkMode } = useContext(ContextValue);

    const product = [
        {
            title: "Song Writer App",
            description: "A sleek MERN stack platform where users can write and manage song lyrics. Includes cart, product pages, and image uploading features.",
            icon: <Notebook size={18} />,
            image: "/download.png",
            link: "https://song-writer-app-client.vercel.app/"
        },
        {
            title: "TaskFlow Project",
            description: "Next.js + Tailwind-based task manager. Features real-time CRUD operations, backend persistence, and smooth UI transitions.",
            icon: <FolderCheck size={18} />,
            image: "/download (1).png",
            link: "https://website-project-eta.vercel.app/"
        },
        {
            title: "Think & Grow Rich Book UI",
            description: "Music-inspired web experience themed around the legendary book. Browse quotes, lyrics, and visuals in a responsive design.",
            icon: <Book size={18} />,
            image: "/download (2).png",
            link: "https://think-and-grow-rich-client.vercel.app/"
        },
        {
            title: "Next.js To-Do Dashboard",
            description: "A beginner-friendly to-do app built with Next.js, localStorage, and custom modals. Great for task tracking and UI testing.",
            icon: <CalendarCheck2 size={18} />,
            image: "/download (3).png",
            link: "https://next-js-to-do-list-app.vercel.app/"
        },
        {
            title: "Dark Sole eCommerce",
            description: "A full-stack fashion store built for showcasing custom products with cart functionality and elegant product display pages.",
            icon: <Store size={18} />,
            image: "/download (4).png",
            link: "https://dark-sole-client.vercel.app/"
        },
    ];

    return (
        <div className={`min-h-screen p-4 md:p-10`}>
            <main className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold text-purple-600 mb-6">👋 About Me</h1>

                <section className="mb-12 space-y-4">
                    <p>Hi, I'm <span className="text-purple-500 font-semibold">Ibrahim</span> — a self-taught, highly motivated full-stack web developer.</p>
                    <p>I specialize in the <span className="font-medium text-purple-500">MERN stack</span>, and I enjoy transforming ideas into real, scalable digital products.</p>
                    <p>When I'm not coding, I'm exploring backend architecture, designing sleek UIs, or brainstorming my next big startup idea.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-purple-500 flex items-center gap-2 mb-4"><Sparkles size={28} /> Skills & Tools</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-base list-disc list-inside">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React.js & Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js & Express.js</li>
                        <li>MongoDB & Mongoose</li>
                        <li>REST APIs</li>
                        <li>Git & GitHub</li>
                        <li>Vercel, Render</li>
                        <li>Basic Python</li>
                        <li>UI/UX Design</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-purple-500 flex items-center gap-2 mb-4"><Rocket size={28} /> Projects</h2>
                    <div className="space-y-8">
                        {product.map((item, i) => (
                            <div key={i} className={`transition duration-300 ring-2 ${darkMode ? "ring-neutral-700 bg-neutral-800 text-neutral-300" : "ring-neutral-200 bg-neutral-100 text-neutral-800"} rounded-xl overflow-hidden `}>
                                <Link href={item.link} target="_blank">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-64 md:h-100 object-cover p-3"
                                    />
                                </Link>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold flex items-center gap-2">{item.icon} {item.title}</h3>
                                    <p className="mt-2 text-sm">{item.description}</p>
                                    <Link href={item.link} target="_blank" className="flex gap-2 items-center mt-3 text-purple-500 hover:underline">
                                        Visit Project <ArrowRightFromLine size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-purple-500 flex items-center gap-2 mb-4"><Milestone size={28} /> My Mission</h2>
                    <p>I'm working towards building impactful software that solves real-world problems. My long-term vision is to launch successful SaaS platforms, grow my brand, and achieve financial freedom through tech entrepreneurship.</p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-purple-500 flex items-center gap-2 mb-4"><Mail size={28} /> Let's Connect</h2>
                    <p>If you're interested in working together, want to network, or just want to say hi — reach out!</p>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center gap-2"><Instagram size={18} /> Instagram: <a href="https://instagram.com/viralface_1" target="_blank" className="text-purple-400 hover:underline">@viralface_1</a></li>
                        <li className="flex items-center gap-2"><Github size={18} /> GitHub: <a href="https://github.com/ibhimwhar" target="_blank" className="text-purple-400 hover:underline">github.com/ibhimwhar</a></li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Page;