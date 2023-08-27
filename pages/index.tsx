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
  return {
    props: res,
    revalidate: 60 * 60 * 12, // EVERY HALF A DAY
  };
};

const getHashData = async (): Promise<HashNodeProps> => {
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
      return response.data.data as HashNodeProps;
    } else {
      console.error("GraphQL Request Failed");
    }
  } catch (error) {
    console.error("GraphQL Request Failed");
  }
  return {
    user: {
      numFollowers: 10,
      photo:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1691341772043/b81414dd-0790-4d85-a58f-17580026efe1.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp",
      publication: {
        posts: [],
      },
    },
  };
};
