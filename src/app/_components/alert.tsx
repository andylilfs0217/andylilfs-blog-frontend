import Container from "@/app/_components/container";
import { GITHUB_PROJECT_REPO_PATH } from "@/lib/constants";
import cn from "classnames";

const preview = process.env.VERCEL_ENV !== "production";

const Alert = () => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>This page is a preview.</>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`${GITHUB_PROJECT_REPO_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
