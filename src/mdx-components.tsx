import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    a: ({ href, children, ref, ...rest }) => {
      const target =
        href?.startsWith("http") || href?.startsWith("/files")
          ? "_blank"
          : undefined;
      return (
        <Link href={href!} target={rest.target ?? target} {...rest}>
          {children}
        </Link>
      );
    },
    ...components,
  };
}
