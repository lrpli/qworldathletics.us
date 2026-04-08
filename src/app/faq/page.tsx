import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import { faqList } from "@/data/mockData";

export default function FAQPage() {
  return (
    <div>
      <PageHero title="常见问题 FAQ" description="这里汇总了大家最关心的问题，帮助你快速了解参与方式与信息披露机制。" />
      <section className="py-12">
        <Container className="max-w-4xl">
          <div className="grid gap-4">
            {faqList.map((faq) => (
              <article key={faq.id} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{faq.question}</h2>
                <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
