import { FC } from "react";

type InitProps = { onUpdate?: (components: FC[]) => void };

export class NavigationController {
  private components: FC[] = [];
  private onUpdate?: (components: FC[]) => void;

  constructor(props: InitProps) {
    const { onUpdate } = props;
    this.onUpdate = onUpdate;
  }

  push(component: FC) {
    this.components.push(component);
    this.onUpdate?.(this.components);
  }

  pop() {
    this.components.pop();
    this.onUpdate?.(this.components);
  }

  popAll() {
    this.components = [];
    this.onUpdate?.(this.components);
  }

  getComponents() {
    return this.components;
  }
}
