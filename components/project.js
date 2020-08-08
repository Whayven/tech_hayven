import Link from "next/link";

const Project = ({ project }) => {
  const imageUrl =
    process.env.NODE_ENV == "development"
      ? project.Image.url
      : process.env.API_URL + project.Image.url;
  return (
    <Link href={{ pathname: "project", query: { id: project.id } }}>
      <a>
        <div>
          <h2>{project.Title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default Project;
