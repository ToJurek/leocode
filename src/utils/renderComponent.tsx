import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { FunctionComponentElement, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { RootState, store } from "../store/store";

interface ExtendedRenderOptions extends RenderOptions {
  initialState: Partial<RootState>;
  store?: Store<Partial<RootState>>;
}

const render = (
  component: FunctionComponentElement<ReactElement>,
  { ...renderOptions }: ExtendedRenderOptions = {
    initialState: {},
  }
) => {
  return rtlRender(component, {
    wrapper: TestWrapper(store),
    ...renderOptions,
  });
};

const TestWrapper =
  (store: Store) =>
  ({ children }: { children?: ReactNode }) =>
    <Provider store={store}>{children}</Provider>;

export * from "@testing-library/react";
// override the built-in render with our own
export { render };
