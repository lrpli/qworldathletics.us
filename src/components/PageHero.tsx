import Container from "@/components/Container";

type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50 py-14">
      <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl" />
      <Container className="relative">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-700">{description}</p>
      </Container>
    </section>
  );
}
