// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type WhiteSpace = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer Rest}` ? TrimLeft<Rest> : S
type TrimRight<S extends string> = S extends `${infer Rest}${WhiteSpace}` ? TrimRight<Rest> : S
type Trim<S extends string> = TrimRight<TrimLeft<S>>
