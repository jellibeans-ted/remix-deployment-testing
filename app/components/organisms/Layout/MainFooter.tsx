import { useTranslation } from "react-i18next";
import Logo from "~/components/atoms/Logo";
import SocialIcons from "~/components/atoms/SocialIcons";
import { EmailSubmitTextField } from "~/components/atoms/TextFields";

const MainFooter = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full h-footer bg-dark-5 px-10 py-2 relative flex flex-col justify-between">
      <div className="pt-28 flex flex-col gap-4">
        <Logo color="white"/>
        <div className="text-76 leading-1.1 font-light text-white opacity-80">{t("lets_connect")}</div>
      </div>
      <div className="box-content py-6 flex justify-between">
        <div className="body3 !text-white opacity-80">
          {t("ouroffic")}
        </div>
        <div className="flex items-center gap-4">
          <EmailSubmitTextField />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
