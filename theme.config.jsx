import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: <b>BancoLibre</b>,
  docsRepositoryBase: "https://github.com/kipu-org/banco-docs",
  project: {
    link: "https://github.com/kipu-org/",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – BancoLibre",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://bancolibre.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link rel="icon" href="/docs/favicon.ico" type="image/ico" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "BancoLibre"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Banking for the Unbanked"}
        />
      </>
    );
  },
  footer: {
    text: (
      <span>
        AGPLv3 {new Date().getFullYear()} ©{" "}
        <a href="https://bancolibre.com" target="_blank">
          BancoLibre
        </a>
        .
      </span>
    ),
  },
};
