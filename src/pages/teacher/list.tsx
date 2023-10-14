import { IResourceComponentsProps } from "@refinedev/core";
import { AntdListInferencer } from "@refinedev/inferencer/antd";

import { inferencerPredefinedMeta } from "../../inferencerPredefinedMeta";
import { Button } from "antd";

export const TeacherList: React.FC<IResourceComponentsProps> = () => {
  return (
    <>
      <Button>antd</Button>
      <AntdListInferencer meta={inferencerPredefinedMeta} />
    </>
  );
};
