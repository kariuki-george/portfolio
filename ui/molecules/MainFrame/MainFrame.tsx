import { cva, VariantProps } from "cva";
import Header, { HeaderProps } from "../Header/Header";

const mainFrameStyles = cva("w-full h-full flex flex-column p-3");

export interface MainFrameProps extends VariantProps<typeof mainFrameStyles> {
  headerProps: HeaderProps;
  children: React.ReactNode;
}

const MainFrame = (props: MainFrameProps) => {
  return (
    <div className={mainFrameStyles()}>
      <Header {...props.headerProps} />
      {props.children}
    </div>
  );
};

export default MainFrame;
