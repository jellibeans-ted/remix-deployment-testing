import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export const SignUpButton = () => {
  const { t } = useTranslation("common");
  return (
    <Link to={"/signup"}>
      <button className="px-11 py-2 rounded-4 border border-dark-5">
        <span className="body3 px-2 uppercase">{t("signup")}</span>
      </button>
    </Link>
  );
};
