import { getArticles } from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";

export default async function Home() {
  const articles = await getArticles();

  // Logic to determine top story and others
  // For demo, first article is top story, next 3 are side stories, rest are grid
  const topStory = articles[0];
  const sideStories = articles.slice(1, 4);
  const otherStories = articles.slice(4);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection topStory={topStory} sideStories={sideStories} />

      {/* Latest News Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
            Latest News
          </h2>
          <button className="text-red-700 font-semibold hover:underline text-sm">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherStories.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
          {/* Duplicate for demo to fill grid */}
          {otherStories.map((article) => (
            <NewsCard key={`${article.id}-dup`} article={{ ...article, id: `${article.id}-dup` }} />
          ))}
        </div>
      </section>

      {/* Category Section (Demo) */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
          Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.filter(a => a.category === 'Technology').map(article => (
            <NewsCard key={`tech-${article.id}`} article={article} compact={true} />
          ))}
          {/* Fallback if no tech news */}
          {articles.slice(0, 2).map(article => (
            <NewsCard key={`tech-fallback-${article.id}`} article={article} compact={true} />
          ))}
        </div>
      </section>
    </div>
  );
}
