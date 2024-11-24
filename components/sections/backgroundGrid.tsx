import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function BackgroundGrid() {
  return (
    <section className="pb-12 pt-28">
      <MaxWidthWrapper>
        <BackgroundBeamsWithCollision>
          <div>
            <h2 className="relative z-20 text-center font-sans text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl">
              So, Is this course for you?{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">I want you to ask yourself!</span>
                </div>
                <div className="relative bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent">
                  <span className="">I want you to ask yourself!</span>
                </div>
              </div>
            </h2>
            <div className="py-8 text-3xl text-black dark:text-white">
              <ol className="relative z-20 mt-8 space-y-4 text-center text-lg text-black dark:text-white md:text-xl lg:text-2xl">
                {" "}
                <li>
                  <i>
                    You’re excited about programming, but you feel lost without
                    a clear roadmap...
                  </i>
                </li>{" "}
                <li>
                  <i>
                    You’ve spent hours searching for the “perfect” resources,
                    only to feel overwhelmed...
                  </i>
                </li>{" "}
                <li>
                  <i>
                    You dive into tutorials, but it all slips away the moment
                    you close your laptop...
                  </i>
                </li>{" "}
                <li>
                  <i>
                    You’re stuck in an endless loop of “Which tech stack should
                    I even pick?”...
                  </i>
                </li>{" "}
                <li>
                  <i>
                    Every day, you tell yourself you’ll start tomorrow, but the
                    motivation never comes...
                  </i>
                </li>{" "}
              </ol>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </MaxWidthWrapper>
    </section>
  );
}
