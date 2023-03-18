import HomeLayout from "@/components/HomeLayout";
import ProjectsList from "@/components/ProjectsList";

export default function Home() {
  return (
    <HomeLayout>
      {/* Projects list */}
      <h1>Mis proyectos</h1>

      <ProjectsList />
    </HomeLayout>
  );
}
