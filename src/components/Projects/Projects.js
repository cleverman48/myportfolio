import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/112.png";
import emotion from "../../Assets/Projects/siba.png";
import editor from "../../Assets/Projects/bake.png";
import chatify from "../../Assets/Projects/113.png";
import suicide from "../../Assets/Projects/111.png";
import bitsOfCode from "../../Assets/Projects/117.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Infomart Co., Ltd."
              description="For this project, we developed a pixel-perfect UI and built a React-based frontend. I also used GraphQL and Apollo client."
              //ghLink=""
              demoLink="https://corp.infomart.co.jp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DJ HI-C / Discovery"
              description="Tree.js,Node.js,React"
              //ghLink=""
              demoLink="https://discoveryhi-c.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Teppanyaki sticking"
              description="I was in charge of the front end and design."
              //ghLink=""
              demoLink="https://teppanyaki-mitsui.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SAUVENIR - Brand specializing in sauna goods"
              description="I used Vue.js to build the backend and PHP and Laravel with real-time communication to create a distributed system."
              //ghLink=""
              demoLink="https://sauvenir.jp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="If it is a cleaning robot for catering and business use [ROBOTI] | iGoods Co., Ltd."
              description="WEB site HP design, coding."
              //ghLink=""
              demoLink="https://robot.i-goods.co.jp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="portfolio site for desiner"
              description="I completed portfolio site for artist.Here I only used HTML,JS ans CSS."
              ghLink="https://github.com/cleverman48/portpolio-site.git"
              demoLink="https://cleverman-portfolio-2c77a.web.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
