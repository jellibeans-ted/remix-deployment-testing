import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  json,
  type LinksFunction,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/cloudflare";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import i18next from "~/i18next.server";
import tailwindcss from "~/styles/tailwind.css";
import globalcss from "~/styles/global.css";
import Layout from "./components/organisms/Layout/Layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: globalcss },
];

export const loader = async ({ request }: LoaderArgs) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jelli.Studio" }];
};

export default function App() {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n, ready } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang="en" dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {ready ? (
          <Layout>
            <Outlet />
          </Layout>
        ) : (
          ""
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
