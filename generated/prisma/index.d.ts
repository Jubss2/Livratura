
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model GrupoDeLeitura
 * 
 */
export type GrupoDeLeitura = $Result.DefaultSelection<Prisma.$GrupoDeLeituraPayload>
/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model admSubordinados
 * 
 */
export type admSubordinados = $Result.DefaultSelection<Prisma.$admSubordinadosPayload>
/**
 * Model participantesDesafio
 * 
 */
export type participantesDesafio = $Result.DefaultSelection<Prisma.$participantesDesafioPayload>
/**
 * Model Catalogo
 * 
 */
export type Catalogo = $Result.DefaultSelection<Prisma.$CatalogoPayload>
/**
 * Model MetaDeLeitura
 * 
 */
export type MetaDeLeitura = $Result.DefaultSelection<Prisma.$MetaDeLeituraPayload>
/**
 * Model Conquista
 * 
 */
export type Conquista = $Result.DefaultSelection<Prisma.$ConquistaPayload>
/**
 * Model Comunidade
 * 
 */
export type Comunidade = $Result.DefaultSelection<Prisma.$ComunidadePayload>
/**
 * Model Resenha
 * 
 */
export type Resenha = $Result.DefaultSelection<Prisma.$ResenhaPayload>
/**
 * Model usuarioResenha
 * 
 */
export type usuarioResenha = $Result.DefaultSelection<Prisma.$usuarioResenhaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoPerfil: {
  USUARIO: 'USUARIO',
  ADMINSTRADOR: 'ADMINSTRADOR'
};

export type TipoPerfil = (typeof TipoPerfil)[keyof typeof TipoPerfil]


export const TipoCatalogo: {
  Colacao: 'Colacao',
  Desafio: 'Desafio'
};

export type TipoCatalogo = (typeof TipoCatalogo)[keyof typeof TipoCatalogo]

}

export type TipoPerfil = $Enums.TipoPerfil

export const TipoPerfil: typeof $Enums.TipoPerfil

export type TipoCatalogo = $Enums.TipoCatalogo

export const TipoCatalogo: typeof $Enums.TipoCatalogo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Livros
 * const livros = await prisma.livro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Livros
   * const livros = await prisma.livro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grupoDeLeitura`: Exposes CRUD operations for the **GrupoDeLeitura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrupoDeLeituras
    * const grupoDeLeituras = await prisma.grupoDeLeitura.findMany()
    * ```
    */
  get grupoDeLeitura(): Prisma.GrupoDeLeituraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admSubordinados`: Exposes CRUD operations for the **admSubordinados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmSubordinados
    * const admSubordinados = await prisma.admSubordinados.findMany()
    * ```
    */
  get admSubordinados(): Prisma.admSubordinadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantesDesafio`: Exposes CRUD operations for the **participantesDesafio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantesDesafios
    * const participantesDesafios = await prisma.participantesDesafio.findMany()
    * ```
    */
  get participantesDesafio(): Prisma.participantesDesafioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalogo`: Exposes CRUD operations for the **Catalogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogos
    * const catalogos = await prisma.catalogo.findMany()
    * ```
    */
  get catalogo(): Prisma.CatalogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metaDeLeitura`: Exposes CRUD operations for the **MetaDeLeitura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaDeLeituras
    * const metaDeLeituras = await prisma.metaDeLeitura.findMany()
    * ```
    */
  get metaDeLeitura(): Prisma.MetaDeLeituraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conquista`: Exposes CRUD operations for the **Conquista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conquistas
    * const conquistas = await prisma.conquista.findMany()
    * ```
    */
  get conquista(): Prisma.ConquistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comunidade`: Exposes CRUD operations for the **Comunidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comunidades
    * const comunidades = await prisma.comunidade.findMany()
    * ```
    */
  get comunidade(): Prisma.ComunidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resenha`: Exposes CRUD operations for the **Resenha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resenhas
    * const resenhas = await prisma.resenha.findMany()
    * ```
    */
  get resenha(): Prisma.ResenhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioResenha`: Exposes CRUD operations for the **usuarioResenha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioResenhas
    * const usuarioResenhas = await prisma.usuarioResenha.findMany()
    * ```
    */
  get usuarioResenha(): Prisma.usuarioResenhaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Livro: 'Livro',
    GrupoDeLeitura: 'GrupoDeLeitura',
    Perfil: 'Perfil',
    admSubordinados: 'admSubordinados',
    participantesDesafio: 'participantesDesafio',
    Catalogo: 'Catalogo',
    MetaDeLeitura: 'MetaDeLeitura',
    Conquista: 'Conquista',
    Comunidade: 'Comunidade',
    Resenha: 'Resenha',
    usuarioResenha: 'usuarioResenha'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "livro" | "grupoDeLeitura" | "perfil" | "admSubordinados" | "participantesDesafio" | "catalogo" | "metaDeLeitura" | "conquista" | "comunidade" | "resenha" | "usuarioResenha"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      GrupoDeLeitura: {
        payload: Prisma.$GrupoDeLeituraPayload<ExtArgs>
        fields: Prisma.GrupoDeLeituraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrupoDeLeituraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrupoDeLeituraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          findFirst: {
            args: Prisma.GrupoDeLeituraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrupoDeLeituraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          findMany: {
            args: Prisma.GrupoDeLeituraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>[]
          }
          create: {
            args: Prisma.GrupoDeLeituraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          createMany: {
            args: Prisma.GrupoDeLeituraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrupoDeLeituraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>[]
          }
          delete: {
            args: Prisma.GrupoDeLeituraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          update: {
            args: Prisma.GrupoDeLeituraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          deleteMany: {
            args: Prisma.GrupoDeLeituraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrupoDeLeituraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrupoDeLeituraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>[]
          }
          upsert: {
            args: Prisma.GrupoDeLeituraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          aggregate: {
            args: Prisma.GrupoDeLeituraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrupoDeLeitura>
          }
          groupBy: {
            args: Prisma.GrupoDeLeituraGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrupoDeLeituraGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrupoDeLeituraCountArgs<ExtArgs>
            result: $Utils.Optional<GrupoDeLeituraCountAggregateOutputType> | number
          }
        }
      }
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      admSubordinados: {
        payload: Prisma.$admSubordinadosPayload<ExtArgs>
        fields: Prisma.admSubordinadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admSubordinadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admSubordinadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>
          }
          findFirst: {
            args: Prisma.admSubordinadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admSubordinadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>
          }
          findMany: {
            args: Prisma.admSubordinadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>[]
          }
          create: {
            args: Prisma.admSubordinadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>
          }
          createMany: {
            args: Prisma.admSubordinadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admSubordinadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>[]
          }
          delete: {
            args: Prisma.admSubordinadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>
          }
          update: {
            args: Prisma.admSubordinadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>
          }
          deleteMany: {
            args: Prisma.admSubordinadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admSubordinadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admSubordinadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>[]
          }
          upsert: {
            args: Prisma.admSubordinadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admSubordinadosPayload>
          }
          aggregate: {
            args: Prisma.AdmSubordinadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmSubordinados>
          }
          groupBy: {
            args: Prisma.admSubordinadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmSubordinadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.admSubordinadosCountArgs<ExtArgs>
            result: $Utils.Optional<AdmSubordinadosCountAggregateOutputType> | number
          }
        }
      }
      participantesDesafio: {
        payload: Prisma.$participantesDesafioPayload<ExtArgs>
        fields: Prisma.participantesDesafioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participantesDesafioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participantesDesafioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>
          }
          findFirst: {
            args: Prisma.participantesDesafioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participantesDesafioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>
          }
          findMany: {
            args: Prisma.participantesDesafioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>[]
          }
          create: {
            args: Prisma.participantesDesafioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>
          }
          createMany: {
            args: Prisma.participantesDesafioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.participantesDesafioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>[]
          }
          delete: {
            args: Prisma.participantesDesafioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>
          }
          update: {
            args: Prisma.participantesDesafioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>
          }
          deleteMany: {
            args: Prisma.participantesDesafioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participantesDesafioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.participantesDesafioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>[]
          }
          upsert: {
            args: Prisma.participantesDesafioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantesDesafioPayload>
          }
          aggregate: {
            args: Prisma.ParticipantesDesafioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantesDesafio>
          }
          groupBy: {
            args: Prisma.participantesDesafioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantesDesafioGroupByOutputType>[]
          }
          count: {
            args: Prisma.participantesDesafioCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantesDesafioCountAggregateOutputType> | number
          }
        }
      }
      Catalogo: {
        payload: Prisma.$CatalogoPayload<ExtArgs>
        fields: Prisma.CatalogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          findFirst: {
            args: Prisma.CatalogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          findMany: {
            args: Prisma.CatalogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>[]
          }
          create: {
            args: Prisma.CatalogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          createMany: {
            args: Prisma.CatalogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>[]
          }
          delete: {
            args: Prisma.CatalogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          update: {
            args: Prisma.CatalogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          deleteMany: {
            args: Prisma.CatalogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>[]
          }
          upsert: {
            args: Prisma.CatalogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          aggregate: {
            args: Prisma.CatalogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalogo>
          }
          groupBy: {
            args: Prisma.CatalogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogoCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogoCountAggregateOutputType> | number
          }
        }
      }
      MetaDeLeitura: {
        payload: Prisma.$MetaDeLeituraPayload<ExtArgs>
        fields: Prisma.MetaDeLeituraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaDeLeituraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaDeLeituraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          findFirst: {
            args: Prisma.MetaDeLeituraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaDeLeituraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          findMany: {
            args: Prisma.MetaDeLeituraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>[]
          }
          create: {
            args: Prisma.MetaDeLeituraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          createMany: {
            args: Prisma.MetaDeLeituraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaDeLeituraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>[]
          }
          delete: {
            args: Prisma.MetaDeLeituraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          update: {
            args: Prisma.MetaDeLeituraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeLeituraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaDeLeituraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaDeLeituraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>[]
          }
          upsert: {
            args: Prisma.MetaDeLeituraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          aggregate: {
            args: Prisma.MetaDeLeituraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetaDeLeitura>
          }
          groupBy: {
            args: Prisma.MetaDeLeituraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaDeLeituraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaDeLeituraCountArgs<ExtArgs>
            result: $Utils.Optional<MetaDeLeituraCountAggregateOutputType> | number
          }
        }
      }
      Conquista: {
        payload: Prisma.$ConquistaPayload<ExtArgs>
        fields: Prisma.ConquistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConquistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConquistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          findFirst: {
            args: Prisma.ConquistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConquistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          findMany: {
            args: Prisma.ConquistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>[]
          }
          create: {
            args: Prisma.ConquistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          createMany: {
            args: Prisma.ConquistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConquistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>[]
          }
          delete: {
            args: Prisma.ConquistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          update: {
            args: Prisma.ConquistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          deleteMany: {
            args: Prisma.ConquistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConquistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConquistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>[]
          }
          upsert: {
            args: Prisma.ConquistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          aggregate: {
            args: Prisma.ConquistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConquista>
          }
          groupBy: {
            args: Prisma.ConquistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConquistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConquistaCountArgs<ExtArgs>
            result: $Utils.Optional<ConquistaCountAggregateOutputType> | number
          }
        }
      }
      Comunidade: {
        payload: Prisma.$ComunidadePayload<ExtArgs>
        fields: Prisma.ComunidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComunidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComunidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          findFirst: {
            args: Prisma.ComunidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComunidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          findMany: {
            args: Prisma.ComunidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          create: {
            args: Prisma.ComunidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          createMany: {
            args: Prisma.ComunidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComunidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          delete: {
            args: Prisma.ComunidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          update: {
            args: Prisma.ComunidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          deleteMany: {
            args: Prisma.ComunidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComunidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComunidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          upsert: {
            args: Prisma.ComunidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          aggregate: {
            args: Prisma.ComunidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComunidade>
          }
          groupBy: {
            args: Prisma.ComunidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComunidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComunidadeCountArgs<ExtArgs>
            result: $Utils.Optional<ComunidadeCountAggregateOutputType> | number
          }
        }
      }
      Resenha: {
        payload: Prisma.$ResenhaPayload<ExtArgs>
        fields: Prisma.ResenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          findFirst: {
            args: Prisma.ResenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          findMany: {
            args: Prisma.ResenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>[]
          }
          create: {
            args: Prisma.ResenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          createMany: {
            args: Prisma.ResenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>[]
          }
          delete: {
            args: Prisma.ResenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          update: {
            args: Prisma.ResenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          deleteMany: {
            args: Prisma.ResenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>[]
          }
          upsert: {
            args: Prisma.ResenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          aggregate: {
            args: Prisma.ResenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResenha>
          }
          groupBy: {
            args: Prisma.ResenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResenhaCountArgs<ExtArgs>
            result: $Utils.Optional<ResenhaCountAggregateOutputType> | number
          }
        }
      }
      usuarioResenha: {
        payload: Prisma.$usuarioResenhaPayload<ExtArgs>
        fields: Prisma.usuarioResenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioResenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioResenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>
          }
          findFirst: {
            args: Prisma.usuarioResenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioResenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>
          }
          findMany: {
            args: Prisma.usuarioResenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>[]
          }
          create: {
            args: Prisma.usuarioResenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>
          }
          createMany: {
            args: Prisma.usuarioResenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioResenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>[]
          }
          delete: {
            args: Prisma.usuarioResenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>
          }
          update: {
            args: Prisma.usuarioResenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>
          }
          deleteMany: {
            args: Prisma.usuarioResenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioResenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioResenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>[]
          }
          upsert: {
            args: Prisma.usuarioResenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioResenhaPayload>
          }
          aggregate: {
            args: Prisma.UsuarioResenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioResenha>
          }
          groupBy: {
            args: Prisma.usuarioResenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioResenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioResenhaCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioResenhaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    livro?: LivroOmit
    grupoDeLeitura?: GrupoDeLeituraOmit
    perfil?: PerfilOmit
    admSubordinados?: admSubordinadosOmit
    participantesDesafio?: participantesDesafioOmit
    catalogo?: CatalogoOmit
    metaDeLeitura?: MetaDeLeituraOmit
    conquista?: ConquistaOmit
    comunidade?: ComunidadeOmit
    resenha?: ResenhaOmit
    usuarioResenha?: usuarioResenhaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LivroCountOutputType
   */

  export type LivroCountOutputType = {
    grupos: number
    catalago: number
    resenha: number
  }

  export type LivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupos?: boolean | LivroCountOutputTypeCountGruposArgs
    catalago?: boolean | LivroCountOutputTypeCountCatalagoArgs
    resenha?: boolean | LivroCountOutputTypeCountResenhaArgs
  }

  // Custom InputTypes
  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroCountOutputType
     */
    select?: LivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoDeLeituraWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountCatalagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountResenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenhaWhereInput
  }


  /**
   * Count Type GrupoDeLeituraCountOutputType
   */

  export type GrupoDeLeituraCountOutputType = {
    participantes: number
  }

  export type GrupoDeLeituraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | GrupoDeLeituraCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * GrupoDeLeituraCountOutputType without action
   */
  export type GrupoDeLeituraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeituraCountOutputType
     */
    select?: GrupoDeLeituraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrupoDeLeituraCountOutputType without action
   */
  export type GrupoDeLeituraCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
  }


  /**
   * Count Type PerfilCountOutputType
   */

  export type PerfilCountOutputType = {
    usuarios: number
    adms: number
    catalogosCriados: number
    desafio: number
    resenhas: number
  }

  export type PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PerfilCountOutputTypeCountUsuariosArgs
    adms?: boolean | PerfilCountOutputTypeCountAdmsArgs
    catalogosCriados?: boolean | PerfilCountOutputTypeCountCatalogosCriadosArgs
    desafio?: boolean | PerfilCountOutputTypeCountDesafioArgs
    resenhas?: boolean | PerfilCountOutputTypeCountResenhasArgs
  }

  // Custom InputTypes
  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilCountOutputType
     */
    select?: PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admSubordinadosWhereInput
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountAdmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admSubordinadosWhereInput
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountCatalogosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoWhereInput
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountDesafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantesDesafioWhereInput
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountResenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioResenhaWhereInput
  }


  /**
   * Count Type CatalogoCountOutputType
   */

  export type CatalogoCountOutputType = {
    livros: number
    medalhas: number
    participantes: number
  }

  export type CatalogoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | CatalogoCountOutputTypeCountLivrosArgs
    medalhas?: boolean | CatalogoCountOutputTypeCountMedalhasArgs
    participantes?: boolean | CatalogoCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoCountOutputType
     */
    select?: CatalogoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
  }

  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeCountMedalhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConquistaWhereInput
  }

  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantesDesafioWhereInput
  }


  /**
   * Count Type ComunidadeCountOutputType
   */

  export type ComunidadeCountOutputType = {
    participantes: number
  }

  export type ComunidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | ComunidadeCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComunidadeCountOutputType
     */
    select?: ComunidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
  }


  /**
   * Count Type ResenhaCountOutputType
   */

  export type ResenhaCountOutputType = {
    usuarios: number
  }

  export type ResenhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ResenhaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * ResenhaCountOutputType without action
   */
  export type ResenhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenhaCountOutputType
     */
    select?: ResenhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResenhaCountOutputType without action
   */
  export type ResenhaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioResenhaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    paginas: number | null
    estrelas: number | null
  }

  export type LivroSumAggregateOutputType = {
    paginas: number | null
    estrelas: number | null
  }

  export type LivroMinAggregateOutputType = {
    titulo: string | null
    autor: string | null
    dataPublicacao: Date | null
    paginas: number | null
    resumo: string | null
    estrelas: number | null
  }

  export type LivroMaxAggregateOutputType = {
    titulo: string | null
    autor: string | null
    dataPublicacao: Date | null
    paginas: number | null
    resumo: string | null
    estrelas: number | null
  }

  export type LivroCountAggregateOutputType = {
    titulo: number
    autor: number
    dataPublicacao: number
    paginas: number
    resumo: number
    tags: number
    estrelas: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    paginas?: true
    estrelas?: true
  }

  export type LivroSumAggregateInputType = {
    paginas?: true
    estrelas?: true
  }

  export type LivroMinAggregateInputType = {
    titulo?: true
    autor?: true
    dataPublicacao?: true
    paginas?: true
    resumo?: true
    estrelas?: true
  }

  export type LivroMaxAggregateInputType = {
    titulo?: true
    autor?: true
    dataPublicacao?: true
    paginas?: true
    resumo?: true
    estrelas?: true
  }

  export type LivroCountAggregateInputType = {
    titulo?: true
    autor?: true
    dataPublicacao?: true
    paginas?: true
    resumo?: true
    tags?: true
    estrelas?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    titulo: string
    autor: string
    dataPublicacao: Date
    paginas: number
    resumo: string
    tags: string[]
    estrelas: number
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
    grupos?: boolean | Livro$gruposArgs<ExtArgs>
    catalago?: boolean | Livro$catalagoArgs<ExtArgs>
    resenha?: boolean | Livro$resenhaArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"titulo" | "autor" | "dataPublicacao" | "paginas" | "resumo" | "tags" | "estrelas", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupos?: boolean | Livro$gruposArgs<ExtArgs>
    catalago?: boolean | Livro$catalagoArgs<ExtArgs>
    resenha?: boolean | Livro$resenhaArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      grupos: Prisma.$GrupoDeLeituraPayload<ExtArgs>[]
      catalago: Prisma.$CatalogoPayload<ExtArgs>[]
      resenha: Prisma.$ResenhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      titulo: string
      autor: string
      dataPublicacao: Date
      paginas: number
      resumo: string
      tags: string[]
      estrelas: number
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `titulo`
     * const livroWithTituloOnly = await prisma.livro.findMany({ select: { titulo: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `titulo`
     * const livroWithTituloOnly = await prisma.livro.createManyAndReturn({
     *   select: { titulo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `titulo`
     * const livroWithTituloOnly = await prisma.livro.updateManyAndReturn({
     *   select: { titulo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grupos<T extends Livro$gruposArgs<ExtArgs> = {}>(args?: Subset<T, Livro$gruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalago<T extends Livro$catalagoArgs<ExtArgs> = {}>(args?: Subset<T, Livro$catalagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resenha<T extends Livro$resenhaArgs<ExtArgs> = {}>(args?: Subset<T, Livro$resenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly titulo: FieldRef<"Livro", 'String'>
    readonly autor: FieldRef<"Livro", 'String'>
    readonly dataPublicacao: FieldRef<"Livro", 'DateTime'>
    readonly paginas: FieldRef<"Livro", 'Int'>
    readonly resumo: FieldRef<"Livro", 'String'>
    readonly tags: FieldRef<"Livro", 'String[]'>
    readonly estrelas: FieldRef<"Livro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro.grupos
   */
  export type Livro$gruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    where?: GrupoDeLeituraWhereInput
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    cursor?: GrupoDeLeituraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * Livro.catalago
   */
  export type Livro$catalagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    where?: CatalogoWhereInput
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    cursor?: CatalogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Livro.resenha
   */
  export type Livro$resenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    where?: ResenhaWhereInput
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    cursor?: ResenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model GrupoDeLeitura
   */

  export type AggregateGrupoDeLeitura = {
    _count: GrupoDeLeituraCountAggregateOutputType | null
    _min: GrupoDeLeituraMinAggregateOutputType | null
    _max: GrupoDeLeituraMaxAggregateOutputType | null
  }

  export type GrupoDeLeituraMinAggregateOutputType = {
    nome: string | null
    dataCriacao: Date | null
    dataEncontro: Date | null
    tituloLivro: string | null
  }

  export type GrupoDeLeituraMaxAggregateOutputType = {
    nome: string | null
    dataCriacao: Date | null
    dataEncontro: Date | null
    tituloLivro: string | null
  }

  export type GrupoDeLeituraCountAggregateOutputType = {
    nome: number
    dataCriacao: number
    dataEncontro: number
    tituloLivro: number
    _all: number
  }


  export type GrupoDeLeituraMinAggregateInputType = {
    nome?: true
    dataCriacao?: true
    dataEncontro?: true
    tituloLivro?: true
  }

  export type GrupoDeLeituraMaxAggregateInputType = {
    nome?: true
    dataCriacao?: true
    dataEncontro?: true
    tituloLivro?: true
  }

  export type GrupoDeLeituraCountAggregateInputType = {
    nome?: true
    dataCriacao?: true
    dataEncontro?: true
    tituloLivro?: true
    _all?: true
  }

  export type GrupoDeLeituraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrupoDeLeitura to aggregate.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrupoDeLeituras
    **/
    _count?: true | GrupoDeLeituraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrupoDeLeituraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrupoDeLeituraMaxAggregateInputType
  }

  export type GetGrupoDeLeituraAggregateType<T extends GrupoDeLeituraAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupoDeLeitura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupoDeLeitura[P]>
      : GetScalarType<T[P], AggregateGrupoDeLeitura[P]>
  }




  export type GrupoDeLeituraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoDeLeituraWhereInput
    orderBy?: GrupoDeLeituraOrderByWithAggregationInput | GrupoDeLeituraOrderByWithAggregationInput[]
    by: GrupoDeLeituraScalarFieldEnum[] | GrupoDeLeituraScalarFieldEnum
    having?: GrupoDeLeituraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrupoDeLeituraCountAggregateInputType | true
    _min?: GrupoDeLeituraMinAggregateInputType
    _max?: GrupoDeLeituraMaxAggregateInputType
  }

  export type GrupoDeLeituraGroupByOutputType = {
    nome: string
    dataCriacao: Date
    dataEncontro: Date
    tituloLivro: string
    _count: GrupoDeLeituraCountAggregateOutputType | null
    _min: GrupoDeLeituraMinAggregateOutputType | null
    _max: GrupoDeLeituraMaxAggregateOutputType | null
  }

  type GetGrupoDeLeituraGroupByPayload<T extends GrupoDeLeituraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrupoDeLeituraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrupoDeLeituraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrupoDeLeituraGroupByOutputType[P]>
            : GetScalarType<T[P], GrupoDeLeituraGroupByOutputType[P]>
        }
      >
    >


  export type GrupoDeLeituraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
    participantes?: boolean | GrupoDeLeitura$participantesArgs<ExtArgs>
    _count?: boolean | GrupoDeLeituraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoDeLeitura"]>

  export type GrupoDeLeituraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoDeLeitura"]>

  export type GrupoDeLeituraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoDeLeitura"]>

  export type GrupoDeLeituraSelectScalar = {
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
  }

  export type GrupoDeLeituraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "dataCriacao" | "dataEncontro" | "tituloLivro", ExtArgs["result"]["grupoDeLeitura"]>
  export type GrupoDeLeituraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
    participantes?: boolean | GrupoDeLeitura$participantesArgs<ExtArgs>
    _count?: boolean | GrupoDeLeituraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrupoDeLeituraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type GrupoDeLeituraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }

  export type $GrupoDeLeituraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrupoDeLeitura"
    objects: {
      leituraConjunta: Prisma.$LivroPayload<ExtArgs>
      participantes: Prisma.$PerfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      dataCriacao: Date
      dataEncontro: Date
      tituloLivro: string
    }, ExtArgs["result"]["grupoDeLeitura"]>
    composites: {}
  }

  type GrupoDeLeituraGetPayload<S extends boolean | null | undefined | GrupoDeLeituraDefaultArgs> = $Result.GetResult<Prisma.$GrupoDeLeituraPayload, S>

  type GrupoDeLeituraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrupoDeLeituraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrupoDeLeituraCountAggregateInputType | true
    }

  export interface GrupoDeLeituraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrupoDeLeitura'], meta: { name: 'GrupoDeLeitura' } }
    /**
     * Find zero or one GrupoDeLeitura that matches the filter.
     * @param {GrupoDeLeituraFindUniqueArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrupoDeLeituraFindUniqueArgs>(args: SelectSubset<T, GrupoDeLeituraFindUniqueArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrupoDeLeitura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrupoDeLeituraFindUniqueOrThrowArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrupoDeLeituraFindUniqueOrThrowArgs>(args: SelectSubset<T, GrupoDeLeituraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrupoDeLeitura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraFindFirstArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrupoDeLeituraFindFirstArgs>(args?: SelectSubset<T, GrupoDeLeituraFindFirstArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrupoDeLeitura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraFindFirstOrThrowArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrupoDeLeituraFindFirstOrThrowArgs>(args?: SelectSubset<T, GrupoDeLeituraFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrupoDeLeituras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrupoDeLeituras
     * const grupoDeLeituras = await prisma.grupoDeLeitura.findMany()
     * 
     * // Get first 10 GrupoDeLeituras
     * const grupoDeLeituras = await prisma.grupoDeLeitura.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const grupoDeLeituraWithNomeOnly = await prisma.grupoDeLeitura.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends GrupoDeLeituraFindManyArgs>(args?: SelectSubset<T, GrupoDeLeituraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrupoDeLeitura.
     * @param {GrupoDeLeituraCreateArgs} args - Arguments to create a GrupoDeLeitura.
     * @example
     * // Create one GrupoDeLeitura
     * const GrupoDeLeitura = await prisma.grupoDeLeitura.create({
     *   data: {
     *     // ... data to create a GrupoDeLeitura
     *   }
     * })
     * 
     */
    create<T extends GrupoDeLeituraCreateArgs>(args: SelectSubset<T, GrupoDeLeituraCreateArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrupoDeLeituras.
     * @param {GrupoDeLeituraCreateManyArgs} args - Arguments to create many GrupoDeLeituras.
     * @example
     * // Create many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrupoDeLeituraCreateManyArgs>(args?: SelectSubset<T, GrupoDeLeituraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrupoDeLeituras and returns the data saved in the database.
     * @param {GrupoDeLeituraCreateManyAndReturnArgs} args - Arguments to create many GrupoDeLeituras.
     * @example
     * // Create many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrupoDeLeituras and only return the `nome`
     * const grupoDeLeituraWithNomeOnly = await prisma.grupoDeLeitura.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrupoDeLeituraCreateManyAndReturnArgs>(args?: SelectSubset<T, GrupoDeLeituraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrupoDeLeitura.
     * @param {GrupoDeLeituraDeleteArgs} args - Arguments to delete one GrupoDeLeitura.
     * @example
     * // Delete one GrupoDeLeitura
     * const GrupoDeLeitura = await prisma.grupoDeLeitura.delete({
     *   where: {
     *     // ... filter to delete one GrupoDeLeitura
     *   }
     * })
     * 
     */
    delete<T extends GrupoDeLeituraDeleteArgs>(args: SelectSubset<T, GrupoDeLeituraDeleteArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrupoDeLeitura.
     * @param {GrupoDeLeituraUpdateArgs} args - Arguments to update one GrupoDeLeitura.
     * @example
     * // Update one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrupoDeLeituraUpdateArgs>(args: SelectSubset<T, GrupoDeLeituraUpdateArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrupoDeLeituras.
     * @param {GrupoDeLeituraDeleteManyArgs} args - Arguments to filter GrupoDeLeituras to delete.
     * @example
     * // Delete a few GrupoDeLeituras
     * const { count } = await prisma.grupoDeLeitura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrupoDeLeituraDeleteManyArgs>(args?: SelectSubset<T, GrupoDeLeituraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrupoDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrupoDeLeituraUpdateManyArgs>(args: SelectSubset<T, GrupoDeLeituraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrupoDeLeituras and returns the data updated in the database.
     * @param {GrupoDeLeituraUpdateManyAndReturnArgs} args - Arguments to update many GrupoDeLeituras.
     * @example
     * // Update many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrupoDeLeituras and only return the `nome`
     * const grupoDeLeituraWithNomeOnly = await prisma.grupoDeLeitura.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrupoDeLeituraUpdateManyAndReturnArgs>(args: SelectSubset<T, GrupoDeLeituraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrupoDeLeitura.
     * @param {GrupoDeLeituraUpsertArgs} args - Arguments to update or create a GrupoDeLeitura.
     * @example
     * // Update or create a GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.upsert({
     *   create: {
     *     // ... data to create a GrupoDeLeitura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrupoDeLeitura we want to update
     *   }
     * })
     */
    upsert<T extends GrupoDeLeituraUpsertArgs>(args: SelectSubset<T, GrupoDeLeituraUpsertArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrupoDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraCountArgs} args - Arguments to filter GrupoDeLeituras to count.
     * @example
     * // Count the number of GrupoDeLeituras
     * const count = await prisma.grupoDeLeitura.count({
     *   where: {
     *     // ... the filter for the GrupoDeLeituras we want to count
     *   }
     * })
    **/
    count<T extends GrupoDeLeituraCountArgs>(
      args?: Subset<T, GrupoDeLeituraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrupoDeLeituraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrupoDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrupoDeLeituraAggregateArgs>(args: Subset<T, GrupoDeLeituraAggregateArgs>): Prisma.PrismaPromise<GetGrupoDeLeituraAggregateType<T>>

    /**
     * Group by GrupoDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrupoDeLeituraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrupoDeLeituraGroupByArgs['orderBy'] }
        : { orderBy?: GrupoDeLeituraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrupoDeLeituraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupoDeLeituraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrupoDeLeitura model
   */
  readonly fields: GrupoDeLeituraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrupoDeLeitura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrupoDeLeituraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leituraConjunta<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantes<T extends GrupoDeLeitura$participantesArgs<ExtArgs> = {}>(args?: Subset<T, GrupoDeLeitura$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GrupoDeLeitura model
   */
  interface GrupoDeLeituraFieldRefs {
    readonly nome: FieldRef<"GrupoDeLeitura", 'String'>
    readonly dataCriacao: FieldRef<"GrupoDeLeitura", 'DateTime'>
    readonly dataEncontro: FieldRef<"GrupoDeLeitura", 'DateTime'>
    readonly tituloLivro: FieldRef<"GrupoDeLeitura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrupoDeLeitura findUnique
   */
  export type GrupoDeLeituraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura findUniqueOrThrow
   */
  export type GrupoDeLeituraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura findFirst
   */
  export type GrupoDeLeituraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrupoDeLeituras.
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrupoDeLeituras.
     */
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura findFirstOrThrow
   */
  export type GrupoDeLeituraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrupoDeLeituras.
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrupoDeLeituras.
     */
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura findMany
   */
  export type GrupoDeLeituraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeituras to fetch.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrupoDeLeituras.
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura create
   */
  export type GrupoDeLeituraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to create a GrupoDeLeitura.
     */
    data: XOR<GrupoDeLeituraCreateInput, GrupoDeLeituraUncheckedCreateInput>
  }

  /**
   * GrupoDeLeitura createMany
   */
  export type GrupoDeLeituraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrupoDeLeituras.
     */
    data: GrupoDeLeituraCreateManyInput | GrupoDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrupoDeLeitura createManyAndReturn
   */
  export type GrupoDeLeituraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to create many GrupoDeLeituras.
     */
    data: GrupoDeLeituraCreateManyInput | GrupoDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrupoDeLeitura update
   */
  export type GrupoDeLeituraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to update a GrupoDeLeitura.
     */
    data: XOR<GrupoDeLeituraUpdateInput, GrupoDeLeituraUncheckedUpdateInput>
    /**
     * Choose, which GrupoDeLeitura to update.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura updateMany
   */
  export type GrupoDeLeituraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrupoDeLeituras.
     */
    data: XOR<GrupoDeLeituraUpdateManyMutationInput, GrupoDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which GrupoDeLeituras to update
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * Limit how many GrupoDeLeituras to update.
     */
    limit?: number
  }

  /**
   * GrupoDeLeitura updateManyAndReturn
   */
  export type GrupoDeLeituraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to update GrupoDeLeituras.
     */
    data: XOR<GrupoDeLeituraUpdateManyMutationInput, GrupoDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which GrupoDeLeituras to update
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * Limit how many GrupoDeLeituras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrupoDeLeitura upsert
   */
  export type GrupoDeLeituraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * The filter to search for the GrupoDeLeitura to update in case it exists.
     */
    where: GrupoDeLeituraWhereUniqueInput
    /**
     * In case the GrupoDeLeitura found by the `where` argument doesn't exist, create a new GrupoDeLeitura with this data.
     */
    create: XOR<GrupoDeLeituraCreateInput, GrupoDeLeituraUncheckedCreateInput>
    /**
     * In case the GrupoDeLeitura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrupoDeLeituraUpdateInput, GrupoDeLeituraUncheckedUpdateInput>
  }

  /**
   * GrupoDeLeitura delete
   */
  export type GrupoDeLeituraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter which GrupoDeLeitura to delete.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura deleteMany
   */
  export type GrupoDeLeituraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrupoDeLeituras to delete
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * Limit how many GrupoDeLeituras to delete.
     */
    limit?: number
  }

  /**
   * GrupoDeLeitura.participantes
   */
  export type GrupoDeLeitura$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    cursor?: PerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura without action
   */
  export type GrupoDeLeituraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
  }


  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id: number | null
    senha: string | null
    tipo: $Enums.TipoPerfil | null
    nome: string | null
    email: string | null
    descricao: string | null
    cargo: string | null
    nomeGrupoDeLeitura: string | null
    nomeCom: string | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: number | null
    senha: string | null
    tipo: $Enums.TipoPerfil | null
    nome: string | null
    email: string | null
    descricao: string | null
    cargo: string | null
    nomeGrupoDeLeitura: string | null
    nomeCom: string | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    senha: number
    tipo: number
    nome: number
    email: number
    descricao: number
    cargo: number
    nomeGrupoDeLeitura: number
    nomeCom: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id?: true
  }

  export type PerfilSumAggregateInputType = {
    id?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    senha?: true
    tipo?: true
    nome?: true
    email?: true
    descricao?: true
    cargo?: true
    nomeGrupoDeLeitura?: true
    nomeCom?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    senha?: true
    tipo?: true
    nome?: true
    email?: true
    descricao?: true
    cargo?: true
    nomeGrupoDeLeitura?: true
    nomeCom?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    senha?: true
    tipo?: true
    nome?: true
    email?: true
    descricao?: true
    cargo?: true
    nomeGrupoDeLeitura?: true
    nomeCom?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome: string | null
    email: string | null
    descricao: string | null
    cargo: string | null
    nomeGrupoDeLeitura: string | null
    nomeCom: string | null
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    tipo?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    cargo?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    adms?: boolean | Perfil$admsArgs<ExtArgs>
    catalogosCriados?: boolean | Perfil$catalogosCriadosArgs<ExtArgs>
    grupoDeLeitura?: boolean | Perfil$grupoDeLeituraArgs<ExtArgs>
    metaDeLeitura?: boolean | Perfil$metaDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Perfil$comunidadeArgs<ExtArgs>
    desafio?: boolean | Perfil$desafioArgs<ExtArgs>
    resenhas?: boolean | Perfil$resenhasArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    tipo?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    cargo?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    grupoDeLeitura?: boolean | Perfil$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Perfil$comunidadeArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    tipo?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    cargo?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    grupoDeLeitura?: boolean | Perfil$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Perfil$comunidadeArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectScalar = {
    id?: boolean
    senha?: boolean
    tipo?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    cargo?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
  }

  export type PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senha" | "tipo" | "nome" | "email" | "descricao" | "cargo" | "nomeGrupoDeLeitura" | "nomeCom", ExtArgs["result"]["perfil"]>
  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    adms?: boolean | Perfil$admsArgs<ExtArgs>
    catalogosCriados?: boolean | Perfil$catalogosCriadosArgs<ExtArgs>
    grupoDeLeitura?: boolean | Perfil$grupoDeLeituraArgs<ExtArgs>
    metaDeLeitura?: boolean | Perfil$metaDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Perfil$comunidadeArgs<ExtArgs>
    desafio?: boolean | Perfil$desafioArgs<ExtArgs>
    resenhas?: boolean | Perfil$resenhasArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupoDeLeitura?: boolean | Perfil$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Perfil$comunidadeArgs<ExtArgs>
  }
  export type PerfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupoDeLeitura?: boolean | Perfil$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Perfil$comunidadeArgs<ExtArgs>
  }

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      usuarios: Prisma.$admSubordinadosPayload<ExtArgs>[]
      adms: Prisma.$admSubordinadosPayload<ExtArgs>[]
      catalogosCriados: Prisma.$CatalogoPayload<ExtArgs>[]
      grupoDeLeitura: Prisma.$GrupoDeLeituraPayload<ExtArgs> | null
      metaDeLeitura: Prisma.$MetaDeLeituraPayload<ExtArgs> | null
      comunidade: Prisma.$ComunidadePayload<ExtArgs> | null
      desafio: Prisma.$participantesDesafioPayload<ExtArgs>[]
      resenhas: Prisma.$usuarioResenhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senha: string
      tipo: $Enums.TipoPerfil
      nome: string | null
      email: string | null
      descricao: string | null
      cargo: string | null
      nomeGrupoDeLeitura: string | null
      nomeCom: string | null
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfils and returns the data saved in the database.
     * @param {PerfilCreateManyAndReturnArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, PerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils and returns the data updated in the database.
     * @param {PerfilUpdateManyAndReturnArgs} args - Arguments to update many Perfils.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerfilUpdateManyAndReturnArgs>(args: SelectSubset<T, PerfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Perfil$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adms<T extends Perfil$admsArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$admsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogosCriados<T extends Perfil$catalogosCriadosArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$catalogosCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grupoDeLeitura<T extends Perfil$grupoDeLeituraArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$grupoDeLeituraArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    metaDeLeitura<T extends Perfil$metaDeLeituraArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$metaDeLeituraArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comunidade<T extends Perfil$comunidadeArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$comunidadeArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    desafio<T extends Perfil$desafioArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$desafioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resenhas<T extends Perfil$resenhasArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$resenhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'Int'>
    readonly senha: FieldRef<"Perfil", 'String'>
    readonly tipo: FieldRef<"Perfil", 'TipoPerfil'>
    readonly nome: FieldRef<"Perfil", 'String'>
    readonly email: FieldRef<"Perfil", 'String'>
    readonly descricao: FieldRef<"Perfil", 'String'>
    readonly cargo: FieldRef<"Perfil", 'String'>
    readonly nomeGrupoDeLeitura: FieldRef<"Perfil", 'String'>
    readonly nomeCom: FieldRef<"Perfil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil createManyAndReturn
   */
  export type PerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
  }

  /**
   * Perfil updateManyAndReturn
   */
  export type PerfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to delete.
     */
    limit?: number
  }

  /**
   * Perfil.usuarios
   */
  export type Perfil$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    where?: admSubordinadosWhereInput
    orderBy?: admSubordinadosOrderByWithRelationInput | admSubordinadosOrderByWithRelationInput[]
    cursor?: admSubordinadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmSubordinadosScalarFieldEnum | AdmSubordinadosScalarFieldEnum[]
  }

  /**
   * Perfil.adms
   */
  export type Perfil$admsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    where?: admSubordinadosWhereInput
    orderBy?: admSubordinadosOrderByWithRelationInput | admSubordinadosOrderByWithRelationInput[]
    cursor?: admSubordinadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmSubordinadosScalarFieldEnum | AdmSubordinadosScalarFieldEnum[]
  }

  /**
   * Perfil.catalogosCriados
   */
  export type Perfil$catalogosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    where?: CatalogoWhereInput
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    cursor?: CatalogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Perfil.grupoDeLeitura
   */
  export type Perfil$grupoDeLeituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    where?: GrupoDeLeituraWhereInput
  }

  /**
   * Perfil.metaDeLeitura
   */
  export type Perfil$metaDeLeituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    where?: MetaDeLeituraWhereInput
  }

  /**
   * Perfil.comunidade
   */
  export type Perfil$comunidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    where?: ComunidadeWhereInput
  }

  /**
   * Perfil.desafio
   */
  export type Perfil$desafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    where?: participantesDesafioWhereInput
    orderBy?: participantesDesafioOrderByWithRelationInput | participantesDesafioOrderByWithRelationInput[]
    cursor?: participantesDesafioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantesDesafioScalarFieldEnum | ParticipantesDesafioScalarFieldEnum[]
  }

  /**
   * Perfil.resenhas
   */
  export type Perfil$resenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    where?: usuarioResenhaWhereInput
    orderBy?: usuarioResenhaOrderByWithRelationInput | usuarioResenhaOrderByWithRelationInput[]
    cursor?: usuarioResenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioResenhaScalarFieldEnum | UsuarioResenhaScalarFieldEnum[]
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model admSubordinados
   */

  export type AggregateAdmSubordinados = {
    _count: AdmSubordinadosCountAggregateOutputType | null
    _avg: AdmSubordinadosAvgAggregateOutputType | null
    _sum: AdmSubordinadosSumAggregateOutputType | null
    _min: AdmSubordinadosMinAggregateOutputType | null
    _max: AdmSubordinadosMaxAggregateOutputType | null
  }

  export type AdmSubordinadosAvgAggregateOutputType = {
    idAdm: number | null
  }

  export type AdmSubordinadosSumAggregateOutputType = {
    idAdm: number | null
  }

  export type AdmSubordinadosMinAggregateOutputType = {
    idAdm: number | null
    nomeUsu: string | null
  }

  export type AdmSubordinadosMaxAggregateOutputType = {
    idAdm: number | null
    nomeUsu: string | null
  }

  export type AdmSubordinadosCountAggregateOutputType = {
    idAdm: number
    nomeUsu: number
    _all: number
  }


  export type AdmSubordinadosAvgAggregateInputType = {
    idAdm?: true
  }

  export type AdmSubordinadosSumAggregateInputType = {
    idAdm?: true
  }

  export type AdmSubordinadosMinAggregateInputType = {
    idAdm?: true
    nomeUsu?: true
  }

  export type AdmSubordinadosMaxAggregateInputType = {
    idAdm?: true
    nomeUsu?: true
  }

  export type AdmSubordinadosCountAggregateInputType = {
    idAdm?: true
    nomeUsu?: true
    _all?: true
  }

  export type AdmSubordinadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admSubordinados to aggregate.
     */
    where?: admSubordinadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admSubordinados to fetch.
     */
    orderBy?: admSubordinadosOrderByWithRelationInput | admSubordinadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admSubordinadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admSubordinados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admSubordinados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admSubordinados
    **/
    _count?: true | AdmSubordinadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmSubordinadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmSubordinadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmSubordinadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmSubordinadosMaxAggregateInputType
  }

  export type GetAdmSubordinadosAggregateType<T extends AdmSubordinadosAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmSubordinados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmSubordinados[P]>
      : GetScalarType<T[P], AggregateAdmSubordinados[P]>
  }




  export type admSubordinadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admSubordinadosWhereInput
    orderBy?: admSubordinadosOrderByWithAggregationInput | admSubordinadosOrderByWithAggregationInput[]
    by: AdmSubordinadosScalarFieldEnum[] | AdmSubordinadosScalarFieldEnum
    having?: admSubordinadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmSubordinadosCountAggregateInputType | true
    _avg?: AdmSubordinadosAvgAggregateInputType
    _sum?: AdmSubordinadosSumAggregateInputType
    _min?: AdmSubordinadosMinAggregateInputType
    _max?: AdmSubordinadosMaxAggregateInputType
  }

  export type AdmSubordinadosGroupByOutputType = {
    idAdm: number
    nomeUsu: string
    _count: AdmSubordinadosCountAggregateOutputType | null
    _avg: AdmSubordinadosAvgAggregateOutputType | null
    _sum: AdmSubordinadosSumAggregateOutputType | null
    _min: AdmSubordinadosMinAggregateOutputType | null
    _max: AdmSubordinadosMaxAggregateOutputType | null
  }

  type GetAdmSubordinadosGroupByPayload<T extends admSubordinadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmSubordinadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmSubordinadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmSubordinadosGroupByOutputType[P]>
            : GetScalarType<T[P], AdmSubordinadosGroupByOutputType[P]>
        }
      >
    >


  export type admSubordinadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAdm?: boolean
    nomeUsu?: boolean
    adm?: boolean | PerfilDefaultArgs<ExtArgs>
    subordinado?: boolean | PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admSubordinados"]>

  export type admSubordinadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAdm?: boolean
    nomeUsu?: boolean
    adm?: boolean | PerfilDefaultArgs<ExtArgs>
    subordinado?: boolean | PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admSubordinados"]>

  export type admSubordinadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAdm?: boolean
    nomeUsu?: boolean
    adm?: boolean | PerfilDefaultArgs<ExtArgs>
    subordinado?: boolean | PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admSubordinados"]>

  export type admSubordinadosSelectScalar = {
    idAdm?: boolean
    nomeUsu?: boolean
  }

  export type admSubordinadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idAdm" | "nomeUsu", ExtArgs["result"]["admSubordinados"]>
  export type admSubordinadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adm?: boolean | PerfilDefaultArgs<ExtArgs>
    subordinado?: boolean | PerfilDefaultArgs<ExtArgs>
  }
  export type admSubordinadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adm?: boolean | PerfilDefaultArgs<ExtArgs>
    subordinado?: boolean | PerfilDefaultArgs<ExtArgs>
  }
  export type admSubordinadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adm?: boolean | PerfilDefaultArgs<ExtArgs>
    subordinado?: boolean | PerfilDefaultArgs<ExtArgs>
  }

  export type $admSubordinadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admSubordinados"
    objects: {
      adm: Prisma.$PerfilPayload<ExtArgs>
      subordinado: Prisma.$PerfilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idAdm: number
      nomeUsu: string
    }, ExtArgs["result"]["admSubordinados"]>
    composites: {}
  }

  type admSubordinadosGetPayload<S extends boolean | null | undefined | admSubordinadosDefaultArgs> = $Result.GetResult<Prisma.$admSubordinadosPayload, S>

  type admSubordinadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admSubordinadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmSubordinadosCountAggregateInputType | true
    }

  export interface admSubordinadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admSubordinados'], meta: { name: 'admSubordinados' } }
    /**
     * Find zero or one AdmSubordinados that matches the filter.
     * @param {admSubordinadosFindUniqueArgs} args - Arguments to find a AdmSubordinados
     * @example
     * // Get one AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admSubordinadosFindUniqueArgs>(args: SelectSubset<T, admSubordinadosFindUniqueArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdmSubordinados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admSubordinadosFindUniqueOrThrowArgs} args - Arguments to find a AdmSubordinados
     * @example
     * // Get one AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admSubordinadosFindUniqueOrThrowArgs>(args: SelectSubset<T, admSubordinadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmSubordinados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admSubordinadosFindFirstArgs} args - Arguments to find a AdmSubordinados
     * @example
     * // Get one AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admSubordinadosFindFirstArgs>(args?: SelectSubset<T, admSubordinadosFindFirstArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmSubordinados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admSubordinadosFindFirstOrThrowArgs} args - Arguments to find a AdmSubordinados
     * @example
     * // Get one AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admSubordinadosFindFirstOrThrowArgs>(args?: SelectSubset<T, admSubordinadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmSubordinados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admSubordinadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.findMany()
     * 
     * // Get first 10 AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.findMany({ take: 10 })
     * 
     * // Only select the `idAdm`
     * const admSubordinadosWithIdAdmOnly = await prisma.admSubordinados.findMany({ select: { idAdm: true } })
     * 
     */
    findMany<T extends admSubordinadosFindManyArgs>(args?: SelectSubset<T, admSubordinadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdmSubordinados.
     * @param {admSubordinadosCreateArgs} args - Arguments to create a AdmSubordinados.
     * @example
     * // Create one AdmSubordinados
     * const AdmSubordinados = await prisma.admSubordinados.create({
     *   data: {
     *     // ... data to create a AdmSubordinados
     *   }
     * })
     * 
     */
    create<T extends admSubordinadosCreateArgs>(args: SelectSubset<T, admSubordinadosCreateArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdmSubordinados.
     * @param {admSubordinadosCreateManyArgs} args - Arguments to create many AdmSubordinados.
     * @example
     * // Create many AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admSubordinadosCreateManyArgs>(args?: SelectSubset<T, admSubordinadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdmSubordinados and returns the data saved in the database.
     * @param {admSubordinadosCreateManyAndReturnArgs} args - Arguments to create many AdmSubordinados.
     * @example
     * // Create many AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdmSubordinados and only return the `idAdm`
     * const admSubordinadosWithIdAdmOnly = await prisma.admSubordinados.createManyAndReturn({
     *   select: { idAdm: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admSubordinadosCreateManyAndReturnArgs>(args?: SelectSubset<T, admSubordinadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdmSubordinados.
     * @param {admSubordinadosDeleteArgs} args - Arguments to delete one AdmSubordinados.
     * @example
     * // Delete one AdmSubordinados
     * const AdmSubordinados = await prisma.admSubordinados.delete({
     *   where: {
     *     // ... filter to delete one AdmSubordinados
     *   }
     * })
     * 
     */
    delete<T extends admSubordinadosDeleteArgs>(args: SelectSubset<T, admSubordinadosDeleteArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdmSubordinados.
     * @param {admSubordinadosUpdateArgs} args - Arguments to update one AdmSubordinados.
     * @example
     * // Update one AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admSubordinadosUpdateArgs>(args: SelectSubset<T, admSubordinadosUpdateArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdmSubordinados.
     * @param {admSubordinadosDeleteManyArgs} args - Arguments to filter AdmSubordinados to delete.
     * @example
     * // Delete a few AdmSubordinados
     * const { count } = await prisma.admSubordinados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admSubordinadosDeleteManyArgs>(args?: SelectSubset<T, admSubordinadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmSubordinados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admSubordinadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admSubordinadosUpdateManyArgs>(args: SelectSubset<T, admSubordinadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmSubordinados and returns the data updated in the database.
     * @param {admSubordinadosUpdateManyAndReturnArgs} args - Arguments to update many AdmSubordinados.
     * @example
     * // Update many AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdmSubordinados and only return the `idAdm`
     * const admSubordinadosWithIdAdmOnly = await prisma.admSubordinados.updateManyAndReturn({
     *   select: { idAdm: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends admSubordinadosUpdateManyAndReturnArgs>(args: SelectSubset<T, admSubordinadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdmSubordinados.
     * @param {admSubordinadosUpsertArgs} args - Arguments to update or create a AdmSubordinados.
     * @example
     * // Update or create a AdmSubordinados
     * const admSubordinados = await prisma.admSubordinados.upsert({
     *   create: {
     *     // ... data to create a AdmSubordinados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmSubordinados we want to update
     *   }
     * })
     */
    upsert<T extends admSubordinadosUpsertArgs>(args: SelectSubset<T, admSubordinadosUpsertArgs<ExtArgs>>): Prisma__admSubordinadosClient<$Result.GetResult<Prisma.$admSubordinadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdmSubordinados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admSubordinadosCountArgs} args - Arguments to filter AdmSubordinados to count.
     * @example
     * // Count the number of AdmSubordinados
     * const count = await prisma.admSubordinados.count({
     *   where: {
     *     // ... the filter for the AdmSubordinados we want to count
     *   }
     * })
    **/
    count<T extends admSubordinadosCountArgs>(
      args?: Subset<T, admSubordinadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmSubordinadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmSubordinados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmSubordinadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmSubordinadosAggregateArgs>(args: Subset<T, AdmSubordinadosAggregateArgs>): Prisma.PrismaPromise<GetAdmSubordinadosAggregateType<T>>

    /**
     * Group by AdmSubordinados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admSubordinadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admSubordinadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admSubordinadosGroupByArgs['orderBy'] }
        : { orderBy?: admSubordinadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admSubordinadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmSubordinadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admSubordinados model
   */
  readonly fields: admSubordinadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admSubordinados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admSubordinadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adm<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subordinado<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admSubordinados model
   */
  interface admSubordinadosFieldRefs {
    readonly idAdm: FieldRef<"admSubordinados", 'Int'>
    readonly nomeUsu: FieldRef<"admSubordinados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admSubordinados findUnique
   */
  export type admSubordinadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * Filter, which admSubordinados to fetch.
     */
    where: admSubordinadosWhereUniqueInput
  }

  /**
   * admSubordinados findUniqueOrThrow
   */
  export type admSubordinadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * Filter, which admSubordinados to fetch.
     */
    where: admSubordinadosWhereUniqueInput
  }

  /**
   * admSubordinados findFirst
   */
  export type admSubordinadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * Filter, which admSubordinados to fetch.
     */
    where?: admSubordinadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admSubordinados to fetch.
     */
    orderBy?: admSubordinadosOrderByWithRelationInput | admSubordinadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admSubordinados.
     */
    cursor?: admSubordinadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admSubordinados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admSubordinados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admSubordinados.
     */
    distinct?: AdmSubordinadosScalarFieldEnum | AdmSubordinadosScalarFieldEnum[]
  }

  /**
   * admSubordinados findFirstOrThrow
   */
  export type admSubordinadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * Filter, which admSubordinados to fetch.
     */
    where?: admSubordinadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admSubordinados to fetch.
     */
    orderBy?: admSubordinadosOrderByWithRelationInput | admSubordinadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admSubordinados.
     */
    cursor?: admSubordinadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admSubordinados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admSubordinados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admSubordinados.
     */
    distinct?: AdmSubordinadosScalarFieldEnum | AdmSubordinadosScalarFieldEnum[]
  }

  /**
   * admSubordinados findMany
   */
  export type admSubordinadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * Filter, which admSubordinados to fetch.
     */
    where?: admSubordinadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admSubordinados to fetch.
     */
    orderBy?: admSubordinadosOrderByWithRelationInput | admSubordinadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admSubordinados.
     */
    cursor?: admSubordinadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admSubordinados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admSubordinados.
     */
    skip?: number
    distinct?: AdmSubordinadosScalarFieldEnum | AdmSubordinadosScalarFieldEnum[]
  }

  /**
   * admSubordinados create
   */
  export type admSubordinadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * The data needed to create a admSubordinados.
     */
    data: XOR<admSubordinadosCreateInput, admSubordinadosUncheckedCreateInput>
  }

  /**
   * admSubordinados createMany
   */
  export type admSubordinadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admSubordinados.
     */
    data: admSubordinadosCreateManyInput | admSubordinadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admSubordinados createManyAndReturn
   */
  export type admSubordinadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * The data used to create many admSubordinados.
     */
    data: admSubordinadosCreateManyInput | admSubordinadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admSubordinados update
   */
  export type admSubordinadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * The data needed to update a admSubordinados.
     */
    data: XOR<admSubordinadosUpdateInput, admSubordinadosUncheckedUpdateInput>
    /**
     * Choose, which admSubordinados to update.
     */
    where: admSubordinadosWhereUniqueInput
  }

  /**
   * admSubordinados updateMany
   */
  export type admSubordinadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admSubordinados.
     */
    data: XOR<admSubordinadosUpdateManyMutationInput, admSubordinadosUncheckedUpdateManyInput>
    /**
     * Filter which admSubordinados to update
     */
    where?: admSubordinadosWhereInput
    /**
     * Limit how many admSubordinados to update.
     */
    limit?: number
  }

  /**
   * admSubordinados updateManyAndReturn
   */
  export type admSubordinadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * The data used to update admSubordinados.
     */
    data: XOR<admSubordinadosUpdateManyMutationInput, admSubordinadosUncheckedUpdateManyInput>
    /**
     * Filter which admSubordinados to update
     */
    where?: admSubordinadosWhereInput
    /**
     * Limit how many admSubordinados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admSubordinados upsert
   */
  export type admSubordinadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * The filter to search for the admSubordinados to update in case it exists.
     */
    where: admSubordinadosWhereUniqueInput
    /**
     * In case the admSubordinados found by the `where` argument doesn't exist, create a new admSubordinados with this data.
     */
    create: XOR<admSubordinadosCreateInput, admSubordinadosUncheckedCreateInput>
    /**
     * In case the admSubordinados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admSubordinadosUpdateInput, admSubordinadosUncheckedUpdateInput>
  }

  /**
   * admSubordinados delete
   */
  export type admSubordinadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
    /**
     * Filter which admSubordinados to delete.
     */
    where: admSubordinadosWhereUniqueInput
  }

  /**
   * admSubordinados deleteMany
   */
  export type admSubordinadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admSubordinados to delete
     */
    where?: admSubordinadosWhereInput
    /**
     * Limit how many admSubordinados to delete.
     */
    limit?: number
  }

  /**
   * admSubordinados without action
   */
  export type admSubordinadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admSubordinados
     */
    select?: admSubordinadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admSubordinados
     */
    omit?: admSubordinadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admSubordinadosInclude<ExtArgs> | null
  }


  /**
   * Model participantesDesafio
   */

  export type AggregateParticipantesDesafio = {
    _count: ParticipantesDesafioCountAggregateOutputType | null
    _min: ParticipantesDesafioMinAggregateOutputType | null
    _max: ParticipantesDesafioMaxAggregateOutputType | null
  }

  export type ParticipantesDesafioMinAggregateOutputType = {
    nomeUsu: string | null
    temaDesafio: string | null
  }

  export type ParticipantesDesafioMaxAggregateOutputType = {
    nomeUsu: string | null
    temaDesafio: string | null
  }

  export type ParticipantesDesafioCountAggregateOutputType = {
    nomeUsu: number
    temaDesafio: number
    _all: number
  }


  export type ParticipantesDesafioMinAggregateInputType = {
    nomeUsu?: true
    temaDesafio?: true
  }

  export type ParticipantesDesafioMaxAggregateInputType = {
    nomeUsu?: true
    temaDesafio?: true
  }

  export type ParticipantesDesafioCountAggregateInputType = {
    nomeUsu?: true
    temaDesafio?: true
    _all?: true
  }

  export type ParticipantesDesafioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participantesDesafio to aggregate.
     */
    where?: participantesDesafioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantesDesafios to fetch.
     */
    orderBy?: participantesDesafioOrderByWithRelationInput | participantesDesafioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participantesDesafioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantesDesafios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantesDesafios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participantesDesafios
    **/
    _count?: true | ParticipantesDesafioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantesDesafioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantesDesafioMaxAggregateInputType
  }

  export type GetParticipantesDesafioAggregateType<T extends ParticipantesDesafioAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantesDesafio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantesDesafio[P]>
      : GetScalarType<T[P], AggregateParticipantesDesafio[P]>
  }




  export type participantesDesafioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantesDesafioWhereInput
    orderBy?: participantesDesafioOrderByWithAggregationInput | participantesDesafioOrderByWithAggregationInput[]
    by: ParticipantesDesafioScalarFieldEnum[] | ParticipantesDesafioScalarFieldEnum
    having?: participantesDesafioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantesDesafioCountAggregateInputType | true
    _min?: ParticipantesDesafioMinAggregateInputType
    _max?: ParticipantesDesafioMaxAggregateInputType
  }

  export type ParticipantesDesafioGroupByOutputType = {
    nomeUsu: string
    temaDesafio: string
    _count: ParticipantesDesafioCountAggregateOutputType | null
    _min: ParticipantesDesafioMinAggregateOutputType | null
    _max: ParticipantesDesafioMaxAggregateOutputType | null
  }

  type GetParticipantesDesafioGroupByPayload<T extends participantesDesafioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantesDesafioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantesDesafioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantesDesafioGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantesDesafioGroupByOutputType[P]>
        }
      >
    >


  export type participantesDesafioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUsu?: boolean
    temaDesafio?: boolean
    participantes?: boolean | PerfilDefaultArgs<ExtArgs>
    desafio?: boolean | CatalogoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantesDesafio"]>

  export type participantesDesafioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUsu?: boolean
    temaDesafio?: boolean
    participantes?: boolean | PerfilDefaultArgs<ExtArgs>
    desafio?: boolean | CatalogoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantesDesafio"]>

  export type participantesDesafioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUsu?: boolean
    temaDesafio?: boolean
    participantes?: boolean | PerfilDefaultArgs<ExtArgs>
    desafio?: boolean | CatalogoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantesDesafio"]>

  export type participantesDesafioSelectScalar = {
    nomeUsu?: boolean
    temaDesafio?: boolean
  }

  export type participantesDesafioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nomeUsu" | "temaDesafio", ExtArgs["result"]["participantesDesafio"]>
  export type participantesDesafioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | PerfilDefaultArgs<ExtArgs>
    desafio?: boolean | CatalogoDefaultArgs<ExtArgs>
  }
  export type participantesDesafioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | PerfilDefaultArgs<ExtArgs>
    desafio?: boolean | CatalogoDefaultArgs<ExtArgs>
  }
  export type participantesDesafioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | PerfilDefaultArgs<ExtArgs>
    desafio?: boolean | CatalogoDefaultArgs<ExtArgs>
  }

  export type $participantesDesafioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participantesDesafio"
    objects: {
      participantes: Prisma.$PerfilPayload<ExtArgs>
      desafio: Prisma.$CatalogoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nomeUsu: string
      temaDesafio: string
    }, ExtArgs["result"]["participantesDesafio"]>
    composites: {}
  }

  type participantesDesafioGetPayload<S extends boolean | null | undefined | participantesDesafioDefaultArgs> = $Result.GetResult<Prisma.$participantesDesafioPayload, S>

  type participantesDesafioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participantesDesafioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantesDesafioCountAggregateInputType | true
    }

  export interface participantesDesafioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participantesDesafio'], meta: { name: 'participantesDesafio' } }
    /**
     * Find zero or one ParticipantesDesafio that matches the filter.
     * @param {participantesDesafioFindUniqueArgs} args - Arguments to find a ParticipantesDesafio
     * @example
     * // Get one ParticipantesDesafio
     * const participantesDesafio = await prisma.participantesDesafio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participantesDesafioFindUniqueArgs>(args: SelectSubset<T, participantesDesafioFindUniqueArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantesDesafio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participantesDesafioFindUniqueOrThrowArgs} args - Arguments to find a ParticipantesDesafio
     * @example
     * // Get one ParticipantesDesafio
     * const participantesDesafio = await prisma.participantesDesafio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participantesDesafioFindUniqueOrThrowArgs>(args: SelectSubset<T, participantesDesafioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantesDesafio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantesDesafioFindFirstArgs} args - Arguments to find a ParticipantesDesafio
     * @example
     * // Get one ParticipantesDesafio
     * const participantesDesafio = await prisma.participantesDesafio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participantesDesafioFindFirstArgs>(args?: SelectSubset<T, participantesDesafioFindFirstArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantesDesafio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantesDesafioFindFirstOrThrowArgs} args - Arguments to find a ParticipantesDesafio
     * @example
     * // Get one ParticipantesDesafio
     * const participantesDesafio = await prisma.participantesDesafio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participantesDesafioFindFirstOrThrowArgs>(args?: SelectSubset<T, participantesDesafioFindFirstOrThrowArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantesDesafios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantesDesafioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantesDesafios
     * const participantesDesafios = await prisma.participantesDesafio.findMany()
     * 
     * // Get first 10 ParticipantesDesafios
     * const participantesDesafios = await prisma.participantesDesafio.findMany({ take: 10 })
     * 
     * // Only select the `nomeUsu`
     * const participantesDesafioWithNomeUsuOnly = await prisma.participantesDesafio.findMany({ select: { nomeUsu: true } })
     * 
     */
    findMany<T extends participantesDesafioFindManyArgs>(args?: SelectSubset<T, participantesDesafioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantesDesafio.
     * @param {participantesDesafioCreateArgs} args - Arguments to create a ParticipantesDesafio.
     * @example
     * // Create one ParticipantesDesafio
     * const ParticipantesDesafio = await prisma.participantesDesafio.create({
     *   data: {
     *     // ... data to create a ParticipantesDesafio
     *   }
     * })
     * 
     */
    create<T extends participantesDesafioCreateArgs>(args: SelectSubset<T, participantesDesafioCreateArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantesDesafios.
     * @param {participantesDesafioCreateManyArgs} args - Arguments to create many ParticipantesDesafios.
     * @example
     * // Create many ParticipantesDesafios
     * const participantesDesafio = await prisma.participantesDesafio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participantesDesafioCreateManyArgs>(args?: SelectSubset<T, participantesDesafioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantesDesafios and returns the data saved in the database.
     * @param {participantesDesafioCreateManyAndReturnArgs} args - Arguments to create many ParticipantesDesafios.
     * @example
     * // Create many ParticipantesDesafios
     * const participantesDesafio = await prisma.participantesDesafio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantesDesafios and only return the `nomeUsu`
     * const participantesDesafioWithNomeUsuOnly = await prisma.participantesDesafio.createManyAndReturn({
     *   select: { nomeUsu: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends participantesDesafioCreateManyAndReturnArgs>(args?: SelectSubset<T, participantesDesafioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantesDesafio.
     * @param {participantesDesafioDeleteArgs} args - Arguments to delete one ParticipantesDesafio.
     * @example
     * // Delete one ParticipantesDesafio
     * const ParticipantesDesafio = await prisma.participantesDesafio.delete({
     *   where: {
     *     // ... filter to delete one ParticipantesDesafio
     *   }
     * })
     * 
     */
    delete<T extends participantesDesafioDeleteArgs>(args: SelectSubset<T, participantesDesafioDeleteArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantesDesafio.
     * @param {participantesDesafioUpdateArgs} args - Arguments to update one ParticipantesDesafio.
     * @example
     * // Update one ParticipantesDesafio
     * const participantesDesafio = await prisma.participantesDesafio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participantesDesafioUpdateArgs>(args: SelectSubset<T, participantesDesafioUpdateArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantesDesafios.
     * @param {participantesDesafioDeleteManyArgs} args - Arguments to filter ParticipantesDesafios to delete.
     * @example
     * // Delete a few ParticipantesDesafios
     * const { count } = await prisma.participantesDesafio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participantesDesafioDeleteManyArgs>(args?: SelectSubset<T, participantesDesafioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantesDesafios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantesDesafioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantesDesafios
     * const participantesDesafio = await prisma.participantesDesafio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participantesDesafioUpdateManyArgs>(args: SelectSubset<T, participantesDesafioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantesDesafios and returns the data updated in the database.
     * @param {participantesDesafioUpdateManyAndReturnArgs} args - Arguments to update many ParticipantesDesafios.
     * @example
     * // Update many ParticipantesDesafios
     * const participantesDesafio = await prisma.participantesDesafio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantesDesafios and only return the `nomeUsu`
     * const participantesDesafioWithNomeUsuOnly = await prisma.participantesDesafio.updateManyAndReturn({
     *   select: { nomeUsu: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends participantesDesafioUpdateManyAndReturnArgs>(args: SelectSubset<T, participantesDesafioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantesDesafio.
     * @param {participantesDesafioUpsertArgs} args - Arguments to update or create a ParticipantesDesafio.
     * @example
     * // Update or create a ParticipantesDesafio
     * const participantesDesafio = await prisma.participantesDesafio.upsert({
     *   create: {
     *     // ... data to create a ParticipantesDesafio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantesDesafio we want to update
     *   }
     * })
     */
    upsert<T extends participantesDesafioUpsertArgs>(args: SelectSubset<T, participantesDesafioUpsertArgs<ExtArgs>>): Prisma__participantesDesafioClient<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantesDesafios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantesDesafioCountArgs} args - Arguments to filter ParticipantesDesafios to count.
     * @example
     * // Count the number of ParticipantesDesafios
     * const count = await prisma.participantesDesafio.count({
     *   where: {
     *     // ... the filter for the ParticipantesDesafios we want to count
     *   }
     * })
    **/
    count<T extends participantesDesafioCountArgs>(
      args?: Subset<T, participantesDesafioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantesDesafioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantesDesafio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesDesafioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantesDesafioAggregateArgs>(args: Subset<T, ParticipantesDesafioAggregateArgs>): Prisma.PrismaPromise<GetParticipantesDesafioAggregateType<T>>

    /**
     * Group by ParticipantesDesafio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantesDesafioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends participantesDesafioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participantesDesafioGroupByArgs['orderBy'] }
        : { orderBy?: participantesDesafioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, participantesDesafioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantesDesafioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participantesDesafio model
   */
  readonly fields: participantesDesafioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participantesDesafio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participantesDesafioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    desafio<T extends CatalogoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CatalogoDefaultArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the participantesDesafio model
   */
  interface participantesDesafioFieldRefs {
    readonly nomeUsu: FieldRef<"participantesDesafio", 'String'>
    readonly temaDesafio: FieldRef<"participantesDesafio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * participantesDesafio findUnique
   */
  export type participantesDesafioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * Filter, which participantesDesafio to fetch.
     */
    where: participantesDesafioWhereUniqueInput
  }

  /**
   * participantesDesafio findUniqueOrThrow
   */
  export type participantesDesafioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * Filter, which participantesDesafio to fetch.
     */
    where: participantesDesafioWhereUniqueInput
  }

  /**
   * participantesDesafio findFirst
   */
  export type participantesDesafioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * Filter, which participantesDesafio to fetch.
     */
    where?: participantesDesafioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantesDesafios to fetch.
     */
    orderBy?: participantesDesafioOrderByWithRelationInput | participantesDesafioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participantesDesafios.
     */
    cursor?: participantesDesafioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantesDesafios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantesDesafios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantesDesafios.
     */
    distinct?: ParticipantesDesafioScalarFieldEnum | ParticipantesDesafioScalarFieldEnum[]
  }

  /**
   * participantesDesafio findFirstOrThrow
   */
  export type participantesDesafioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * Filter, which participantesDesafio to fetch.
     */
    where?: participantesDesafioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantesDesafios to fetch.
     */
    orderBy?: participantesDesafioOrderByWithRelationInput | participantesDesafioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participantesDesafios.
     */
    cursor?: participantesDesafioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantesDesafios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantesDesafios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantesDesafios.
     */
    distinct?: ParticipantesDesafioScalarFieldEnum | ParticipantesDesafioScalarFieldEnum[]
  }

  /**
   * participantesDesafio findMany
   */
  export type participantesDesafioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * Filter, which participantesDesafios to fetch.
     */
    where?: participantesDesafioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantesDesafios to fetch.
     */
    orderBy?: participantesDesafioOrderByWithRelationInput | participantesDesafioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participantesDesafios.
     */
    cursor?: participantesDesafioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantesDesafios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantesDesafios.
     */
    skip?: number
    distinct?: ParticipantesDesafioScalarFieldEnum | ParticipantesDesafioScalarFieldEnum[]
  }

  /**
   * participantesDesafio create
   */
  export type participantesDesafioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * The data needed to create a participantesDesafio.
     */
    data: XOR<participantesDesafioCreateInput, participantesDesafioUncheckedCreateInput>
  }

  /**
   * participantesDesafio createMany
   */
  export type participantesDesafioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participantesDesafios.
     */
    data: participantesDesafioCreateManyInput | participantesDesafioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participantesDesafio createManyAndReturn
   */
  export type participantesDesafioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * The data used to create many participantesDesafios.
     */
    data: participantesDesafioCreateManyInput | participantesDesafioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * participantesDesafio update
   */
  export type participantesDesafioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * The data needed to update a participantesDesafio.
     */
    data: XOR<participantesDesafioUpdateInput, participantesDesafioUncheckedUpdateInput>
    /**
     * Choose, which participantesDesafio to update.
     */
    where: participantesDesafioWhereUniqueInput
  }

  /**
   * participantesDesafio updateMany
   */
  export type participantesDesafioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participantesDesafios.
     */
    data: XOR<participantesDesafioUpdateManyMutationInput, participantesDesafioUncheckedUpdateManyInput>
    /**
     * Filter which participantesDesafios to update
     */
    where?: participantesDesafioWhereInput
    /**
     * Limit how many participantesDesafios to update.
     */
    limit?: number
  }

  /**
   * participantesDesafio updateManyAndReturn
   */
  export type participantesDesafioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * The data used to update participantesDesafios.
     */
    data: XOR<participantesDesafioUpdateManyMutationInput, participantesDesafioUncheckedUpdateManyInput>
    /**
     * Filter which participantesDesafios to update
     */
    where?: participantesDesafioWhereInput
    /**
     * Limit how many participantesDesafios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * participantesDesafio upsert
   */
  export type participantesDesafioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * The filter to search for the participantesDesafio to update in case it exists.
     */
    where: participantesDesafioWhereUniqueInput
    /**
     * In case the participantesDesafio found by the `where` argument doesn't exist, create a new participantesDesafio with this data.
     */
    create: XOR<participantesDesafioCreateInput, participantesDesafioUncheckedCreateInput>
    /**
     * In case the participantesDesafio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participantesDesafioUpdateInput, participantesDesafioUncheckedUpdateInput>
  }

  /**
   * participantesDesafio delete
   */
  export type participantesDesafioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    /**
     * Filter which participantesDesafio to delete.
     */
    where: participantesDesafioWhereUniqueInput
  }

  /**
   * participantesDesafio deleteMany
   */
  export type participantesDesafioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participantesDesafios to delete
     */
    where?: participantesDesafioWhereInput
    /**
     * Limit how many participantesDesafios to delete.
     */
    limit?: number
  }

  /**
   * participantesDesafio without action
   */
  export type participantesDesafioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
  }


  /**
   * Model Catalogo
   */

  export type AggregateCatalogo = {
    _count: CatalogoCountAggregateOutputType | null
    _avg: CatalogoAvgAggregateOutputType | null
    _sum: CatalogoSumAggregateOutputType | null
    _min: CatalogoMinAggregateOutputType | null
    _max: CatalogoMaxAggregateOutputType | null
  }

  export type CatalogoAvgAggregateOutputType = {
    curtidas: number | null
    idDono: number | null
  }

  export type CatalogoSumAggregateOutputType = {
    curtidas: number | null
    idDono: number | null
  }

  export type CatalogoMinAggregateOutputType = {
    tema: string | null
    curtidas: number | null
    descricao: string | null
    tipo: $Enums.TipoCatalogo | null
    visibilidade: string | null
    criterio: string | null
    idDono: number | null
  }

  export type CatalogoMaxAggregateOutputType = {
    tema: string | null
    curtidas: number | null
    descricao: string | null
    tipo: $Enums.TipoCatalogo | null
    visibilidade: string | null
    criterio: string | null
    idDono: number | null
  }

  export type CatalogoCountAggregateOutputType = {
    tema: number
    curtidas: number
    tags: number
    descricao: number
    tipo: number
    visibilidade: number
    criterio: number
    idDono: number
    _all: number
  }


  export type CatalogoAvgAggregateInputType = {
    curtidas?: true
    idDono?: true
  }

  export type CatalogoSumAggregateInputType = {
    curtidas?: true
    idDono?: true
  }

  export type CatalogoMinAggregateInputType = {
    tema?: true
    curtidas?: true
    descricao?: true
    tipo?: true
    visibilidade?: true
    criterio?: true
    idDono?: true
  }

  export type CatalogoMaxAggregateInputType = {
    tema?: true
    curtidas?: true
    descricao?: true
    tipo?: true
    visibilidade?: true
    criterio?: true
    idDono?: true
  }

  export type CatalogoCountAggregateInputType = {
    tema?: true
    curtidas?: true
    tags?: true
    descricao?: true
    tipo?: true
    visibilidade?: true
    criterio?: true
    idDono?: true
    _all?: true
  }

  export type CatalogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalogo to aggregate.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Catalogos
    **/
    _count?: true | CatalogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatalogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatalogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogoMaxAggregateInputType
  }

  export type GetCatalogoAggregateType<T extends CatalogoAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogo[P]>
      : GetScalarType<T[P], AggregateCatalogo[P]>
  }




  export type CatalogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoWhereInput
    orderBy?: CatalogoOrderByWithAggregationInput | CatalogoOrderByWithAggregationInput[]
    by: CatalogoScalarFieldEnum[] | CatalogoScalarFieldEnum
    having?: CatalogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogoCountAggregateInputType | true
    _avg?: CatalogoAvgAggregateInputType
    _sum?: CatalogoSumAggregateInputType
    _min?: CatalogoMinAggregateInputType
    _max?: CatalogoMaxAggregateInputType
  }

  export type CatalogoGroupByOutputType = {
    tema: string
    curtidas: number
    tags: string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade: string | null
    criterio: string | null
    idDono: number
    _count: CatalogoCountAggregateOutputType | null
    _avg: CatalogoAvgAggregateOutputType | null
    _sum: CatalogoSumAggregateOutputType | null
    _min: CatalogoMinAggregateOutputType | null
    _max: CatalogoMaxAggregateOutputType | null
  }

  type GetCatalogoGroupByPayload<T extends CatalogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogoGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogoGroupByOutputType[P]>
        }
      >
    >


  export type CatalogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
    livros?: boolean | Catalogo$livrosArgs<ExtArgs>
    dono?: boolean | PerfilDefaultArgs<ExtArgs>
    medalhas?: boolean | Catalogo$medalhasArgs<ExtArgs>
    participantes?: boolean | Catalogo$participantesArgs<ExtArgs>
    _count?: boolean | CatalogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo"]>

  export type CatalogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
    dono?: boolean | PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo"]>

  export type CatalogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
    dono?: boolean | PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo"]>

  export type CatalogoSelectScalar = {
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
  }

  export type CatalogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tema" | "curtidas" | "tags" | "descricao" | "tipo" | "visibilidade" | "criterio" | "idDono", ExtArgs["result"]["catalogo"]>
  export type CatalogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Catalogo$livrosArgs<ExtArgs>
    dono?: boolean | PerfilDefaultArgs<ExtArgs>
    medalhas?: boolean | Catalogo$medalhasArgs<ExtArgs>
    participantes?: boolean | Catalogo$participantesArgs<ExtArgs>
    _count?: boolean | CatalogoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CatalogoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dono?: boolean | PerfilDefaultArgs<ExtArgs>
  }
  export type CatalogoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dono?: boolean | PerfilDefaultArgs<ExtArgs>
  }

  export type $CatalogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Catalogo"
    objects: {
      livros: Prisma.$LivroPayload<ExtArgs>[]
      dono: Prisma.$PerfilPayload<ExtArgs>
      medalhas: Prisma.$ConquistaPayload<ExtArgs>[]
      participantes: Prisma.$participantesDesafioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tema: string
      curtidas: number
      tags: string[]
      descricao: string
      tipo: $Enums.TipoCatalogo
      visibilidade: string | null
      criterio: string | null
      idDono: number
    }, ExtArgs["result"]["catalogo"]>
    composites: {}
  }

  type CatalogoGetPayload<S extends boolean | null | undefined | CatalogoDefaultArgs> = $Result.GetResult<Prisma.$CatalogoPayload, S>

  type CatalogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogoCountAggregateInputType | true
    }

  export interface CatalogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Catalogo'], meta: { name: 'Catalogo' } }
    /**
     * Find zero or one Catalogo that matches the filter.
     * @param {CatalogoFindUniqueArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogoFindUniqueArgs>(args: SelectSubset<T, CatalogoFindUniqueArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Catalogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogoFindUniqueOrThrowArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogoFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoFindFirstArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogoFindFirstArgs>(args?: SelectSubset<T, CatalogoFindFirstArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoFindFirstOrThrowArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogoFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Catalogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogos
     * const catalogos = await prisma.catalogo.findMany()
     * 
     * // Get first 10 Catalogos
     * const catalogos = await prisma.catalogo.findMany({ take: 10 })
     * 
     * // Only select the `tema`
     * const catalogoWithTemaOnly = await prisma.catalogo.findMany({ select: { tema: true } })
     * 
     */
    findMany<T extends CatalogoFindManyArgs>(args?: SelectSubset<T, CatalogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Catalogo.
     * @param {CatalogoCreateArgs} args - Arguments to create a Catalogo.
     * @example
     * // Create one Catalogo
     * const Catalogo = await prisma.catalogo.create({
     *   data: {
     *     // ... data to create a Catalogo
     *   }
     * })
     * 
     */
    create<T extends CatalogoCreateArgs>(args: SelectSubset<T, CatalogoCreateArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Catalogos.
     * @param {CatalogoCreateManyArgs} args - Arguments to create many Catalogos.
     * @example
     * // Create many Catalogos
     * const catalogo = await prisma.catalogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogoCreateManyArgs>(args?: SelectSubset<T, CatalogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Catalogos and returns the data saved in the database.
     * @param {CatalogoCreateManyAndReturnArgs} args - Arguments to create many Catalogos.
     * @example
     * // Create many Catalogos
     * const catalogo = await prisma.catalogo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Catalogos and only return the `tema`
     * const catalogoWithTemaOnly = await prisma.catalogo.createManyAndReturn({
     *   select: { tema: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogoCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Catalogo.
     * @param {CatalogoDeleteArgs} args - Arguments to delete one Catalogo.
     * @example
     * // Delete one Catalogo
     * const Catalogo = await prisma.catalogo.delete({
     *   where: {
     *     // ... filter to delete one Catalogo
     *   }
     * })
     * 
     */
    delete<T extends CatalogoDeleteArgs>(args: SelectSubset<T, CatalogoDeleteArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Catalogo.
     * @param {CatalogoUpdateArgs} args - Arguments to update one Catalogo.
     * @example
     * // Update one Catalogo
     * const catalogo = await prisma.catalogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogoUpdateArgs>(args: SelectSubset<T, CatalogoUpdateArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Catalogos.
     * @param {CatalogoDeleteManyArgs} args - Arguments to filter Catalogos to delete.
     * @example
     * // Delete a few Catalogos
     * const { count } = await prisma.catalogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogoDeleteManyArgs>(args?: SelectSubset<T, CatalogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogos
     * const catalogo = await prisma.catalogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogoUpdateManyArgs>(args: SelectSubset<T, CatalogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogos and returns the data updated in the database.
     * @param {CatalogoUpdateManyAndReturnArgs} args - Arguments to update many Catalogos.
     * @example
     * // Update many Catalogos
     * const catalogo = await prisma.catalogo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Catalogos and only return the `tema`
     * const catalogoWithTemaOnly = await prisma.catalogo.updateManyAndReturn({
     *   select: { tema: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CatalogoUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Catalogo.
     * @param {CatalogoUpsertArgs} args - Arguments to update or create a Catalogo.
     * @example
     * // Update or create a Catalogo
     * const catalogo = await prisma.catalogo.upsert({
     *   create: {
     *     // ... data to create a Catalogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalogo we want to update
     *   }
     * })
     */
    upsert<T extends CatalogoUpsertArgs>(args: SelectSubset<T, CatalogoUpsertArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Catalogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoCountArgs} args - Arguments to filter Catalogos to count.
     * @example
     * // Count the number of Catalogos
     * const count = await prisma.catalogo.count({
     *   where: {
     *     // ... the filter for the Catalogos we want to count
     *   }
     * })
    **/
    count<T extends CatalogoCountArgs>(
      args?: Subset<T, CatalogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogoAggregateArgs>(args: Subset<T, CatalogoAggregateArgs>): Prisma.PrismaPromise<GetCatalogoAggregateType<T>>

    /**
     * Group by Catalogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogoGroupByArgs['orderBy'] }
        : { orderBy?: CatalogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Catalogo model
   */
  readonly fields: CatalogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Catalogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Catalogo$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Catalogo$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dono<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medalhas<T extends Catalogo$medalhasArgs<ExtArgs> = {}>(args?: Subset<T, Catalogo$medalhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participantes<T extends Catalogo$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Catalogo$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantesDesafioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Catalogo model
   */
  interface CatalogoFieldRefs {
    readonly tema: FieldRef<"Catalogo", 'String'>
    readonly curtidas: FieldRef<"Catalogo", 'Int'>
    readonly tags: FieldRef<"Catalogo", 'String[]'>
    readonly descricao: FieldRef<"Catalogo", 'String'>
    readonly tipo: FieldRef<"Catalogo", 'TipoCatalogo'>
    readonly visibilidade: FieldRef<"Catalogo", 'String'>
    readonly criterio: FieldRef<"Catalogo", 'String'>
    readonly idDono: FieldRef<"Catalogo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Catalogo findUnique
   */
  export type CatalogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo findUniqueOrThrow
   */
  export type CatalogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo findFirst
   */
  export type CatalogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogos.
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogos.
     */
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo findFirstOrThrow
   */
  export type CatalogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogos.
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogos.
     */
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo findMany
   */
  export type CatalogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogos to fetch.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Catalogos.
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo create
   */
  export type CatalogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Catalogo.
     */
    data: XOR<CatalogoCreateInput, CatalogoUncheckedCreateInput>
  }

  /**
   * Catalogo createMany
   */
  export type CatalogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Catalogos.
     */
    data: CatalogoCreateManyInput | CatalogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Catalogo createManyAndReturn
   */
  export type CatalogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * The data used to create many Catalogos.
     */
    data: CatalogoCreateManyInput | CatalogoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Catalogo update
   */
  export type CatalogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Catalogo.
     */
    data: XOR<CatalogoUpdateInput, CatalogoUncheckedUpdateInput>
    /**
     * Choose, which Catalogo to update.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo updateMany
   */
  export type CatalogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Catalogos.
     */
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyInput>
    /**
     * Filter which Catalogos to update
     */
    where?: CatalogoWhereInput
    /**
     * Limit how many Catalogos to update.
     */
    limit?: number
  }

  /**
   * Catalogo updateManyAndReturn
   */
  export type CatalogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * The data used to update Catalogos.
     */
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyInput>
    /**
     * Filter which Catalogos to update
     */
    where?: CatalogoWhereInput
    /**
     * Limit how many Catalogos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Catalogo upsert
   */
  export type CatalogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Catalogo to update in case it exists.
     */
    where: CatalogoWhereUniqueInput
    /**
     * In case the Catalogo found by the `where` argument doesn't exist, create a new Catalogo with this data.
     */
    create: XOR<CatalogoCreateInput, CatalogoUncheckedCreateInput>
    /**
     * In case the Catalogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogoUpdateInput, CatalogoUncheckedUpdateInput>
  }

  /**
   * Catalogo delete
   */
  export type CatalogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter which Catalogo to delete.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo deleteMany
   */
  export type CatalogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalogos to delete
     */
    where?: CatalogoWhereInput
    /**
     * Limit how many Catalogos to delete.
     */
    limit?: number
  }

  /**
   * Catalogo.livros
   */
  export type Catalogo$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    cursor?: LivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Catalogo.medalhas
   */
  export type Catalogo$medalhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    where?: ConquistaWhereInput
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    cursor?: ConquistaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Catalogo.participantes
   */
  export type Catalogo$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participantesDesafio
     */
    select?: participantesDesafioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participantesDesafio
     */
    omit?: participantesDesafioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantesDesafioInclude<ExtArgs> | null
    where?: participantesDesafioWhereInput
    orderBy?: participantesDesafioOrderByWithRelationInput | participantesDesafioOrderByWithRelationInput[]
    cursor?: participantesDesafioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantesDesafioScalarFieldEnum | ParticipantesDesafioScalarFieldEnum[]
  }

  /**
   * Catalogo without action
   */
  export type CatalogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
  }


  /**
   * Model MetaDeLeitura
   */

  export type AggregateMetaDeLeitura = {
    _count: MetaDeLeituraCountAggregateOutputType | null
    _avg: MetaDeLeituraAvgAggregateOutputType | null
    _sum: MetaDeLeituraSumAggregateOutputType | null
    _min: MetaDeLeituraMinAggregateOutputType | null
    _max: MetaDeLeituraMaxAggregateOutputType | null
  }

  export type MetaDeLeituraAvgAggregateOutputType = {
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
  }

  export type MetaDeLeituraSumAggregateOutputType = {
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
  }

  export type MetaDeLeituraMinAggregateOutputType = {
    nome: string | null
    tipo: string | null
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
    nomeUsuario: string | null
    nomeConquista: string | null
  }

  export type MetaDeLeituraMaxAggregateOutputType = {
    nome: string | null
    tipo: string | null
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
    nomeUsuario: string | null
    nomeConquista: string | null
  }

  export type MetaDeLeituraCountAggregateOutputType = {
    nome: number
    tipo: number
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeUsuario: number
    nomeConquista: number
    _all: number
  }


  export type MetaDeLeituraAvgAggregateInputType = {
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
  }

  export type MetaDeLeituraSumAggregateInputType = {
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
  }

  export type MetaDeLeituraMinAggregateInputType = {
    nome?: true
    tipo?: true
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    nomeUsuario?: true
    nomeConquista?: true
  }

  export type MetaDeLeituraMaxAggregateInputType = {
    nome?: true
    tipo?: true
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    nomeUsuario?: true
    nomeConquista?: true
  }

  export type MetaDeLeituraCountAggregateInputType = {
    nome?: true
    tipo?: true
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    nomeUsuario?: true
    nomeConquista?: true
    _all?: true
  }

  export type MetaDeLeituraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaDeLeitura to aggregate.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaDeLeituras
    **/
    _count?: true | MetaDeLeituraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaDeLeituraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaDeLeituraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaDeLeituraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaDeLeituraMaxAggregateInputType
  }

  export type GetMetaDeLeituraAggregateType<T extends MetaDeLeituraAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaDeLeitura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaDeLeitura[P]>
      : GetScalarType<T[P], AggregateMetaDeLeitura[P]>
  }




  export type MetaDeLeituraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDeLeituraWhereInput
    orderBy?: MetaDeLeituraOrderByWithAggregationInput | MetaDeLeituraOrderByWithAggregationInput[]
    by: MetaDeLeituraScalarFieldEnum[] | MetaDeLeituraScalarFieldEnum
    having?: MetaDeLeituraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaDeLeituraCountAggregateInputType | true
    _avg?: MetaDeLeituraAvgAggregateInputType
    _sum?: MetaDeLeituraSumAggregateInputType
    _min?: MetaDeLeituraMinAggregateInputType
    _max?: MetaDeLeituraMaxAggregateInputType
  }

  export type MetaDeLeituraGroupByOutputType = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeUsuario: string
    nomeConquista: string
    _count: MetaDeLeituraCountAggregateOutputType | null
    _avg: MetaDeLeituraAvgAggregateOutputType | null
    _sum: MetaDeLeituraSumAggregateOutputType | null
    _min: MetaDeLeituraMinAggregateOutputType | null
    _max: MetaDeLeituraMaxAggregateOutputType | null
  }

  type GetMetaDeLeituraGroupByPayload<T extends MetaDeLeituraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaDeLeituraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaDeLeituraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaDeLeituraGroupByOutputType[P]>
            : GetScalarType<T[P], MetaDeLeituraGroupByOutputType[P]>
        }
      >
    >


  export type MetaDeLeituraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    nomeUsuario?: boolean
    nomeConquista?: boolean
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaDeLeitura"]>

  export type MetaDeLeituraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    nomeUsuario?: boolean
    nomeConquista?: boolean
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaDeLeitura"]>

  export type MetaDeLeituraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    nomeUsuario?: boolean
    nomeConquista?: boolean
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaDeLeitura"]>

  export type MetaDeLeituraSelectScalar = {
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    nomeUsuario?: boolean
    nomeConquista?: boolean
  }

  export type MetaDeLeituraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "tipo" | "meta" | "progresso" | "paginasLidas" | "livrosLidos" | "nomeUsuario" | "nomeConquista", ExtArgs["result"]["metaDeLeitura"]>
  export type MetaDeLeituraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }
  export type MetaDeLeituraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }
  export type MetaDeLeituraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }

  export type $MetaDeLeituraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaDeLeitura"
    objects: {
      usuario: Prisma.$PerfilPayload<ExtArgs>
      conquista: Prisma.$ConquistaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      tipo: string
      meta: number
      progresso: number
      paginasLidas: number
      livrosLidos: number
      nomeUsuario: string
      nomeConquista: string
    }, ExtArgs["result"]["metaDeLeitura"]>
    composites: {}
  }

  type MetaDeLeituraGetPayload<S extends boolean | null | undefined | MetaDeLeituraDefaultArgs> = $Result.GetResult<Prisma.$MetaDeLeituraPayload, S>

  type MetaDeLeituraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaDeLeituraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaDeLeituraCountAggregateInputType | true
    }

  export interface MetaDeLeituraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaDeLeitura'], meta: { name: 'MetaDeLeitura' } }
    /**
     * Find zero or one MetaDeLeitura that matches the filter.
     * @param {MetaDeLeituraFindUniqueArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaDeLeituraFindUniqueArgs>(args: SelectSubset<T, MetaDeLeituraFindUniqueArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetaDeLeitura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaDeLeituraFindUniqueOrThrowArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaDeLeituraFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaDeLeituraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaDeLeitura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraFindFirstArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaDeLeituraFindFirstArgs>(args?: SelectSubset<T, MetaDeLeituraFindFirstArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaDeLeitura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraFindFirstOrThrowArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaDeLeituraFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaDeLeituraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetaDeLeituras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaDeLeituras
     * const metaDeLeituras = await prisma.metaDeLeitura.findMany()
     * 
     * // Get first 10 MetaDeLeituras
     * const metaDeLeituras = await prisma.metaDeLeitura.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const metaDeLeituraWithNomeOnly = await prisma.metaDeLeitura.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends MetaDeLeituraFindManyArgs>(args?: SelectSubset<T, MetaDeLeituraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetaDeLeitura.
     * @param {MetaDeLeituraCreateArgs} args - Arguments to create a MetaDeLeitura.
     * @example
     * // Create one MetaDeLeitura
     * const MetaDeLeitura = await prisma.metaDeLeitura.create({
     *   data: {
     *     // ... data to create a MetaDeLeitura
     *   }
     * })
     * 
     */
    create<T extends MetaDeLeituraCreateArgs>(args: SelectSubset<T, MetaDeLeituraCreateArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetaDeLeituras.
     * @param {MetaDeLeituraCreateManyArgs} args - Arguments to create many MetaDeLeituras.
     * @example
     * // Create many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaDeLeituraCreateManyArgs>(args?: SelectSubset<T, MetaDeLeituraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetaDeLeituras and returns the data saved in the database.
     * @param {MetaDeLeituraCreateManyAndReturnArgs} args - Arguments to create many MetaDeLeituras.
     * @example
     * // Create many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetaDeLeituras and only return the `nome`
     * const metaDeLeituraWithNomeOnly = await prisma.metaDeLeitura.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaDeLeituraCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaDeLeituraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetaDeLeitura.
     * @param {MetaDeLeituraDeleteArgs} args - Arguments to delete one MetaDeLeitura.
     * @example
     * // Delete one MetaDeLeitura
     * const MetaDeLeitura = await prisma.metaDeLeitura.delete({
     *   where: {
     *     // ... filter to delete one MetaDeLeitura
     *   }
     * })
     * 
     */
    delete<T extends MetaDeLeituraDeleteArgs>(args: SelectSubset<T, MetaDeLeituraDeleteArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetaDeLeitura.
     * @param {MetaDeLeituraUpdateArgs} args - Arguments to update one MetaDeLeitura.
     * @example
     * // Update one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaDeLeituraUpdateArgs>(args: SelectSubset<T, MetaDeLeituraUpdateArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetaDeLeituras.
     * @param {MetaDeLeituraDeleteManyArgs} args - Arguments to filter MetaDeLeituras to delete.
     * @example
     * // Delete a few MetaDeLeituras
     * const { count } = await prisma.metaDeLeitura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeLeituraDeleteManyArgs>(args?: SelectSubset<T, MetaDeLeituraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaDeLeituraUpdateManyArgs>(args: SelectSubset<T, MetaDeLeituraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaDeLeituras and returns the data updated in the database.
     * @param {MetaDeLeituraUpdateManyAndReturnArgs} args - Arguments to update many MetaDeLeituras.
     * @example
     * // Update many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetaDeLeituras and only return the `nome`
     * const metaDeLeituraWithNomeOnly = await prisma.metaDeLeitura.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetaDeLeituraUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaDeLeituraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetaDeLeitura.
     * @param {MetaDeLeituraUpsertArgs} args - Arguments to update or create a MetaDeLeitura.
     * @example
     * // Update or create a MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.upsert({
     *   create: {
     *     // ... data to create a MetaDeLeitura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaDeLeitura we want to update
     *   }
     * })
     */
    upsert<T extends MetaDeLeituraUpsertArgs>(args: SelectSubset<T, MetaDeLeituraUpsertArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetaDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraCountArgs} args - Arguments to filter MetaDeLeituras to count.
     * @example
     * // Count the number of MetaDeLeituras
     * const count = await prisma.metaDeLeitura.count({
     *   where: {
     *     // ... the filter for the MetaDeLeituras we want to count
     *   }
     * })
    **/
    count<T extends MetaDeLeituraCountArgs>(
      args?: Subset<T, MetaDeLeituraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaDeLeituraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaDeLeituraAggregateArgs>(args: Subset<T, MetaDeLeituraAggregateArgs>): Prisma.PrismaPromise<GetMetaDeLeituraAggregateType<T>>

    /**
     * Group by MetaDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaDeLeituraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaDeLeituraGroupByArgs['orderBy'] }
        : { orderBy?: MetaDeLeituraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaDeLeituraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaDeLeituraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaDeLeitura model
   */
  readonly fields: MetaDeLeituraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaDeLeitura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaDeLeituraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conquista<T extends ConquistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConquistaDefaultArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetaDeLeitura model
   */
  interface MetaDeLeituraFieldRefs {
    readonly nome: FieldRef<"MetaDeLeitura", 'String'>
    readonly tipo: FieldRef<"MetaDeLeitura", 'String'>
    readonly meta: FieldRef<"MetaDeLeitura", 'Int'>
    readonly progresso: FieldRef<"MetaDeLeitura", 'Int'>
    readonly paginasLidas: FieldRef<"MetaDeLeitura", 'Int'>
    readonly livrosLidos: FieldRef<"MetaDeLeitura", 'Int'>
    readonly nomeUsuario: FieldRef<"MetaDeLeitura", 'String'>
    readonly nomeConquista: FieldRef<"MetaDeLeitura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetaDeLeitura findUnique
   */
  export type MetaDeLeituraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura findUniqueOrThrow
   */
  export type MetaDeLeituraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura findFirst
   */
  export type MetaDeLeituraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaDeLeituras.
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaDeLeituras.
     */
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * MetaDeLeitura findFirstOrThrow
   */
  export type MetaDeLeituraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaDeLeituras.
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaDeLeituras.
     */
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * MetaDeLeitura findMany
   */
  export type MetaDeLeituraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeituras to fetch.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaDeLeituras.
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * MetaDeLeitura create
   */
  export type MetaDeLeituraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to create a MetaDeLeitura.
     */
    data: XOR<MetaDeLeituraCreateInput, MetaDeLeituraUncheckedCreateInput>
  }

  /**
   * MetaDeLeitura createMany
   */
  export type MetaDeLeituraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaDeLeituras.
     */
    data: MetaDeLeituraCreateManyInput | MetaDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetaDeLeitura createManyAndReturn
   */
  export type MetaDeLeituraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to create many MetaDeLeituras.
     */
    data: MetaDeLeituraCreateManyInput | MetaDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetaDeLeitura update
   */
  export type MetaDeLeituraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to update a MetaDeLeitura.
     */
    data: XOR<MetaDeLeituraUpdateInput, MetaDeLeituraUncheckedUpdateInput>
    /**
     * Choose, which MetaDeLeitura to update.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura updateMany
   */
  export type MetaDeLeituraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaDeLeituras.
     */
    data: XOR<MetaDeLeituraUpdateManyMutationInput, MetaDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which MetaDeLeituras to update
     */
    where?: MetaDeLeituraWhereInput
    /**
     * Limit how many MetaDeLeituras to update.
     */
    limit?: number
  }

  /**
   * MetaDeLeitura updateManyAndReturn
   */
  export type MetaDeLeituraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to update MetaDeLeituras.
     */
    data: XOR<MetaDeLeituraUpdateManyMutationInput, MetaDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which MetaDeLeituras to update
     */
    where?: MetaDeLeituraWhereInput
    /**
     * Limit how many MetaDeLeituras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetaDeLeitura upsert
   */
  export type MetaDeLeituraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * The filter to search for the MetaDeLeitura to update in case it exists.
     */
    where: MetaDeLeituraWhereUniqueInput
    /**
     * In case the MetaDeLeitura found by the `where` argument doesn't exist, create a new MetaDeLeitura with this data.
     */
    create: XOR<MetaDeLeituraCreateInput, MetaDeLeituraUncheckedCreateInput>
    /**
     * In case the MetaDeLeitura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaDeLeituraUpdateInput, MetaDeLeituraUncheckedUpdateInput>
  }

  /**
   * MetaDeLeitura delete
   */
  export type MetaDeLeituraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter which MetaDeLeitura to delete.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura deleteMany
   */
  export type MetaDeLeituraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaDeLeituras to delete
     */
    where?: MetaDeLeituraWhereInput
    /**
     * Limit how many MetaDeLeituras to delete.
     */
    limit?: number
  }

  /**
   * MetaDeLeitura without action
   */
  export type MetaDeLeituraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
  }


  /**
   * Model Conquista
   */

  export type AggregateConquista = {
    _count: ConquistaCountAggregateOutputType | null
    _min: ConquistaMinAggregateOutputType | null
    _max: ConquistaMaxAggregateOutputType | null
  }

  export type ConquistaMinAggregateOutputType = {
    nome: string | null
    criterio: string | null
    nomeMeta: string | null
    temaCatalago: string | null
  }

  export type ConquistaMaxAggregateOutputType = {
    nome: string | null
    criterio: string | null
    nomeMeta: string | null
    temaCatalago: string | null
  }

  export type ConquistaCountAggregateOutputType = {
    nome: number
    criterio: number
    nomeMeta: number
    temaCatalago: number
    _all: number
  }


  export type ConquistaMinAggregateInputType = {
    nome?: true
    criterio?: true
    nomeMeta?: true
    temaCatalago?: true
  }

  export type ConquistaMaxAggregateInputType = {
    nome?: true
    criterio?: true
    nomeMeta?: true
    temaCatalago?: true
  }

  export type ConquistaCountAggregateInputType = {
    nome?: true
    criterio?: true
    nomeMeta?: true
    temaCatalago?: true
    _all?: true
  }

  export type ConquistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conquista to aggregate.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conquistas
    **/
    _count?: true | ConquistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConquistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConquistaMaxAggregateInputType
  }

  export type GetConquistaAggregateType<T extends ConquistaAggregateArgs> = {
        [P in keyof T & keyof AggregateConquista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConquista[P]>
      : GetScalarType<T[P], AggregateConquista[P]>
  }




  export type ConquistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConquistaWhereInput
    orderBy?: ConquistaOrderByWithAggregationInput | ConquistaOrderByWithAggregationInput[]
    by: ConquistaScalarFieldEnum[] | ConquistaScalarFieldEnum
    having?: ConquistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConquistaCountAggregateInputType | true
    _min?: ConquistaMinAggregateInputType
    _max?: ConquistaMaxAggregateInputType
  }

  export type ConquistaGroupByOutputType = {
    nome: string
    criterio: string
    nomeMeta: string
    temaCatalago: string | null
    _count: ConquistaCountAggregateOutputType | null
    _min: ConquistaMinAggregateOutputType | null
    _max: ConquistaMaxAggregateOutputType | null
  }

  type GetConquistaGroupByPayload<T extends ConquistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConquistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConquistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConquistaGroupByOutputType[P]>
            : GetScalarType<T[P], ConquistaGroupByOutputType[P]>
        }
      >
    >


  export type ConquistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    criterio?: boolean
    nomeMeta?: boolean
    temaCatalago?: boolean
    meta?: boolean | Conquista$metaArgs<ExtArgs>
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["conquista"]>

  export type ConquistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    criterio?: boolean
    nomeMeta?: boolean
    temaCatalago?: boolean
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["conquista"]>

  export type ConquistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    criterio?: boolean
    nomeMeta?: boolean
    temaCatalago?: boolean
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["conquista"]>

  export type ConquistaSelectScalar = {
    nome?: boolean
    criterio?: boolean
    nomeMeta?: boolean
    temaCatalago?: boolean
  }

  export type ConquistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "criterio" | "nomeMeta" | "temaCatalago", ExtArgs["result"]["conquista"]>
  export type ConquistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | Conquista$metaArgs<ExtArgs>
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }
  export type ConquistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }
  export type ConquistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }

  export type $ConquistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conquista"
    objects: {
      meta: Prisma.$MetaDeLeituraPayload<ExtArgs> | null
      desafio: Prisma.$CatalogoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      criterio: string
      nomeMeta: string
      temaCatalago: string | null
    }, ExtArgs["result"]["conquista"]>
    composites: {}
  }

  type ConquistaGetPayload<S extends boolean | null | undefined | ConquistaDefaultArgs> = $Result.GetResult<Prisma.$ConquistaPayload, S>

  type ConquistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConquistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConquistaCountAggregateInputType | true
    }

  export interface ConquistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conquista'], meta: { name: 'Conquista' } }
    /**
     * Find zero or one Conquista that matches the filter.
     * @param {ConquistaFindUniqueArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConquistaFindUniqueArgs>(args: SelectSubset<T, ConquistaFindUniqueArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conquista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConquistaFindUniqueOrThrowArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConquistaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConquistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conquista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaFindFirstArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConquistaFindFirstArgs>(args?: SelectSubset<T, ConquistaFindFirstArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conquista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaFindFirstOrThrowArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConquistaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConquistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conquistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conquistas
     * const conquistas = await prisma.conquista.findMany()
     * 
     * // Get first 10 Conquistas
     * const conquistas = await prisma.conquista.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const conquistaWithNomeOnly = await prisma.conquista.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends ConquistaFindManyArgs>(args?: SelectSubset<T, ConquistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conquista.
     * @param {ConquistaCreateArgs} args - Arguments to create a Conquista.
     * @example
     * // Create one Conquista
     * const Conquista = await prisma.conquista.create({
     *   data: {
     *     // ... data to create a Conquista
     *   }
     * })
     * 
     */
    create<T extends ConquistaCreateArgs>(args: SelectSubset<T, ConquistaCreateArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conquistas.
     * @param {ConquistaCreateManyArgs} args - Arguments to create many Conquistas.
     * @example
     * // Create many Conquistas
     * const conquista = await prisma.conquista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConquistaCreateManyArgs>(args?: SelectSubset<T, ConquistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conquistas and returns the data saved in the database.
     * @param {ConquistaCreateManyAndReturnArgs} args - Arguments to create many Conquistas.
     * @example
     * // Create many Conquistas
     * const conquista = await prisma.conquista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conquistas and only return the `nome`
     * const conquistaWithNomeOnly = await prisma.conquista.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConquistaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConquistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conquista.
     * @param {ConquistaDeleteArgs} args - Arguments to delete one Conquista.
     * @example
     * // Delete one Conquista
     * const Conquista = await prisma.conquista.delete({
     *   where: {
     *     // ... filter to delete one Conquista
     *   }
     * })
     * 
     */
    delete<T extends ConquistaDeleteArgs>(args: SelectSubset<T, ConquistaDeleteArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conquista.
     * @param {ConquistaUpdateArgs} args - Arguments to update one Conquista.
     * @example
     * // Update one Conquista
     * const conquista = await prisma.conquista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConquistaUpdateArgs>(args: SelectSubset<T, ConquistaUpdateArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conquistas.
     * @param {ConquistaDeleteManyArgs} args - Arguments to filter Conquistas to delete.
     * @example
     * // Delete a few Conquistas
     * const { count } = await prisma.conquista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConquistaDeleteManyArgs>(args?: SelectSubset<T, ConquistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conquistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conquistas
     * const conquista = await prisma.conquista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConquistaUpdateManyArgs>(args: SelectSubset<T, ConquistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conquistas and returns the data updated in the database.
     * @param {ConquistaUpdateManyAndReturnArgs} args - Arguments to update many Conquistas.
     * @example
     * // Update many Conquistas
     * const conquista = await prisma.conquista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conquistas and only return the `nome`
     * const conquistaWithNomeOnly = await prisma.conquista.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConquistaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConquistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conquista.
     * @param {ConquistaUpsertArgs} args - Arguments to update or create a Conquista.
     * @example
     * // Update or create a Conquista
     * const conquista = await prisma.conquista.upsert({
     *   create: {
     *     // ... data to create a Conquista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conquista we want to update
     *   }
     * })
     */
    upsert<T extends ConquistaUpsertArgs>(args: SelectSubset<T, ConquistaUpsertArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conquistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaCountArgs} args - Arguments to filter Conquistas to count.
     * @example
     * // Count the number of Conquistas
     * const count = await prisma.conquista.count({
     *   where: {
     *     // ... the filter for the Conquistas we want to count
     *   }
     * })
    **/
    count<T extends ConquistaCountArgs>(
      args?: Subset<T, ConquistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConquistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conquista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConquistaAggregateArgs>(args: Subset<T, ConquistaAggregateArgs>): Prisma.PrismaPromise<GetConquistaAggregateType<T>>

    /**
     * Group by Conquista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConquistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConquistaGroupByArgs['orderBy'] }
        : { orderBy?: ConquistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConquistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConquistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conquista model
   */
  readonly fields: ConquistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conquista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConquistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends Conquista$metaArgs<ExtArgs> = {}>(args?: Subset<T, Conquista$metaArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    desafio<T extends Conquista$desafioArgs<ExtArgs> = {}>(args?: Subset<T, Conquista$desafioArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conquista model
   */
  interface ConquistaFieldRefs {
    readonly nome: FieldRef<"Conquista", 'String'>
    readonly criterio: FieldRef<"Conquista", 'String'>
    readonly nomeMeta: FieldRef<"Conquista", 'String'>
    readonly temaCatalago: FieldRef<"Conquista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conquista findUnique
   */
  export type ConquistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista findUniqueOrThrow
   */
  export type ConquistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista findFirst
   */
  export type ConquistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conquistas.
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conquistas.
     */
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Conquista findFirstOrThrow
   */
  export type ConquistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conquistas.
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conquistas.
     */
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Conquista findMany
   */
  export type ConquistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquistas to fetch.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conquistas.
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Conquista create
   */
  export type ConquistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Conquista.
     */
    data: XOR<ConquistaCreateInput, ConquistaUncheckedCreateInput>
  }

  /**
   * Conquista createMany
   */
  export type ConquistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conquistas.
     */
    data: ConquistaCreateManyInput | ConquistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conquista createManyAndReturn
   */
  export type ConquistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * The data used to create many Conquistas.
     */
    data: ConquistaCreateManyInput | ConquistaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conquista update
   */
  export type ConquistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Conquista.
     */
    data: XOR<ConquistaUpdateInput, ConquistaUncheckedUpdateInput>
    /**
     * Choose, which Conquista to update.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista updateMany
   */
  export type ConquistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conquistas.
     */
    data: XOR<ConquistaUpdateManyMutationInput, ConquistaUncheckedUpdateManyInput>
    /**
     * Filter which Conquistas to update
     */
    where?: ConquistaWhereInput
    /**
     * Limit how many Conquistas to update.
     */
    limit?: number
  }

  /**
   * Conquista updateManyAndReturn
   */
  export type ConquistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * The data used to update Conquistas.
     */
    data: XOR<ConquistaUpdateManyMutationInput, ConquistaUncheckedUpdateManyInput>
    /**
     * Filter which Conquistas to update
     */
    where?: ConquistaWhereInput
    /**
     * Limit how many Conquistas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conquista upsert
   */
  export type ConquistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Conquista to update in case it exists.
     */
    where: ConquistaWhereUniqueInput
    /**
     * In case the Conquista found by the `where` argument doesn't exist, create a new Conquista with this data.
     */
    create: XOR<ConquistaCreateInput, ConquistaUncheckedCreateInput>
    /**
     * In case the Conquista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConquistaUpdateInput, ConquistaUncheckedUpdateInput>
  }

  /**
   * Conquista delete
   */
  export type ConquistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter which Conquista to delete.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista deleteMany
   */
  export type ConquistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conquistas to delete
     */
    where?: ConquistaWhereInput
    /**
     * Limit how many Conquistas to delete.
     */
    limit?: number
  }

  /**
   * Conquista.meta
   */
  export type Conquista$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    where?: MetaDeLeituraWhereInput
  }

  /**
   * Conquista.desafio
   */
  export type Conquista$desafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    where?: CatalogoWhereInput
  }

  /**
   * Conquista without action
   */
  export type ConquistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
  }


  /**
   * Model Comunidade
   */

  export type AggregateComunidade = {
    _count: ComunidadeCountAggregateOutputType | null
    _avg: ComunidadeAvgAggregateOutputType | null
    _sum: ComunidadeSumAggregateOutputType | null
    _min: ComunidadeMinAggregateOutputType | null
    _max: ComunidadeMaxAggregateOutputType | null
  }

  export type ComunidadeAvgAggregateOutputType = {
    curtidas: number | null
  }

  export type ComunidadeSumAggregateOutputType = {
    curtidas: number | null
  }

  export type ComunidadeMinAggregateOutputType = {
    nome: string | null
    comentario: string | null
    data: Date | null
    curtidas: number | null
    nomeUsuario: string | null
  }

  export type ComunidadeMaxAggregateOutputType = {
    nome: string | null
    comentario: string | null
    data: Date | null
    curtidas: number | null
    nomeUsuario: string | null
  }

  export type ComunidadeCountAggregateOutputType = {
    nome: number
    comentario: number
    data: number
    curtidas: number
    nomeUsuario: number
    _all: number
  }


  export type ComunidadeAvgAggregateInputType = {
    curtidas?: true
  }

  export type ComunidadeSumAggregateInputType = {
    curtidas?: true
  }

  export type ComunidadeMinAggregateInputType = {
    nome?: true
    comentario?: true
    data?: true
    curtidas?: true
    nomeUsuario?: true
  }

  export type ComunidadeMaxAggregateInputType = {
    nome?: true
    comentario?: true
    data?: true
    curtidas?: true
    nomeUsuario?: true
  }

  export type ComunidadeCountAggregateInputType = {
    nome?: true
    comentario?: true
    data?: true
    curtidas?: true
    nomeUsuario?: true
    _all?: true
  }

  export type ComunidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comunidade to aggregate.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comunidades
    **/
    _count?: true | ComunidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComunidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComunidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComunidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComunidadeMaxAggregateInputType
  }

  export type GetComunidadeAggregateType<T extends ComunidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateComunidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComunidade[P]>
      : GetScalarType<T[P], AggregateComunidade[P]>
  }




  export type ComunidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComunidadeWhereInput
    orderBy?: ComunidadeOrderByWithAggregationInput | ComunidadeOrderByWithAggregationInput[]
    by: ComunidadeScalarFieldEnum[] | ComunidadeScalarFieldEnum
    having?: ComunidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComunidadeCountAggregateInputType | true
    _avg?: ComunidadeAvgAggregateInputType
    _sum?: ComunidadeSumAggregateInputType
    _min?: ComunidadeMinAggregateInputType
    _max?: ComunidadeMaxAggregateInputType
  }

  export type ComunidadeGroupByOutputType = {
    nome: string
    comentario: string
    data: Date
    curtidas: number
    nomeUsuario: string
    _count: ComunidadeCountAggregateOutputType | null
    _avg: ComunidadeAvgAggregateOutputType | null
    _sum: ComunidadeSumAggregateOutputType | null
    _min: ComunidadeMinAggregateOutputType | null
    _max: ComunidadeMaxAggregateOutputType | null
  }

  type GetComunidadeGroupByPayload<T extends ComunidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComunidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComunidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComunidadeGroupByOutputType[P]>
            : GetScalarType<T[P], ComunidadeGroupByOutputType[P]>
        }
      >
    >


  export type ComunidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
    nomeUsuario?: boolean
    participantes?: boolean | Comunidade$participantesArgs<ExtArgs>
    _count?: boolean | ComunidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
    nomeUsuario?: boolean
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
    nomeUsuario?: boolean
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectScalar = {
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
    nomeUsuario?: boolean
  }

  export type ComunidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "comentario" | "data" | "curtidas" | "nomeUsuario", ExtArgs["result"]["comunidade"]>
  export type ComunidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Comunidade$participantesArgs<ExtArgs>
    _count?: boolean | ComunidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComunidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComunidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComunidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comunidade"
    objects: {
      participantes: Prisma.$PerfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      comentario: string
      data: Date
      curtidas: number
      nomeUsuario: string
    }, ExtArgs["result"]["comunidade"]>
    composites: {}
  }

  type ComunidadeGetPayload<S extends boolean | null | undefined | ComunidadeDefaultArgs> = $Result.GetResult<Prisma.$ComunidadePayload, S>

  type ComunidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComunidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComunidadeCountAggregateInputType | true
    }

  export interface ComunidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comunidade'], meta: { name: 'Comunidade' } }
    /**
     * Find zero or one Comunidade that matches the filter.
     * @param {ComunidadeFindUniqueArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComunidadeFindUniqueArgs>(args: SelectSubset<T, ComunidadeFindUniqueArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comunidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComunidadeFindUniqueOrThrowArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComunidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, ComunidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comunidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindFirstArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComunidadeFindFirstArgs>(args?: SelectSubset<T, ComunidadeFindFirstArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comunidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindFirstOrThrowArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComunidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, ComunidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comunidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comunidades
     * const comunidades = await prisma.comunidade.findMany()
     * 
     * // Get first 10 Comunidades
     * const comunidades = await prisma.comunidade.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const comunidadeWithNomeOnly = await prisma.comunidade.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends ComunidadeFindManyArgs>(args?: SelectSubset<T, ComunidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comunidade.
     * @param {ComunidadeCreateArgs} args - Arguments to create a Comunidade.
     * @example
     * // Create one Comunidade
     * const Comunidade = await prisma.comunidade.create({
     *   data: {
     *     // ... data to create a Comunidade
     *   }
     * })
     * 
     */
    create<T extends ComunidadeCreateArgs>(args: SelectSubset<T, ComunidadeCreateArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comunidades.
     * @param {ComunidadeCreateManyArgs} args - Arguments to create many Comunidades.
     * @example
     * // Create many Comunidades
     * const comunidade = await prisma.comunidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComunidadeCreateManyArgs>(args?: SelectSubset<T, ComunidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comunidades and returns the data saved in the database.
     * @param {ComunidadeCreateManyAndReturnArgs} args - Arguments to create many Comunidades.
     * @example
     * // Create many Comunidades
     * const comunidade = await prisma.comunidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comunidades and only return the `nome`
     * const comunidadeWithNomeOnly = await prisma.comunidade.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComunidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, ComunidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comunidade.
     * @param {ComunidadeDeleteArgs} args - Arguments to delete one Comunidade.
     * @example
     * // Delete one Comunidade
     * const Comunidade = await prisma.comunidade.delete({
     *   where: {
     *     // ... filter to delete one Comunidade
     *   }
     * })
     * 
     */
    delete<T extends ComunidadeDeleteArgs>(args: SelectSubset<T, ComunidadeDeleteArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comunidade.
     * @param {ComunidadeUpdateArgs} args - Arguments to update one Comunidade.
     * @example
     * // Update one Comunidade
     * const comunidade = await prisma.comunidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComunidadeUpdateArgs>(args: SelectSubset<T, ComunidadeUpdateArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comunidades.
     * @param {ComunidadeDeleteManyArgs} args - Arguments to filter Comunidades to delete.
     * @example
     * // Delete a few Comunidades
     * const { count } = await prisma.comunidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComunidadeDeleteManyArgs>(args?: SelectSubset<T, ComunidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comunidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comunidades
     * const comunidade = await prisma.comunidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComunidadeUpdateManyArgs>(args: SelectSubset<T, ComunidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comunidades and returns the data updated in the database.
     * @param {ComunidadeUpdateManyAndReturnArgs} args - Arguments to update many Comunidades.
     * @example
     * // Update many Comunidades
     * const comunidade = await prisma.comunidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comunidades and only return the `nome`
     * const comunidadeWithNomeOnly = await prisma.comunidade.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComunidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, ComunidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comunidade.
     * @param {ComunidadeUpsertArgs} args - Arguments to update or create a Comunidade.
     * @example
     * // Update or create a Comunidade
     * const comunidade = await prisma.comunidade.upsert({
     *   create: {
     *     // ... data to create a Comunidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comunidade we want to update
     *   }
     * })
     */
    upsert<T extends ComunidadeUpsertArgs>(args: SelectSubset<T, ComunidadeUpsertArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comunidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeCountArgs} args - Arguments to filter Comunidades to count.
     * @example
     * // Count the number of Comunidades
     * const count = await prisma.comunidade.count({
     *   where: {
     *     // ... the filter for the Comunidades we want to count
     *   }
     * })
    **/
    count<T extends ComunidadeCountArgs>(
      args?: Subset<T, ComunidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComunidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comunidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComunidadeAggregateArgs>(args: Subset<T, ComunidadeAggregateArgs>): Prisma.PrismaPromise<GetComunidadeAggregateType<T>>

    /**
     * Group by Comunidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComunidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComunidadeGroupByArgs['orderBy'] }
        : { orderBy?: ComunidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComunidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComunidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comunidade model
   */
  readonly fields: ComunidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comunidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComunidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends Comunidade$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Comunidade$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comunidade model
   */
  interface ComunidadeFieldRefs {
    readonly nome: FieldRef<"Comunidade", 'String'>
    readonly comentario: FieldRef<"Comunidade", 'String'>
    readonly data: FieldRef<"Comunidade", 'DateTime'>
    readonly curtidas: FieldRef<"Comunidade", 'Int'>
    readonly nomeUsuario: FieldRef<"Comunidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comunidade findUnique
   */
  export type ComunidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade findUniqueOrThrow
   */
  export type ComunidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade findFirst
   */
  export type ComunidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comunidades.
     */
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade findFirstOrThrow
   */
  export type ComunidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comunidades.
     */
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade findMany
   */
  export type ComunidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidades to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade create
   */
  export type ComunidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Comunidade.
     */
    data: XOR<ComunidadeCreateInput, ComunidadeUncheckedCreateInput>
  }

  /**
   * Comunidade createMany
   */
  export type ComunidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comunidades.
     */
    data: ComunidadeCreateManyInput | ComunidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comunidade createManyAndReturn
   */
  export type ComunidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Comunidades.
     */
    data: ComunidadeCreateManyInput | ComunidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comunidade update
   */
  export type ComunidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Comunidade.
     */
    data: XOR<ComunidadeUpdateInput, ComunidadeUncheckedUpdateInput>
    /**
     * Choose, which Comunidade to update.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade updateMany
   */
  export type ComunidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comunidades.
     */
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyInput>
    /**
     * Filter which Comunidades to update
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to update.
     */
    limit?: number
  }

  /**
   * Comunidade updateManyAndReturn
   */
  export type ComunidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * The data used to update Comunidades.
     */
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyInput>
    /**
     * Filter which Comunidades to update
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to update.
     */
    limit?: number
  }

  /**
   * Comunidade upsert
   */
  export type ComunidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Comunidade to update in case it exists.
     */
    where: ComunidadeWhereUniqueInput
    /**
     * In case the Comunidade found by the `where` argument doesn't exist, create a new Comunidade with this data.
     */
    create: XOR<ComunidadeCreateInput, ComunidadeUncheckedCreateInput>
    /**
     * In case the Comunidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComunidadeUpdateInput, ComunidadeUncheckedUpdateInput>
  }

  /**
   * Comunidade delete
   */
  export type ComunidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter which Comunidade to delete.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade deleteMany
   */
  export type ComunidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comunidades to delete
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to delete.
     */
    limit?: number
  }

  /**
   * Comunidade.participantes
   */
  export type Comunidade$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    cursor?: PerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Comunidade without action
   */
  export type ComunidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
  }


  /**
   * Model Resenha
   */

  export type AggregateResenha = {
    _count: ResenhaCountAggregateOutputType | null
    _avg: ResenhaAvgAggregateOutputType | null
    _sum: ResenhaSumAggregateOutputType | null
    _min: ResenhaMinAggregateOutputType | null
    _max: ResenhaMaxAggregateOutputType | null
  }

  export type ResenhaAvgAggregateOutputType = {
    estrelas: number | null
  }

  export type ResenhaSumAggregateOutputType = {
    estrelas: number | null
  }

  export type ResenhaMinAggregateOutputType = {
    estrelas: number | null
    avaliacao: string | null
    tituloLivro: string | null
  }

  export type ResenhaMaxAggregateOutputType = {
    estrelas: number | null
    avaliacao: string | null
    tituloLivro: string | null
  }

  export type ResenhaCountAggregateOutputType = {
    estrelas: number
    avaliacao: number
    tituloLivro: number
    _all: number
  }


  export type ResenhaAvgAggregateInputType = {
    estrelas?: true
  }

  export type ResenhaSumAggregateInputType = {
    estrelas?: true
  }

  export type ResenhaMinAggregateInputType = {
    estrelas?: true
    avaliacao?: true
    tituloLivro?: true
  }

  export type ResenhaMaxAggregateInputType = {
    estrelas?: true
    avaliacao?: true
    tituloLivro?: true
  }

  export type ResenhaCountAggregateInputType = {
    estrelas?: true
    avaliacao?: true
    tituloLivro?: true
    _all?: true
  }

  export type ResenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resenha to aggregate.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resenhas
    **/
    _count?: true | ResenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResenhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResenhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResenhaMaxAggregateInputType
  }

  export type GetResenhaAggregateType<T extends ResenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateResenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResenha[P]>
      : GetScalarType<T[P], AggregateResenha[P]>
  }




  export type ResenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenhaWhereInput
    orderBy?: ResenhaOrderByWithAggregationInput | ResenhaOrderByWithAggregationInput[]
    by: ResenhaScalarFieldEnum[] | ResenhaScalarFieldEnum
    having?: ResenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResenhaCountAggregateInputType | true
    _avg?: ResenhaAvgAggregateInputType
    _sum?: ResenhaSumAggregateInputType
    _min?: ResenhaMinAggregateInputType
    _max?: ResenhaMaxAggregateInputType
  }

  export type ResenhaGroupByOutputType = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
    _count: ResenhaCountAggregateOutputType | null
    _avg: ResenhaAvgAggregateOutputType | null
    _sum: ResenhaSumAggregateOutputType | null
    _min: ResenhaMinAggregateOutputType | null
    _max: ResenhaMaxAggregateOutputType | null
  }

  type GetResenhaGroupByPayload<T extends ResenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResenhaGroupByOutputType[P]>
            : GetScalarType<T[P], ResenhaGroupByOutputType[P]>
        }
      >
    >


  export type ResenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuarios?: boolean | Resenha$usuariosArgs<ExtArgs>
    _count?: boolean | ResenhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenha"]>

  export type ResenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenha"]>

  export type ResenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenha"]>

  export type ResenhaSelectScalar = {
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
  }

  export type ResenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"estrelas" | "avaliacao" | "tituloLivro", ExtArgs["result"]["resenha"]>
  export type ResenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuarios?: boolean | Resenha$usuariosArgs<ExtArgs>
    _count?: boolean | ResenhaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type ResenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
  }

  export type $ResenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resenha"
    objects: {
      livro: Prisma.$LivroPayload<ExtArgs>
      usuarios: Prisma.$usuarioResenhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      estrelas: number
      avaliacao: string
      tituloLivro: string
    }, ExtArgs["result"]["resenha"]>
    composites: {}
  }

  type ResenhaGetPayload<S extends boolean | null | undefined | ResenhaDefaultArgs> = $Result.GetResult<Prisma.$ResenhaPayload, S>

  type ResenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResenhaCountAggregateInputType | true
    }

  export interface ResenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resenha'], meta: { name: 'Resenha' } }
    /**
     * Find zero or one Resenha that matches the filter.
     * @param {ResenhaFindUniqueArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResenhaFindUniqueArgs>(args: SelectSubset<T, ResenhaFindUniqueArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resenha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResenhaFindUniqueOrThrowArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, ResenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resenha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaFindFirstArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResenhaFindFirstArgs>(args?: SelectSubset<T, ResenhaFindFirstArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resenha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaFindFirstOrThrowArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, ResenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resenhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resenhas
     * const resenhas = await prisma.resenha.findMany()
     * 
     * // Get first 10 Resenhas
     * const resenhas = await prisma.resenha.findMany({ take: 10 })
     * 
     * // Only select the `estrelas`
     * const resenhaWithEstrelasOnly = await prisma.resenha.findMany({ select: { estrelas: true } })
     * 
     */
    findMany<T extends ResenhaFindManyArgs>(args?: SelectSubset<T, ResenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resenha.
     * @param {ResenhaCreateArgs} args - Arguments to create a Resenha.
     * @example
     * // Create one Resenha
     * const Resenha = await prisma.resenha.create({
     *   data: {
     *     // ... data to create a Resenha
     *   }
     * })
     * 
     */
    create<T extends ResenhaCreateArgs>(args: SelectSubset<T, ResenhaCreateArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resenhas.
     * @param {ResenhaCreateManyArgs} args - Arguments to create many Resenhas.
     * @example
     * // Create many Resenhas
     * const resenha = await prisma.resenha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResenhaCreateManyArgs>(args?: SelectSubset<T, ResenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resenhas and returns the data saved in the database.
     * @param {ResenhaCreateManyAndReturnArgs} args - Arguments to create many Resenhas.
     * @example
     * // Create many Resenhas
     * const resenha = await prisma.resenha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resenhas and only return the `estrelas`
     * const resenhaWithEstrelasOnly = await prisma.resenha.createManyAndReturn({
     *   select: { estrelas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, ResenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resenha.
     * @param {ResenhaDeleteArgs} args - Arguments to delete one Resenha.
     * @example
     * // Delete one Resenha
     * const Resenha = await prisma.resenha.delete({
     *   where: {
     *     // ... filter to delete one Resenha
     *   }
     * })
     * 
     */
    delete<T extends ResenhaDeleteArgs>(args: SelectSubset<T, ResenhaDeleteArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resenha.
     * @param {ResenhaUpdateArgs} args - Arguments to update one Resenha.
     * @example
     * // Update one Resenha
     * const resenha = await prisma.resenha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResenhaUpdateArgs>(args: SelectSubset<T, ResenhaUpdateArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resenhas.
     * @param {ResenhaDeleteManyArgs} args - Arguments to filter Resenhas to delete.
     * @example
     * // Delete a few Resenhas
     * const { count } = await prisma.resenha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResenhaDeleteManyArgs>(args?: SelectSubset<T, ResenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resenhas
     * const resenha = await prisma.resenha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResenhaUpdateManyArgs>(args: SelectSubset<T, ResenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenhas and returns the data updated in the database.
     * @param {ResenhaUpdateManyAndReturnArgs} args - Arguments to update many Resenhas.
     * @example
     * // Update many Resenhas
     * const resenha = await prisma.resenha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resenhas and only return the `estrelas`
     * const resenhaWithEstrelasOnly = await prisma.resenha.updateManyAndReturn({
     *   select: { estrelas: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, ResenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resenha.
     * @param {ResenhaUpsertArgs} args - Arguments to update or create a Resenha.
     * @example
     * // Update or create a Resenha
     * const resenha = await prisma.resenha.upsert({
     *   create: {
     *     // ... data to create a Resenha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resenha we want to update
     *   }
     * })
     */
    upsert<T extends ResenhaUpsertArgs>(args: SelectSubset<T, ResenhaUpsertArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaCountArgs} args - Arguments to filter Resenhas to count.
     * @example
     * // Count the number of Resenhas
     * const count = await prisma.resenha.count({
     *   where: {
     *     // ... the filter for the Resenhas we want to count
     *   }
     * })
    **/
    count<T extends ResenhaCountArgs>(
      args?: Subset<T, ResenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResenhaAggregateArgs>(args: Subset<T, ResenhaAggregateArgs>): Prisma.PrismaPromise<GetResenhaAggregateType<T>>

    /**
     * Group by Resenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResenhaGroupByArgs['orderBy'] }
        : { orderBy?: ResenhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resenha model
   */
  readonly fields: ResenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resenha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends Resenha$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Resenha$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resenha model
   */
  interface ResenhaFieldRefs {
    readonly estrelas: FieldRef<"Resenha", 'Int'>
    readonly avaliacao: FieldRef<"Resenha", 'String'>
    readonly tituloLivro: FieldRef<"Resenha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resenha findUnique
   */
  export type ResenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha findUniqueOrThrow
   */
  export type ResenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha findFirst
   */
  export type ResenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenhas.
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenhas.
     */
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Resenha findFirstOrThrow
   */
  export type ResenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenhas.
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenhas.
     */
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Resenha findMany
   */
  export type ResenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenhas to fetch.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resenhas.
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Resenha create
   */
  export type ResenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resenha.
     */
    data: XOR<ResenhaCreateInput, ResenhaUncheckedCreateInput>
  }

  /**
   * Resenha createMany
   */
  export type ResenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resenhas.
     */
    data: ResenhaCreateManyInput | ResenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resenha createManyAndReturn
   */
  export type ResenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * The data used to create many Resenhas.
     */
    data: ResenhaCreateManyInput | ResenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resenha update
   */
  export type ResenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resenha.
     */
    data: XOR<ResenhaUpdateInput, ResenhaUncheckedUpdateInput>
    /**
     * Choose, which Resenha to update.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha updateMany
   */
  export type ResenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resenhas.
     */
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyInput>
    /**
     * Filter which Resenhas to update
     */
    where?: ResenhaWhereInput
    /**
     * Limit how many Resenhas to update.
     */
    limit?: number
  }

  /**
   * Resenha updateManyAndReturn
   */
  export type ResenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * The data used to update Resenhas.
     */
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyInput>
    /**
     * Filter which Resenhas to update
     */
    where?: ResenhaWhereInput
    /**
     * Limit how many Resenhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resenha upsert
   */
  export type ResenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resenha to update in case it exists.
     */
    where: ResenhaWhereUniqueInput
    /**
     * In case the Resenha found by the `where` argument doesn't exist, create a new Resenha with this data.
     */
    create: XOR<ResenhaCreateInput, ResenhaUncheckedCreateInput>
    /**
     * In case the Resenha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResenhaUpdateInput, ResenhaUncheckedUpdateInput>
  }

  /**
   * Resenha delete
   */
  export type ResenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter which Resenha to delete.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha deleteMany
   */
  export type ResenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resenhas to delete
     */
    where?: ResenhaWhereInput
    /**
     * Limit how many Resenhas to delete.
     */
    limit?: number
  }

  /**
   * Resenha.usuarios
   */
  export type Resenha$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    where?: usuarioResenhaWhereInput
    orderBy?: usuarioResenhaOrderByWithRelationInput | usuarioResenhaOrderByWithRelationInput[]
    cursor?: usuarioResenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioResenhaScalarFieldEnum | UsuarioResenhaScalarFieldEnum[]
  }

  /**
   * Resenha without action
   */
  export type ResenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
  }


  /**
   * Model usuarioResenha
   */

  export type AggregateUsuarioResenha = {
    _count: UsuarioResenhaCountAggregateOutputType | null
    _avg: UsuarioResenhaAvgAggregateOutputType | null
    _sum: UsuarioResenhaSumAggregateOutputType | null
    _min: UsuarioResenhaMinAggregateOutputType | null
    _max: UsuarioResenhaMaxAggregateOutputType | null
  }

  export type UsuarioResenhaAvgAggregateOutputType = {
    estrelasResenha: number | null
  }

  export type UsuarioResenhaSumAggregateOutputType = {
    estrelasResenha: number | null
  }

  export type UsuarioResenhaMinAggregateOutputType = {
    nomeUsu: string | null
    estrelasResenha: number | null
  }

  export type UsuarioResenhaMaxAggregateOutputType = {
    nomeUsu: string | null
    estrelasResenha: number | null
  }

  export type UsuarioResenhaCountAggregateOutputType = {
    nomeUsu: number
    estrelasResenha: number
    _all: number
  }


  export type UsuarioResenhaAvgAggregateInputType = {
    estrelasResenha?: true
  }

  export type UsuarioResenhaSumAggregateInputType = {
    estrelasResenha?: true
  }

  export type UsuarioResenhaMinAggregateInputType = {
    nomeUsu?: true
    estrelasResenha?: true
  }

  export type UsuarioResenhaMaxAggregateInputType = {
    nomeUsu?: true
    estrelasResenha?: true
  }

  export type UsuarioResenhaCountAggregateInputType = {
    nomeUsu?: true
    estrelasResenha?: true
    _all?: true
  }

  export type UsuarioResenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarioResenha to aggregate.
     */
    where?: usuarioResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioResenhas to fetch.
     */
    orderBy?: usuarioResenhaOrderByWithRelationInput | usuarioResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioResenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioResenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarioResenhas
    **/
    _count?: true | UsuarioResenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioResenhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioResenhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioResenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioResenhaMaxAggregateInputType
  }

  export type GetUsuarioResenhaAggregateType<T extends UsuarioResenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioResenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioResenha[P]>
      : GetScalarType<T[P], AggregateUsuarioResenha[P]>
  }




  export type usuarioResenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioResenhaWhereInput
    orderBy?: usuarioResenhaOrderByWithAggregationInput | usuarioResenhaOrderByWithAggregationInput[]
    by: UsuarioResenhaScalarFieldEnum[] | UsuarioResenhaScalarFieldEnum
    having?: usuarioResenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioResenhaCountAggregateInputType | true
    _avg?: UsuarioResenhaAvgAggregateInputType
    _sum?: UsuarioResenhaSumAggregateInputType
    _min?: UsuarioResenhaMinAggregateInputType
    _max?: UsuarioResenhaMaxAggregateInputType
  }

  export type UsuarioResenhaGroupByOutputType = {
    nomeUsu: string
    estrelasResenha: number
    _count: UsuarioResenhaCountAggregateOutputType | null
    _avg: UsuarioResenhaAvgAggregateOutputType | null
    _sum: UsuarioResenhaSumAggregateOutputType | null
    _min: UsuarioResenhaMinAggregateOutputType | null
    _max: UsuarioResenhaMaxAggregateOutputType | null
  }

  type GetUsuarioResenhaGroupByPayload<T extends usuarioResenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioResenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioResenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioResenhaGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioResenhaGroupByOutputType[P]>
        }
      >
    >


  export type usuarioResenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUsu?: boolean
    estrelasResenha?: boolean
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    resenha?: boolean | ResenhaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioResenha"]>

  export type usuarioResenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUsu?: boolean
    estrelasResenha?: boolean
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    resenha?: boolean | ResenhaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioResenha"]>

  export type usuarioResenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUsu?: boolean
    estrelasResenha?: boolean
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    resenha?: boolean | ResenhaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioResenha"]>

  export type usuarioResenhaSelectScalar = {
    nomeUsu?: boolean
    estrelasResenha?: boolean
  }

  export type usuarioResenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nomeUsu" | "estrelasResenha", ExtArgs["result"]["usuarioResenha"]>
  export type usuarioResenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    resenha?: boolean | ResenhaDefaultArgs<ExtArgs>
  }
  export type usuarioResenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    resenha?: boolean | ResenhaDefaultArgs<ExtArgs>
  }
  export type usuarioResenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | PerfilDefaultArgs<ExtArgs>
    resenha?: boolean | ResenhaDefaultArgs<ExtArgs>
  }

  export type $usuarioResenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarioResenha"
    objects: {
      usuario: Prisma.$PerfilPayload<ExtArgs>
      resenha: Prisma.$ResenhaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nomeUsu: string
      estrelasResenha: number
    }, ExtArgs["result"]["usuarioResenha"]>
    composites: {}
  }

  type usuarioResenhaGetPayload<S extends boolean | null | undefined | usuarioResenhaDefaultArgs> = $Result.GetResult<Prisma.$usuarioResenhaPayload, S>

  type usuarioResenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioResenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioResenhaCountAggregateInputType | true
    }

  export interface usuarioResenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarioResenha'], meta: { name: 'usuarioResenha' } }
    /**
     * Find zero or one UsuarioResenha that matches the filter.
     * @param {usuarioResenhaFindUniqueArgs} args - Arguments to find a UsuarioResenha
     * @example
     * // Get one UsuarioResenha
     * const usuarioResenha = await prisma.usuarioResenha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioResenhaFindUniqueArgs>(args: SelectSubset<T, usuarioResenhaFindUniqueArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioResenha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioResenhaFindUniqueOrThrowArgs} args - Arguments to find a UsuarioResenha
     * @example
     * // Get one UsuarioResenha
     * const usuarioResenha = await prisma.usuarioResenha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioResenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioResenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioResenha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioResenhaFindFirstArgs} args - Arguments to find a UsuarioResenha
     * @example
     * // Get one UsuarioResenha
     * const usuarioResenha = await prisma.usuarioResenha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioResenhaFindFirstArgs>(args?: SelectSubset<T, usuarioResenhaFindFirstArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioResenha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioResenhaFindFirstOrThrowArgs} args - Arguments to find a UsuarioResenha
     * @example
     * // Get one UsuarioResenha
     * const usuarioResenha = await prisma.usuarioResenha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioResenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioResenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioResenhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioResenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioResenhas
     * const usuarioResenhas = await prisma.usuarioResenha.findMany()
     * 
     * // Get first 10 UsuarioResenhas
     * const usuarioResenhas = await prisma.usuarioResenha.findMany({ take: 10 })
     * 
     * // Only select the `nomeUsu`
     * const usuarioResenhaWithNomeUsuOnly = await prisma.usuarioResenha.findMany({ select: { nomeUsu: true } })
     * 
     */
    findMany<T extends usuarioResenhaFindManyArgs>(args?: SelectSubset<T, usuarioResenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioResenha.
     * @param {usuarioResenhaCreateArgs} args - Arguments to create a UsuarioResenha.
     * @example
     * // Create one UsuarioResenha
     * const UsuarioResenha = await prisma.usuarioResenha.create({
     *   data: {
     *     // ... data to create a UsuarioResenha
     *   }
     * })
     * 
     */
    create<T extends usuarioResenhaCreateArgs>(args: SelectSubset<T, usuarioResenhaCreateArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioResenhas.
     * @param {usuarioResenhaCreateManyArgs} args - Arguments to create many UsuarioResenhas.
     * @example
     * // Create many UsuarioResenhas
     * const usuarioResenha = await prisma.usuarioResenha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioResenhaCreateManyArgs>(args?: SelectSubset<T, usuarioResenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioResenhas and returns the data saved in the database.
     * @param {usuarioResenhaCreateManyAndReturnArgs} args - Arguments to create many UsuarioResenhas.
     * @example
     * // Create many UsuarioResenhas
     * const usuarioResenha = await prisma.usuarioResenha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioResenhas and only return the `nomeUsu`
     * const usuarioResenhaWithNomeUsuOnly = await prisma.usuarioResenha.createManyAndReturn({
     *   select: { nomeUsu: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioResenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioResenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioResenha.
     * @param {usuarioResenhaDeleteArgs} args - Arguments to delete one UsuarioResenha.
     * @example
     * // Delete one UsuarioResenha
     * const UsuarioResenha = await prisma.usuarioResenha.delete({
     *   where: {
     *     // ... filter to delete one UsuarioResenha
     *   }
     * })
     * 
     */
    delete<T extends usuarioResenhaDeleteArgs>(args: SelectSubset<T, usuarioResenhaDeleteArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioResenha.
     * @param {usuarioResenhaUpdateArgs} args - Arguments to update one UsuarioResenha.
     * @example
     * // Update one UsuarioResenha
     * const usuarioResenha = await prisma.usuarioResenha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioResenhaUpdateArgs>(args: SelectSubset<T, usuarioResenhaUpdateArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioResenhas.
     * @param {usuarioResenhaDeleteManyArgs} args - Arguments to filter UsuarioResenhas to delete.
     * @example
     * // Delete a few UsuarioResenhas
     * const { count } = await prisma.usuarioResenha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioResenhaDeleteManyArgs>(args?: SelectSubset<T, usuarioResenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioResenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioResenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioResenhas
     * const usuarioResenha = await prisma.usuarioResenha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioResenhaUpdateManyArgs>(args: SelectSubset<T, usuarioResenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioResenhas and returns the data updated in the database.
     * @param {usuarioResenhaUpdateManyAndReturnArgs} args - Arguments to update many UsuarioResenhas.
     * @example
     * // Update many UsuarioResenhas
     * const usuarioResenha = await prisma.usuarioResenha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioResenhas and only return the `nomeUsu`
     * const usuarioResenhaWithNomeUsuOnly = await prisma.usuarioResenha.updateManyAndReturn({
     *   select: { nomeUsu: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarioResenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioResenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioResenha.
     * @param {usuarioResenhaUpsertArgs} args - Arguments to update or create a UsuarioResenha.
     * @example
     * // Update or create a UsuarioResenha
     * const usuarioResenha = await prisma.usuarioResenha.upsert({
     *   create: {
     *     // ... data to create a UsuarioResenha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioResenha we want to update
     *   }
     * })
     */
    upsert<T extends usuarioResenhaUpsertArgs>(args: SelectSubset<T, usuarioResenhaUpsertArgs<ExtArgs>>): Prisma__usuarioResenhaClient<$Result.GetResult<Prisma.$usuarioResenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioResenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioResenhaCountArgs} args - Arguments to filter UsuarioResenhas to count.
     * @example
     * // Count the number of UsuarioResenhas
     * const count = await prisma.usuarioResenha.count({
     *   where: {
     *     // ... the filter for the UsuarioResenhas we want to count
     *   }
     * })
    **/
    count<T extends usuarioResenhaCountArgs>(
      args?: Subset<T, usuarioResenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioResenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioResenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioResenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioResenhaAggregateArgs>(args: Subset<T, UsuarioResenhaAggregateArgs>): Prisma.PrismaPromise<GetUsuarioResenhaAggregateType<T>>

    /**
     * Group by UsuarioResenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioResenhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioResenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioResenhaGroupByArgs['orderBy'] }
        : { orderBy?: usuarioResenhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioResenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioResenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarioResenha model
   */
  readonly fields: usuarioResenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarioResenha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioResenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resenha<T extends ResenhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResenhaDefaultArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarioResenha model
   */
  interface usuarioResenhaFieldRefs {
    readonly nomeUsu: FieldRef<"usuarioResenha", 'String'>
    readonly estrelasResenha: FieldRef<"usuarioResenha", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarioResenha findUnique
   */
  export type usuarioResenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * Filter, which usuarioResenha to fetch.
     */
    where: usuarioResenhaWhereUniqueInput
  }

  /**
   * usuarioResenha findUniqueOrThrow
   */
  export type usuarioResenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * Filter, which usuarioResenha to fetch.
     */
    where: usuarioResenhaWhereUniqueInput
  }

  /**
   * usuarioResenha findFirst
   */
  export type usuarioResenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * Filter, which usuarioResenha to fetch.
     */
    where?: usuarioResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioResenhas to fetch.
     */
    orderBy?: usuarioResenhaOrderByWithRelationInput | usuarioResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarioResenhas.
     */
    cursor?: usuarioResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioResenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioResenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarioResenhas.
     */
    distinct?: UsuarioResenhaScalarFieldEnum | UsuarioResenhaScalarFieldEnum[]
  }

  /**
   * usuarioResenha findFirstOrThrow
   */
  export type usuarioResenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * Filter, which usuarioResenha to fetch.
     */
    where?: usuarioResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioResenhas to fetch.
     */
    orderBy?: usuarioResenhaOrderByWithRelationInput | usuarioResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarioResenhas.
     */
    cursor?: usuarioResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioResenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioResenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarioResenhas.
     */
    distinct?: UsuarioResenhaScalarFieldEnum | UsuarioResenhaScalarFieldEnum[]
  }

  /**
   * usuarioResenha findMany
   */
  export type usuarioResenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * Filter, which usuarioResenhas to fetch.
     */
    where?: usuarioResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioResenhas to fetch.
     */
    orderBy?: usuarioResenhaOrderByWithRelationInput | usuarioResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarioResenhas.
     */
    cursor?: usuarioResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioResenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioResenhas.
     */
    skip?: number
    distinct?: UsuarioResenhaScalarFieldEnum | UsuarioResenhaScalarFieldEnum[]
  }

  /**
   * usuarioResenha create
   */
  export type usuarioResenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarioResenha.
     */
    data: XOR<usuarioResenhaCreateInput, usuarioResenhaUncheckedCreateInput>
  }

  /**
   * usuarioResenha createMany
   */
  export type usuarioResenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarioResenhas.
     */
    data: usuarioResenhaCreateManyInput | usuarioResenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarioResenha createManyAndReturn
   */
  export type usuarioResenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * The data used to create many usuarioResenhas.
     */
    data: usuarioResenhaCreateManyInput | usuarioResenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarioResenha update
   */
  export type usuarioResenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarioResenha.
     */
    data: XOR<usuarioResenhaUpdateInput, usuarioResenhaUncheckedUpdateInput>
    /**
     * Choose, which usuarioResenha to update.
     */
    where: usuarioResenhaWhereUniqueInput
  }

  /**
   * usuarioResenha updateMany
   */
  export type usuarioResenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarioResenhas.
     */
    data: XOR<usuarioResenhaUpdateManyMutationInput, usuarioResenhaUncheckedUpdateManyInput>
    /**
     * Filter which usuarioResenhas to update
     */
    where?: usuarioResenhaWhereInput
    /**
     * Limit how many usuarioResenhas to update.
     */
    limit?: number
  }

  /**
   * usuarioResenha updateManyAndReturn
   */
  export type usuarioResenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * The data used to update usuarioResenhas.
     */
    data: XOR<usuarioResenhaUpdateManyMutationInput, usuarioResenhaUncheckedUpdateManyInput>
    /**
     * Filter which usuarioResenhas to update
     */
    where?: usuarioResenhaWhereInput
    /**
     * Limit how many usuarioResenhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarioResenha upsert
   */
  export type usuarioResenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarioResenha to update in case it exists.
     */
    where: usuarioResenhaWhereUniqueInput
    /**
     * In case the usuarioResenha found by the `where` argument doesn't exist, create a new usuarioResenha with this data.
     */
    create: XOR<usuarioResenhaCreateInput, usuarioResenhaUncheckedCreateInput>
    /**
     * In case the usuarioResenha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioResenhaUpdateInput, usuarioResenhaUncheckedUpdateInput>
  }

  /**
   * usuarioResenha delete
   */
  export type usuarioResenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
    /**
     * Filter which usuarioResenha to delete.
     */
    where: usuarioResenhaWhereUniqueInput
  }

  /**
   * usuarioResenha deleteMany
   */
  export type usuarioResenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarioResenhas to delete
     */
    where?: usuarioResenhaWhereInput
    /**
     * Limit how many usuarioResenhas to delete.
     */
    limit?: number
  }

  /**
   * usuarioResenha without action
   */
  export type usuarioResenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioResenha
     */
    select?: usuarioResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioResenha
     */
    omit?: usuarioResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioResenhaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LivroScalarFieldEnum: {
    titulo: 'titulo',
    autor: 'autor',
    dataPublicacao: 'dataPublicacao',
    paginas: 'paginas',
    resumo: 'resumo',
    tags: 'tags',
    estrelas: 'estrelas'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const GrupoDeLeituraScalarFieldEnum: {
    nome: 'nome',
    dataCriacao: 'dataCriacao',
    dataEncontro: 'dataEncontro',
    tituloLivro: 'tituloLivro'
  };

  export type GrupoDeLeituraScalarFieldEnum = (typeof GrupoDeLeituraScalarFieldEnum)[keyof typeof GrupoDeLeituraScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    senha: 'senha',
    tipo: 'tipo',
    nome: 'nome',
    email: 'email',
    descricao: 'descricao',
    cargo: 'cargo',
    nomeGrupoDeLeitura: 'nomeGrupoDeLeitura',
    nomeCom: 'nomeCom'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const AdmSubordinadosScalarFieldEnum: {
    idAdm: 'idAdm',
    nomeUsu: 'nomeUsu'
  };

  export type AdmSubordinadosScalarFieldEnum = (typeof AdmSubordinadosScalarFieldEnum)[keyof typeof AdmSubordinadosScalarFieldEnum]


  export const ParticipantesDesafioScalarFieldEnum: {
    nomeUsu: 'nomeUsu',
    temaDesafio: 'temaDesafio'
  };

  export type ParticipantesDesafioScalarFieldEnum = (typeof ParticipantesDesafioScalarFieldEnum)[keyof typeof ParticipantesDesafioScalarFieldEnum]


  export const CatalogoScalarFieldEnum: {
    tema: 'tema',
    curtidas: 'curtidas',
    tags: 'tags',
    descricao: 'descricao',
    tipo: 'tipo',
    visibilidade: 'visibilidade',
    criterio: 'criterio',
    idDono: 'idDono'
  };

  export type CatalogoScalarFieldEnum = (typeof CatalogoScalarFieldEnum)[keyof typeof CatalogoScalarFieldEnum]


  export const MetaDeLeituraScalarFieldEnum: {
    nome: 'nome',
    tipo: 'tipo',
    meta: 'meta',
    progresso: 'progresso',
    paginasLidas: 'paginasLidas',
    livrosLidos: 'livrosLidos',
    nomeUsuario: 'nomeUsuario',
    nomeConquista: 'nomeConquista'
  };

  export type MetaDeLeituraScalarFieldEnum = (typeof MetaDeLeituraScalarFieldEnum)[keyof typeof MetaDeLeituraScalarFieldEnum]


  export const ConquistaScalarFieldEnum: {
    nome: 'nome',
    criterio: 'criterio',
    nomeMeta: 'nomeMeta',
    temaCatalago: 'temaCatalago'
  };

  export type ConquistaScalarFieldEnum = (typeof ConquistaScalarFieldEnum)[keyof typeof ConquistaScalarFieldEnum]


  export const ComunidadeScalarFieldEnum: {
    nome: 'nome',
    comentario: 'comentario',
    data: 'data',
    curtidas: 'curtidas',
    nomeUsuario: 'nomeUsuario'
  };

  export type ComunidadeScalarFieldEnum = (typeof ComunidadeScalarFieldEnum)[keyof typeof ComunidadeScalarFieldEnum]


  export const ResenhaScalarFieldEnum: {
    estrelas: 'estrelas',
    avaliacao: 'avaliacao',
    tituloLivro: 'tituloLivro'
  };

  export type ResenhaScalarFieldEnum = (typeof ResenhaScalarFieldEnum)[keyof typeof ResenhaScalarFieldEnum]


  export const UsuarioResenhaScalarFieldEnum: {
    nomeUsu: 'nomeUsu',
    estrelasResenha: 'estrelasResenha'
  };

  export type UsuarioResenhaScalarFieldEnum = (typeof UsuarioResenhaScalarFieldEnum)[keyof typeof UsuarioResenhaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoPerfil'
   */
  export type EnumTipoPerfilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPerfil'>
    


  /**
   * Reference to a field of type 'TipoPerfil[]'
   */
  export type ListEnumTipoPerfilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPerfil[]'>
    


  /**
   * Reference to a field of type 'TipoCatalogo'
   */
  export type EnumTipoCatalogoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCatalogo'>
    


  /**
   * Reference to a field of type 'TipoCatalogo[]'
   */
  export type ListEnumTipoCatalogoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCatalogo[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    titulo?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    dataPublicacao?: DateTimeFilter<"Livro"> | Date | string
    paginas?: IntFilter<"Livro"> | number
    resumo?: StringFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: IntFilter<"Livro"> | number
    grupos?: GrupoDeLeituraListRelationFilter
    catalago?: CatalogoListRelationFilter
    resenha?: ResenhaListRelationFilter
  }

  export type LivroOrderByWithRelationInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    tags?: SortOrder
    estrelas?: SortOrder
    grupos?: GrupoDeLeituraOrderByRelationAggregateInput
    catalago?: CatalogoOrderByRelationAggregateInput
    resenha?: ResenhaOrderByRelationAggregateInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    titulo?: string
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    autor?: StringFilter<"Livro"> | string
    dataPublicacao?: DateTimeFilter<"Livro"> | Date | string
    paginas?: IntFilter<"Livro"> | number
    resumo?: StringFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: IntFilter<"Livro"> | number
    grupos?: GrupoDeLeituraListRelationFilter
    catalago?: CatalogoListRelationFilter
    resenha?: ResenhaListRelationFilter
  }, "titulo">

  export type LivroOrderByWithAggregationInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    tags?: SortOrder
    estrelas?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    titulo?: StringWithAggregatesFilter<"Livro"> | string
    autor?: StringWithAggregatesFilter<"Livro"> | string
    dataPublicacao?: DateTimeWithAggregatesFilter<"Livro"> | Date | string
    paginas?: IntWithAggregatesFilter<"Livro"> | number
    resumo?: StringWithAggregatesFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: IntWithAggregatesFilter<"Livro"> | number
  }

  export type GrupoDeLeituraWhereInput = {
    AND?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    OR?: GrupoDeLeituraWhereInput[]
    NOT?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    nome?: StringFilter<"GrupoDeLeitura"> | string
    dataCriacao?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringFilter<"GrupoDeLeitura"> | string
    leituraConjunta?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    participantes?: PerfilListRelationFilter
  }

  export type GrupoDeLeituraOrderByWithRelationInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
    leituraConjunta?: LivroOrderByWithRelationInput
    participantes?: PerfilOrderByRelationAggregateInput
  }

  export type GrupoDeLeituraWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    OR?: GrupoDeLeituraWhereInput[]
    NOT?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    dataCriacao?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringFilter<"GrupoDeLeitura"> | string
    leituraConjunta?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    participantes?: PerfilListRelationFilter
  }, "nome">

  export type GrupoDeLeituraOrderByWithAggregationInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
    _count?: GrupoDeLeituraCountOrderByAggregateInput
    _max?: GrupoDeLeituraMaxOrderByAggregateInput
    _min?: GrupoDeLeituraMinOrderByAggregateInput
  }

  export type GrupoDeLeituraScalarWhereWithAggregatesInput = {
    AND?: GrupoDeLeituraScalarWhereWithAggregatesInput | GrupoDeLeituraScalarWhereWithAggregatesInput[]
    OR?: GrupoDeLeituraScalarWhereWithAggregatesInput[]
    NOT?: GrupoDeLeituraScalarWhereWithAggregatesInput | GrupoDeLeituraScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"GrupoDeLeitura"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeWithAggregatesFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringWithAggregatesFilter<"GrupoDeLeitura"> | string
  }

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: IntFilter<"Perfil"> | number
    senha?: StringFilter<"Perfil"> | string
    tipo?: EnumTipoPerfilFilter<"Perfil"> | $Enums.TipoPerfil
    nome?: StringNullableFilter<"Perfil"> | string | null
    email?: StringNullableFilter<"Perfil"> | string | null
    descricao?: StringNullableFilter<"Perfil"> | string | null
    cargo?: StringNullableFilter<"Perfil"> | string | null
    nomeGrupoDeLeitura?: StringNullableFilter<"Perfil"> | string | null
    nomeCom?: StringNullableFilter<"Perfil"> | string | null
    usuarios?: AdmSubordinadosListRelationFilter
    adms?: AdmSubordinadosListRelationFilter
    catalogosCriados?: CatalogoListRelationFilter
    grupoDeLeitura?: XOR<GrupoDeLeituraNullableScalarRelationFilter, GrupoDeLeituraWhereInput> | null
    metaDeLeitura?: XOR<MetaDeLeituraNullableScalarRelationFilter, MetaDeLeituraWhereInput> | null
    comunidade?: XOR<ComunidadeNullableScalarRelationFilter, ComunidadeWhereInput> | null
    desafio?: ParticipantesDesafioListRelationFilter
    resenhas?: UsuarioResenhaListRelationFilter
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    nomeGrupoDeLeitura?: SortOrderInput | SortOrder
    nomeCom?: SortOrderInput | SortOrder
    usuarios?: admSubordinadosOrderByRelationAggregateInput
    adms?: admSubordinadosOrderByRelationAggregateInput
    catalogosCriados?: CatalogoOrderByRelationAggregateInput
    grupoDeLeitura?: GrupoDeLeituraOrderByWithRelationInput
    metaDeLeitura?: MetaDeLeituraOrderByWithRelationInput
    comunidade?: ComunidadeOrderByWithRelationInput
    desafio?: participantesDesafioOrderByRelationAggregateInput
    resenhas?: usuarioResenhaOrderByRelationAggregateInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    senha?: StringFilter<"Perfil"> | string
    tipo?: EnumTipoPerfilFilter<"Perfil"> | $Enums.TipoPerfil
    email?: StringNullableFilter<"Perfil"> | string | null
    descricao?: StringNullableFilter<"Perfil"> | string | null
    cargo?: StringNullableFilter<"Perfil"> | string | null
    nomeGrupoDeLeitura?: StringNullableFilter<"Perfil"> | string | null
    nomeCom?: StringNullableFilter<"Perfil"> | string | null
    usuarios?: AdmSubordinadosListRelationFilter
    adms?: AdmSubordinadosListRelationFilter
    catalogosCriados?: CatalogoListRelationFilter
    grupoDeLeitura?: XOR<GrupoDeLeituraNullableScalarRelationFilter, GrupoDeLeituraWhereInput> | null
    metaDeLeitura?: XOR<MetaDeLeituraNullableScalarRelationFilter, MetaDeLeituraWhereInput> | null
    comunidade?: XOR<ComunidadeNullableScalarRelationFilter, ComunidadeWhereInput> | null
    desafio?: ParticipantesDesafioListRelationFilter
    resenhas?: UsuarioResenhaListRelationFilter
  }, "id" | "nome">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    nomeGrupoDeLeitura?: SortOrderInput | SortOrder
    nomeCom?: SortOrderInput | SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perfil"> | number
    senha?: StringWithAggregatesFilter<"Perfil"> | string
    tipo?: EnumTipoPerfilWithAggregatesFilter<"Perfil"> | $Enums.TipoPerfil
    nome?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    email?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    cargo?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    nomeGrupoDeLeitura?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    nomeCom?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
  }

  export type admSubordinadosWhereInput = {
    AND?: admSubordinadosWhereInput | admSubordinadosWhereInput[]
    OR?: admSubordinadosWhereInput[]
    NOT?: admSubordinadosWhereInput | admSubordinadosWhereInput[]
    idAdm?: IntFilter<"admSubordinados"> | number
    nomeUsu?: StringFilter<"admSubordinados"> | string
    adm?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    subordinado?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
  }

  export type admSubordinadosOrderByWithRelationInput = {
    idAdm?: SortOrder
    nomeUsu?: SortOrder
    adm?: PerfilOrderByWithRelationInput
    subordinado?: PerfilOrderByWithRelationInput
  }

  export type admSubordinadosWhereUniqueInput = Prisma.AtLeast<{
    idAdm_nomeUsu?: admSubordinadosIdAdmNomeUsuCompoundUniqueInput
    AND?: admSubordinadosWhereInput | admSubordinadosWhereInput[]
    OR?: admSubordinadosWhereInput[]
    NOT?: admSubordinadosWhereInput | admSubordinadosWhereInput[]
    idAdm?: IntFilter<"admSubordinados"> | number
    nomeUsu?: StringFilter<"admSubordinados"> | string
    adm?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    subordinado?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
  }, "idAdm_nomeUsu">

  export type admSubordinadosOrderByWithAggregationInput = {
    idAdm?: SortOrder
    nomeUsu?: SortOrder
    _count?: admSubordinadosCountOrderByAggregateInput
    _avg?: admSubordinadosAvgOrderByAggregateInput
    _max?: admSubordinadosMaxOrderByAggregateInput
    _min?: admSubordinadosMinOrderByAggregateInput
    _sum?: admSubordinadosSumOrderByAggregateInput
  }

  export type admSubordinadosScalarWhereWithAggregatesInput = {
    AND?: admSubordinadosScalarWhereWithAggregatesInput | admSubordinadosScalarWhereWithAggregatesInput[]
    OR?: admSubordinadosScalarWhereWithAggregatesInput[]
    NOT?: admSubordinadosScalarWhereWithAggregatesInput | admSubordinadosScalarWhereWithAggregatesInput[]
    idAdm?: IntWithAggregatesFilter<"admSubordinados"> | number
    nomeUsu?: StringWithAggregatesFilter<"admSubordinados"> | string
  }

  export type participantesDesafioWhereInput = {
    AND?: participantesDesafioWhereInput | participantesDesafioWhereInput[]
    OR?: participantesDesafioWhereInput[]
    NOT?: participantesDesafioWhereInput | participantesDesafioWhereInput[]
    nomeUsu?: StringFilter<"participantesDesafio"> | string
    temaDesafio?: StringFilter<"participantesDesafio"> | string
    participantes?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    desafio?: XOR<CatalogoScalarRelationFilter, CatalogoWhereInput>
  }

  export type participantesDesafioOrderByWithRelationInput = {
    nomeUsu?: SortOrder
    temaDesafio?: SortOrder
    participantes?: PerfilOrderByWithRelationInput
    desafio?: CatalogoOrderByWithRelationInput
  }

  export type participantesDesafioWhereUniqueInput = Prisma.AtLeast<{
    nomeUsu_temaDesafio?: participantesDesafioNomeUsuTemaDesafioCompoundUniqueInput
    AND?: participantesDesafioWhereInput | participantesDesafioWhereInput[]
    OR?: participantesDesafioWhereInput[]
    NOT?: participantesDesafioWhereInput | participantesDesafioWhereInput[]
    nomeUsu?: StringFilter<"participantesDesafio"> | string
    temaDesafio?: StringFilter<"participantesDesafio"> | string
    participantes?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    desafio?: XOR<CatalogoScalarRelationFilter, CatalogoWhereInput>
  }, "nomeUsu_temaDesafio">

  export type participantesDesafioOrderByWithAggregationInput = {
    nomeUsu?: SortOrder
    temaDesafio?: SortOrder
    _count?: participantesDesafioCountOrderByAggregateInput
    _max?: participantesDesafioMaxOrderByAggregateInput
    _min?: participantesDesafioMinOrderByAggregateInput
  }

  export type participantesDesafioScalarWhereWithAggregatesInput = {
    AND?: participantesDesafioScalarWhereWithAggregatesInput | participantesDesafioScalarWhereWithAggregatesInput[]
    OR?: participantesDesafioScalarWhereWithAggregatesInput[]
    NOT?: participantesDesafioScalarWhereWithAggregatesInput | participantesDesafioScalarWhereWithAggregatesInput[]
    nomeUsu?: StringWithAggregatesFilter<"participantesDesafio"> | string
    temaDesafio?: StringWithAggregatesFilter<"participantesDesafio"> | string
  }

  export type CatalogoWhereInput = {
    AND?: CatalogoWhereInput | CatalogoWhereInput[]
    OR?: CatalogoWhereInput[]
    NOT?: CatalogoWhereInput | CatalogoWhereInput[]
    tema?: StringFilter<"Catalogo"> | string
    curtidas?: IntFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableFilter<"Catalogo"> | string | null
    criterio?: StringNullableFilter<"Catalogo"> | string | null
    idDono?: IntFilter<"Catalogo"> | number
    livros?: LivroListRelationFilter
    dono?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    medalhas?: ConquistaListRelationFilter
    participantes?: ParticipantesDesafioListRelationFilter
  }

  export type CatalogoOrderByWithRelationInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    tags?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrderInput | SortOrder
    criterio?: SortOrderInput | SortOrder
    idDono?: SortOrder
    livros?: LivroOrderByRelationAggregateInput
    dono?: PerfilOrderByWithRelationInput
    medalhas?: ConquistaOrderByRelationAggregateInput
    participantes?: participantesDesafioOrderByRelationAggregateInput
  }

  export type CatalogoWhereUniqueInput = Prisma.AtLeast<{
    tema?: string
    AND?: CatalogoWhereInput | CatalogoWhereInput[]
    OR?: CatalogoWhereInput[]
    NOT?: CatalogoWhereInput | CatalogoWhereInput[]
    curtidas?: IntFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableFilter<"Catalogo"> | string | null
    criterio?: StringNullableFilter<"Catalogo"> | string | null
    idDono?: IntFilter<"Catalogo"> | number
    livros?: LivroListRelationFilter
    dono?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    medalhas?: ConquistaListRelationFilter
    participantes?: ParticipantesDesafioListRelationFilter
  }, "tema">

  export type CatalogoOrderByWithAggregationInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    tags?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrderInput | SortOrder
    criterio?: SortOrderInput | SortOrder
    idDono?: SortOrder
    _count?: CatalogoCountOrderByAggregateInput
    _avg?: CatalogoAvgOrderByAggregateInput
    _max?: CatalogoMaxOrderByAggregateInput
    _min?: CatalogoMinOrderByAggregateInput
    _sum?: CatalogoSumOrderByAggregateInput
  }

  export type CatalogoScalarWhereWithAggregatesInput = {
    AND?: CatalogoScalarWhereWithAggregatesInput | CatalogoScalarWhereWithAggregatesInput[]
    OR?: CatalogoScalarWhereWithAggregatesInput[]
    NOT?: CatalogoScalarWhereWithAggregatesInput | CatalogoScalarWhereWithAggregatesInput[]
    tema?: StringWithAggregatesFilter<"Catalogo"> | string
    curtidas?: IntWithAggregatesFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringWithAggregatesFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoWithAggregatesFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableWithAggregatesFilter<"Catalogo"> | string | null
    criterio?: StringNullableWithAggregatesFilter<"Catalogo"> | string | null
    idDono?: IntWithAggregatesFilter<"Catalogo"> | number
  }

  export type MetaDeLeituraWhereInput = {
    AND?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    OR?: MetaDeLeituraWhereInput[]
    NOT?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    nome?: StringFilter<"MetaDeLeitura"> | string
    tipo?: StringFilter<"MetaDeLeitura"> | string
    meta?: IntFilter<"MetaDeLeitura"> | number
    progresso?: IntFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntFilter<"MetaDeLeitura"> | number
    nomeUsuario?: StringFilter<"MetaDeLeitura"> | string
    nomeConquista?: StringFilter<"MetaDeLeitura"> | string
    usuario?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    conquista?: XOR<ConquistaScalarRelationFilter, ConquistaWhereInput>
  }

  export type MetaDeLeituraOrderByWithRelationInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    nomeUsuario?: SortOrder
    nomeConquista?: SortOrder
    usuario?: PerfilOrderByWithRelationInput
    conquista?: ConquistaOrderByWithRelationInput
  }

  export type MetaDeLeituraWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    nomeUsuario?: string
    nomeConquista?: string
    AND?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    OR?: MetaDeLeituraWhereInput[]
    NOT?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    tipo?: StringFilter<"MetaDeLeitura"> | string
    meta?: IntFilter<"MetaDeLeitura"> | number
    progresso?: IntFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntFilter<"MetaDeLeitura"> | number
    usuario?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    conquista?: XOR<ConquistaScalarRelationFilter, ConquistaWhereInput>
  }, "nome" | "nomeUsuario" | "nomeConquista">

  export type MetaDeLeituraOrderByWithAggregationInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    nomeUsuario?: SortOrder
    nomeConquista?: SortOrder
    _count?: MetaDeLeituraCountOrderByAggregateInput
    _avg?: MetaDeLeituraAvgOrderByAggregateInput
    _max?: MetaDeLeituraMaxOrderByAggregateInput
    _min?: MetaDeLeituraMinOrderByAggregateInput
    _sum?: MetaDeLeituraSumOrderByAggregateInput
  }

  export type MetaDeLeituraScalarWhereWithAggregatesInput = {
    AND?: MetaDeLeituraScalarWhereWithAggregatesInput | MetaDeLeituraScalarWhereWithAggregatesInput[]
    OR?: MetaDeLeituraScalarWhereWithAggregatesInput[]
    NOT?: MetaDeLeituraScalarWhereWithAggregatesInput | MetaDeLeituraScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
    tipo?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
    meta?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    progresso?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    nomeUsuario?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
    nomeConquista?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
  }

  export type ConquistaWhereInput = {
    AND?: ConquistaWhereInput | ConquistaWhereInput[]
    OR?: ConquistaWhereInput[]
    NOT?: ConquistaWhereInput | ConquistaWhereInput[]
    nome?: StringFilter<"Conquista"> | string
    criterio?: StringFilter<"Conquista"> | string
    nomeMeta?: StringFilter<"Conquista"> | string
    temaCatalago?: StringNullableFilter<"Conquista"> | string | null
    meta?: XOR<MetaDeLeituraNullableScalarRelationFilter, MetaDeLeituraWhereInput> | null
    desafio?: XOR<CatalogoNullableScalarRelationFilter, CatalogoWhereInput> | null
  }

  export type ConquistaOrderByWithRelationInput = {
    nome?: SortOrder
    criterio?: SortOrder
    nomeMeta?: SortOrder
    temaCatalago?: SortOrderInput | SortOrder
    meta?: MetaDeLeituraOrderByWithRelationInput
    desafio?: CatalogoOrderByWithRelationInput
  }

  export type ConquistaWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: ConquistaWhereInput | ConquistaWhereInput[]
    OR?: ConquistaWhereInput[]
    NOT?: ConquistaWhereInput | ConquistaWhereInput[]
    criterio?: StringFilter<"Conquista"> | string
    nomeMeta?: StringFilter<"Conquista"> | string
    temaCatalago?: StringNullableFilter<"Conquista"> | string | null
    meta?: XOR<MetaDeLeituraNullableScalarRelationFilter, MetaDeLeituraWhereInput> | null
    desafio?: XOR<CatalogoNullableScalarRelationFilter, CatalogoWhereInput> | null
  }, "nome" | "nome">

  export type ConquistaOrderByWithAggregationInput = {
    nome?: SortOrder
    criterio?: SortOrder
    nomeMeta?: SortOrder
    temaCatalago?: SortOrderInput | SortOrder
    _count?: ConquistaCountOrderByAggregateInput
    _max?: ConquistaMaxOrderByAggregateInput
    _min?: ConquistaMinOrderByAggregateInput
  }

  export type ConquistaScalarWhereWithAggregatesInput = {
    AND?: ConquistaScalarWhereWithAggregatesInput | ConquistaScalarWhereWithAggregatesInput[]
    OR?: ConquistaScalarWhereWithAggregatesInput[]
    NOT?: ConquistaScalarWhereWithAggregatesInput | ConquistaScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Conquista"> | string
    criterio?: StringWithAggregatesFilter<"Conquista"> | string
    nomeMeta?: StringWithAggregatesFilter<"Conquista"> | string
    temaCatalago?: StringNullableWithAggregatesFilter<"Conquista"> | string | null
  }

  export type ComunidadeWhereInput = {
    AND?: ComunidadeWhereInput | ComunidadeWhereInput[]
    OR?: ComunidadeWhereInput[]
    NOT?: ComunidadeWhereInput | ComunidadeWhereInput[]
    nome?: StringFilter<"Comunidade"> | string
    comentario?: StringFilter<"Comunidade"> | string
    data?: DateTimeFilter<"Comunidade"> | Date | string
    curtidas?: IntFilter<"Comunidade"> | number
    nomeUsuario?: StringFilter<"Comunidade"> | string
    participantes?: PerfilListRelationFilter
  }

  export type ComunidadeOrderByWithRelationInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    nomeUsuario?: SortOrder
    participantes?: PerfilOrderByRelationAggregateInput
  }

  export type ComunidadeWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: ComunidadeWhereInput | ComunidadeWhereInput[]
    OR?: ComunidadeWhereInput[]
    NOT?: ComunidadeWhereInput | ComunidadeWhereInput[]
    comentario?: StringFilter<"Comunidade"> | string
    data?: DateTimeFilter<"Comunidade"> | Date | string
    curtidas?: IntFilter<"Comunidade"> | number
    nomeUsuario?: StringFilter<"Comunidade"> | string
    participantes?: PerfilListRelationFilter
  }, "nome">

  export type ComunidadeOrderByWithAggregationInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    nomeUsuario?: SortOrder
    _count?: ComunidadeCountOrderByAggregateInput
    _avg?: ComunidadeAvgOrderByAggregateInput
    _max?: ComunidadeMaxOrderByAggregateInput
    _min?: ComunidadeMinOrderByAggregateInput
    _sum?: ComunidadeSumOrderByAggregateInput
  }

  export type ComunidadeScalarWhereWithAggregatesInput = {
    AND?: ComunidadeScalarWhereWithAggregatesInput | ComunidadeScalarWhereWithAggregatesInput[]
    OR?: ComunidadeScalarWhereWithAggregatesInput[]
    NOT?: ComunidadeScalarWhereWithAggregatesInput | ComunidadeScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Comunidade"> | string
    comentario?: StringWithAggregatesFilter<"Comunidade"> | string
    data?: DateTimeWithAggregatesFilter<"Comunidade"> | Date | string
    curtidas?: IntWithAggregatesFilter<"Comunidade"> | number
    nomeUsuario?: StringWithAggregatesFilter<"Comunidade"> | string
  }

  export type ResenhaWhereInput = {
    AND?: ResenhaWhereInput | ResenhaWhereInput[]
    OR?: ResenhaWhereInput[]
    NOT?: ResenhaWhereInput | ResenhaWhereInput[]
    estrelas?: IntFilter<"Resenha"> | number
    avaliacao?: StringFilter<"Resenha"> | string
    tituloLivro?: StringFilter<"Resenha"> | string
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    usuarios?: UsuarioResenhaListRelationFilter
  }

  export type ResenhaOrderByWithRelationInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    livro?: LivroOrderByWithRelationInput
    usuarios?: usuarioResenhaOrderByRelationAggregateInput
  }

  export type ResenhaWhereUniqueInput = Prisma.AtLeast<{
    estrelas?: number
    AND?: ResenhaWhereInput | ResenhaWhereInput[]
    OR?: ResenhaWhereInput[]
    NOT?: ResenhaWhereInput | ResenhaWhereInput[]
    avaliacao?: StringFilter<"Resenha"> | string
    tituloLivro?: StringFilter<"Resenha"> | string
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    usuarios?: UsuarioResenhaListRelationFilter
  }, "estrelas">

  export type ResenhaOrderByWithAggregationInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    _count?: ResenhaCountOrderByAggregateInput
    _avg?: ResenhaAvgOrderByAggregateInput
    _max?: ResenhaMaxOrderByAggregateInput
    _min?: ResenhaMinOrderByAggregateInput
    _sum?: ResenhaSumOrderByAggregateInput
  }

  export type ResenhaScalarWhereWithAggregatesInput = {
    AND?: ResenhaScalarWhereWithAggregatesInput | ResenhaScalarWhereWithAggregatesInput[]
    OR?: ResenhaScalarWhereWithAggregatesInput[]
    NOT?: ResenhaScalarWhereWithAggregatesInput | ResenhaScalarWhereWithAggregatesInput[]
    estrelas?: IntWithAggregatesFilter<"Resenha"> | number
    avaliacao?: StringWithAggregatesFilter<"Resenha"> | string
    tituloLivro?: StringWithAggregatesFilter<"Resenha"> | string
  }

  export type usuarioResenhaWhereInput = {
    AND?: usuarioResenhaWhereInput | usuarioResenhaWhereInput[]
    OR?: usuarioResenhaWhereInput[]
    NOT?: usuarioResenhaWhereInput | usuarioResenhaWhereInput[]
    nomeUsu?: StringFilter<"usuarioResenha"> | string
    estrelasResenha?: IntFilter<"usuarioResenha"> | number
    usuario?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    resenha?: XOR<ResenhaScalarRelationFilter, ResenhaWhereInput>
  }

  export type usuarioResenhaOrderByWithRelationInput = {
    nomeUsu?: SortOrder
    estrelasResenha?: SortOrder
    usuario?: PerfilOrderByWithRelationInput
    resenha?: ResenhaOrderByWithRelationInput
  }

  export type usuarioResenhaWhereUniqueInput = Prisma.AtLeast<{
    nomeUsu_estrelasResenha?: usuarioResenhaNomeUsuEstrelasResenhaCompoundUniqueInput
    AND?: usuarioResenhaWhereInput | usuarioResenhaWhereInput[]
    OR?: usuarioResenhaWhereInput[]
    NOT?: usuarioResenhaWhereInput | usuarioResenhaWhereInput[]
    nomeUsu?: StringFilter<"usuarioResenha"> | string
    estrelasResenha?: IntFilter<"usuarioResenha"> | number
    usuario?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    resenha?: XOR<ResenhaScalarRelationFilter, ResenhaWhereInput>
  }, "nomeUsu_estrelasResenha">

  export type usuarioResenhaOrderByWithAggregationInput = {
    nomeUsu?: SortOrder
    estrelasResenha?: SortOrder
    _count?: usuarioResenhaCountOrderByAggregateInput
    _avg?: usuarioResenhaAvgOrderByAggregateInput
    _max?: usuarioResenhaMaxOrderByAggregateInput
    _min?: usuarioResenhaMinOrderByAggregateInput
    _sum?: usuarioResenhaSumOrderByAggregateInput
  }

  export type usuarioResenhaScalarWhereWithAggregatesInput = {
    AND?: usuarioResenhaScalarWhereWithAggregatesInput | usuarioResenhaScalarWhereWithAggregatesInput[]
    OR?: usuarioResenhaScalarWhereWithAggregatesInput[]
    NOT?: usuarioResenhaScalarWhereWithAggregatesInput | usuarioResenhaScalarWhereWithAggregatesInput[]
    nomeUsu?: StringWithAggregatesFilter<"usuarioResenha"> | string
    estrelasResenha?: IntWithAggregatesFilter<"usuarioResenha"> | number
  }

  export type LivroCreateInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    catalago?: CatalogoCreateNestedManyWithoutLivrosInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    catalago?: CatalogoUncheckedCreateNestedManyWithoutLivrosInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    catalago?: CatalogoUpdateManyWithoutLivrosNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    catalago?: CatalogoUncheckedUpdateManyWithoutLivrosNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroCreateManyInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
  }

  export type LivroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
  }

  export type GrupoDeLeituraCreateInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    leituraConjunta: LivroCreateNestedOneWithoutGruposInput
    participantes?: PerfilCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraUncheckedCreateInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    tituloLivro: string
    participantes?: PerfilUncheckedCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    leituraConjunta?: LivroUpdateOneRequiredWithoutGruposNestedInput
    participantes?: PerfilUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
    participantes?: PerfilUncheckedUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraCreateManyInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    tituloLivro: string
  }

  export type GrupoDeLeituraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoDeLeituraUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilCreateManyInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
  }

  export type PerfilUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type admSubordinadosCreateInput = {
    adm: PerfilCreateNestedOneWithoutAdmsInput
    subordinado: PerfilCreateNestedOneWithoutUsuariosInput
  }

  export type admSubordinadosUncheckedCreateInput = {
    idAdm: number
    nomeUsu: string
  }

  export type admSubordinadosUpdateInput = {
    adm?: PerfilUpdateOneRequiredWithoutAdmsNestedInput
    subordinado?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type admSubordinadosUncheckedUpdateInput = {
    idAdm?: IntFieldUpdateOperationsInput | number
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type admSubordinadosCreateManyInput = {
    idAdm: number
    nomeUsu: string
  }

  export type admSubordinadosUpdateManyMutationInput = {

  }

  export type admSubordinadosUncheckedUpdateManyInput = {
    idAdm?: IntFieldUpdateOperationsInput | number
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type participantesDesafioCreateInput = {
    participantes: PerfilCreateNestedOneWithoutDesafioInput
    desafio: CatalogoCreateNestedOneWithoutParticipantesInput
  }

  export type participantesDesafioUncheckedCreateInput = {
    nomeUsu: string
    temaDesafio: string
  }

  export type participantesDesafioUpdateInput = {
    participantes?: PerfilUpdateOneRequiredWithoutDesafioNestedInput
    desafio?: CatalogoUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type participantesDesafioUncheckedUpdateInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
    temaDesafio?: StringFieldUpdateOperationsInput | string
  }

  export type participantesDesafioCreateManyInput = {
    nomeUsu: string
    temaDesafio: string
  }

  export type participantesDesafioUpdateManyMutationInput = {

  }

  export type participantesDesafioUncheckedUpdateManyInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
    temaDesafio?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogoCreateInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: LivroCreateNestedManyWithoutCatalagoInput
    dono: PerfilCreateNestedOneWithoutCatalogosCriadosInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
    participantes?: participantesDesafioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    livros?: LivroUncheckedCreateNestedManyWithoutCatalagoInput
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
    participantes?: participantesDesafioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUpdateInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: LivroUpdateManyWithoutCatalagoNestedInput
    dono?: PerfilUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
    participantes?: participantesDesafioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    livros?: LivroUncheckedUpdateManyWithoutCatalagoNestedInput
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
    participantes?: participantesDesafioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoCreateManyInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
  }

  export type CatalogoUpdateManyMutationInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CatalogoUncheckedUpdateManyInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
  }

  export type MetaDeLeituraCreateInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    usuario: PerfilCreateNestedOneWithoutMetaDeLeituraInput
    conquista: ConquistaCreateNestedOneWithoutMetaInput
  }

  export type MetaDeLeituraUncheckedCreateInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeUsuario: string
    nomeConquista: string
  }

  export type MetaDeLeituraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    usuario?: PerfilUpdateOneRequiredWithoutMetaDeLeituraNestedInput
    conquista?: ConquistaUpdateOneRequiredWithoutMetaNestedInput
  }

  export type MetaDeLeituraUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    nomeConquista?: StringFieldUpdateOperationsInput | string
  }

  export type MetaDeLeituraCreateManyInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeUsuario: string
    nomeConquista: string
  }

  export type MetaDeLeituraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
  }

  export type MetaDeLeituraUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    nomeConquista?: StringFieldUpdateOperationsInput | string
  }

  export type ConquistaCreateInput = {
    nome: string
    criterio: string
    nomeMeta: string
    meta?: MetaDeLeituraCreateNestedOneWithoutConquistaInput
    desafio?: CatalogoCreateNestedOneWithoutMedalhasInput
  }

  export type ConquistaUncheckedCreateInput = {
    nome: string
    criterio: string
    nomeMeta: string
    temaCatalago?: string | null
    meta?: MetaDeLeituraUncheckedCreateNestedOneWithoutConquistaInput
  }

  export type ConquistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    meta?: MetaDeLeituraUpdateOneWithoutConquistaNestedInput
    desafio?: CatalogoUpdateOneWithoutMedalhasNestedInput
  }

  export type ConquistaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    temaCatalago?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: MetaDeLeituraUncheckedUpdateOneWithoutConquistaNestedInput
  }

  export type ConquistaCreateManyInput = {
    nome: string
    criterio: string
    nomeMeta: string
    temaCatalago?: string | null
  }

  export type ConquistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
  }

  export type ConquistaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    temaCatalago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComunidadeCreateInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    nomeUsuario: string
    participantes?: PerfilCreateNestedManyWithoutComunidadeInput
  }

  export type ComunidadeUncheckedCreateInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    nomeUsuario: string
    participantes?: PerfilUncheckedCreateNestedManyWithoutComunidadeInput
  }

  export type ComunidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    participantes?: PerfilUpdateManyWithoutComunidadeNestedInput
  }

  export type ComunidadeUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    participantes?: PerfilUncheckedUpdateManyWithoutComunidadeNestedInput
  }

  export type ComunidadeCreateManyInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    nomeUsuario: string
  }

  export type ComunidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type ComunidadeUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type ResenhaCreateInput = {
    estrelas: number
    avaliacao: string
    livro: LivroCreateNestedOneWithoutResenhaInput
    usuarios?: usuarioResenhaCreateNestedManyWithoutResenhaInput
  }

  export type ResenhaUncheckedCreateInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
    usuarios?: usuarioResenhaUncheckedCreateNestedManyWithoutResenhaInput
  }

  export type ResenhaUpdateInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    livro?: LivroUpdateOneRequiredWithoutResenhaNestedInput
    usuarios?: usuarioResenhaUpdateManyWithoutResenhaNestedInput
  }

  export type ResenhaUncheckedUpdateInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioResenhaUncheckedUpdateManyWithoutResenhaNestedInput
  }

  export type ResenhaCreateManyInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
  }

  export type ResenhaUpdateManyMutationInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
  }

  export type ResenhaUncheckedUpdateManyInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioResenhaCreateInput = {
    usuario: PerfilCreateNestedOneWithoutResenhasInput
    resenha: ResenhaCreateNestedOneWithoutUsuariosInput
  }

  export type usuarioResenhaUncheckedCreateInput = {
    nomeUsu: string
    estrelasResenha: number
  }

  export type usuarioResenhaUpdateInput = {
    usuario?: PerfilUpdateOneRequiredWithoutResenhasNestedInput
    resenha?: ResenhaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuarioResenhaUncheckedUpdateInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
    estrelasResenha?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioResenhaCreateManyInput = {
    nomeUsu: string
    estrelasResenha: number
  }

  export type usuarioResenhaUpdateManyMutationInput = {

  }

  export type usuarioResenhaUncheckedUpdateManyInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
    estrelasResenha?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GrupoDeLeituraListRelationFilter = {
    every?: GrupoDeLeituraWhereInput
    some?: GrupoDeLeituraWhereInput
    none?: GrupoDeLeituraWhereInput
  }

  export type CatalogoListRelationFilter = {
    every?: CatalogoWhereInput
    some?: CatalogoWhereInput
    none?: CatalogoWhereInput
  }

  export type ResenhaListRelationFilter = {
    every?: ResenhaWhereInput
    some?: ResenhaWhereInput
    none?: ResenhaWhereInput
  }

  export type GrupoDeLeituraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivroCountOrderByAggregateInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    tags?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    paginas?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    paginas?: SortOrder
    estrelas?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LivroScalarRelationFilter = {
    is?: LivroWhereInput
    isNot?: LivroWhereInput
  }

  export type PerfilListRelationFilter = {
    every?: PerfilWhereInput
    some?: PerfilWhereInput
    none?: PerfilWhereInput
  }

  export type PerfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrupoDeLeituraCountOrderByAggregateInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
  }

  export type GrupoDeLeituraMaxOrderByAggregateInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
  }

  export type GrupoDeLeituraMinOrderByAggregateInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
  }

  export type EnumTipoPerfilFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPerfil | EnumTipoPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerfilFilter<$PrismaModel> | $Enums.TipoPerfil
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AdmSubordinadosListRelationFilter = {
    every?: admSubordinadosWhereInput
    some?: admSubordinadosWhereInput
    none?: admSubordinadosWhereInput
  }

  export type GrupoDeLeituraNullableScalarRelationFilter = {
    is?: GrupoDeLeituraWhereInput | null
    isNot?: GrupoDeLeituraWhereInput | null
  }

  export type MetaDeLeituraNullableScalarRelationFilter = {
    is?: MetaDeLeituraWhereInput | null
    isNot?: MetaDeLeituraWhereInput | null
  }

  export type ComunidadeNullableScalarRelationFilter = {
    is?: ComunidadeWhereInput | null
    isNot?: ComunidadeWhereInput | null
  }

  export type ParticipantesDesafioListRelationFilter = {
    every?: participantesDesafioWhereInput
    some?: participantesDesafioWhereInput
    none?: participantesDesafioWhereInput
  }

  export type UsuarioResenhaListRelationFilter = {
    every?: usuarioResenhaWhereInput
    some?: usuarioResenhaWhereInput
    none?: usuarioResenhaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type admSubordinadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type participantesDesafioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioResenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    cargo?: SortOrder
    nomeGrupoDeLeitura?: SortOrder
    nomeCom?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    cargo?: SortOrder
    nomeGrupoDeLeitura?: SortOrder
    nomeCom?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    cargo?: SortOrder
    nomeGrupoDeLeitura?: SortOrder
    nomeCom?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoPerfilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPerfil | EnumTipoPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerfilWithAggregatesFilter<$PrismaModel> | $Enums.TipoPerfil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPerfilFilter<$PrismaModel>
    _max?: NestedEnumTipoPerfilFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PerfilScalarRelationFilter = {
    is?: PerfilWhereInput
    isNot?: PerfilWhereInput
  }

  export type admSubordinadosIdAdmNomeUsuCompoundUniqueInput = {
    idAdm: number
    nomeUsu: string
  }

  export type admSubordinadosCountOrderByAggregateInput = {
    idAdm?: SortOrder
    nomeUsu?: SortOrder
  }

  export type admSubordinadosAvgOrderByAggregateInput = {
    idAdm?: SortOrder
  }

  export type admSubordinadosMaxOrderByAggregateInput = {
    idAdm?: SortOrder
    nomeUsu?: SortOrder
  }

  export type admSubordinadosMinOrderByAggregateInput = {
    idAdm?: SortOrder
    nomeUsu?: SortOrder
  }

  export type admSubordinadosSumOrderByAggregateInput = {
    idAdm?: SortOrder
  }

  export type CatalogoScalarRelationFilter = {
    is?: CatalogoWhereInput
    isNot?: CatalogoWhereInput
  }

  export type participantesDesafioNomeUsuTemaDesafioCompoundUniqueInput = {
    nomeUsu: string
    temaDesafio: string
  }

  export type participantesDesafioCountOrderByAggregateInput = {
    nomeUsu?: SortOrder
    temaDesafio?: SortOrder
  }

  export type participantesDesafioMaxOrderByAggregateInput = {
    nomeUsu?: SortOrder
    temaDesafio?: SortOrder
  }

  export type participantesDesafioMinOrderByAggregateInput = {
    nomeUsu?: SortOrder
    temaDesafio?: SortOrder
  }

  export type EnumTipoCatalogoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoFilter<$PrismaModel> | $Enums.TipoCatalogo
  }

  export type LivroListRelationFilter = {
    every?: LivroWhereInput
    some?: LivroWhereInput
    none?: LivroWhereInput
  }

  export type ConquistaListRelationFilter = {
    every?: ConquistaWhereInput
    some?: ConquistaWhereInput
    none?: ConquistaWhereInput
  }

  export type LivroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConquistaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogoCountOrderByAggregateInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    tags?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrder
    criterio?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoAvgOrderByAggregateInput = {
    curtidas?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoMaxOrderByAggregateInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrder
    criterio?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoMinOrderByAggregateInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrder
    criterio?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoSumOrderByAggregateInput = {
    curtidas?: SortOrder
    idDono?: SortOrder
  }

  export type EnumTipoCatalogoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCatalogo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCatalogoFilter<$PrismaModel>
    _max?: NestedEnumTipoCatalogoFilter<$PrismaModel>
  }

  export type ConquistaScalarRelationFilter = {
    is?: ConquistaWhereInput
    isNot?: ConquistaWhereInput
  }

  export type MetaDeLeituraCountOrderByAggregateInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    nomeUsuario?: SortOrder
    nomeConquista?: SortOrder
  }

  export type MetaDeLeituraAvgOrderByAggregateInput = {
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
  }

  export type MetaDeLeituraMaxOrderByAggregateInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    nomeUsuario?: SortOrder
    nomeConquista?: SortOrder
  }

  export type MetaDeLeituraMinOrderByAggregateInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    nomeUsuario?: SortOrder
    nomeConquista?: SortOrder
  }

  export type MetaDeLeituraSumOrderByAggregateInput = {
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
  }

  export type CatalogoNullableScalarRelationFilter = {
    is?: CatalogoWhereInput | null
    isNot?: CatalogoWhereInput | null
  }

  export type ConquistaCountOrderByAggregateInput = {
    nome?: SortOrder
    criterio?: SortOrder
    nomeMeta?: SortOrder
    temaCatalago?: SortOrder
  }

  export type ConquistaMaxOrderByAggregateInput = {
    nome?: SortOrder
    criterio?: SortOrder
    nomeMeta?: SortOrder
    temaCatalago?: SortOrder
  }

  export type ConquistaMinOrderByAggregateInput = {
    nome?: SortOrder
    criterio?: SortOrder
    nomeMeta?: SortOrder
    temaCatalago?: SortOrder
  }

  export type ComunidadeCountOrderByAggregateInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    nomeUsuario?: SortOrder
  }

  export type ComunidadeAvgOrderByAggregateInput = {
    curtidas?: SortOrder
  }

  export type ComunidadeMaxOrderByAggregateInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    nomeUsuario?: SortOrder
  }

  export type ComunidadeMinOrderByAggregateInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    nomeUsuario?: SortOrder
  }

  export type ComunidadeSumOrderByAggregateInput = {
    curtidas?: SortOrder
  }

  export type ResenhaCountOrderByAggregateInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
  }

  export type ResenhaAvgOrderByAggregateInput = {
    estrelas?: SortOrder
  }

  export type ResenhaMaxOrderByAggregateInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
  }

  export type ResenhaMinOrderByAggregateInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
  }

  export type ResenhaSumOrderByAggregateInput = {
    estrelas?: SortOrder
  }

  export type ResenhaScalarRelationFilter = {
    is?: ResenhaWhereInput
    isNot?: ResenhaWhereInput
  }

  export type usuarioResenhaNomeUsuEstrelasResenhaCompoundUniqueInput = {
    nomeUsu: string
    estrelasResenha: number
  }

  export type usuarioResenhaCountOrderByAggregateInput = {
    nomeUsu?: SortOrder
    estrelasResenha?: SortOrder
  }

  export type usuarioResenhaAvgOrderByAggregateInput = {
    estrelasResenha?: SortOrder
  }

  export type usuarioResenhaMaxOrderByAggregateInput = {
    nomeUsu?: SortOrder
    estrelasResenha?: SortOrder
  }

  export type usuarioResenhaMinOrderByAggregateInput = {
    nomeUsu?: SortOrder
    estrelasResenha?: SortOrder
  }

  export type usuarioResenhaSumOrderByAggregateInput = {
    estrelasResenha?: SortOrder
  }

  export type LivroCreatetagsInput = {
    set: string[]
  }

  export type GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
  }

  export type CatalogoCreateNestedManyWithoutLivrosInput = {
    create?: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput> | CatalogoCreateWithoutLivrosInput[] | CatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutLivrosInput | CatalogoCreateOrConnectWithoutLivrosInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
  }

  export type ResenhaCreateNestedManyWithoutLivroInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
  }

  export type GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
  }

  export type CatalogoUncheckedCreateNestedManyWithoutLivrosInput = {
    create?: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput> | CatalogoCreateWithoutLivrosInput[] | CatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutLivrosInput | CatalogoCreateOrConnectWithoutLivrosInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
  }

  export type ResenhaUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LivroUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    upsert?: GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    set?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    disconnect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    delete?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    update?: GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput[]
    updateMany?: GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput[]
    deleteMany?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
  }

  export type CatalogoUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput> | CatalogoCreateWithoutLivrosInput[] | CatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutLivrosInput | CatalogoCreateOrConnectWithoutLivrosInput[]
    upsert?: CatalogoUpsertWithWhereUniqueWithoutLivrosInput | CatalogoUpsertWithWhereUniqueWithoutLivrosInput[]
    set?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    disconnect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    delete?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    update?: CatalogoUpdateWithWhereUniqueWithoutLivrosInput | CatalogoUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: CatalogoUpdateManyWithWhereWithoutLivrosInput | CatalogoUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
  }

  export type ResenhaUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    upsert?: ResenhaUpsertWithWhereUniqueWithoutLivroInput | ResenhaUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    set?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    disconnect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    delete?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    update?: ResenhaUpdateWithWhereUniqueWithoutLivroInput | ResenhaUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ResenhaUpdateManyWithWhereWithoutLivroInput | ResenhaUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
  }

  export type GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    upsert?: GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    set?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    disconnect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    delete?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    update?: GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput[]
    updateMany?: GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput[]
    deleteMany?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
  }

  export type CatalogoUncheckedUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput> | CatalogoCreateWithoutLivrosInput[] | CatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutLivrosInput | CatalogoCreateOrConnectWithoutLivrosInput[]
    upsert?: CatalogoUpsertWithWhereUniqueWithoutLivrosInput | CatalogoUpsertWithWhereUniqueWithoutLivrosInput[]
    set?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    disconnect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    delete?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    update?: CatalogoUpdateWithWhereUniqueWithoutLivrosInput | CatalogoUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: CatalogoUpdateManyWithWhereWithoutLivrosInput | CatalogoUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
  }

  export type ResenhaUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    upsert?: ResenhaUpsertWithWhereUniqueWithoutLivroInput | ResenhaUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    set?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    disconnect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    delete?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    update?: ResenhaUpdateWithWhereUniqueWithoutLivroInput | ResenhaUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ResenhaUpdateManyWithWhereWithoutLivroInput | ResenhaUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutGruposInput = {
    create?: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
    connectOrCreate?: LivroCreateOrConnectWithoutGruposInput
    connect?: LivroWhereUniqueInput
  }

  export type PerfilCreateNestedManyWithoutGrupoDeLeituraInput = {
    create?: XOR<PerfilCreateWithoutGrupoDeLeituraInput, PerfilUncheckedCreateWithoutGrupoDeLeituraInput> | PerfilCreateWithoutGrupoDeLeituraInput[] | PerfilUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutGrupoDeLeituraInput | PerfilCreateOrConnectWithoutGrupoDeLeituraInput[]
    createMany?: PerfilCreateManyGrupoDeLeituraInputEnvelope
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
  }

  export type PerfilUncheckedCreateNestedManyWithoutGrupoDeLeituraInput = {
    create?: XOR<PerfilCreateWithoutGrupoDeLeituraInput, PerfilUncheckedCreateWithoutGrupoDeLeituraInput> | PerfilCreateWithoutGrupoDeLeituraInput[] | PerfilUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutGrupoDeLeituraInput | PerfilCreateOrConnectWithoutGrupoDeLeituraInput[]
    createMany?: PerfilCreateManyGrupoDeLeituraInputEnvelope
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
  }

  export type LivroUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
    connectOrCreate?: LivroCreateOrConnectWithoutGruposInput
    upsert?: LivroUpsertWithoutGruposInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutGruposInput, LivroUpdateWithoutGruposInput>, LivroUncheckedUpdateWithoutGruposInput>
  }

  export type PerfilUpdateManyWithoutGrupoDeLeituraNestedInput = {
    create?: XOR<PerfilCreateWithoutGrupoDeLeituraInput, PerfilUncheckedCreateWithoutGrupoDeLeituraInput> | PerfilCreateWithoutGrupoDeLeituraInput[] | PerfilUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutGrupoDeLeituraInput | PerfilCreateOrConnectWithoutGrupoDeLeituraInput[]
    upsert?: PerfilUpsertWithWhereUniqueWithoutGrupoDeLeituraInput | PerfilUpsertWithWhereUniqueWithoutGrupoDeLeituraInput[]
    createMany?: PerfilCreateManyGrupoDeLeituraInputEnvelope
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    update?: PerfilUpdateWithWhereUniqueWithoutGrupoDeLeituraInput | PerfilUpdateWithWhereUniqueWithoutGrupoDeLeituraInput[]
    updateMany?: PerfilUpdateManyWithWhereWithoutGrupoDeLeituraInput | PerfilUpdateManyWithWhereWithoutGrupoDeLeituraInput[]
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
  }

  export type PerfilUncheckedUpdateManyWithoutGrupoDeLeituraNestedInput = {
    create?: XOR<PerfilCreateWithoutGrupoDeLeituraInput, PerfilUncheckedCreateWithoutGrupoDeLeituraInput> | PerfilCreateWithoutGrupoDeLeituraInput[] | PerfilUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutGrupoDeLeituraInput | PerfilCreateOrConnectWithoutGrupoDeLeituraInput[]
    upsert?: PerfilUpsertWithWhereUniqueWithoutGrupoDeLeituraInput | PerfilUpsertWithWhereUniqueWithoutGrupoDeLeituraInput[]
    createMany?: PerfilCreateManyGrupoDeLeituraInputEnvelope
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    update?: PerfilUpdateWithWhereUniqueWithoutGrupoDeLeituraInput | PerfilUpdateWithWhereUniqueWithoutGrupoDeLeituraInput[]
    updateMany?: PerfilUpdateManyWithWhereWithoutGrupoDeLeituraInput | PerfilUpdateManyWithWhereWithoutGrupoDeLeituraInput[]
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
  }

  export type admSubordinadosCreateNestedManyWithoutSubordinadoInput = {
    create?: XOR<admSubordinadosCreateWithoutSubordinadoInput, admSubordinadosUncheckedCreateWithoutSubordinadoInput> | admSubordinadosCreateWithoutSubordinadoInput[] | admSubordinadosUncheckedCreateWithoutSubordinadoInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutSubordinadoInput | admSubordinadosCreateOrConnectWithoutSubordinadoInput[]
    createMany?: admSubordinadosCreateManySubordinadoInputEnvelope
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
  }

  export type admSubordinadosCreateNestedManyWithoutAdmInput = {
    create?: XOR<admSubordinadosCreateWithoutAdmInput, admSubordinadosUncheckedCreateWithoutAdmInput> | admSubordinadosCreateWithoutAdmInput[] | admSubordinadosUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutAdmInput | admSubordinadosCreateOrConnectWithoutAdmInput[]
    createMany?: admSubordinadosCreateManyAdmInputEnvelope
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
  }

  export type CatalogoCreateNestedManyWithoutDonoInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
  }

  export type GrupoDeLeituraCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutParticipantesInput
    connect?: GrupoDeLeituraWhereUniqueInput
  }

  export type MetaDeLeituraCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    connect?: MetaDeLeituraWhereUniqueInput
  }

  export type ComunidadeCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ComunidadeCreateOrConnectWithoutParticipantesInput
    connect?: ComunidadeWhereUniqueInput
  }

  export type participantesDesafioCreateNestedManyWithoutParticipantesInput = {
    create?: XOR<participantesDesafioCreateWithoutParticipantesInput, participantesDesafioUncheckedCreateWithoutParticipantesInput> | participantesDesafioCreateWithoutParticipantesInput[] | participantesDesafioUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutParticipantesInput | participantesDesafioCreateOrConnectWithoutParticipantesInput[]
    createMany?: participantesDesafioCreateManyParticipantesInputEnvelope
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
  }

  export type usuarioResenhaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuarioResenhaCreateWithoutUsuarioInput, usuarioResenhaUncheckedCreateWithoutUsuarioInput> | usuarioResenhaCreateWithoutUsuarioInput[] | usuarioResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutUsuarioInput | usuarioResenhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuarioResenhaCreateManyUsuarioInputEnvelope
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
  }

  export type admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput = {
    create?: XOR<admSubordinadosCreateWithoutSubordinadoInput, admSubordinadosUncheckedCreateWithoutSubordinadoInput> | admSubordinadosCreateWithoutSubordinadoInput[] | admSubordinadosUncheckedCreateWithoutSubordinadoInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutSubordinadoInput | admSubordinadosCreateOrConnectWithoutSubordinadoInput[]
    createMany?: admSubordinadosCreateManySubordinadoInputEnvelope
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
  }

  export type admSubordinadosUncheckedCreateNestedManyWithoutAdmInput = {
    create?: XOR<admSubordinadosCreateWithoutAdmInput, admSubordinadosUncheckedCreateWithoutAdmInput> | admSubordinadosCreateWithoutAdmInput[] | admSubordinadosUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutAdmInput | admSubordinadosCreateOrConnectWithoutAdmInput[]
    createMany?: admSubordinadosCreateManyAdmInputEnvelope
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
  }

  export type CatalogoUncheckedCreateNestedManyWithoutDonoInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
  }

  export type MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    connect?: MetaDeLeituraWhereUniqueInput
  }

  export type participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput = {
    create?: XOR<participantesDesafioCreateWithoutParticipantesInput, participantesDesafioUncheckedCreateWithoutParticipantesInput> | participantesDesafioCreateWithoutParticipantesInput[] | participantesDesafioUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutParticipantesInput | participantesDesafioCreateOrConnectWithoutParticipantesInput[]
    createMany?: participantesDesafioCreateManyParticipantesInputEnvelope
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
  }

  export type usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuarioResenhaCreateWithoutUsuarioInput, usuarioResenhaUncheckedCreateWithoutUsuarioInput> | usuarioResenhaCreateWithoutUsuarioInput[] | usuarioResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutUsuarioInput | usuarioResenhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuarioResenhaCreateManyUsuarioInputEnvelope
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
  }

  export type EnumTipoPerfilFieldUpdateOperationsInput = {
    set?: $Enums.TipoPerfil
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type admSubordinadosUpdateManyWithoutSubordinadoNestedInput = {
    create?: XOR<admSubordinadosCreateWithoutSubordinadoInput, admSubordinadosUncheckedCreateWithoutSubordinadoInput> | admSubordinadosCreateWithoutSubordinadoInput[] | admSubordinadosUncheckedCreateWithoutSubordinadoInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutSubordinadoInput | admSubordinadosCreateOrConnectWithoutSubordinadoInput[]
    upsert?: admSubordinadosUpsertWithWhereUniqueWithoutSubordinadoInput | admSubordinadosUpsertWithWhereUniqueWithoutSubordinadoInput[]
    createMany?: admSubordinadosCreateManySubordinadoInputEnvelope
    set?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    disconnect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    delete?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    update?: admSubordinadosUpdateWithWhereUniqueWithoutSubordinadoInput | admSubordinadosUpdateWithWhereUniqueWithoutSubordinadoInput[]
    updateMany?: admSubordinadosUpdateManyWithWhereWithoutSubordinadoInput | admSubordinadosUpdateManyWithWhereWithoutSubordinadoInput[]
    deleteMany?: admSubordinadosScalarWhereInput | admSubordinadosScalarWhereInput[]
  }

  export type admSubordinadosUpdateManyWithoutAdmNestedInput = {
    create?: XOR<admSubordinadosCreateWithoutAdmInput, admSubordinadosUncheckedCreateWithoutAdmInput> | admSubordinadosCreateWithoutAdmInput[] | admSubordinadosUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutAdmInput | admSubordinadosCreateOrConnectWithoutAdmInput[]
    upsert?: admSubordinadosUpsertWithWhereUniqueWithoutAdmInput | admSubordinadosUpsertWithWhereUniqueWithoutAdmInput[]
    createMany?: admSubordinadosCreateManyAdmInputEnvelope
    set?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    disconnect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    delete?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    update?: admSubordinadosUpdateWithWhereUniqueWithoutAdmInput | admSubordinadosUpdateWithWhereUniqueWithoutAdmInput[]
    updateMany?: admSubordinadosUpdateManyWithWhereWithoutAdmInput | admSubordinadosUpdateManyWithWhereWithoutAdmInput[]
    deleteMany?: admSubordinadosScalarWhereInput | admSubordinadosScalarWhereInput[]
  }

  export type CatalogoUpdateManyWithoutDonoNestedInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    upsert?: CatalogoUpsertWithWhereUniqueWithoutDonoInput | CatalogoUpsertWithWhereUniqueWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    set?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    disconnect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    delete?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    update?: CatalogoUpdateWithWhereUniqueWithoutDonoInput | CatalogoUpdateWithWhereUniqueWithoutDonoInput[]
    updateMany?: CatalogoUpdateManyWithWhereWithoutDonoInput | CatalogoUpdateManyWithWhereWithoutDonoInput[]
    deleteMany?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
  }

  export type GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutParticipantesInput
    upsert?: GrupoDeLeituraUpsertWithoutParticipantesInput
    disconnect?: GrupoDeLeituraWhereInput | boolean
    delete?: GrupoDeLeituraWhereInput | boolean
    connect?: GrupoDeLeituraWhereUniqueInput
    update?: XOR<XOR<GrupoDeLeituraUpdateToOneWithWhereWithoutParticipantesInput, GrupoDeLeituraUpdateWithoutParticipantesInput>, GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput>
  }

  export type MetaDeLeituraUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    upsert?: MetaDeLeituraUpsertWithoutUsuarioInput
    disconnect?: MetaDeLeituraWhereInput | boolean
    delete?: MetaDeLeituraWhereInput | boolean
    connect?: MetaDeLeituraWhereUniqueInput
    update?: XOR<XOR<MetaDeLeituraUpdateToOneWithWhereWithoutUsuarioInput, MetaDeLeituraUpdateWithoutUsuarioInput>, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComunidadeUpdateOneWithoutParticipantesNestedInput = {
    create?: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ComunidadeCreateOrConnectWithoutParticipantesInput
    upsert?: ComunidadeUpsertWithoutParticipantesInput
    disconnect?: ComunidadeWhereInput | boolean
    delete?: ComunidadeWhereInput | boolean
    connect?: ComunidadeWhereUniqueInput
    update?: XOR<XOR<ComunidadeUpdateToOneWithWhereWithoutParticipantesInput, ComunidadeUpdateWithoutParticipantesInput>, ComunidadeUncheckedUpdateWithoutParticipantesInput>
  }

  export type participantesDesafioUpdateManyWithoutParticipantesNestedInput = {
    create?: XOR<participantesDesafioCreateWithoutParticipantesInput, participantesDesafioUncheckedCreateWithoutParticipantesInput> | participantesDesafioCreateWithoutParticipantesInput[] | participantesDesafioUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutParticipantesInput | participantesDesafioCreateOrConnectWithoutParticipantesInput[]
    upsert?: participantesDesafioUpsertWithWhereUniqueWithoutParticipantesInput | participantesDesafioUpsertWithWhereUniqueWithoutParticipantesInput[]
    createMany?: participantesDesafioCreateManyParticipantesInputEnvelope
    set?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    disconnect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    delete?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    update?: participantesDesafioUpdateWithWhereUniqueWithoutParticipantesInput | participantesDesafioUpdateWithWhereUniqueWithoutParticipantesInput[]
    updateMany?: participantesDesafioUpdateManyWithWhereWithoutParticipantesInput | participantesDesafioUpdateManyWithWhereWithoutParticipantesInput[]
    deleteMany?: participantesDesafioScalarWhereInput | participantesDesafioScalarWhereInput[]
  }

  export type usuarioResenhaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuarioResenhaCreateWithoutUsuarioInput, usuarioResenhaUncheckedCreateWithoutUsuarioInput> | usuarioResenhaCreateWithoutUsuarioInput[] | usuarioResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutUsuarioInput | usuarioResenhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuarioResenhaUpsertWithWhereUniqueWithoutUsuarioInput | usuarioResenhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuarioResenhaCreateManyUsuarioInputEnvelope
    set?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    disconnect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    delete?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    update?: usuarioResenhaUpdateWithWhereUniqueWithoutUsuarioInput | usuarioResenhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuarioResenhaUpdateManyWithWhereWithoutUsuarioInput | usuarioResenhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuarioResenhaScalarWhereInput | usuarioResenhaScalarWhereInput[]
  }

  export type admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput = {
    create?: XOR<admSubordinadosCreateWithoutSubordinadoInput, admSubordinadosUncheckedCreateWithoutSubordinadoInput> | admSubordinadosCreateWithoutSubordinadoInput[] | admSubordinadosUncheckedCreateWithoutSubordinadoInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutSubordinadoInput | admSubordinadosCreateOrConnectWithoutSubordinadoInput[]
    upsert?: admSubordinadosUpsertWithWhereUniqueWithoutSubordinadoInput | admSubordinadosUpsertWithWhereUniqueWithoutSubordinadoInput[]
    createMany?: admSubordinadosCreateManySubordinadoInputEnvelope
    set?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    disconnect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    delete?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    update?: admSubordinadosUpdateWithWhereUniqueWithoutSubordinadoInput | admSubordinadosUpdateWithWhereUniqueWithoutSubordinadoInput[]
    updateMany?: admSubordinadosUpdateManyWithWhereWithoutSubordinadoInput | admSubordinadosUpdateManyWithWhereWithoutSubordinadoInput[]
    deleteMany?: admSubordinadosScalarWhereInput | admSubordinadosScalarWhereInput[]
  }

  export type admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput = {
    create?: XOR<admSubordinadosCreateWithoutAdmInput, admSubordinadosUncheckedCreateWithoutAdmInput> | admSubordinadosCreateWithoutAdmInput[] | admSubordinadosUncheckedCreateWithoutAdmInput[]
    connectOrCreate?: admSubordinadosCreateOrConnectWithoutAdmInput | admSubordinadosCreateOrConnectWithoutAdmInput[]
    upsert?: admSubordinadosUpsertWithWhereUniqueWithoutAdmInput | admSubordinadosUpsertWithWhereUniqueWithoutAdmInput[]
    createMany?: admSubordinadosCreateManyAdmInputEnvelope
    set?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    disconnect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    delete?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    connect?: admSubordinadosWhereUniqueInput | admSubordinadosWhereUniqueInput[]
    update?: admSubordinadosUpdateWithWhereUniqueWithoutAdmInput | admSubordinadosUpdateWithWhereUniqueWithoutAdmInput[]
    updateMany?: admSubordinadosUpdateManyWithWhereWithoutAdmInput | admSubordinadosUpdateManyWithWhereWithoutAdmInput[]
    deleteMany?: admSubordinadosScalarWhereInput | admSubordinadosScalarWhereInput[]
  }

  export type CatalogoUncheckedUpdateManyWithoutDonoNestedInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    upsert?: CatalogoUpsertWithWhereUniqueWithoutDonoInput | CatalogoUpsertWithWhereUniqueWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    set?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    disconnect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    delete?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    update?: CatalogoUpdateWithWhereUniqueWithoutDonoInput | CatalogoUpdateWithWhereUniqueWithoutDonoInput[]
    updateMany?: CatalogoUpdateManyWithWhereWithoutDonoInput | CatalogoUpdateManyWithWhereWithoutDonoInput[]
    deleteMany?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
  }

  export type MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    upsert?: MetaDeLeituraUpsertWithoutUsuarioInput
    disconnect?: MetaDeLeituraWhereInput | boolean
    delete?: MetaDeLeituraWhereInput | boolean
    connect?: MetaDeLeituraWhereUniqueInput
    update?: XOR<XOR<MetaDeLeituraUpdateToOneWithWhereWithoutUsuarioInput, MetaDeLeituraUpdateWithoutUsuarioInput>, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
  }

  export type participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput = {
    create?: XOR<participantesDesafioCreateWithoutParticipantesInput, participantesDesafioUncheckedCreateWithoutParticipantesInput> | participantesDesafioCreateWithoutParticipantesInput[] | participantesDesafioUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutParticipantesInput | participantesDesafioCreateOrConnectWithoutParticipantesInput[]
    upsert?: participantesDesafioUpsertWithWhereUniqueWithoutParticipantesInput | participantesDesafioUpsertWithWhereUniqueWithoutParticipantesInput[]
    createMany?: participantesDesafioCreateManyParticipantesInputEnvelope
    set?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    disconnect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    delete?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    update?: participantesDesafioUpdateWithWhereUniqueWithoutParticipantesInput | participantesDesafioUpdateWithWhereUniqueWithoutParticipantesInput[]
    updateMany?: participantesDesafioUpdateManyWithWhereWithoutParticipantesInput | participantesDesafioUpdateManyWithWhereWithoutParticipantesInput[]
    deleteMany?: participantesDesafioScalarWhereInput | participantesDesafioScalarWhereInput[]
  }

  export type usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuarioResenhaCreateWithoutUsuarioInput, usuarioResenhaUncheckedCreateWithoutUsuarioInput> | usuarioResenhaCreateWithoutUsuarioInput[] | usuarioResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutUsuarioInput | usuarioResenhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuarioResenhaUpsertWithWhereUniqueWithoutUsuarioInput | usuarioResenhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuarioResenhaCreateManyUsuarioInputEnvelope
    set?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    disconnect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    delete?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    update?: usuarioResenhaUpdateWithWhereUniqueWithoutUsuarioInput | usuarioResenhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuarioResenhaUpdateManyWithWhereWithoutUsuarioInput | usuarioResenhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuarioResenhaScalarWhereInput | usuarioResenhaScalarWhereInput[]
  }

  export type PerfilCreateNestedOneWithoutAdmsInput = {
    create?: XOR<PerfilCreateWithoutAdmsInput, PerfilUncheckedCreateWithoutAdmsInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutAdmsInput
    connect?: PerfilWhereUniqueInput
  }

  export type PerfilCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
  }

  export type PerfilUpdateOneRequiredWithoutAdmsNestedInput = {
    create?: XOR<PerfilCreateWithoutAdmsInput, PerfilUncheckedCreateWithoutAdmsInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutAdmsInput
    upsert?: PerfilUpsertWithoutAdmsInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutAdmsInput, PerfilUpdateWithoutAdmsInput>, PerfilUncheckedUpdateWithoutAdmsInput>
  }

  export type PerfilUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    upsert?: PerfilUpsertWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuariosInput, PerfilUpdateWithoutUsuariosInput>, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type PerfilCreateNestedOneWithoutDesafioInput = {
    create?: XOR<PerfilCreateWithoutDesafioInput, PerfilUncheckedCreateWithoutDesafioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutDesafioInput
    connect?: PerfilWhereUniqueInput
  }

  export type CatalogoCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<CatalogoCreateWithoutParticipantesInput, CatalogoUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutParticipantesInput
    connect?: CatalogoWhereUniqueInput
  }

  export type PerfilUpdateOneRequiredWithoutDesafioNestedInput = {
    create?: XOR<PerfilCreateWithoutDesafioInput, PerfilUncheckedCreateWithoutDesafioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutDesafioInput
    upsert?: PerfilUpsertWithoutDesafioInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutDesafioInput, PerfilUpdateWithoutDesafioInput>, PerfilUncheckedUpdateWithoutDesafioInput>
  }

  export type CatalogoUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<CatalogoCreateWithoutParticipantesInput, CatalogoUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutParticipantesInput
    upsert?: CatalogoUpsertWithoutParticipantesInput
    connect?: CatalogoWhereUniqueInput
    update?: XOR<XOR<CatalogoUpdateToOneWithWhereWithoutParticipantesInput, CatalogoUpdateWithoutParticipantesInput>, CatalogoUncheckedUpdateWithoutParticipantesInput>
  }

  export type CatalogoCreatetagsInput = {
    set: string[]
  }

  export type LivroCreateNestedManyWithoutCatalagoInput = {
    create?: XOR<LivroCreateWithoutCatalagoInput, LivroUncheckedCreateWithoutCatalagoInput> | LivroCreateWithoutCatalagoInput[] | LivroUncheckedCreateWithoutCatalagoInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutCatalagoInput | LivroCreateOrConnectWithoutCatalagoInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type PerfilCreateNestedOneWithoutCatalogosCriadosInput = {
    create?: XOR<PerfilCreateWithoutCatalogosCriadosInput, PerfilUncheckedCreateWithoutCatalogosCriadosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutCatalogosCriadosInput
    connect?: PerfilWhereUniqueInput
  }

  export type ConquistaCreateNestedManyWithoutDesafioInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
  }

  export type participantesDesafioCreateNestedManyWithoutDesafioInput = {
    create?: XOR<participantesDesafioCreateWithoutDesafioInput, participantesDesafioUncheckedCreateWithoutDesafioInput> | participantesDesafioCreateWithoutDesafioInput[] | participantesDesafioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutDesafioInput | participantesDesafioCreateOrConnectWithoutDesafioInput[]
    createMany?: participantesDesafioCreateManyDesafioInputEnvelope
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
  }

  export type LivroUncheckedCreateNestedManyWithoutCatalagoInput = {
    create?: XOR<LivroCreateWithoutCatalagoInput, LivroUncheckedCreateWithoutCatalagoInput> | LivroCreateWithoutCatalagoInput[] | LivroUncheckedCreateWithoutCatalagoInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutCatalagoInput | LivroCreateOrConnectWithoutCatalagoInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type ConquistaUncheckedCreateNestedManyWithoutDesafioInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
  }

  export type participantesDesafioUncheckedCreateNestedManyWithoutDesafioInput = {
    create?: XOR<participantesDesafioCreateWithoutDesafioInput, participantesDesafioUncheckedCreateWithoutDesafioInput> | participantesDesafioCreateWithoutDesafioInput[] | participantesDesafioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutDesafioInput | participantesDesafioCreateOrConnectWithoutDesafioInput[]
    createMany?: participantesDesafioCreateManyDesafioInputEnvelope
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
  }

  export type CatalogoUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTipoCatalogoFieldUpdateOperationsInput = {
    set?: $Enums.TipoCatalogo
  }

  export type LivroUpdateManyWithoutCatalagoNestedInput = {
    create?: XOR<LivroCreateWithoutCatalagoInput, LivroUncheckedCreateWithoutCatalagoInput> | LivroCreateWithoutCatalagoInput[] | LivroUncheckedCreateWithoutCatalagoInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutCatalagoInput | LivroCreateOrConnectWithoutCatalagoInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutCatalagoInput | LivroUpsertWithWhereUniqueWithoutCatalagoInput[]
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutCatalagoInput | LivroUpdateWithWhereUniqueWithoutCatalagoInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutCatalagoInput | LivroUpdateManyWithWhereWithoutCatalagoInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type PerfilUpdateOneRequiredWithoutCatalogosCriadosNestedInput = {
    create?: XOR<PerfilCreateWithoutCatalogosCriadosInput, PerfilUncheckedCreateWithoutCatalogosCriadosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutCatalogosCriadosInput
    upsert?: PerfilUpsertWithoutCatalogosCriadosInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutCatalogosCriadosInput, PerfilUpdateWithoutCatalogosCriadosInput>, PerfilUncheckedUpdateWithoutCatalogosCriadosInput>
  }

  export type ConquistaUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    upsert?: ConquistaUpsertWithWhereUniqueWithoutDesafioInput | ConquistaUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    set?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    disconnect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    delete?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    update?: ConquistaUpdateWithWhereUniqueWithoutDesafioInput | ConquistaUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: ConquistaUpdateManyWithWhereWithoutDesafioInput | ConquistaUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
  }

  export type participantesDesafioUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<participantesDesafioCreateWithoutDesafioInput, participantesDesafioUncheckedCreateWithoutDesafioInput> | participantesDesafioCreateWithoutDesafioInput[] | participantesDesafioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutDesafioInput | participantesDesafioCreateOrConnectWithoutDesafioInput[]
    upsert?: participantesDesafioUpsertWithWhereUniqueWithoutDesafioInput | participantesDesafioUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: participantesDesafioCreateManyDesafioInputEnvelope
    set?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    disconnect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    delete?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    update?: participantesDesafioUpdateWithWhereUniqueWithoutDesafioInput | participantesDesafioUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: participantesDesafioUpdateManyWithWhereWithoutDesafioInput | participantesDesafioUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: participantesDesafioScalarWhereInput | participantesDesafioScalarWhereInput[]
  }

  export type LivroUncheckedUpdateManyWithoutCatalagoNestedInput = {
    create?: XOR<LivroCreateWithoutCatalagoInput, LivroUncheckedCreateWithoutCatalagoInput> | LivroCreateWithoutCatalagoInput[] | LivroUncheckedCreateWithoutCatalagoInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutCatalagoInput | LivroCreateOrConnectWithoutCatalagoInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutCatalagoInput | LivroUpsertWithWhereUniqueWithoutCatalagoInput[]
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutCatalagoInput | LivroUpdateWithWhereUniqueWithoutCatalagoInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutCatalagoInput | LivroUpdateManyWithWhereWithoutCatalagoInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type ConquistaUncheckedUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    upsert?: ConquistaUpsertWithWhereUniqueWithoutDesafioInput | ConquistaUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    set?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    disconnect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    delete?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    update?: ConquistaUpdateWithWhereUniqueWithoutDesafioInput | ConquistaUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: ConquistaUpdateManyWithWhereWithoutDesafioInput | ConquistaUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
  }

  export type participantesDesafioUncheckedUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<participantesDesafioCreateWithoutDesafioInput, participantesDesafioUncheckedCreateWithoutDesafioInput> | participantesDesafioCreateWithoutDesafioInput[] | participantesDesafioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: participantesDesafioCreateOrConnectWithoutDesafioInput | participantesDesafioCreateOrConnectWithoutDesafioInput[]
    upsert?: participantesDesafioUpsertWithWhereUniqueWithoutDesafioInput | participantesDesafioUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: participantesDesafioCreateManyDesafioInputEnvelope
    set?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    disconnect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    delete?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    connect?: participantesDesafioWhereUniqueInput | participantesDesafioWhereUniqueInput[]
    update?: participantesDesafioUpdateWithWhereUniqueWithoutDesafioInput | participantesDesafioUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: participantesDesafioUpdateManyWithWhereWithoutDesafioInput | participantesDesafioUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: participantesDesafioScalarWhereInput | participantesDesafioScalarWhereInput[]
  }

  export type PerfilCreateNestedOneWithoutMetaDeLeituraInput = {
    create?: XOR<PerfilCreateWithoutMetaDeLeituraInput, PerfilUncheckedCreateWithoutMetaDeLeituraInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutMetaDeLeituraInput
    connect?: PerfilWhereUniqueInput
  }

  export type ConquistaCreateNestedOneWithoutMetaInput = {
    create?: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
    connectOrCreate?: ConquistaCreateOrConnectWithoutMetaInput
    connect?: ConquistaWhereUniqueInput
  }

  export type PerfilUpdateOneRequiredWithoutMetaDeLeituraNestedInput = {
    create?: XOR<PerfilCreateWithoutMetaDeLeituraInput, PerfilUncheckedCreateWithoutMetaDeLeituraInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutMetaDeLeituraInput
    upsert?: PerfilUpsertWithoutMetaDeLeituraInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutMetaDeLeituraInput, PerfilUpdateWithoutMetaDeLeituraInput>, PerfilUncheckedUpdateWithoutMetaDeLeituraInput>
  }

  export type ConquistaUpdateOneRequiredWithoutMetaNestedInput = {
    create?: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
    connectOrCreate?: ConquistaCreateOrConnectWithoutMetaInput
    upsert?: ConquistaUpsertWithoutMetaInput
    connect?: ConquistaWhereUniqueInput
    update?: XOR<XOR<ConquistaUpdateToOneWithWhereWithoutMetaInput, ConquistaUpdateWithoutMetaInput>, ConquistaUncheckedUpdateWithoutMetaInput>
  }

  export type MetaDeLeituraCreateNestedOneWithoutConquistaInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput
    connect?: MetaDeLeituraWhereUniqueInput
  }

  export type CatalogoCreateNestedOneWithoutMedalhasInput = {
    create?: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutMedalhasInput
    connect?: CatalogoWhereUniqueInput
  }

  export type MetaDeLeituraUncheckedCreateNestedOneWithoutConquistaInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput
    connect?: MetaDeLeituraWhereUniqueInput
  }

  export type MetaDeLeituraUpdateOneWithoutConquistaNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput
    upsert?: MetaDeLeituraUpsertWithoutConquistaInput
    disconnect?: MetaDeLeituraWhereInput | boolean
    delete?: MetaDeLeituraWhereInput | boolean
    connect?: MetaDeLeituraWhereUniqueInput
    update?: XOR<XOR<MetaDeLeituraUpdateToOneWithWhereWithoutConquistaInput, MetaDeLeituraUpdateWithoutConquistaInput>, MetaDeLeituraUncheckedUpdateWithoutConquistaInput>
  }

  export type CatalogoUpdateOneWithoutMedalhasNestedInput = {
    create?: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutMedalhasInput
    upsert?: CatalogoUpsertWithoutMedalhasInput
    disconnect?: CatalogoWhereInput | boolean
    delete?: CatalogoWhereInput | boolean
    connect?: CatalogoWhereUniqueInput
    update?: XOR<XOR<CatalogoUpdateToOneWithWhereWithoutMedalhasInput, CatalogoUpdateWithoutMedalhasInput>, CatalogoUncheckedUpdateWithoutMedalhasInput>
  }

  export type MetaDeLeituraUncheckedUpdateOneWithoutConquistaNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput
    upsert?: MetaDeLeituraUpsertWithoutConquistaInput
    disconnect?: MetaDeLeituraWhereInput | boolean
    delete?: MetaDeLeituraWhereInput | boolean
    connect?: MetaDeLeituraWhereUniqueInput
    update?: XOR<XOR<MetaDeLeituraUpdateToOneWithWhereWithoutConquistaInput, MetaDeLeituraUpdateWithoutConquistaInput>, MetaDeLeituraUncheckedUpdateWithoutConquistaInput>
  }

  export type PerfilCreateNestedManyWithoutComunidadeInput = {
    create?: XOR<PerfilCreateWithoutComunidadeInput, PerfilUncheckedCreateWithoutComunidadeInput> | PerfilCreateWithoutComunidadeInput[] | PerfilUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutComunidadeInput | PerfilCreateOrConnectWithoutComunidadeInput[]
    createMany?: PerfilCreateManyComunidadeInputEnvelope
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
  }

  export type PerfilUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: XOR<PerfilCreateWithoutComunidadeInput, PerfilUncheckedCreateWithoutComunidadeInput> | PerfilCreateWithoutComunidadeInput[] | PerfilUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutComunidadeInput | PerfilCreateOrConnectWithoutComunidadeInput[]
    createMany?: PerfilCreateManyComunidadeInputEnvelope
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
  }

  export type PerfilUpdateManyWithoutComunidadeNestedInput = {
    create?: XOR<PerfilCreateWithoutComunidadeInput, PerfilUncheckedCreateWithoutComunidadeInput> | PerfilCreateWithoutComunidadeInput[] | PerfilUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutComunidadeInput | PerfilCreateOrConnectWithoutComunidadeInput[]
    upsert?: PerfilUpsertWithWhereUniqueWithoutComunidadeInput | PerfilUpsertWithWhereUniqueWithoutComunidadeInput[]
    createMany?: PerfilCreateManyComunidadeInputEnvelope
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    update?: PerfilUpdateWithWhereUniqueWithoutComunidadeInput | PerfilUpdateWithWhereUniqueWithoutComunidadeInput[]
    updateMany?: PerfilUpdateManyWithWhereWithoutComunidadeInput | PerfilUpdateManyWithWhereWithoutComunidadeInput[]
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
  }

  export type PerfilUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: XOR<PerfilCreateWithoutComunidadeInput, PerfilUncheckedCreateWithoutComunidadeInput> | PerfilCreateWithoutComunidadeInput[] | PerfilUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutComunidadeInput | PerfilCreateOrConnectWithoutComunidadeInput[]
    upsert?: PerfilUpsertWithWhereUniqueWithoutComunidadeInput | PerfilUpsertWithWhereUniqueWithoutComunidadeInput[]
    createMany?: PerfilCreateManyComunidadeInputEnvelope
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    update?: PerfilUpdateWithWhereUniqueWithoutComunidadeInput | PerfilUpdateWithWhereUniqueWithoutComunidadeInput[]
    updateMany?: PerfilUpdateManyWithWhereWithoutComunidadeInput | PerfilUpdateManyWithWhereWithoutComunidadeInput[]
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutResenhaInput = {
    create?: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
    connectOrCreate?: LivroCreateOrConnectWithoutResenhaInput
    connect?: LivroWhereUniqueInput
  }

  export type usuarioResenhaCreateNestedManyWithoutResenhaInput = {
    create?: XOR<usuarioResenhaCreateWithoutResenhaInput, usuarioResenhaUncheckedCreateWithoutResenhaInput> | usuarioResenhaCreateWithoutResenhaInput[] | usuarioResenhaUncheckedCreateWithoutResenhaInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutResenhaInput | usuarioResenhaCreateOrConnectWithoutResenhaInput[]
    createMany?: usuarioResenhaCreateManyResenhaInputEnvelope
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
  }

  export type usuarioResenhaUncheckedCreateNestedManyWithoutResenhaInput = {
    create?: XOR<usuarioResenhaCreateWithoutResenhaInput, usuarioResenhaUncheckedCreateWithoutResenhaInput> | usuarioResenhaCreateWithoutResenhaInput[] | usuarioResenhaUncheckedCreateWithoutResenhaInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutResenhaInput | usuarioResenhaCreateOrConnectWithoutResenhaInput[]
    createMany?: usuarioResenhaCreateManyResenhaInputEnvelope
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
  }

  export type LivroUpdateOneRequiredWithoutResenhaNestedInput = {
    create?: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
    connectOrCreate?: LivroCreateOrConnectWithoutResenhaInput
    upsert?: LivroUpsertWithoutResenhaInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutResenhaInput, LivroUpdateWithoutResenhaInput>, LivroUncheckedUpdateWithoutResenhaInput>
  }

  export type usuarioResenhaUpdateManyWithoutResenhaNestedInput = {
    create?: XOR<usuarioResenhaCreateWithoutResenhaInput, usuarioResenhaUncheckedCreateWithoutResenhaInput> | usuarioResenhaCreateWithoutResenhaInput[] | usuarioResenhaUncheckedCreateWithoutResenhaInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutResenhaInput | usuarioResenhaCreateOrConnectWithoutResenhaInput[]
    upsert?: usuarioResenhaUpsertWithWhereUniqueWithoutResenhaInput | usuarioResenhaUpsertWithWhereUniqueWithoutResenhaInput[]
    createMany?: usuarioResenhaCreateManyResenhaInputEnvelope
    set?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    disconnect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    delete?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    update?: usuarioResenhaUpdateWithWhereUniqueWithoutResenhaInput | usuarioResenhaUpdateWithWhereUniqueWithoutResenhaInput[]
    updateMany?: usuarioResenhaUpdateManyWithWhereWithoutResenhaInput | usuarioResenhaUpdateManyWithWhereWithoutResenhaInput[]
    deleteMany?: usuarioResenhaScalarWhereInput | usuarioResenhaScalarWhereInput[]
  }

  export type usuarioResenhaUncheckedUpdateManyWithoutResenhaNestedInput = {
    create?: XOR<usuarioResenhaCreateWithoutResenhaInput, usuarioResenhaUncheckedCreateWithoutResenhaInput> | usuarioResenhaCreateWithoutResenhaInput[] | usuarioResenhaUncheckedCreateWithoutResenhaInput[]
    connectOrCreate?: usuarioResenhaCreateOrConnectWithoutResenhaInput | usuarioResenhaCreateOrConnectWithoutResenhaInput[]
    upsert?: usuarioResenhaUpsertWithWhereUniqueWithoutResenhaInput | usuarioResenhaUpsertWithWhereUniqueWithoutResenhaInput[]
    createMany?: usuarioResenhaCreateManyResenhaInputEnvelope
    set?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    disconnect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    delete?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    connect?: usuarioResenhaWhereUniqueInput | usuarioResenhaWhereUniqueInput[]
    update?: usuarioResenhaUpdateWithWhereUniqueWithoutResenhaInput | usuarioResenhaUpdateWithWhereUniqueWithoutResenhaInput[]
    updateMany?: usuarioResenhaUpdateManyWithWhereWithoutResenhaInput | usuarioResenhaUpdateManyWithWhereWithoutResenhaInput[]
    deleteMany?: usuarioResenhaScalarWhereInput | usuarioResenhaScalarWhereInput[]
  }

  export type PerfilCreateNestedOneWithoutResenhasInput = {
    create?: XOR<PerfilCreateWithoutResenhasInput, PerfilUncheckedCreateWithoutResenhasInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutResenhasInput
    connect?: PerfilWhereUniqueInput
  }

  export type ResenhaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ResenhaCreateWithoutUsuariosInput, ResenhaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ResenhaCreateOrConnectWithoutUsuariosInput
    connect?: ResenhaWhereUniqueInput
  }

  export type PerfilUpdateOneRequiredWithoutResenhasNestedInput = {
    create?: XOR<PerfilCreateWithoutResenhasInput, PerfilUncheckedCreateWithoutResenhasInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutResenhasInput
    upsert?: PerfilUpsertWithoutResenhasInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutResenhasInput, PerfilUpdateWithoutResenhasInput>, PerfilUncheckedUpdateWithoutResenhasInput>
  }

  export type ResenhaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ResenhaCreateWithoutUsuariosInput, ResenhaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ResenhaCreateOrConnectWithoutUsuariosInput
    upsert?: ResenhaUpsertWithoutUsuariosInput
    connect?: ResenhaWhereUniqueInput
    update?: XOR<XOR<ResenhaUpdateToOneWithWhereWithoutUsuariosInput, ResenhaUpdateWithoutUsuariosInput>, ResenhaUncheckedUpdateWithoutUsuariosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoPerfilFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPerfil | EnumTipoPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerfilFilter<$PrismaModel> | $Enums.TipoPerfil
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipoPerfilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPerfil | EnumTipoPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPerfil[] | ListEnumTipoPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerfilWithAggregatesFilter<$PrismaModel> | $Enums.TipoPerfil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPerfilFilter<$PrismaModel>
    _max?: NestedEnumTipoPerfilFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoCatalogoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoFilter<$PrismaModel> | $Enums.TipoCatalogo
  }

  export type NestedEnumTipoCatalogoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCatalogo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCatalogoFilter<$PrismaModel>
    _max?: NestedEnumTipoCatalogoFilter<$PrismaModel>
  }

  export type GrupoDeLeituraCreateWithoutLeituraConjuntaInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    participantes?: PerfilCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    participantes?: PerfilUncheckedCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraWhereUniqueInput
    create: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope = {
    data: GrupoDeLeituraCreateManyLeituraConjuntaInput | GrupoDeLeituraCreateManyLeituraConjuntaInput[]
    skipDuplicates?: boolean
  }

  export type CatalogoCreateWithoutLivrosInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    dono: PerfilCreateNestedOneWithoutCatalogosCriadosInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
    participantes?: participantesDesafioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutLivrosInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
    participantes?: participantesDesafioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutLivrosInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput>
  }

  export type ResenhaCreateWithoutLivroInput = {
    estrelas: number
    avaliacao: string
    usuarios?: usuarioResenhaCreateNestedManyWithoutResenhaInput
  }

  export type ResenhaUncheckedCreateWithoutLivroInput = {
    estrelas: number
    avaliacao: string
    usuarios?: usuarioResenhaUncheckedCreateNestedManyWithoutResenhaInput
  }

  export type ResenhaCreateOrConnectWithoutLivroInput = {
    where: ResenhaWhereUniqueInput
    create: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput>
  }

  export type ResenhaCreateManyLivroInputEnvelope = {
    data: ResenhaCreateManyLivroInput | ResenhaCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraWhereUniqueInput
    update: XOR<GrupoDeLeituraUpdateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedUpdateWithoutLeituraConjuntaInput>
    create: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraWhereUniqueInput
    data: XOR<GrupoDeLeituraUpdateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedUpdateWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraScalarWhereInput
    data: XOR<GrupoDeLeituraUpdateManyMutationInput, GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraScalarWhereInput = {
    AND?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
    OR?: GrupoDeLeituraScalarWhereInput[]
    NOT?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
    nome?: StringFilter<"GrupoDeLeitura"> | string
    dataCriacao?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringFilter<"GrupoDeLeitura"> | string
  }

  export type CatalogoUpsertWithWhereUniqueWithoutLivrosInput = {
    where: CatalogoWhereUniqueInput
    update: XOR<CatalogoUpdateWithoutLivrosInput, CatalogoUncheckedUpdateWithoutLivrosInput>
    create: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput>
  }

  export type CatalogoUpdateWithWhereUniqueWithoutLivrosInput = {
    where: CatalogoWhereUniqueInput
    data: XOR<CatalogoUpdateWithoutLivrosInput, CatalogoUncheckedUpdateWithoutLivrosInput>
  }

  export type CatalogoUpdateManyWithWhereWithoutLivrosInput = {
    where: CatalogoScalarWhereInput
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyWithoutLivrosInput>
  }

  export type CatalogoScalarWhereInput = {
    AND?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
    OR?: CatalogoScalarWhereInput[]
    NOT?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
    tema?: StringFilter<"Catalogo"> | string
    curtidas?: IntFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableFilter<"Catalogo"> | string | null
    criterio?: StringNullableFilter<"Catalogo"> | string | null
    idDono?: IntFilter<"Catalogo"> | number
  }

  export type ResenhaUpsertWithWhereUniqueWithoutLivroInput = {
    where: ResenhaWhereUniqueInput
    update: XOR<ResenhaUpdateWithoutLivroInput, ResenhaUncheckedUpdateWithoutLivroInput>
    create: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput>
  }

  export type ResenhaUpdateWithWhereUniqueWithoutLivroInput = {
    where: ResenhaWhereUniqueInput
    data: XOR<ResenhaUpdateWithoutLivroInput, ResenhaUncheckedUpdateWithoutLivroInput>
  }

  export type ResenhaUpdateManyWithWhereWithoutLivroInput = {
    where: ResenhaScalarWhereInput
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyWithoutLivroInput>
  }

  export type ResenhaScalarWhereInput = {
    AND?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
    OR?: ResenhaScalarWhereInput[]
    NOT?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
    estrelas?: IntFilter<"Resenha"> | number
    avaliacao?: StringFilter<"Resenha"> | string
    tituloLivro?: StringFilter<"Resenha"> | string
  }

  export type LivroCreateWithoutGruposInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    catalago?: CatalogoCreateNestedManyWithoutLivrosInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateWithoutGruposInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    catalago?: CatalogoUncheckedCreateNestedManyWithoutLivrosInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroCreateOrConnectWithoutGruposInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
  }

  export type PerfilCreateWithoutGrupoDeLeituraInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutGrupoDeLeituraInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutGrupoDeLeituraInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutGrupoDeLeituraInput, PerfilUncheckedCreateWithoutGrupoDeLeituraInput>
  }

  export type PerfilCreateManyGrupoDeLeituraInputEnvelope = {
    data: PerfilCreateManyGrupoDeLeituraInput | PerfilCreateManyGrupoDeLeituraInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithoutGruposInput = {
    update: XOR<LivroUpdateWithoutGruposInput, LivroUncheckedUpdateWithoutGruposInput>
    create: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutGruposInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutGruposInput, LivroUncheckedUpdateWithoutGruposInput>
  }

  export type LivroUpdateWithoutGruposInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    catalago?: CatalogoUpdateManyWithoutLivrosNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateWithoutGruposInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    catalago?: CatalogoUncheckedUpdateManyWithoutLivrosNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type PerfilUpsertWithWhereUniqueWithoutGrupoDeLeituraInput = {
    where: PerfilWhereUniqueInput
    update: XOR<PerfilUpdateWithoutGrupoDeLeituraInput, PerfilUncheckedUpdateWithoutGrupoDeLeituraInput>
    create: XOR<PerfilCreateWithoutGrupoDeLeituraInput, PerfilUncheckedCreateWithoutGrupoDeLeituraInput>
  }

  export type PerfilUpdateWithWhereUniqueWithoutGrupoDeLeituraInput = {
    where: PerfilWhereUniqueInput
    data: XOR<PerfilUpdateWithoutGrupoDeLeituraInput, PerfilUncheckedUpdateWithoutGrupoDeLeituraInput>
  }

  export type PerfilUpdateManyWithWhereWithoutGrupoDeLeituraInput = {
    where: PerfilScalarWhereInput
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyWithoutGrupoDeLeituraInput>
  }

  export type PerfilScalarWhereInput = {
    AND?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
    OR?: PerfilScalarWhereInput[]
    NOT?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
    id?: IntFilter<"Perfil"> | number
    senha?: StringFilter<"Perfil"> | string
    tipo?: EnumTipoPerfilFilter<"Perfil"> | $Enums.TipoPerfil
    nome?: StringNullableFilter<"Perfil"> | string | null
    email?: StringNullableFilter<"Perfil"> | string | null
    descricao?: StringNullableFilter<"Perfil"> | string | null
    cargo?: StringNullableFilter<"Perfil"> | string | null
    nomeGrupoDeLeitura?: StringNullableFilter<"Perfil"> | string | null
    nomeCom?: StringNullableFilter<"Perfil"> | string | null
  }

  export type admSubordinadosCreateWithoutSubordinadoInput = {
    adm: PerfilCreateNestedOneWithoutAdmsInput
  }

  export type admSubordinadosUncheckedCreateWithoutSubordinadoInput = {
    idAdm: number
  }

  export type admSubordinadosCreateOrConnectWithoutSubordinadoInput = {
    where: admSubordinadosWhereUniqueInput
    create: XOR<admSubordinadosCreateWithoutSubordinadoInput, admSubordinadosUncheckedCreateWithoutSubordinadoInput>
  }

  export type admSubordinadosCreateManySubordinadoInputEnvelope = {
    data: admSubordinadosCreateManySubordinadoInput | admSubordinadosCreateManySubordinadoInput[]
    skipDuplicates?: boolean
  }

  export type admSubordinadosCreateWithoutAdmInput = {
    subordinado: PerfilCreateNestedOneWithoutUsuariosInput
  }

  export type admSubordinadosUncheckedCreateWithoutAdmInput = {
    nomeUsu: string
  }

  export type admSubordinadosCreateOrConnectWithoutAdmInput = {
    where: admSubordinadosWhereUniqueInput
    create: XOR<admSubordinadosCreateWithoutAdmInput, admSubordinadosUncheckedCreateWithoutAdmInput>
  }

  export type admSubordinadosCreateManyAdmInputEnvelope = {
    data: admSubordinadosCreateManyAdmInput | admSubordinadosCreateManyAdmInput[]
    skipDuplicates?: boolean
  }

  export type CatalogoCreateWithoutDonoInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: LivroCreateNestedManyWithoutCatalagoInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
    participantes?: participantesDesafioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutDonoInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: LivroUncheckedCreateNestedManyWithoutCatalagoInput
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
    participantes?: participantesDesafioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutDonoInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput>
  }

  export type CatalogoCreateManyDonoInputEnvelope = {
    data: CatalogoCreateManyDonoInput | CatalogoCreateManyDonoInput[]
    skipDuplicates?: boolean
  }

  export type GrupoDeLeituraCreateWithoutParticipantesInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    leituraConjunta: LivroCreateNestedOneWithoutGruposInput
  }

  export type GrupoDeLeituraUncheckedCreateWithoutParticipantesInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    tituloLivro: string
  }

  export type GrupoDeLeituraCreateOrConnectWithoutParticipantesInput = {
    where: GrupoDeLeituraWhereUniqueInput
    create: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
  }

  export type MetaDeLeituraCreateWithoutUsuarioInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    conquista: ConquistaCreateNestedOneWithoutMetaInput
  }

  export type MetaDeLeituraUncheckedCreateWithoutUsuarioInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeConquista: string
  }

  export type MetaDeLeituraCreateOrConnectWithoutUsuarioInput = {
    where: MetaDeLeituraWhereUniqueInput
    create: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
  }

  export type ComunidadeCreateWithoutParticipantesInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    nomeUsuario: string
  }

  export type ComunidadeUncheckedCreateWithoutParticipantesInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    nomeUsuario: string
  }

  export type ComunidadeCreateOrConnectWithoutParticipantesInput = {
    where: ComunidadeWhereUniqueInput
    create: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
  }

  export type participantesDesafioCreateWithoutParticipantesInput = {
    desafio: CatalogoCreateNestedOneWithoutParticipantesInput
  }

  export type participantesDesafioUncheckedCreateWithoutParticipantesInput = {
    temaDesafio: string
  }

  export type participantesDesafioCreateOrConnectWithoutParticipantesInput = {
    where: participantesDesafioWhereUniqueInput
    create: XOR<participantesDesafioCreateWithoutParticipantesInput, participantesDesafioUncheckedCreateWithoutParticipantesInput>
  }

  export type participantesDesafioCreateManyParticipantesInputEnvelope = {
    data: participantesDesafioCreateManyParticipantesInput | participantesDesafioCreateManyParticipantesInput[]
    skipDuplicates?: boolean
  }

  export type usuarioResenhaCreateWithoutUsuarioInput = {
    resenha: ResenhaCreateNestedOneWithoutUsuariosInput
  }

  export type usuarioResenhaUncheckedCreateWithoutUsuarioInput = {
    estrelasResenha: number
  }

  export type usuarioResenhaCreateOrConnectWithoutUsuarioInput = {
    where: usuarioResenhaWhereUniqueInput
    create: XOR<usuarioResenhaCreateWithoutUsuarioInput, usuarioResenhaUncheckedCreateWithoutUsuarioInput>
  }

  export type usuarioResenhaCreateManyUsuarioInputEnvelope = {
    data: usuarioResenhaCreateManyUsuarioInput | usuarioResenhaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type admSubordinadosUpsertWithWhereUniqueWithoutSubordinadoInput = {
    where: admSubordinadosWhereUniqueInput
    update: XOR<admSubordinadosUpdateWithoutSubordinadoInput, admSubordinadosUncheckedUpdateWithoutSubordinadoInput>
    create: XOR<admSubordinadosCreateWithoutSubordinadoInput, admSubordinadosUncheckedCreateWithoutSubordinadoInput>
  }

  export type admSubordinadosUpdateWithWhereUniqueWithoutSubordinadoInput = {
    where: admSubordinadosWhereUniqueInput
    data: XOR<admSubordinadosUpdateWithoutSubordinadoInput, admSubordinadosUncheckedUpdateWithoutSubordinadoInput>
  }

  export type admSubordinadosUpdateManyWithWhereWithoutSubordinadoInput = {
    where: admSubordinadosScalarWhereInput
    data: XOR<admSubordinadosUpdateManyMutationInput, admSubordinadosUncheckedUpdateManyWithoutSubordinadoInput>
  }

  export type admSubordinadosScalarWhereInput = {
    AND?: admSubordinadosScalarWhereInput | admSubordinadosScalarWhereInput[]
    OR?: admSubordinadosScalarWhereInput[]
    NOT?: admSubordinadosScalarWhereInput | admSubordinadosScalarWhereInput[]
    idAdm?: IntFilter<"admSubordinados"> | number
    nomeUsu?: StringFilter<"admSubordinados"> | string
  }

  export type admSubordinadosUpsertWithWhereUniqueWithoutAdmInput = {
    where: admSubordinadosWhereUniqueInput
    update: XOR<admSubordinadosUpdateWithoutAdmInput, admSubordinadosUncheckedUpdateWithoutAdmInput>
    create: XOR<admSubordinadosCreateWithoutAdmInput, admSubordinadosUncheckedCreateWithoutAdmInput>
  }

  export type admSubordinadosUpdateWithWhereUniqueWithoutAdmInput = {
    where: admSubordinadosWhereUniqueInput
    data: XOR<admSubordinadosUpdateWithoutAdmInput, admSubordinadosUncheckedUpdateWithoutAdmInput>
  }

  export type admSubordinadosUpdateManyWithWhereWithoutAdmInput = {
    where: admSubordinadosScalarWhereInput
    data: XOR<admSubordinadosUpdateManyMutationInput, admSubordinadosUncheckedUpdateManyWithoutAdmInput>
  }

  export type CatalogoUpsertWithWhereUniqueWithoutDonoInput = {
    where: CatalogoWhereUniqueInput
    update: XOR<CatalogoUpdateWithoutDonoInput, CatalogoUncheckedUpdateWithoutDonoInput>
    create: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput>
  }

  export type CatalogoUpdateWithWhereUniqueWithoutDonoInput = {
    where: CatalogoWhereUniqueInput
    data: XOR<CatalogoUpdateWithoutDonoInput, CatalogoUncheckedUpdateWithoutDonoInput>
  }

  export type CatalogoUpdateManyWithWhereWithoutDonoInput = {
    where: CatalogoScalarWhereInput
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyWithoutDonoInput>
  }

  export type GrupoDeLeituraUpsertWithoutParticipantesInput = {
    update: XOR<GrupoDeLeituraUpdateWithoutParticipantesInput, GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput>
    create: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
    where?: GrupoDeLeituraWhereInput
  }

  export type GrupoDeLeituraUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: GrupoDeLeituraWhereInput
    data: XOR<GrupoDeLeituraUpdateWithoutParticipantesInput, GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput>
  }

  export type GrupoDeLeituraUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    leituraConjunta?: LivroUpdateOneRequiredWithoutGruposNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type MetaDeLeituraUpsertWithoutUsuarioInput = {
    update: XOR<MetaDeLeituraUpdateWithoutUsuarioInput, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    where?: MetaDeLeituraWhereInput
  }

  export type MetaDeLeituraUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: MetaDeLeituraWhereInput
    data: XOR<MetaDeLeituraUpdateWithoutUsuarioInput, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
  }

  export type MetaDeLeituraUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    conquista?: ConquistaUpdateOneRequiredWithoutMetaNestedInput
  }

  export type MetaDeLeituraUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    nomeConquista?: StringFieldUpdateOperationsInput | string
  }

  export type ComunidadeUpsertWithoutParticipantesInput = {
    update: XOR<ComunidadeUpdateWithoutParticipantesInput, ComunidadeUncheckedUpdateWithoutParticipantesInput>
    create: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
    where?: ComunidadeWhereInput
  }

  export type ComunidadeUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: ComunidadeWhereInput
    data: XOR<ComunidadeUpdateWithoutParticipantesInput, ComunidadeUncheckedUpdateWithoutParticipantesInput>
  }

  export type ComunidadeUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type ComunidadeUncheckedUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type participantesDesafioUpsertWithWhereUniqueWithoutParticipantesInput = {
    where: participantesDesafioWhereUniqueInput
    update: XOR<participantesDesafioUpdateWithoutParticipantesInput, participantesDesafioUncheckedUpdateWithoutParticipantesInput>
    create: XOR<participantesDesafioCreateWithoutParticipantesInput, participantesDesafioUncheckedCreateWithoutParticipantesInput>
  }

  export type participantesDesafioUpdateWithWhereUniqueWithoutParticipantesInput = {
    where: participantesDesafioWhereUniqueInput
    data: XOR<participantesDesafioUpdateWithoutParticipantesInput, participantesDesafioUncheckedUpdateWithoutParticipantesInput>
  }

  export type participantesDesafioUpdateManyWithWhereWithoutParticipantesInput = {
    where: participantesDesafioScalarWhereInput
    data: XOR<participantesDesafioUpdateManyMutationInput, participantesDesafioUncheckedUpdateManyWithoutParticipantesInput>
  }

  export type participantesDesafioScalarWhereInput = {
    AND?: participantesDesafioScalarWhereInput | participantesDesafioScalarWhereInput[]
    OR?: participantesDesafioScalarWhereInput[]
    NOT?: participantesDesafioScalarWhereInput | participantesDesafioScalarWhereInput[]
    nomeUsu?: StringFilter<"participantesDesafio"> | string
    temaDesafio?: StringFilter<"participantesDesafio"> | string
  }

  export type usuarioResenhaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuarioResenhaWhereUniqueInput
    update: XOR<usuarioResenhaUpdateWithoutUsuarioInput, usuarioResenhaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuarioResenhaCreateWithoutUsuarioInput, usuarioResenhaUncheckedCreateWithoutUsuarioInput>
  }

  export type usuarioResenhaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuarioResenhaWhereUniqueInput
    data: XOR<usuarioResenhaUpdateWithoutUsuarioInput, usuarioResenhaUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuarioResenhaUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuarioResenhaScalarWhereInput
    data: XOR<usuarioResenhaUpdateManyMutationInput, usuarioResenhaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type usuarioResenhaScalarWhereInput = {
    AND?: usuarioResenhaScalarWhereInput | usuarioResenhaScalarWhereInput[]
    OR?: usuarioResenhaScalarWhereInput[]
    NOT?: usuarioResenhaScalarWhereInput | usuarioResenhaScalarWhereInput[]
    nomeUsu?: StringFilter<"usuarioResenha"> | string
    estrelasResenha?: IntFilter<"usuarioResenha"> | number
  }

  export type PerfilCreateWithoutAdmsInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutAdmsInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutAdmsInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutAdmsInput, PerfilUncheckedCreateWithoutAdmsInput>
  }

  export type PerfilCreateWithoutUsuariosInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutUsuariosInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutUsuariosInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
  }

  export type PerfilUpsertWithoutAdmsInput = {
    update: XOR<PerfilUpdateWithoutAdmsInput, PerfilUncheckedUpdateWithoutAdmsInput>
    create: XOR<PerfilCreateWithoutAdmsInput, PerfilUncheckedCreateWithoutAdmsInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutAdmsInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutAdmsInput, PerfilUncheckedUpdateWithoutAdmsInput>
  }

  export type PerfilUpdateWithoutAdmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutAdmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUpsertWithoutUsuariosInput = {
    update: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type PerfilUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilCreateWithoutDesafioInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutDesafioInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutDesafioInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutDesafioInput, PerfilUncheckedCreateWithoutDesafioInput>
  }

  export type CatalogoCreateWithoutParticipantesInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: LivroCreateNestedManyWithoutCatalagoInput
    dono: PerfilCreateNestedOneWithoutCatalogosCriadosInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutParticipantesInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    livros?: LivroUncheckedCreateNestedManyWithoutCatalagoInput
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutParticipantesInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutParticipantesInput, CatalogoUncheckedCreateWithoutParticipantesInput>
  }

  export type PerfilUpsertWithoutDesafioInput = {
    update: XOR<PerfilUpdateWithoutDesafioInput, PerfilUncheckedUpdateWithoutDesafioInput>
    create: XOR<PerfilCreateWithoutDesafioInput, PerfilUncheckedCreateWithoutDesafioInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutDesafioInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutDesafioInput, PerfilUncheckedUpdateWithoutDesafioInput>
  }

  export type PerfilUpdateWithoutDesafioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutDesafioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CatalogoUpsertWithoutParticipantesInput = {
    update: XOR<CatalogoUpdateWithoutParticipantesInput, CatalogoUncheckedUpdateWithoutParticipantesInput>
    create: XOR<CatalogoCreateWithoutParticipantesInput, CatalogoUncheckedCreateWithoutParticipantesInput>
    where?: CatalogoWhereInput
  }

  export type CatalogoUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: CatalogoWhereInput
    data: XOR<CatalogoUpdateWithoutParticipantesInput, CatalogoUncheckedUpdateWithoutParticipantesInput>
  }

  export type CatalogoUpdateWithoutParticipantesInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: LivroUpdateManyWithoutCatalagoNestedInput
    dono?: PerfilUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutParticipantesInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    livros?: LivroUncheckedUpdateManyWithoutCatalagoNestedInput
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type LivroCreateWithoutCatalagoInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateWithoutCatalagoInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroCreateOrConnectWithoutCatalagoInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutCatalagoInput, LivroUncheckedCreateWithoutCatalagoInput>
  }

  export type PerfilCreateWithoutCatalogosCriadosInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutCatalogosCriadosInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutCatalogosCriadosInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutCatalogosCriadosInput, PerfilUncheckedCreateWithoutCatalogosCriadosInput>
  }

  export type ConquistaCreateWithoutDesafioInput = {
    nome: string
    criterio: string
    nomeMeta: string
    meta?: MetaDeLeituraCreateNestedOneWithoutConquistaInput
  }

  export type ConquistaUncheckedCreateWithoutDesafioInput = {
    nome: string
    criterio: string
    nomeMeta: string
    meta?: MetaDeLeituraUncheckedCreateNestedOneWithoutConquistaInput
  }

  export type ConquistaCreateOrConnectWithoutDesafioInput = {
    where: ConquistaWhereUniqueInput
    create: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput>
  }

  export type ConquistaCreateManyDesafioInputEnvelope = {
    data: ConquistaCreateManyDesafioInput | ConquistaCreateManyDesafioInput[]
    skipDuplicates?: boolean
  }

  export type participantesDesafioCreateWithoutDesafioInput = {
    participantes: PerfilCreateNestedOneWithoutDesafioInput
  }

  export type participantesDesafioUncheckedCreateWithoutDesafioInput = {
    nomeUsu: string
  }

  export type participantesDesafioCreateOrConnectWithoutDesafioInput = {
    where: participantesDesafioWhereUniqueInput
    create: XOR<participantesDesafioCreateWithoutDesafioInput, participantesDesafioUncheckedCreateWithoutDesafioInput>
  }

  export type participantesDesafioCreateManyDesafioInputEnvelope = {
    data: participantesDesafioCreateManyDesafioInput | participantesDesafioCreateManyDesafioInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithWhereUniqueWithoutCatalagoInput = {
    where: LivroWhereUniqueInput
    update: XOR<LivroUpdateWithoutCatalagoInput, LivroUncheckedUpdateWithoutCatalagoInput>
    create: XOR<LivroCreateWithoutCatalagoInput, LivroUncheckedCreateWithoutCatalagoInput>
  }

  export type LivroUpdateWithWhereUniqueWithoutCatalagoInput = {
    where: LivroWhereUniqueInput
    data: XOR<LivroUpdateWithoutCatalagoInput, LivroUncheckedUpdateWithoutCatalagoInput>
  }

  export type LivroUpdateManyWithWhereWithoutCatalagoInput = {
    where: LivroScalarWhereInput
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyWithoutCatalagoInput>
  }

  export type LivroScalarWhereInput = {
    AND?: LivroScalarWhereInput | LivroScalarWhereInput[]
    OR?: LivroScalarWhereInput[]
    NOT?: LivroScalarWhereInput | LivroScalarWhereInput[]
    titulo?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    dataPublicacao?: DateTimeFilter<"Livro"> | Date | string
    paginas?: IntFilter<"Livro"> | number
    resumo?: StringFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: IntFilter<"Livro"> | number
  }

  export type PerfilUpsertWithoutCatalogosCriadosInput = {
    update: XOR<PerfilUpdateWithoutCatalogosCriadosInput, PerfilUncheckedUpdateWithoutCatalogosCriadosInput>
    create: XOR<PerfilCreateWithoutCatalogosCriadosInput, PerfilUncheckedCreateWithoutCatalogosCriadosInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutCatalogosCriadosInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutCatalogosCriadosInput, PerfilUncheckedUpdateWithoutCatalogosCriadosInput>
  }

  export type PerfilUpdateWithoutCatalogosCriadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutCatalogosCriadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ConquistaUpsertWithWhereUniqueWithoutDesafioInput = {
    where: ConquistaWhereUniqueInput
    update: XOR<ConquistaUpdateWithoutDesafioInput, ConquistaUncheckedUpdateWithoutDesafioInput>
    create: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput>
  }

  export type ConquistaUpdateWithWhereUniqueWithoutDesafioInput = {
    where: ConquistaWhereUniqueInput
    data: XOR<ConquistaUpdateWithoutDesafioInput, ConquistaUncheckedUpdateWithoutDesafioInput>
  }

  export type ConquistaUpdateManyWithWhereWithoutDesafioInput = {
    where: ConquistaScalarWhereInput
    data: XOR<ConquistaUpdateManyMutationInput, ConquistaUncheckedUpdateManyWithoutDesafioInput>
  }

  export type ConquistaScalarWhereInput = {
    AND?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
    OR?: ConquistaScalarWhereInput[]
    NOT?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
    nome?: StringFilter<"Conquista"> | string
    criterio?: StringFilter<"Conquista"> | string
    nomeMeta?: StringFilter<"Conquista"> | string
    temaCatalago?: StringNullableFilter<"Conquista"> | string | null
  }

  export type participantesDesafioUpsertWithWhereUniqueWithoutDesafioInput = {
    where: participantesDesafioWhereUniqueInput
    update: XOR<participantesDesafioUpdateWithoutDesafioInput, participantesDesafioUncheckedUpdateWithoutDesafioInput>
    create: XOR<participantesDesafioCreateWithoutDesafioInput, participantesDesafioUncheckedCreateWithoutDesafioInput>
  }

  export type participantesDesafioUpdateWithWhereUniqueWithoutDesafioInput = {
    where: participantesDesafioWhereUniqueInput
    data: XOR<participantesDesafioUpdateWithoutDesafioInput, participantesDesafioUncheckedUpdateWithoutDesafioInput>
  }

  export type participantesDesafioUpdateManyWithWhereWithoutDesafioInput = {
    where: participantesDesafioScalarWhereInput
    data: XOR<participantesDesafioUpdateManyMutationInput, participantesDesafioUncheckedUpdateManyWithoutDesafioInput>
  }

  export type PerfilCreateWithoutMetaDeLeituraInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutMetaDeLeituraInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutMetaDeLeituraInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutMetaDeLeituraInput, PerfilUncheckedCreateWithoutMetaDeLeituraInput>
  }

  export type ConquistaCreateWithoutMetaInput = {
    nome: string
    criterio: string
    nomeMeta: string
    desafio?: CatalogoCreateNestedOneWithoutMedalhasInput
  }

  export type ConquistaUncheckedCreateWithoutMetaInput = {
    nome: string
    criterio: string
    nomeMeta: string
    temaCatalago?: string | null
  }

  export type ConquistaCreateOrConnectWithoutMetaInput = {
    where: ConquistaWhereUniqueInput
    create: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
  }

  export type PerfilUpsertWithoutMetaDeLeituraInput = {
    update: XOR<PerfilUpdateWithoutMetaDeLeituraInput, PerfilUncheckedUpdateWithoutMetaDeLeituraInput>
    create: XOR<PerfilCreateWithoutMetaDeLeituraInput, PerfilUncheckedCreateWithoutMetaDeLeituraInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutMetaDeLeituraInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutMetaDeLeituraInput, PerfilUncheckedUpdateWithoutMetaDeLeituraInput>
  }

  export type PerfilUpdateWithoutMetaDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutMetaDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ConquistaUpsertWithoutMetaInput = {
    update: XOR<ConquistaUpdateWithoutMetaInput, ConquistaUncheckedUpdateWithoutMetaInput>
    create: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
    where?: ConquistaWhereInput
  }

  export type ConquistaUpdateToOneWithWhereWithoutMetaInput = {
    where?: ConquistaWhereInput
    data: XOR<ConquistaUpdateWithoutMetaInput, ConquistaUncheckedUpdateWithoutMetaInput>
  }

  export type ConquistaUpdateWithoutMetaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    desafio?: CatalogoUpdateOneWithoutMedalhasNestedInput
  }

  export type ConquistaUncheckedUpdateWithoutMetaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    temaCatalago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetaDeLeituraCreateWithoutConquistaInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    usuario: PerfilCreateNestedOneWithoutMetaDeLeituraInput
  }

  export type MetaDeLeituraUncheckedCreateWithoutConquistaInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeUsuario: string
  }

  export type MetaDeLeituraCreateOrConnectWithoutConquistaInput = {
    where: MetaDeLeituraWhereUniqueInput
    create: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
  }

  export type CatalogoCreateWithoutMedalhasInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: LivroCreateNestedManyWithoutCatalagoInput
    dono: PerfilCreateNestedOneWithoutCatalogosCriadosInput
    participantes?: participantesDesafioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutMedalhasInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    livros?: LivroUncheckedCreateNestedManyWithoutCatalagoInput
    participantes?: participantesDesafioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutMedalhasInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
  }

  export type MetaDeLeituraUpsertWithoutConquistaInput = {
    update: XOR<MetaDeLeituraUpdateWithoutConquistaInput, MetaDeLeituraUncheckedUpdateWithoutConquistaInput>
    create: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
    where?: MetaDeLeituraWhereInput
  }

  export type MetaDeLeituraUpdateToOneWithWhereWithoutConquistaInput = {
    where?: MetaDeLeituraWhereInput
    data: XOR<MetaDeLeituraUpdateWithoutConquistaInput, MetaDeLeituraUncheckedUpdateWithoutConquistaInput>
  }

  export type MetaDeLeituraUpdateWithoutConquistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    usuario?: PerfilUpdateOneRequiredWithoutMetaDeLeituraNestedInput
  }

  export type MetaDeLeituraUncheckedUpdateWithoutConquistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogoUpsertWithoutMedalhasInput = {
    update: XOR<CatalogoUpdateWithoutMedalhasInput, CatalogoUncheckedUpdateWithoutMedalhasInput>
    create: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
    where?: CatalogoWhereInput
  }

  export type CatalogoUpdateToOneWithWhereWithoutMedalhasInput = {
    where?: CatalogoWhereInput
    data: XOR<CatalogoUpdateWithoutMedalhasInput, CatalogoUncheckedUpdateWithoutMedalhasInput>
  }

  export type CatalogoUpdateWithoutMedalhasInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: LivroUpdateManyWithoutCatalagoNestedInput
    dono?: PerfilUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    participantes?: participantesDesafioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutMedalhasInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    livros?: LivroUncheckedUpdateManyWithoutCatalagoNestedInput
    participantes?: participantesDesafioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type PerfilCreateWithoutComunidadeInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilUncheckedCreateWithoutComunidadeInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
    resenhas?: usuarioResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type PerfilCreateOrConnectWithoutComunidadeInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutComunidadeInput, PerfilUncheckedCreateWithoutComunidadeInput>
  }

  export type PerfilCreateManyComunidadeInputEnvelope = {
    data: PerfilCreateManyComunidadeInput | PerfilCreateManyComunidadeInput[]
    skipDuplicates?: boolean
  }

  export type PerfilUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: PerfilWhereUniqueInput
    update: XOR<PerfilUpdateWithoutComunidadeInput, PerfilUncheckedUpdateWithoutComunidadeInput>
    create: XOR<PerfilCreateWithoutComunidadeInput, PerfilUncheckedCreateWithoutComunidadeInput>
  }

  export type PerfilUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: PerfilWhereUniqueInput
    data: XOR<PerfilUpdateWithoutComunidadeInput, PerfilUncheckedUpdateWithoutComunidadeInput>
  }

  export type PerfilUpdateManyWithWhereWithoutComunidadeInput = {
    where: PerfilScalarWhereInput
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyWithoutComunidadeInput>
  }

  export type LivroCreateWithoutResenhaInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    catalago?: CatalogoCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutResenhaInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    catalago?: CatalogoUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutResenhaInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
  }

  export type usuarioResenhaCreateWithoutResenhaInput = {
    usuario: PerfilCreateNestedOneWithoutResenhasInput
  }

  export type usuarioResenhaUncheckedCreateWithoutResenhaInput = {
    nomeUsu: string
  }

  export type usuarioResenhaCreateOrConnectWithoutResenhaInput = {
    where: usuarioResenhaWhereUniqueInput
    create: XOR<usuarioResenhaCreateWithoutResenhaInput, usuarioResenhaUncheckedCreateWithoutResenhaInput>
  }

  export type usuarioResenhaCreateManyResenhaInputEnvelope = {
    data: usuarioResenhaCreateManyResenhaInput | usuarioResenhaCreateManyResenhaInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithoutResenhaInput = {
    update: XOR<LivroUpdateWithoutResenhaInput, LivroUncheckedUpdateWithoutResenhaInput>
    create: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutResenhaInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutResenhaInput, LivroUncheckedUpdateWithoutResenhaInput>
  }

  export type LivroUpdateWithoutResenhaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    catalago?: CatalogoUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutResenhaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    catalago?: CatalogoUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type usuarioResenhaUpsertWithWhereUniqueWithoutResenhaInput = {
    where: usuarioResenhaWhereUniqueInput
    update: XOR<usuarioResenhaUpdateWithoutResenhaInput, usuarioResenhaUncheckedUpdateWithoutResenhaInput>
    create: XOR<usuarioResenhaCreateWithoutResenhaInput, usuarioResenhaUncheckedCreateWithoutResenhaInput>
  }

  export type usuarioResenhaUpdateWithWhereUniqueWithoutResenhaInput = {
    where: usuarioResenhaWhereUniqueInput
    data: XOR<usuarioResenhaUpdateWithoutResenhaInput, usuarioResenhaUncheckedUpdateWithoutResenhaInput>
  }

  export type usuarioResenhaUpdateManyWithWhereWithoutResenhaInput = {
    where: usuarioResenhaScalarWhereInput
    data: XOR<usuarioResenhaUpdateManyMutationInput, usuarioResenhaUncheckedUpdateManyWithoutResenhaInput>
  }

  export type PerfilCreateWithoutResenhasInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    usuarios?: admSubordinadosCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    desafio?: participantesDesafioCreateNestedManyWithoutParticipantesInput
  }

  export type PerfilUncheckedCreateWithoutResenhasInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
    nomeCom?: string | null
    usuarios?: admSubordinadosUncheckedCreateNestedManyWithoutSubordinadoInput
    adms?: admSubordinadosUncheckedCreateNestedManyWithoutAdmInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    desafio?: participantesDesafioUncheckedCreateNestedManyWithoutParticipantesInput
  }

  export type PerfilCreateOrConnectWithoutResenhasInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutResenhasInput, PerfilUncheckedCreateWithoutResenhasInput>
  }

  export type ResenhaCreateWithoutUsuariosInput = {
    estrelas: number
    avaliacao: string
    livro: LivroCreateNestedOneWithoutResenhaInput
  }

  export type ResenhaUncheckedCreateWithoutUsuariosInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
  }

  export type ResenhaCreateOrConnectWithoutUsuariosInput = {
    where: ResenhaWhereUniqueInput
    create: XOR<ResenhaCreateWithoutUsuariosInput, ResenhaUncheckedCreateWithoutUsuariosInput>
  }

  export type PerfilUpsertWithoutResenhasInput = {
    update: XOR<PerfilUpdateWithoutResenhasInput, PerfilUncheckedUpdateWithoutResenhasInput>
    create: XOR<PerfilCreateWithoutResenhasInput, PerfilUncheckedCreateWithoutResenhasInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutResenhasInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutResenhasInput, PerfilUncheckedUpdateWithoutResenhasInput>
  }

  export type PerfilUpdateWithoutResenhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
  }

  export type PerfilUncheckedUpdateWithoutResenhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
  }

  export type ResenhaUpsertWithoutUsuariosInput = {
    update: XOR<ResenhaUpdateWithoutUsuariosInput, ResenhaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ResenhaCreateWithoutUsuariosInput, ResenhaUncheckedCreateWithoutUsuariosInput>
    where?: ResenhaWhereInput
  }

  export type ResenhaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ResenhaWhereInput
    data: XOR<ResenhaUpdateWithoutUsuariosInput, ResenhaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ResenhaUpdateWithoutUsuariosInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    livro?: LivroUpdateOneRequiredWithoutResenhaNestedInput
  }

  export type ResenhaUncheckedUpdateWithoutUsuariosInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoDeLeituraCreateManyLeituraConjuntaInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
  }

  export type ResenhaCreateManyLivroInput = {
    estrelas: number
    avaliacao: string
  }

  export type GrupoDeLeituraUpdateWithoutLeituraConjuntaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: PerfilUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateWithoutLeituraConjuntaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: PerfilUncheckedUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogoUpdateWithoutLivrosInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    dono?: PerfilUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
    participantes?: participantesDesafioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutLivrosInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
    participantes?: participantesDesafioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateManyWithoutLivrosInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
  }

  export type ResenhaUpdateWithoutLivroInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioResenhaUpdateManyWithoutResenhaNestedInput
  }

  export type ResenhaUncheckedUpdateWithoutLivroInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioResenhaUncheckedUpdateManyWithoutResenhaNestedInput
  }

  export type ResenhaUncheckedUpdateManyWithoutLivroInput = {
    estrelas?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateManyGrupoDeLeituraInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeCom?: string | null
  }

  export type PerfilUpdateWithoutGrupoDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutGrupoDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateManyWithoutGrupoDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type admSubordinadosCreateManySubordinadoInput = {
    idAdm: number
  }

  export type admSubordinadosCreateManyAdmInput = {
    nomeUsu: string
  }

  export type CatalogoCreateManyDonoInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
  }

  export type participantesDesafioCreateManyParticipantesInput = {
    temaDesafio: string
  }

  export type usuarioResenhaCreateManyUsuarioInput = {
    estrelasResenha: number
  }

  export type admSubordinadosUpdateWithoutSubordinadoInput = {
    adm?: PerfilUpdateOneRequiredWithoutAdmsNestedInput
  }

  export type admSubordinadosUncheckedUpdateWithoutSubordinadoInput = {
    idAdm?: IntFieldUpdateOperationsInput | number
  }

  export type admSubordinadosUncheckedUpdateManyWithoutSubordinadoInput = {
    idAdm?: IntFieldUpdateOperationsInput | number
  }

  export type admSubordinadosUpdateWithoutAdmInput = {
    subordinado?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type admSubordinadosUncheckedUpdateWithoutAdmInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type admSubordinadosUncheckedUpdateManyWithoutAdmInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogoUpdateWithoutDonoInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: LivroUpdateManyWithoutCatalagoNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
    participantes?: participantesDesafioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutDonoInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: LivroUncheckedUpdateManyWithoutCatalagoNestedInput
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
    participantes?: participantesDesafioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateManyWithoutDonoInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type participantesDesafioUpdateWithoutParticipantesInput = {
    desafio?: CatalogoUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type participantesDesafioUncheckedUpdateWithoutParticipantesInput = {
    temaDesafio?: StringFieldUpdateOperationsInput | string
  }

  export type participantesDesafioUncheckedUpdateManyWithoutParticipantesInput = {
    temaDesafio?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioResenhaUpdateWithoutUsuarioInput = {
    resenha?: ResenhaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuarioResenhaUncheckedUpdateWithoutUsuarioInput = {
    estrelasResenha?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioResenhaUncheckedUpdateManyWithoutUsuarioInput = {
    estrelasResenha?: IntFieldUpdateOperationsInput | number
  }

  export type ConquistaCreateManyDesafioInput = {
    nome: string
    criterio: string
    nomeMeta: string
  }

  export type participantesDesafioCreateManyDesafioInput = {
    nomeUsu: string
  }

  export type LivroUpdateWithoutCatalagoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateWithoutCatalagoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateManyWithoutCatalagoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: IntFieldUpdateOperationsInput | number
  }

  export type ConquistaUpdateWithoutDesafioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    meta?: MetaDeLeituraUpdateOneWithoutConquistaNestedInput
  }

  export type ConquistaUncheckedUpdateWithoutDesafioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
    meta?: MetaDeLeituraUncheckedUpdateOneWithoutConquistaNestedInput
  }

  export type ConquistaUncheckedUpdateManyWithoutDesafioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    nomeMeta?: StringFieldUpdateOperationsInput | string
  }

  export type participantesDesafioUpdateWithoutDesafioInput = {
    participantes?: PerfilUpdateOneRequiredWithoutDesafioNestedInput
  }

  export type participantesDesafioUncheckedUpdateWithoutDesafioInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type participantesDesafioUncheckedUpdateManyWithoutDesafioInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateManyComunidadeInput = {
    id: number
    senha: string
    tipo: $Enums.TipoPerfil
    nome?: string | null
    email?: string | null
    descricao?: string | null
    cargo?: string | null
    nomeGrupoDeLeitura?: string | null
  }

  export type PerfilUpdateWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: admSubordinadosUncheckedUpdateManyWithoutSubordinadoNestedInput
    adms?: admSubordinadosUncheckedUpdateManyWithoutAdmNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    desafio?: participantesDesafioUncheckedUpdateManyWithoutParticipantesNestedInput
    resenhas?: usuarioResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PerfilUncheckedUpdateManyWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPerfilFieldUpdateOperationsInput | $Enums.TipoPerfil
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioResenhaCreateManyResenhaInput = {
    nomeUsu: string
  }

  export type usuarioResenhaUpdateWithoutResenhaInput = {
    usuario?: PerfilUpdateOneRequiredWithoutResenhasNestedInput
  }

  export type usuarioResenhaUncheckedUpdateWithoutResenhaInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioResenhaUncheckedUpdateManyWithoutResenhaInput = {
    nomeUsu?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}