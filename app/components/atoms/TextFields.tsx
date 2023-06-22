import cn from "classnames";
import { useTranslation } from "react-i18next";

interface EmailSubmitTextFieldProps {
  className?: string;
}

export const EmailSubmitTextField = ({
  className,
}: EmailSubmitTextFieldProps) => {
  const { t } = useTranslation("common");
  return (
    <div className={cn("relative", className)}>
      <input
        type="text"
        className={cn(
          "bg-transparent w-input rounded-4 border border-white border-opacity-20",
          "body3 !text-white pl-6 pr-100 py-2.25"
        )}
        placeholder={t("email_address")}
      />
      <button className="body1-medium !text-white first-letter:uppercase absolute top-2 right-6 z-50">
        {t("submit")}
      </button>
    </div>
  );
};
