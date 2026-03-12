/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[], vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: string | Element | number | null, smooth?: boolean, position?: string): void;
  }
}
