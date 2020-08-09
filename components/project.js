import Link from "next/link";
import { Card, CardImg, CardTitle } from "reactstrap";
import styled from "styled-components";

const Project = ({ project }) => {
  const imageUrl = process.env.API_URL + project.Image.url;

  const CardLink = styled.a`
    color: #00000080;
    padding: 0.3rem;
    font-size: 1.5rem;

    &:hover {
      text-decoration: none;
      cursor:pointer;
      color: #rgba(0,0,0,.5);
    }
  `;

  return (
        <Card className="my-4 text-center p-2">
          <CardImg src={imageUrl} className="img-fluid" />
            <Link href={{ pathname: "project", query: { id: project.id } }} passHref>
              <CardLink>
                {project.Title}
              </CardLink>
            </Link>
        </Card>
  );
};

export default Project;
