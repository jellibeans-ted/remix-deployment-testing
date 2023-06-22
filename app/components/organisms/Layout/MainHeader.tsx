import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { SignUpButton } from "~/components/atoms/Buttons";
import Logo from "~/components/atoms/Logo";

const MainHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full h-20 px-10">
      <div className="w-full h-full flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-16">
          <nav className="flex gap-6 items-center">
            <Link to="/price" className="first-letter:uppercase">
              {t("price")}
            </Link>
            <Link to="/article" className="first-letter:uppercase">
              {t("artitle")}
            </Link>
            <Link to="/company" className="first-letter:uppercase">
              {t("company")}
            </Link>
          </nav>
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
