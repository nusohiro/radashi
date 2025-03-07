/**
 * Applies a series of functions to an initial value in sequence.
 *
 * @param {unknown} value - The initial value to be passed through the functions.
 * @param {...ReadonlyArray<(input: unknown) => unknown>} fns - A sequence of functions to apply.
 *        Each function takes the output of the previous function as its input.
 * @returns The final result after applying all functions in sequence.
 *
 * @example
 * // Example 1: Transform a number through a series of functions
 * const result = pipe(
 *   5,
 *   x => x * 2,  // 10
 *   x => x.toString(), // "10"
 *   x => x + '!', // "10!"
 * );
 * console.log(result); // Output: "Value: 10"
 *
 * @example
 * // Example 2: Process a string through multiple transformations
 * const result = pipe(
 *   'hello',
 *   x => x.toUpperCase(), // "HELLO"
 *   x => x.split('').reverse().join('') // "OLLEH"
 * );
 * console.log(result); // Output: "OLLEH"
 *
 * @example
 * // Example 3: Process an array through multiple transformations
 * const result = pipe(
 *   [1, 2, 3],
 *   arr => arr.map(x => x * 2), // [2, 4, 6]
 *   arr => arr.filter(x => x >= 4), // [4, 6]
 *   arr => arr.join('-'), // "4-6"
 * );
 * console.log(result); // Output: "4-6"
 */
export const pipe: Pipe = (
  value: unknown,
  ...fns: ReadonlyArray<(input: unknown) => unknown>
) => {
  return fns.reduce((acc, fn) => fn(acc), value)
}

type Pipe = {
  <A>(value: A): A
  <A, B>(value: A, fn1: (input: A) => B): B
  <A, B, C>(value: A, fn1: (input: A) => B, fn2: (input: B) => C): C
  <A, B, C, D>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
  ): D
  <A, B, C, D, E>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
  ): E
  <A, B, C, D, E, F>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
  ): F
  <A, B, C, D, E, F, G>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
  ): G
  <A, B, C, D, E, F, G, H>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
  ): H
  <A, B, C, D, E, F, G, H, I, J>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
  ): J
  <A, B, C, D, E, F, G, H, I, J, K>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
  ): K
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
  ): L
  <A, B, C, D, E, F, G, H, I, J, K, L, M>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
  ): M
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
  ): N
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
  ): O
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
  ): P
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
  ): Q
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
  ): R
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
  ): S
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
  ): T
  <
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  >(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
    fn20: (input: T) => U,
  ): U
  <
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  >(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
    fn20: (input: T) => U,
    fn21: (input: U) => V,
  ): V
  <
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  >(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
    fn20: (input: T) => U,
    fn21: (input: U) => V,
    fn22: (input: V) => W,
  ): W
  <
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  >(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
    fn20: (input: T) => U,
    fn21: (input: U) => V,
    fn22: (input: V) => W,
    fn23: (input: W) => X,
  ): X
  <
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  >(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
    fn20: (input: T) => U,
    fn21: (input: U) => V,
    fn22: (input: V) => W,
    fn23: (input: W) => X,
    fn24: (input: X) => Y,
  ): Y
  <
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  >(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G,
    fn7: (input: G) => H,
    fn8: (input: H) => I,
    fn9: (input: I) => J,
    fn10: (input: J) => K,
    fn11: (input: K) => L,
    fn12: (input: L) => M,
    fn13: (input: M) => N,
    fn14: (input: N) => O,
    fn15: (input: O) => P,
    fn16: (input: P) => Q,
    fn17: (input: Q) => R,
    fn18: (input: R) => S,
    fn19: (input: S) => T,
    fn20: (input: T) => U,
    fn21: (input: U) => V,
    fn22: (input: V) => W,
    fn23: (input: W) => X,
    fn24: (input: X) => Y,
    fn25: (input: Y) => Z,
  ): Z
}
