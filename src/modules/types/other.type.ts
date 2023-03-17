export type AnyFunc = (...args: any[]) => any;

export type LastFnReturnType<
  F extends Array<AnyFunc>,
  Else = never
> = F extends [...any[], (...arg: any) => infer R] ? R : Else;

export type PipeArgs<
  F extends AnyFunc[],
  Acc extends AnyFunc[] = []
> = F extends [(...args: infer A) => infer B]
  ? [...Acc, (...args: A) => B]
  : F extends [(...args: infer A) => any, ...infer Tail]
  ? Tail extends [(arg: infer B) => any, ...any[]]
    ? PipeArgs<Tail, [...Acc, (...args: A) => B]>
    : Acc
  : Acc;

export type PickObject<T, K extends keyof T> = { [property in K]: T[property] };
export type OmitObject<T, K extends keyof T> = {} & PickObject<T, K>;