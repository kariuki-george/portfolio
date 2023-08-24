import { NextPage } from "next";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HashNodeProps } from "@/pages";

interface Props {
  data: HashNodeProps;
}

const About: NextPage<Props> = ({ data }: Props) => {
  console.log(data, "Popi");
  return (
    <div className="  bg-transpatent text-black-500   ">
      <section className="max-w-[1100px]   m-auto bg-transparent">
        <div
          id="about"
          className="pt-2 mb-10 p-10 w-full md:w-3/4 m-auto gap-3 flex flex-col items-center justify-center"
        >
          <p className="w-full mt-20 text-lg mb-5 ">
            I'm a fullstack web developer and Rust enthusiast. I'm currently
            enrolled at{" "}
            <a
              href="https://jkuat.ac.ke/"
              target="_blank"
              className="decoration-wavy underline italic decoration-green-brand"
            >
              JKUAT
            </a>{" "}
            for a computer science degree (2020-2024).
            <br />
            My current tools of work include TypeScript, Nestjs, Next.js,
            Graphql, Postgres and more.
            <br /> I create educational content for developers, making the hard
            concepts easier. This comes in the form of blog posts and tweets.
            <br />
            You can check them out below.
          </p>
          <span className="w-full flex justify-between  flex-col sm:flex-row gap-3">
            <span className="w-full h-full">
              <a href="https://twitter.com/_kariuki_george" target="_blank">
                <Card>
                  <CardContent className="flex  truncate items-center gap-3 py-3 h-full rounded-sm ">
                    <Image
                      src="https://pbs.twimg.com/profile_images/1529484742630035461/nOF82ixm_400x400.jpg"
                      alt="twitter-profile-image"
                      height={70}
                      width={70}
                      className="rounded-full "
                    />
                    <aside className="flex p-2 flex-col gap-3 justify-center h-full ">
                      <span className="truncate font-semibold">
                        @_kariuki_george
                      </span>
                      <span>10 followers</span>
                    </aside>
                    <aside>
                      <HiOutlineExternalLink className="hover:text-green-brand w-6 h-6" />
                    </aside>
                  </CardContent>
                </Card>
              </a>{" "}
            </span>
            <span className="w-full h-full">
              <a href="https://blog.kariukigeorge.me" target="_blank">
                <Card>
                  <CardContent className="flex  truncate items-center gap-3 py-3 h-full rounded-sm ">
                    <Image
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1691341772043/b81414dd-0790-4d85-a58f-17580026efe1.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=web"
                      alt="twitter-profile-image"
                      height={70}
                      width={70}
                      className="rounded-full"
                    />
                    <aside className="flex p-2 flex-col gap-3 justify-center h-full ">
                      <span className="truncate font-semibold">
                        @George's blog
                      </span>
                      <span>{data?.user?.numFollowers} followers</span>
                    </aside>
                    <aside>
                      <HiOutlineExternalLink className="hover:text-green-brand w-6 h-6" />
                    </aside>
                  </CardContent>
                </Card>
              </a>
            </span>{" "}
          </span>
          <article className="w-full flex flex-col gap-3">
            {data.user.publication.posts.slice(0, 3).map((post) => (
              <a
                href={"https://blog.kariukigeorge.me/" + post.slug}
                target="_blank"
              >
                <Card>
                  <CardContent className="flex items-center justify-between  h-full gap-3">
                    <aside className="flex p-2 flex-col gap-3 justify-center h-full ">
                      <span className="text-lg font-semibold">
                        {post.title}
                      </span>
                      <span className="flex gap-3">
                        <span>{post.views} views</span>
                        <span>{post.readTime} minutes</span>
                      </span>
                    </aside>
                    <aside>
                      <HiOutlineExternalLink className="hover:text-green-brand w-6 h-6" />
                    </aside>
                  </CardContent>
                </Card>
              </a>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
