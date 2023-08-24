import { GetStaticProps, NextPage } from "next";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HeroLayout from "../components/HeroLayout";
import Black from "../layouts/Black";
import White from "../layouts/White";
import axios from "axios";

export interface HashNodeProps {
  user: {
    numFollowers: number;
    photo: string;
    publication: {
      posts: {
        slug: string;
        dateFeatured?: string;
        readTime: number;
        title: string;
        views: number;
      }[];
    };
  };
}

const Home: NextPage<HashNodeProps> = (props: HashNodeProps) => {
  return (
    <div className="relative w-full z-0 flex flex-col">
      <Header />

      <Black>
        <Hero />
      </Black>
      <HeroLayout />
      <White>
        <About data={props} />
      </White>
      {/* <TalkLayout /> */}
      <Black>
        <Projects />
        <Contacts />
        <Footer />
      </Black>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res: HashNodeProps = await getHashData();
  return { props: res };
};

const getHashData = async () => {
  const query = `query BlogData {
  user(username: "kariukigeorge") {
     photo
     numFollowers
     publication {
       posts (page: 0){
        slug
        title
        popularity
        views
        readTime
        dateFeatured
      }
     }
  }
}
`;
  try {
    const response = await axios.post(
      process.env.HASHNODE_API as string,
      JSON.stringify({ query }),
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status === 200) {
      console.log("GraphQL Response:", response.data);
      return response.data.data;
    } else {
      console.error("GraphQL Request Failed");
    }
  } catch (error) {
    console.error("GraphQL Request Failed");
  }
};
