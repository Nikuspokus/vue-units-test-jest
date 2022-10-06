import { mount } from "@vue/test-utils";
import { Counter } from "@/comonents/Counter.vue";

describe("Counter.vue", () => {
  it("render component", () => {
    const wrapper = mount(Counter);
    expect(wrapper.element).toMatchSnapshot();
  });
});
