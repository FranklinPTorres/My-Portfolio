import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>My Hobbies</Accordion.Header>
        <Accordion.Body>
          my top hobby are video games in general, the story telling, graphics, mechanics, challenge, EVERITHING.
          secondly is music, love music with all my body, playing instruments, listening, discovering new artist.
          Finally I love everything about design, about colors, about sizes, fonts I really love to made graphic designs and 
          see the final result of what I have in mind.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>My Background</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default About;