import Title from "./../utils/title";
import "./about.css";

function AddFrame(props) {
  return (
    <>
      <fieldset className="fields">
        <legend>{props.title}</legend>
        <blockquote>{props.children}</blockquote>
      </fieldset>
    </>
  );
}

export default function About() {
  Title("About");
  const informations = [
    {
      title: "Online Presence",
      content:
        "A well-developed website serves as a digital storefront or portfolio, allowing businesses and individuals to establish a strong online presence. It helps in reaching a broader audience and connecting with people globally.",
    },
    {
      title: "Accessibility and Convenience",
      content:
        "Websites provide 24/7 access to information and services. This convenience is essential for users who want to browse products, find information, or interact with services at any time.",
    },
    {
      title: "Information Accessibility",
      content:
        "Websites are a primary source of information for people seeking services, products, or knowledge. Web development makes it possible to provide valuable content and resources to users quickly and efficiently.",
    },
    {
      title: "Branding and Marketing",
      content:
        "A website is a key component of a brand’s identity. It allows businesses to showcase their brand's personality, values, and offerings, and it serves as a platform for various marketing strategies, including SEO, content marketing, and social media integration.",
    },
    {
      title: "E-Commerce Capabilities",
      content:
        "For many businesses, having an online store is essential. Web development facilitates the creation of e-commerce platforms where users can browse, select, and purchase products or services.",
    },
    {
      title: "Communication and Interaction",
      content:
        "Websites often serve as a communication channel between businesses and customers. Features such as contact forms, chatbots, and customer support options enhance interaction and provide users with the help they need.",
    },
    {
      title: "Adaptivity and Growth",
      content:
        "A well-developed website can adapt to technological changes and growing business needs. Scalability features allow sites to expand functionalities and integrate with other systems as required.",
    },
    {
      title: "Data Collection and Analytics",
      content:
        "Websites enable businesses to collect and analyze data on user behavior, preferences, and engagement. This information is valuable for making informed decisions and optimizing marketing strategies.",
    },
  ];
  return (
    <div className="about">
      <h1>About</h1>
      <div>
        {informations.map((v) => {
          return <AddFrame title={v.title}>{v.content}</AddFrame>;
        })}
      </div>
    </div>
  );
}
