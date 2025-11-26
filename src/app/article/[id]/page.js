import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleById, getArticles } from "@/lib/data";
import { Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

// Generate static params for all articles (ISR/SSG)
export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        id: article.id,
    }));
}

export async function generateMetadata({ params }) {
    const article = await getArticleById(params.id);
    if (!article) return { title: "Article Not Found" };

    return {
        title: `${article.title} - LiveHindustan Clone`,
        description: article.summary,
    };
}

export default async function ArticlePage({ params }) {
    const article = await getArticleById(params.id);

    if (!article) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Article Header */}
            <div className="p-6 md:p-8 pb-0">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.date}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {article.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {article.summary}
                </p>

                {/* Social Share */}
                <div className="flex items-center gap-4 border-y border-gray-100 py-4 mb-6">
                    <span className="text-gray-500 font-medium flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> Share
                    </span>
                    <div className="flex gap-3">
                        <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
                            <Facebook className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 transition">
                            <Twitter className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition">
                            <Linkedin className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100">
                {article.image ? (
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 font-medium">
                        No Image Available
                    </div>
                )}
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none text-gray-800">
                    <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-red-700 first-letter:mr-3 first-letter:float-left">
                        {article.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">Key Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Important point number one regarding this news story.</li>
                        <li>Another critical aspect that readers should be aware of.</li>
                        <li>Final concluding thought on the matter.</li>
                    </ul>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </article>
    );
}
