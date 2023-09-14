"use client";
import Image from "next/image";
export default function About() {
  return (
    <div className="w-fit pt-5 pb-5 pl-20 pr-10 ml-5  border-2 border-red-600">
      <div className="grid grid-rows-3 grid-flow-col gap-4 w-fit h-fit">
        <div className="row-span-3">
          <Image
            src="/images/m1.jpg"
            alt="Marcia Moss"
            className="dark:invert"
            width={150}
            height={24}
            priority
          />
          <div className="flex flex-col bg-white place-content-center">
            <div className="self-center text-sm text-customFontColor font-bold mt-1 mb-1">
              <a href="https://github.com/marciamoss" target="blank">
                Github
              </a>
            </div>
            <div className="self-center text-sm text-customFontColor font-bold mt-1 mb-1">
              <a
                href="https://www.linkedin.com/in/marcia-moss-056200175/"
                target="blank"
              >
                Linkedin
              </a>
            </div>
            <div className="self-center text-sm text-customFontColor font-bold mt-1 mb-1">
              <a
                href="https://drive.google.com/file/d/1K9IBeVNUQR3BGT5pPH0Ca-8iUVrGpLax/view?usp=sharing"
                target="blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="ml-8 h-fit flex flex-row place-content-center col-span-2">
          <div>
            <div className="self-center p-4 block border-l-4 border-blockQuoteBorder">
              <p className="text-left text-customFontColor italic font-bold">
                Maya Angelou perfectly sums up the way I work in her quote,
              </p>
              <p className="text-left text-customFontColor italic font-bold">
                &quot;Do the best you can until you know better. Then when you
                know better, do better.&quot;
              </p>
            </div>
            <div className="flow-root text-base font-sans font-normal leading-6 text-customFontColor my-4">
              I’m a full stack developer who is always striving for excellence
              and growth. I specialize in JavaScript technologies across the
              MERN & MEAN stack (Mongo DB, Express.js, React.js, Angular and
              Node.js). With experience in crafting clean front-ends and
              functional back-end API systems, I love to spend my time coding
              and, due to my work ethic and focus, am known to deliver on time.
            </div>
            <div className="flow-root text-base font-sans font-normal leading-6 text-customFontColor my-4">
              As a lifelong learner that is always looking to stay on top of
              leading technologies, I graduated from University of North
              Carolina’s MERN Development Boot Camp and Farleigh Dickinson
              University with a Master in Computer Science. As a result, I am
              savvy enough to build your next application from scratch, yet
              sophisticated enough to have developed Fortune 100 solutions.
            </div>
          </div>
        </div>
        <div className="ml-8 h-fit row-span-2 col-span-2">
          <div className="flow-root text-base font-sans font-bold leading-6 text-customFontColor">
            Education:
            <ul className="list-disc mx-12 font-normal">
              <li>
                <p>Full stack web development from UNC at Chapel Hill, NC</p>
                <p className="italic">2018-2019</p>
              </li>
              <li>
                <p>M.S. Computer Science, FDU, Teaneck NJ</p>
                <p className="italic">2001-2003</p>
              </li>
            </ul>
          </div>
          <div className="flow-root text-base font-sans font-bold leading-6 text-customFontColor my-8">
            Skills:
            <ul className="list-disc mx-12 font-normal">
              <li>
                <p>Languages: JavaScript, Typescript, HTML, CSS</p>
              </li>
              <li>
                <p>
                  Frameworks: Node.js, Express, React, React-Native, Nextjs
                  Redux-Toolkit-Query
                </p>
              </li>
              <li>
                <p>
                  Database Tools: AWS, Google Cloud Functions, MongoDB,
                  Firebase, SQL, Sequelize, PostgresSQL, CouchDB
                </p>
              </li>
              <li>
                <p>Other: Git/Github, Tailwind-css</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
