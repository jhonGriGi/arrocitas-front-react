import { ReactNode } from "react";
import HomeInfo from "../ui/organisms/HomeInfo";
import { ALLOWED_TEMPLATES } from "../../utils/Constants";
import Product from "../ui/organisms/Product";

interface Props {
  template: string;
}

type TemplateList = {
  [key: string]: () => ReactNode;
};

function HomeTemplate({ template }: Readonly<Props>) {
  const templateList: TemplateList = {
    [ALLOWED_TEMPLATES.HOME]: () => <HomeInfo />,
    [ALLOWED_TEMPLATES.PRODUCT]: () => <Product />,
  };

  const selectedTemplate = templateList[template];

  console.log(templateList[template]);

  return selectedTemplate ? selectedTemplate() : null;
}

export default HomeTemplate;
