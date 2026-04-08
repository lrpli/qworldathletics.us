import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import NewsSearch from "@/components/NewsSearch";
import { newsList } from "@/data/mockData";

export default function NewsPage() {
  return (
    <div>
      <PageHero title="新闻资讯" description="公开记录我们的行动进展、合作动态和阶段成果，欢迎持续关注。" />
      <section className="py-12">
        <Container>
          <NewsSearch items={newsList} />
        </Container>
      </section>
    </div>
  );
}
