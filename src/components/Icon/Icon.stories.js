import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: {
      options: ["large", "inherit", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
  },
};
