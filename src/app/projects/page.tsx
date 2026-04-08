import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/data/mockData";

export default function ProjectsPage() {
  return (
    <div>
      <PageHero title="公益项目" description="我们围绕四大领域开展项目，并持续更新阶段成果与真实影响。" />
      <section className="py-12">
        <Container>
          <ProjectFilter items={projects} />
        </Container>
      </section>
    </div>
  );
}
