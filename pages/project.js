import { useRouter } from "next/router"; 
import Query from "../components/query"; 
import PROJECT_QUERY from "../apollo/queries/project/project";

const Project = () => {
    const router = useRouter();
    return (
        <Query query={PROJECT_QUERY} id={router.query.id}>
            {({ data: { project }}) => {
                const imageUrl =  process.env.API_URL + project.Image.url;

                return (
                    <div>
                        <h1>{project.Title}</h1>
                        <img 
                        src={imageUrl}
                        />
                        <p>
                            {project.Description}
                        </p>
                        <a href={project.Url} target="_blank">View</a>
                    </div>
                )
            }}

        </Query>
    )
}

export default Project;